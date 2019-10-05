# PLUGINS

*UI library*

``` bash
# Information
Vue-material.js - plugin for UI material package

Vue-fontawesome.js - plugin for using fontawesome icons with VueJs, to avoid full bundle import into project you need to import fontawesome font manually from plugin. Just find icon which you prefer from fontawesome webpage  and add name into import objects from @fortawesome/free-solid-svg-icons, then your imported name add to library.add

## Example for Vue-fontawesome.js
Plugin.js
import {nameIcon} from "@fortawesome/free-solid-svg-icons"
library.add(nameicon)

index.vue
<md-icon :icon=["fas", "nameIcon"]


Google-map.js - google map plugin
```
