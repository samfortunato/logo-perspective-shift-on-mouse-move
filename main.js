const logo = document.querySelector('#logo');

document.addEventListener('mousemove', (e) => {
  const xRotation = e.pageY / 100 + 10;
  const zRotation = e.pageX / 100 - 10;

  logo.style.transform = `perspective(100px)
                          rotateX(${xRotation}deg)
                          rotateZ(${zRotation}deg)`;
});
