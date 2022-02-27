// https://ltst.xyz/channel/322593494104277583
async function hnTop() {
  const updatesRes = await fetch('https://ltst.xyz/api/updates?channelId=322593494104277583');
  const { updates } = await updatesRes.json();
  const lastUpdate = updates[0];
  const lastUpdateText = lastUpdate.text;
  const ycpage = await fetch('https://news.ycombinator.com/');
  const pageText = await ycpage.text();
  const $ = cheerio.load(pageText);
  const topStory = $('tbody tr:nth-child(3) tbody tr:nth-child(1) td:last');
  const topStoryText = topStory.text();
  if (topStoryText !== lastUpdateText) {
    postUpdate({
      text: topStoryText,
      bgColor: '#f6f6ef',
      textColor: '#212121'
    });
  } else {
    postUpdate(null);
  }
}
hnTop();
