// https://ltst.xyz/channel/314902100152681036
async function call() {
  const weatherResult = await fetch('http://api.weatherapi.com/v1/current.json?key={ YOUR API KEY }&q={ YOUR LOCATION }');
  const data = await weatherResult.json();
  const temp = data.current.temp_c;
  const condition = data.current.condition.text;
  const wind = data.current.wind_mph;
  const updateText = temp + '°C - ' + condition + ' - ' + wind + 'mph wind';
  let bgColor = null;
  let textColor = null;
  switch(condition) {
    case 'Overcast':
      bgColor = '#d1d1d1';
      textColor = '#696969';
      break;
    case 'Sunny':
      bgColor = '#fffecc';
      textColor = '#5254ff';
      break;
    case 'Clear':
      bgColor = '#f1f0ff';
      textColor = '#333333';
      break;
    case 'Partly cloudy':
      bgColor = '#bfbfbf';
      textColor = '#ffffff';
      break;
    case 'Light rain':
    case 'Moderate rain':
      bgColor = '#9691b8';
      textColor = '#1700c4';
      break;
  }
  postUpdate({text: updateText, bgColor, textColor});
};
call();
