const brown = '#BF5000';
const greenDark = '#008723';
const greenLight = '#34BD56';
const lightBlue = '#00BEFF';
const turquoise = '#fff';
const darkBlue = '#0057AE';

const shineOnHover = `
position: relative;
    overflow: hidden;
    display: inline-block;
    border-radius: 5px;
    text-align: center;
    line-height: 50px;

  &:after {
    content: "";
    position: absolute;
    top: -110%;
    left: -210%;
    width: 200%;
    height: 200%;
    opacity: 0;
    /* transform: rotate(30deg); */
    
    background: rgba(0, 190, 255, 0.13);
    background: linear-gradient(
      to right, 
      rgba(0, 190, 255, 0.13) 0%,
      rgba(0, 190, 255, 0.13) 77%,
      rgba(0, 190, 255, 0.5) 92%,
      rgba(0, 190, 255, 0.0) 100%
    );
  }
  
  &:hover:after {
    opacity: 1;
    top: -30%;
    left: -30%;
    transition-property: left, top, opacity;
    transition-duration: 0.7s, 0.7s, 0.15s;
    transition-timing-function: ease;
  }


  &:active:after {
    opacity: 0;
  }
`

export { brown, greenLight, greenDark, lightBlue, shineOnHover, turquoise, darkBlue }