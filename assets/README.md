# ASSETS

Sass variable information

---

Variable | Target | Additional information
--- | --- | ---
*Name* | *Text* | *Code*
greenery | Greeen color | #A7E163
dark-blue | Dark blue color | #2589BD
white | White color | #FFFFFF
sky-blue | Sky blue color | #4FFBFF
dark-white | Dark white color | #CECECE
text-center | text align to center | _________
none | disable css some values | _________
relative | _____ | _______
absolute | ______ | _______
hidden | ______ | 
transparent | ______ | ______

Sass mixins information

---

mixin | Target | Additional information
--- | --- | ---
*Name* | *Text* | *Code*
robotoLight | Roboto light font | ______
robotoRegular | Roboto regular font | ______
robotoBold | Roboto regular font | ______
verticalAlignCenter | Vertical center element | Without argument
horizonAlignCenter | Horizontal center element | Without argument
verticalHorizontalCalc | Calculate horizon and vertical position |  arguments(posiiton, left, top, translateX, translateY)
textComplexValues | Text style basic values |  arguments(font-weight, size, letter-spacing)
buttonShapes | Button shape complex basic values | arguments(border-radius, padding-top, padding-bottom, padding-left, padding-right)
borderRadius | Set all radius | arguments(radius)
inputCompleteBorder | Object border style | argumnets($width, $style, $color) 
widthValue | width value | arguments(width)
inputBottomBorder | input border bottom values | arguments(width, style, color)
textGlitch | effect for Logo text glitch |  arguments(name, intensity, textColor, background, highlightColor1, highlightColor2, width, height)

## SASS Files Folder Structure

```
assets
  SCSS
    sassMixins.scss
    sassVariables.scss
```