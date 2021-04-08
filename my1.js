let browser=prompt('Enter text')
switch (browser){
    case 'Edge':
        alert('You have got the Edge!');
        break;
    case 'Chorm':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert('Okay we support these browsers too');
        break;
    default:
        alert('We hope that this page looks ok!')
}