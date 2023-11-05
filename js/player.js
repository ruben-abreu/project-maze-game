class Player {
  constructor() {
    this.harry = document.getElementById('harry');
  }

  move() {
    window.addEventListener('keydown', function (event) {
      event.preventDefault();
      console.log(event.key);
      let r;
      let c;
      switch (document.getElementById('difficulty-dropdown').value) {
        case 'easy':
          r = 3;
          c = 1;
          switch (event.key) {
            case 'ArrowUp':
              r -= 1;
              if (r >= 0 && r <= 9) {
                if (
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .className.includes('path')
                ) {
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .appendChild(harry);
                  document
                    .querySelector(`row-${r + 1}-column${c}`)
                    .removeChild(harry);
                }
              }
              break;
            case 'ArrowDown':
              r += 1;
              if (r >= 0 && r <= 9) {
                if (
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .className.includes('path')
                ) {
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .appendChild(harry);
                  document
                    .querySelector(`row-${r - 1}-column${c}`)
                    .removeChild(harry);
                }
              }
              break;
            case 'ArrowRight':
              c += 1;
              if (c >= 0 && c <= 9) {
                if (
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .className.includes('path')
                ) {
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .appendChild(harry);
                  document
                    .querySelector(`row-${r}-column${c - 1}`)
                    .removeChild(harry);
                }
              }
              break;
            case 'ArrowLeft':
              c -= 1;
              if (c >= 0 && c <= 9) {
                if (
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .className.includes('path')
                ) {
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .appendChild(harry);
                  document
                    .querySelector(`row-${r}-column${c + 1}`)
                    .removeChild(harry);
                }
              }
              break;
          }
          break;
        case 'normal':
          r = 3;
          c = 3;
          switch (event.key) {
            case 'ArrowUp':
              r -= 1;
              if (r >= 0 && r <= 14) {
                if (
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .className.includes('path')
                ) {
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .appendChild(harry);
                  document
                    .querySelector(`row-${r + 1}-column${c}`)
                    .removeChild(harry);
                }
              }
              break;
            case 'ArrowDown':
              r += 1;
              if (r >= 0 && r <= 14) {
                if (
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .className.includes('path')
                ) {
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .appendChild(harry);
                  document
                    .querySelector(`row-${r - 1}-column${c}`)
                    .removeChild(harry);
                }
              }
              break;
            case 'ArrowRight':
              c += 1;
              if (c >= 0 && c <= 14) {
                if (
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .className.includes('path')
                ) {
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .appendChild(harry);
                  document
                    .querySelector(`row-${r}-column${c - 1}`)
                    .removeChild(harry);
                }
              }
              break;
            case 'ArrowLeft':
              c -= 1;
              if (c >= 0 && c <= 14) {
                if (
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .className.includes('path')
                ) {
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .appendChild(harry);
                  document
                    .querySelector(`row-${r}-column${c + 1}`)
                    .removeChild(harry);
                }
              }
              break;
          }
          break;
        case 'hard':
          r = 12;
          c = 16;
          switch (event.key) {
            case 'ArrowUp':
              r -= 1;
              if (r >= 0 && r <= 24) {
                if (
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .className.includes('path')
                ) {
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .appendChild(harry);
                  document
                    .querySelector(`row-${r + 1}-column${c}`)
                    .removeChild(harry);
                }
              }
              break;
            case 'ArrowDown':
              r += 1;
              if (r >= 0 && r <= 24) {
                if (
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .className.includes('path')
                ) {
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .appendChild(harry);
                  document
                    .querySelector(`row-${r - 1}-column${c}`)
                    .removeChild(harry);
                }
              }
              break;
            case 'ArrowRight':
              c += 1;
              if (c >= 0 && c <= 24) {
                if (
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .className.includes('path')
                ) {
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .appendChild(harry);
                  document
                    .querySelector(`row-${r}-column${c - 1}`)
                    .removeChild(harry);
                }
              }
              break;
            case 'ArrowLeft':
              c -= 1;
              if (c >= 0 && c <= 24) {
                if (
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .className.includes('path')
                ) {
                  document
                    .querySelector(`row-${r}-column${c}`)
                    .appendChild(harry);
                  document
                    .querySelector(`row-${r}-column${c + 1}`)
                    .removeChild(harry);
                }
              }
              break;
          }
          break;
      }
    });
  }
}
