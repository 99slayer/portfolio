// value/setValue = position/setPosition
export const windowDrag = (e, value, setValue, size) => {
  e.preventDefault();

  let mouseDown = true;
  const initialPosition = {
    x: e.pageX,
    y: e.pageY
  };

  window.onmousemove = (e) => {
    // Value is static.
    if (mouseDown) {
      const diff = {
        x: e.pageX - initialPosition.x,
        y: e.pageY - initialPosition.y
      };

      // Taskbar height.
      const tbh = 35;
      let newX = value.x + diff.x;
      let newY = value.y + diff.y;

      // Window width and window height.
      let wW = document.documentElement.clientWidth;
      let wH = document.documentElement.clientHeight;

      if ((newX >= 0 && newX + size.width < wW)) {
        // x isn't on an edge
        if ((newY >= 0 && newY + size.height < wH - tbh)) {
          // both x and y aren't on an edge
          setValue({
            x: newX,
            y: newY,
          });
          // ??
          return;
        } else {
          // x isn't on an edge but y is
          if (newY >= 0) {
            setValue({
              x: newX,
              y: wH - size.height - tbh,
            });
          } else {
            setValue({
              x: newX,
              y: 0,
            });
          }
        }
      } else {
        if ((newY >= 0 && newY + size.height < wH - tbh)) {
          // x is on an edge but y isnt
          if (newX >= 0) {
            setValue({
              x: wW - size.width,
              y: newY,
            });
          } else {
            setValue({
              x: 0,
              y: newY,
            });
          }
        } else {
          // both are on an edge
          if (newX >= 0) {
            if (newY >= 0) {
              setValue({
                x: wW - size.width,
                y: wH - size.height - tbh,
              });
            } else {
              setValue({
                x: wW - size.width,
                y: 0
              });
            }
          } else {
            if (newY >= 0) {
              setValue({
                x: 0,
                y: wH - size.height - tbh,
              });
            } else {
              setValue({
                x: 0,
                y: 0,
              });
            };
          };
        };
      };
    };
  };

  window.onmouseup = (e) => {
    mouseDown = false;

    if (e.target.style) {
      e.target.style.cursor = null;
    }
  };
};
