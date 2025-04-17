// alert('test');
// document.querySelector('button').textContent = 'check more';
$('button').text('check more');

$('h1').text('Updated jQuery Title');

$('h1').css('color','red')
$('h1').css('border','4px solid green')

$('button').on('click', function()){
  $('p').fadeToggle;
  $('p').text('Happy Wednesday!');
}