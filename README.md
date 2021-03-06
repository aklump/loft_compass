# Loft Compass extends Compass Blueprint

* <http://compass-style.org/reference/blueprint/>
* <https://github.com/Compass/compass-blueprint>

## Conventions
1. Code css for desktop width without media queries; use media queries for other device widths.  This will provide the best degrade in [legacy browsers](http://caniuse.com/css-mediaqueries).  Take a look at _typical.scss_ and _grid.scss_ for examples.


## Installation

To use this framework in your project:

1. Copy _sass/loft_compass_ into your SASS directory.
3. Create a partial that redefines the breakpoints, grids and assigns grid sizes to the devices.  For this example it will be called _\_layout_base.scss_.  See included example file. **You could instead, add the contents to the top of _\_base.scss_ if you have it as long as it's included after _loft_compass_.
2. Add the following to the top of your SASS files wherein you want to use this; making sure _layout_base_ comes after _loft_compass/layout_.

        @import "compass";
        @import "blueprint/grid";
        @import "loft_compass/loft_compass";
        @import "loft_compass/layout";
        @import "layout_base";

3. See example SASS files for how to use.