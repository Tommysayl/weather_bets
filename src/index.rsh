'reach 0.1';

const json = {"Sunny": 1, "MostlySunny": 2, "PartlySunny": 3, "IntermittentClouds": 36, "HazySunshine": 5, "MostlyCloudy": 38, "Cloudy": 7, "Dreary": 8, "Fog": 11, "Showers": 12, "MostlyCloudyShowers": 40, "PartlySunnyShowers": 14, "TStorms": 15, "MostltCloudyTstorm": 42, "PartlySunnyTstorm": 17, "Rain": 18, "Flurries": 19, "MCFlurries": 43, "PSFlurries": 21, "Snow": 22, "MCSnow": 44, "Ice": 24, "Sleet": 25, "FreezingRain": 26, "RainSnow": 29, "Hot": 30, "Cold": 31, "Windy": 32, "Clear": 33, "MostlyClear": 34, "PartlyCloudyN": 35, "IntermittentCloudsN": 37, "HazyMoonlight": 39, "MostlyCloudyN": 41}
const [ isOutcome, B_WINS, DRAW, G_WINS ] = makeEnum(3);


const winner = (weatherBettor, weatherGambler, actualWeather) =>
  (((weatherBettor - actualWeather) * (weatherBettor - actualWeather))< ((weatherGambler - actualWeather)*(weatherGambler - actualWeather)) ? 0 : 2);

const Player = {
  ...hasRandom,
  getWeather: Fun([], UInt),
  seeOutcome: Fun([UInt], Null),
  informTimeout: Fun([], Null),
};

export const main = Reach.App(() => {

  const Bettor = Participant('Bettor', {
    ...Player,
    wager: UInt, // atomic units of currency
    deadline: UInt, // time delta (blocks/rounds)
  });
  const Gambler   = Participant('Gambler', {
    ...Player,
    acceptWager: Fun([UInt], Null),
  });
  const Oracle = Participant('Oracle', {
    ...Player,
    prova: Fun([], UInt),
    extractWinner: Fun([], UInt),
  });
  init();

  const informTimeout = () => {
    each([Bettor, Gambler, Oracle], () => {
      interact.informTimeout();
    });
  };

  Bettor.only(() => {
    const wager = declassify(interact.wager);
    const deadline = declassify(interact.deadline);
  });
  Bettor.publish(wager, deadline)
    .pay(wager);
  commit();

  Oracle.only(() => {
    const returned = declassify(interact.prova());
  });
  Oracle.publish(returned);
  commit();

  Gambler.only(() => {
    interact.acceptWager(wager);
  });
  Gambler.pay(wager)
    .timeout(relativeTime(deadline), () => closeTo(Bettor, informTimeout));
  commit();

  Bettor.only(() => {
    const _weatherBettor = interact.getWeather();
    const [_commitBettor, _saltBettor] = makeCommitment(interact, _weatherBettor);
    const commitBettor = declassify(_commitBettor);
  });
  Bettor.publish(commitBettor)
    .timeout(relativeTime(deadline), () => closeTo(Gambler, informTimeout));
  commit();

  unknowable(Gambler, Bettor(_weatherBettor, _saltBettor));
  Gambler.only(() => {
    const weatherGambler = declassify(interact.getWeather());
  });
  Gambler.publish(weatherGambler)
    .timeout(relativeTime(deadline), () => closeTo(Bettor, informTimeout));
  commit();
  Bettor.only(() => {
    const saltBettor = declassify(_saltBettor);
    const weatherBettor = declassify(_weatherBettor);
  });
  Bettor.publish(saltBettor, weatherBettor)
    .timeout(relativeTime(deadline), () => closeTo(Gambler, informTimeout));
  commit();


  Oracle.only(() => {
    const actualWinner = declassify(interact.extractWinner());
  });
  Oracle.publish(actualWinner);
  checkCommitment(commitBettor, saltBettor, weatherBettor);
const outcome = winner(weatherBettor, weatherGambler, actualWinner);
transfer(2*wager).to(outcome == G_WINS ? Gambler : Bettor);
commit();

  each([Bettor, Gambler], () => {
    interact.seeOutcome(outcome);
  });
});
