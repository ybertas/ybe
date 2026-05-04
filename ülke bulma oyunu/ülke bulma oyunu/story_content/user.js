window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  // Function to restart animations
document.addEventListener('slideLoad', () => {
  // Select the title element
  const title = object('6H9rZN14Erm');
  title.style.opacity = 0;
  addToTimeline(
    title.animate([
      { opacity: 0, filter: 'blur(5px)' },
      { opacity: 1, filter: 'blur(0px)' }
    ], { duration: 1000, fill: 'forwards', easing: 'ease-out' })
  );

  // Select the text boxes
  const textBoxes = ['6nLelP74QmE', '5xCFiHvB2E8'].map(id => object(id));
  textBoxes.forEach((textBox, index) => {
    textBox.style.opacity = 0;
    addToTimeline(
      textBox.animate([
        { opacity: 0, translate: '-100px 0' },
        { opacity: 1, translate: '0 0' }
      ], { duration: 800, fill: 'forwards', easing: 'ease-out', delay: index * 200 })
    );
  });

  // Animate the alphabet blocks
  const alphabetBlocks = [
    '61z2Q3YnFXq', '5nSOdZtShPS', '6RYZLerecDh', '5cDXiGSwM5h',
    '5iM8IZtZ8oO', '5a7OiHKuhYA', '6ElrDbriZHS', '614aQ4AyjD1',
    '5iHMatkCzjI', '5c8j5HFpmDB', '6TFi7RFl1d8', '5V66MycW3uQ',
    '5pvvWSPyHuw', '5fN3rGbf5RC', '6ohF3HUiPL3', '5d9HOmEnrL1',
    '5hDaJGYFg8Z', '6koX8skVEb2', '5VJxqjDBr0W', '5XTxvewMBdV',
    '6cnGWafMCp4', '6ZyM5cH3laz', '6TcjcYKfBLj', '5agHOrcWzJE',
    '6iULfM3qco9', '5teKOYghWJy'
  ].map(id => object(id));

  alphabetBlocks.forEach((block, index) => {
    block.style.opacity = 0;
    addToTimeline(
      block.animate([
        { opacity: 0, scale: '0.5 0.5', translate: '0 -20px' },
        { opacity: 1, scale: '1 1', translate: '0 0' }
      ], { duration: 600, fill: 'forwards', easing: 'cubic-bezier(0.25, 1.22, 0.31, 1.01)', delay: index * 50 })
    );
  });
});
}

};
