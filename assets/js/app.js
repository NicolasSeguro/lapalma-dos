@charset "UTF-8";@import url(https://cdn.jsdelivr.net/npm/swiper@8.3.2/swiper-bundle.min.css);@import url(https://cdn.jsdelivr.net/npm/uikit@3.15.1/dist/css/uikit.min.css);@import url(https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp&display=swap);@import url(https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&family=Inter:wght@200;400;600&display=swap);@font-face {
    font-family: Syne;
    src: local("Syne Bold"),url(../../fonts/syne/Syne-Bold.woff2),url(../../fonts/syne/Syne-Bold.woff);
    font-weight: 700;
    text-rendering:optimizeLegibility;font-display: swap
}

@font-face {
    font-family: Stolzl;
    src: local("Stolzl Book"),url(../../fonts/stolzl/Stolzl-Book.woff2),url(../../fonts/stolzl/Stolzl-Book.woff);
    font-weight: 400;
    text-rendering:optimizeLegibility;font-display: swap
}

@font-face {
    font-family: Stolzl;
    src: local("Stolzl Bold"),url(../../fonts/stolzl/Stolzl-Bold.woff2),url(../../fonts/stolzl/Stolzl-Bold.woff);
    font-weight: 700;
    text-rendering:optimizeLegibility;font-display: swap
}

@font-face {
    font-family: "Stolzl Display";
    src: local("Stolzl Display Regular"),url(../../fonts/stolzl/StolzlDisplay-Regular.woff2),url(../../fonts/stolzl/StolzlDisplay-Regular.woff);
    font-weight: 400;
    text-rendering:optimizeLegibility;font-display: swap
}

@font-face {
    font-family: "Stolzl Display";
    src: local("Stolzl Display Bold"),url(../../fonts/stolzl/StolzlDisplay-Bold.woff2),url(../../fonts/stolzl/StolzlDisplay-Bold.woff);
    font-weight: 700;
    text-rendering:optimizeLegibility;font-display: swap
}

@font-face {
    font-family: Unicons;
    src: url(../../fonts/unicons/Unicons.eot?lkolxg);
    src: url(../../fonts/unicons/Unicons.eot?lkolxg#iefix) format('embedded-opentype'),url(../../fonts/unicons/Unicons.ttf?lkolxg) format('truetype'),url(../../fonts/unicons/Unicons.woff?lkolxg) format('woff'),url(../../fonts/unicons/Unicons.svg?lkolxg#Unicons) format('svg');
    font-weight: 400;
    font-style: normal;
    font-display: block
}

[class*=" unicon-"],[class^=unicon-] {
    font-family: Unicons!important;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
}

.unicon-account:before {
    content: "\e900"
}

.unicon-activity:before {
    content: "\e901"
}

.unicon-add-alt:before {
    content: "\e902"
}

.unicon-add:before {
    content: "\e903"
}

.unicon-airplay-filled:before {
    content: "\e904"
}

.unicon-airplay:before {
    content: "\e905"
}

.unicon-airport-location:before {
    content: "\e906"
}

.unicon-analytics:before {
    content: "\e907"
}

.unicon-api:before {
    content: "\e908"
}

.unicon-archive:before {
    content: "\e909"
}

.unicon-area:before {
    content: "\e90a"
}

.unicon-arrow-down:before {
    content: "\e90b"
}

.unicon-arrow-left:before {
    content: "\e90c"
}

.unicon-arrow-right:before {
    content: "\e90d"
}

.unicon-arrow-up-right:before {
    content: "\e90e"
}

.unicon-arrow-up:before {
    content: "\e90f"
}

.unicon-asleep:before {
    content: "\e910"
}

.unicon-attachment:before {
    content: "\e911"
}

.unicon-audio-console:before {
    content: "\e912"
}

.unicon-augmented-reality:before {
    content: "\e913"
}

.unicon-auto-scroll:before {
    content: "\e914"
}

.unicon-awake:before {
    content: "\e915"
}

.unicon-back-to-top:before {
    content: "\e916"
}

.unicon-bar:before {
    content: "\e917"
}

.unicon-barrier:before {
    content: "\e918"
}

.unicon-bastion-host:before {
    content: "\e919"
}

.unicon-blog:before {
    content: "\e91a"
}

.unicon-book:before {
    content: "\e91b"
}

.unicon-bookmark-add:before {
    content: "\e91c"
}

.unicon-bookmark:before {
    content: "\e91d"
}

.unicon-box:before {
    content: "\e91e"
}

.unicon-brightness-contrast:before {
    content: "\e91f"
}

.unicon-brush-freehand:before {
    content: "\e920"
}

.unicon-building:before {
    content: "\e921"
}

.unicon-calendar:before {
    content: "\e922"
}

.unicon-camera:before {
    content: "\e923"
}

.unicon-carbon:before {
    content: "\e924"
}

.unicon-caret-down:before {
    content: "\e925"
}

.unicon-caret-left:before {
    content: "\e926"
}

.unicon-caret-right:before {
    content: "\e927"
}

.unicon-caret-sort:before {
    content: "\e928"
}

.unicon-caret-up:before {
    content: "\e929"
}

.unicon-carousel-horizontal:before {
    content: "\e92a"
}

.unicon-carousel-vertical:before {
    content: "\e92b"
}

.unicon-categories:before {
    content: "\e92c"
}

.unicon-cd-archive:before {
    content: "\e92d"
}

.unicon-center-circle:before {
    content: "\e92e"
}

.unicon-center-to-fit:before {
    content: "\e92f"
}

.unicon-certificate:before {
    content: "\e930"
}

.unicon-chart-column:before {
    content: "\e931"
}

.unicon-chart-line-data:before {
    content: "\e932"
}

.unicon-chart-pie:before {
    content: "\e933"
}

.unicon-chart-ring:before {
    content: "\e934"
}

.unicon-chart-stacked:before {
    content: "\e935"
}

.unicon-chart-treemap:before {
    content: "\e936"
}

.unicon-chart-venn-diagram:before {
    content: "\e937"
}

.unicon-chat-bot:before {
    content: "\e938"
}

.unicon-chat-launch:before {
    content: "\e939"
}

.unicon-chat:before {
    content: "\e93a"
}

.unicon-checkbox-checked:before {
    content: "\e93b"
}

.unicon-checkbox:before {
    content: "\e93c"
}

.unicon-checkmark-outline:before {
    content: "\e93d"
}

.unicon-checkmark:before {
    content: "\e93e"
}

.unicon-chevron-down:before {
    content: "\e93f"
}

.unicon-chevron-left:before {
    content: "\e940"
}

.unicon-chevron-mini:before {
    content: "\e941"
}

.unicon-chevron-right:before {
    content: "\e942"
}

.unicon-chevron-sort-down:before {
    content: "\e943"
}

.unicon-chevron-sort-up:before {
    content: "\e944"
}

.unicon-chevron-sort:before {
    content: "\e945"
}

.unicon-chevron-up:before {
    content: "\e946"
}

.unicon-circle-dash:before {
    content: "\e947"
}

.unicon-circle-measurement:before {
    content: "\e948"
}

.unicon-clean:before {
    content: "\e949"
}

.unicon-close-outline:before {
    content: "\e94a"
}

.unicon-close:before {
    content: "\e94b"
}

.unicon-cloud-download:before {
    content: "\e94c"
}

.unicon-cloud-lightning:before {
    content: "\e94d"
}

.unicon-cloud-satellite:before {
    content: "\e94e"
}

.unicon-cloud-upload:before {
    content: "\e94f"
}

.unicon-cobb-angle:before {
    content: "\e950"
}

.unicon-code:before {
    content: "\e951"
}

.unicon-collaborate:before {
    content: "\e952"
}

.unicon-collapse-all:before {
    content: "\e953"
}

.unicon-color-palette:before {
    content: "\e954"
}

.unicon-color-switch:before {
    content: "\e955"
}

.unicon-column:before {
    content: "\e956"
}

.unicon-compare:before {
    content: "\e957"
}

.unicon-condition-point:before {
    content: "\e958"
}

.unicon-condition-wait-point:before {
    content: "\e959"
}

.unicon-container-software:before {
    content: "\e95a"
}

.unicon-contour-finding:before {
    content: "\e95b"
}

.unicon-contrast:before {
    content: "\e95c"
}

.unicon-copy-file:before {
    content: "\e95d"
}

.unicon-copy:before {
    content: "\e95e"
}

.unicon-course:before {
    content: "\e95f"
}

.unicon-credentials:before {
    content: "\e960"
}

.unicon-crop:before {
    content: "\e961"
}

.unicon-cube-view:before {
    content: "\e962"
}

.unicon-cube:before {
    content: "\e963"
}

.unicon-currency-dollar:before {
    content: "\e964"
}

.unicon-currency:before {
    content: "\e965"
}

.unicon-cursor-1:before {
    content: "\e966"
}

.unicon-cursor-2:before {
    content: "\e967"
}

.unicon-cursor-alt:before {
    content: "\e968"
}

.unicon-cursor:before {
    content: "\e969"
}

.unicon-curve-auto-colon:before {
    content: "\e96a"
}

.unicon-curve-manual:before {
    content: "\e96b"
}

.unicon-cut-in-half:before {
    content: "\e96c"
}

.unicon-cut:before {
    content: "\e96d"
}

.unicon-dashboard-reference:before {
    content: "\e96e"
}

.unicon-dashboard:before {
    content: "\e96f"
}

.unicon-data-1:before {
    content: "\e970"
}

.unicon-data-base-alt:before {
    content: "\e971"
}

.unicon-data-base:before {
    content: "\e972"
}

.unicon-debug:before {
    content: "\e973"
}

.unicon-delete:before {
    content: "\e974"
}

.unicon-delivery-parcel:before {
    content: "\e975"
}

.unicon-delivery-truck:before {
    content: "\e976"
}

.unicon-delivery:before {
    content: "\e977"
}

.unicon-departure:before {
    content: "\e978"
}

.unicon-devices:before {
    content: "\e979"
}

.unicon-diagram:before {
    content: "\e97a"
}

.unicon-dicom-overlay:before {
    content: "\e97b"
}

.unicon-direct-link:before {
    content: "\e97c"
}

.unicon-direction-right-01:before {
    content: "\e97d"
}

.unicon-direction-straight-right:before {
    content: "\e97e"
}

.unicon-direction-straight:before {
    content: "\e97f"
}

.unicon-document-add:before {
    content: "\e980"
}

.unicon-document-attachment:before {
    content: "\e981"
}

.unicon-document-blank:before {
    content: "\e982"
}

.unicon-document-download:before {
    content: "\e983"
}

.unicon-document:before {
    content: "\e984"
}

.unicon-dot-mark:before {
    content: "\e985"
}

.unicon-down-to-bottom:before {
    content: "\e986"
}

.unicon-download-study:before {
    content: "\e987"
}

.unicon-download:before {
    content: "\e988"
}

.unicon-drag-horizontal:before {
    content: "\e989"
}

.unicon-drag-vertical:before {
    content: "\e98a"
}

.unicon-draggable:before {
    content: "\e98b"
}

.unicon-draw:before {
    content: "\e98c"
}

.unicon-drop-photo-filled:before {
    content: "\e98d"
}

.unicon-drop-photo:before {
    content: "\e98e"
}

.unicon-earth-americas:before {
    content: "\e98f"
}

.unicon-earth-europe-africa:before {
    content: "\e990"
}

.unicon-earth-filled:before {
    content: "\e991"
}

.unicon-earth:before {
    content: "\e992"
}

.unicon-edge-enhancement:before {
    content: "\e993"
}

.unicon-edit-off:before {
    content: "\e994"
}

.unicon-edit:before {
    content: "\e995"
}

.unicon-edt-loop:before {
    content: "\e996"
}

.unicon-email-new:before {
    content: "\e997"
}

.unicon-email:before {
    content: "\e998"
}

.unicon-enterprise:before {
    content: "\e999"
}

.unicon-erase:before {
    content: "\e99a"
}

.unicon-error-outline:before {
    content: "\e99b"
}

.unicon-error:before {
    content: "\e99c"
}

.unicon-event-schedule:before {
    content: "\e99d"
}

.unicon-event:before {
    content: "\e99e"
}

.unicon-events-alt:before {
    content: "\e99f"
}

.unicon-events:before {
    content: "\e9a0"
}

.unicon-explore:before {
    content: "\e9a1"
}

.unicon-export:before {
    content: "\e9a2"
}

.unicon-eyedropper:before {
    content: "\e9a3"
}

.unicon-face-dissatisfied:before {
    content: "\e9a4"
}

.unicon-face-satisfied:before {
    content: "\e9a5"
}

.unicon-fade:before {
    content: "\e9a6"
}

.unicon-favorite-filled:before {
    content: "\e9a7"
}

.unicon-favorite:before {
    content: "\e9a8"
}

.unicon-file-storage:before {
    content: "\e9a9"
}

.unicon-filter-edit:before {
    content: "\e9aa"
}

.unicon-filter:before {
    content: "\e9ab"
}

.unicon-finance:before {
    content: "\e9ac"
}

.unicon-fingerprint-recognition:before {
    content: "\e9ad"
}

.unicon-fire:before {
    content: "\e9ae"
}

.unicon-flag-filled:before {
    content: "\e9af"
}

.unicon-flag:before {
    content: "\e9b0"
}

.unicon-flash-filled:before {
    content: "\e9b1"
}

.unicon-flash:before {
    content: "\e9b2"
}

.unicon-flow-connection:before {
    content: "\e9b3"
}

.unicon-folder-add:before {
    content: "\e9b4"
}

.unicon-folder-shared:before {
    content: "\e9b5"
}

.unicon-folder:before {
    content: "\e9b6"
}

.unicon-folders:before {
    content: "\e9b7"
}

.unicon-forum:before {
    content: "\e9b8"
}

.unicon-game-console:before {
    content: "\e9b9"
}

.unicon-gamification:before {
    content: "\e9ba"
}

.unicon-gift:before {
    content: "\e9bb"
}

.unicon-globe:before {
    content: "\e9bc"
}

.unicon-glyph-caution-inverted:before {
    content: "\e9bd"
}

.unicon-glyph-caution:before {
    content: "\e9be"
}

.unicon-glyph-circle-fill:before {
    content: "\e9bf"
}

.unicon-glyph-square-fill:before {
    content: "\e9c0"
}

.unicon-glyph-undefined:before {
    content: "\e9c1"
}

.unicon-gradient:before {
    content: "\e9c2"
}

.unicon-grid:before {
    content: "\e9c3"
}

.unicon-group-objects-new:before {
    content: "\e9c4"
}

.unicon-group-objects-save:before {
    content: "\e9c5"
}

.unicon-group:before {
    content: "\e9c6"
}

.unicon-growth:before {
    content: "\e9c7"
}

.unicon-gui-management:before {
    content: "\e9c8"
}

.unicon-gui:before {
    content: "\e9c9"
}

.unicon-hashtag:before {
    content: "\e9ca"
}

.unicon-headphones:before {
    content: "\e9cb"
}

.unicon-headset:before {
    content: "\e9cc"
}

.unicon-help-filled:before {
    content: "\e9cd"
}

.unicon-help:before {
    content: "\e9ce"
}

.unicon-hole-filling:before {
    content: "\e9cf"
}

.unicon-home:before {
    content: "\e9d0"
}

.unicon-ibm-cloud-pak-security:before {
    content: "\e9d1"
}

.unicon-iCA-2D:before {
    content: "\e9d2"
}

.unicon-idea:before {
    content: "\e9d3"
}

.unicon-identification:before {
    content: "\e9d4"
}

.unicon-image-copy:before {
    content: "\e9d5"
}

.unicon-image-search-alt:before {
    content: "\e9d6"
}

.unicon-image-search:before {
    content: "\e9d7"
}

.unicon-image:before {
    content: "\e9d8"
}

.unicon-in-progress:before {
    content: "\e9d9"
}

.unicon-incomplete:before {
    content: "\e9da"
}

.unicon-increase-level:before {
    content: "\e9db"
}

.unicon-industry:before {
    content: "\e9dc"
}

.unicon-information-filled:before {
    content: "\e9dd"
}

.unicon-information:before {
    content: "\e9de"
}

.unicon-insert-page:before {
    content: "\e9df"
}

.unicon-insert-syntax:before {
    content: "\e9e0"
}

.unicon-integration:before {
    content: "\e9e1"
}

.unicon-interactive-segmentation-cursor:before {
    content: "\e9e2"
}

.unicon-intersect:before {
    content: "\e9e3"
}

.unicon-inventory-management:before {
    content: "\e9e4"
}

.unicon-keyboard:before {
    content: "\e9e5"
}

.unicon-language:before {
    content: "\e9e6"
}

.unicon-laptop:before {
    content: "\e9e7"
}

.unicon-lasso-polygon:before {
    content: "\e9e8"
}

.unicon-lasso:before {
    content: "\e9e9"
}

.unicon-launch-study-1:before {
    content: "\e9ea"
}

.unicon-launch-study-2:before {
    content: "\e9eb"
}

.unicon-launch:before {
    content: "\e9ec"
}

.unicon-layers:before {
    content: "\e9ed"
}

.unicon-legend:before {
    content: "\e9ee"
}

.unicon-license-draft:before {
    content: "\e9ef"
}

.unicon-lifesaver:before {
    content: "\e9f0"
}

.unicon-light-filled:before {
    content: "\e9f1"
}

.unicon-light:before {
    content: "\e9f2"
}

.unicon-lightning:before {
    content: "\e9f3"
}

.unicon-link:before {
    content: "\e9f4"
}

.unicon-list-boxes:before {
    content: "\e9f5"
}

.unicon-list-bulleted:before {
    content: "\e9f6"
}

.unicon-list-checked:before {
    content: "\e9f7"
}

.unicon-list-dropdown:before {
    content: "\e9f8"
}

.unicon-list-numbered:before {
    content: "\e9f9"
}

.unicon-list:before {
    content: "\e9fa"
}

.unicon-location-current:before {
    content: "\e9fb"
}

.unicon-location:before {
    content: "\e9fc"
}

.unicon-locked:before {
    content: "\e9fd"
}

.unicon-login:before {
    content: "\e9fe"
}

.unicon-logo-delicious:before {
    content: "\e9ff"
}

.unicon-logo-digg:before {
    content: "\ea00"
}

.unicon-logo-discord:before {
    content: "\ea01"
}

.unicon-logo-facebook:before {
    content: "\ea02"
}

.unicon-logo-flickr:before {
    content: "\ea03"
}

.unicon-logo-github:before {
    content: "\ea04"
}

.unicon-logo-google:before {
    content: "\ea05"
}

.unicon-logo-instagram:before {
    content: "\ea06"
}

.unicon-logo-linkedin:before {
    content: "\ea07"
}

.unicon-logo-livestream:before {
    content: "\ea08"
}

.unicon-logo-medium:before {
    content: "\ea09"
}

.unicon-logo-pinterest:before {
    content: "\ea0a"
}

.unicon-logo-quora:before {
    content: "\ea0b"
}

.unicon-logo-skype:before {
    content: "\ea0c"
}

.unicon-logo-slack:before {
    content: "\ea0d"
}

.unicon-logo-snapchat:before {
    content: "\ea0e"
}

.unicon-logo-stumbleupon:before {
    content: "\ea0f"
}

.unicon-logo-tumblr:before {
    content: "\ea10"
}

.unicon-logo-twitter:before {
    content: "\ea11"
}

.unicon-logo-vmware:before {
    content: "\ea12"
}

.unicon-logo-xing:before {
    content: "\ea13"
}

.unicon-logo-youtube:before {
    content: "\ea14"
}

.unicon-logout:before {
    content: "\ea15"
}

.unicon-mac-command:before {
    content: "\ea16"
}

.unicon-mac-option:before {
    content: "\ea17"
}

.unicon-mac-shift:before {
    content: "\ea18"
}

.unicon-machine-learning:before {
    content: "\ea19"
}

.unicon-magic-wand-filled:before {
    content: "\ea1a"
}

.unicon-magic-wand:before {
    content: "\ea1b"
}

.unicon-magnify:before {
    content: "\ea1c"
}

.unicon-manage-protection:before {
    content: "\ea1d"
}

.unicon-map-center:before {
    content: "\ea1e"
}

.unicon-map-identify:before {
    content: "\ea1f"
}

.unicon-map:before {
    content: "\ea20"
}

.unicon-maximize:before {
    content: "\ea21"
}

.unicon-media-cast:before {
    content: "\ea22"
}

.unicon-media-library:before {
    content: "\ea23"
}

.unicon-menu:before {
    content: "\ea24"
}

.unicon-meter-alt:before {
    content: "\ea25"
}

.unicon-meter:before {
    content: "\ea26"
}

.unicon-microphone-filled:before {
    content: "\ea27"
}

.unicon-microphone:before {
    content: "\ea28"
}

.unicon-microscope:before {
    content: "\ea29"
}

.unicon-migrate-alt:before {
    content: "\ea2a"
}

.unicon-military-camp:before {
    content: "\ea2b"
}

.unicon-minimize:before {
    content: "\ea2c"
}

.unicon-misuse-alt:before {
    content: "\ea2d"
}

.unicon-misuse-outline:before {
    content: "\ea2e"
}

.unicon-misuse:before {
    content: "\ea2f"
}

.unicon-mobile-add:before {
    content: "\ea30"
}

.unicon-mobile:before {
    content: "\ea31"
}

.unicon-model-alt:before {
    content: "\ea32"
}

.unicon-model:before {
    content: "\ea33"
}

.unicon-money:before {
    content: "\ea34"
}

.unicon-move:before {
    content: "\ea35"
}

.unicon-mpr-toggle:before {
    content: "\ea36"
}

.unicon-music:before {
    content: "\ea37"
}

.unicon-name-space:before {
    content: "\ea38"
}

.unicon-navaid-military:before {
    content: "\ea39"
}

.unicon-new-tab:before {
    content: "\ea3a"
}

.unicon-nominal:before {
    content: "\ea3b"
}

.unicon-not-available:before {
    content: "\ea3c"
}

.unicon-notebook-reference:before {
    content: "\ea3d"
}

.unicon-notebook:before {
    content: "\ea3e"
}

.unicon-notification-filled:before {
    content: "\ea3f"
}

.unicon-notification-new:before {
    content: "\ea40"
}

.unicon-notification:before {
    content: "\ea41"
}

.unicon-opacity:before {
    content: "\ea42"
}

.unicon-open-panel-left:before {
    content: "\ea43"
}

.unicon-open-panel-top:before {
    content: "\ea44"
}

.unicon-ordinal:before {
    content: "\ea45"
}

.unicon-overflow-menu-horizontal:before {
    content: "\ea46"
}

.unicon-overflow-menu-vertical:before {
    content: "\ea47"
}

.unicon-overlay:before {
    content: "\ea48"
}

.unicon-package:before {
    content: "\ea49"
}

.unicon-page-break:before {
    content: "\ea4a"
}

.unicon-paint-brush-alt:before {
    content: "\ea4b"
}

.unicon-paint-brush:before {
    content: "\ea4c"
}

.unicon-pan-horizontal:before {
    content: "\ea4d"
}

.unicon-pan-vertical:before {
    content: "\ea4e"
}

.unicon-panel-expansion:before {
    content: "\ea4f"
}

.unicon-partnership:before {
    content: "\ea50"
}

.unicon-password:before {
    content: "\ea51"
}

.unicon-pause:before {
    content: "\ea52"
}

.unicon-pedestrian-child:before {
    content: "\ea53"
}

.unicon-pedestrian-family:before {
    content: "\ea54"
}

.unicon-pen-fountain:before {
    content: "\ea55"
}

.unicon-pen:before {
    content: "\ea56"
}

.unicon-pending:before {
    content: "\ea57"
}

.unicon-percentage-filled:before {
    content: "\ea58"
}

.unicon-percentage:before {
    content: "\ea59"
}

.unicon-phone-ip:before {
    content: "\ea5a"
}

.unicon-phone:before {
    content: "\ea5b"
}

.unicon-piggy-bank-slot:before {
    content: "\ea5c"
}

.unicon-piggy-bank:before {
    content: "\ea5d"
}

.unicon-pin-filled:before {
    content: "\ea5e"
}

.unicon-pin:before {
    content: "\ea5f"
}

.unicon-plane:before {
    content: "\ea60"
}

.unicon-play-filled-alt:before {
    content: "\ea61"
}

.unicon-play-filled:before {
    content: "\ea62"
}

.unicon-play-outline:before {
    content: "\ea63"
}

.unicon-play:before {
    content: "\ea64"
}

.unicon-playlist:before {
    content: "\ea65"
}

.unicon-policy:before {
    content: "\ea66"
}

.unicon-popup:before {
    content: "\ea67"
}

.unicon-portfolio:before {
    content: "\ea68"
}

.unicon-power:before {
    content: "\ea69"
}

.unicon-presentation-file:before {
    content: "\ea6a"
}

.unicon-printer:before {
    content: "\ea6b"
}

.unicon-product:before {
    content: "\ea6c"
}

.unicon-progress-bar:before {
    content: "\ea6d"
}

.unicon-purchase:before {
    content: "\ea6e"
}

.unicon-query:before {
    content: "\ea6f"
}

.unicon-quotes:before {
    content: "\ea70"
}

.unicon-radio-button-checked:before {
    content: "\ea71"
}

.unicon-radio-button:before {
    content: "\ea72"
}

.unicon-rain-drop:before {
    content: "\ea73"
}

.unicon-receipt:before {
    content: "\ea74"
}

.unicon-recently-viewed:before {
    content: "\ea75"
}

.unicon-recommend:before {
    content: "\ea76"
}

.unicon-recording-filled-alt:before {
    content: "\ea77"
}

.unicon-recording-filled:before {
    content: "\ea78"
}

.unicon-recording:before {
    content: "\ea79"
}

.unicon-redo:before {
    content: "\ea7a"
}

.unicon-registration:before {
    content: "\ea7b"
}

.unicon-reminder:before {
    content: "\ea7c"
}

.unicon-renew:before {
    content: "\ea7d"
}

.unicon-repeat:before {
    content: "\ea7e"
}

.unicon-reply-all:before {
    content: "\ea7f"
}

.unicon-reply:before {
    content: "\ea80"
}

.unicon-report-data:before {
    content: "\ea81"
}

.unicon-report:before {
    content: "\ea82"
}

.unicon-request-quote:before {
    content: "\ea83"
}

.unicon-reset-alt:before {
    content: "\ea84"
}

.unicon-reset:before {
    content: "\ea85"
}

.unicon-restart:before {
    content: "\ea86"
}

.unicon-result:before {
    content: "\ea87"
}

.unicon-roadmap:before {
    content: "\ea88"
}

.unicon-rocket:before {
    content: "\ea89"
}

.unicon-rotate-180:before {
    content: "\ea8a"
}

.unicon-rotate-360:before {
    content: "\ea8b"
}

.unicon-row:before {
    content: "\ea8c"
}

.unicon-rss:before {
    content: "\ea8d"
}

.unicon-rule:before {
    content: "\ea8e"
}

.unicon-ruler-alt:before {
    content: "\ea8f"
}

.unicon-ruler:before {
    content: "\ea90"
}

.unicon-run:before {
    content: "\ea91"
}

.unicon-save:before {
    content: "\ea92"
}

.unicon-scale:before {
    content: "\ea93"
}

.unicon-scales:before {
    content: "\ea94"
}

.unicon-scalpel-cursor:before {
    content: "\ea95"
}

.unicon-scalpel-lasso:before {
    content: "\ea96"
}

.unicon-scalpel:before {
    content: "\ea97"
}

.unicon-scan:before {
    content: "\ea98"
}

.unicon-screen:before {
    content: "\ea99"
}

.unicon-script:before {
    content: "\ea9a"
}

.unicon-search-locate:before {
    content: "\ea9b"
}

.unicon-search:before {
    content: "\ea9c"
}

.unicon-security:before {
    content: "\ea9d"
}

.unicon-select-01:before {
    content: "\ea9e"
}

.unicon-select-02:before {
    content: "\ea9f"
}

.unicon-select-window:before {
    content: "\eaa0"
}

.unicon-send-alt-filled:before {
    content: "\eaa1"
}

.unicon-send-alt:before {
    content: "\eaa2"
}

.unicon-send-filled:before {
    content: "\eaa3"
}

.unicon-send-to-back:before {
    content: "\eaa4"
}

.unicon-send:before {
    content: "\eaa5"
}

.unicon-server-time:before {
    content: "\eaa6"
}

.unicon-settings-adjust:before {
    content: "\eaa7"
}

.unicon-settings:before {
    content: "\eaa8"
}

.unicon-shape-except:before {
    content: "\eaa9"
}

.unicon-share:before {
    content: "\eaaa"
}

.unicon-shopping-bag:before {
    content: "\eaab"
}

.unicon-shopping-cart:before {
    content: "\eaac"
}

.unicon-shopping-catalog:before {
    content: "\eaad"
}

.unicon-shrink-screen:before {
    content: "\eaae"
}

.unicon-shuffle:before {
    content: "\eaaf"
}

.unicon-signal-strength:before {
    content: "\eab0"
}

.unicon-skill-level:before {
    content: "\eab1"
}

.unicon-smoothing-cursor:before {
    content: "\eab2"
}

.unicon-smoothing:before {
    content: "\eab3"
}

.unicon-soccer:before {
    content: "\eab4"
}

.unicon-software:before {
    content: "\eab5"
}

.unicon-spell-check:before {
    content: "\eab6"
}

.unicon-split-discard:before {
    content: "\eab7"
}

.unicon-split-screen:before {
    content: "\eab8"
}

.unicon-split:before {
    content: "\eab9"
}

.unicon-spray-paint:before {
    content: "\eaba"
}

.unicon-stacked-scrolling-1:before {
    content: "\eabb"
}

.unicon-stamp:before {
    content: "\eabc"
}

.unicon-star-filled:before {
    content: "\eabd"
}

.unicon-star:before {
    content: "\eabe"
}

.unicon-stay-inside:before {
    content: "\eabf"
}

.unicon-stop-filled-alt:before {
    content: "\eac0"
}

.unicon-stop:before {
    content: "\eac1"
}

.unicon-store:before {
    content: "\eac2"
}

.unicon-string-integer:before {
    content: "\eac3"
}

.unicon-string-text:before {
    content: "\eac4"
}

.unicon-sub-volume:before {
    content: "\eac5"
}

.unicon-subtract-alt:before {
    content: "\eac6"
}

.unicon-subtract:before {
    content: "\eac7"
}

.unicon-table:before {
    content: "\eac8"
}

.unicon-tablet:before {
    content: "\eac9"
}

.unicon-tag-group:before {
    content: "\eaca"
}

.unicon-tag:before {
    content: "\eacb"
}

.unicon-task-add:before {
    content: "\eacc"
}

.unicon-task-approved:before {
    content: "\eacd"
}

.unicon-task-view:before {
    content: "\eace"
}

.unicon-task:before {
    content: "\eacf"
}

.unicon-template:before {
    content: "\ead0"
}

.unicon-term:before {
    content: "\ead1"
}

.unicon-terminal:before {
    content: "\ead2"
}

.unicon-text-annotation-toggle:before {
    content: "\ead3"
}

.unicon-text-bold:before {
    content: "\ead4"
}

.unicon-text-color:before {
    content: "\ead5"
}

.unicon-text-creation:before {
    content: "\ead6"
}

.unicon-text-fill:before {
    content: "\ead7"
}

.unicon-text-font:before {
    content: "\ead8"
}

.unicon-text-line-spacing:before {
    content: "\ead9"
}

.unicon-text-mining-applier:before {
    content: "\eada"
}

.unicon-text-mining:before {
    content: "\eadb"
}

.unicon-text-underline:before {
    content: "\eadc"
}

.unicon-theater:before {
    content: "\eadd"
}

.unicon-thumbnail-1:before {
    content: "\eade"
}

.unicon-thumbnail-2:before {
    content: "\eadf"
}

.unicon-thumbs-down:before {
    content: "\eae0"
}

.unicon-thumbs-up:before {
    content: "\eae1"
}

.unicon-ticket:before {
    content: "\eae2"
}

.unicon-time:before {
    content: "\eae3"
}

.unicon-tool-box:before {
    content: "\eae4"
}

.unicon-tools-alt:before {
    content: "\eae5"
}

.unicon-tools:before {
    content: "\eae6"
}

.unicon-touch-1:before {
    content: "\eae7"
}

.unicon-touch-interaction:before {
    content: "\eae8"
}

.unicon-translate:before {
    content: "\eae9"
}

.unicon-trash-can:before {
    content: "\eaea"
}

.unicon-trophy:before {
    content: "\eaeb"
}

.unicon-types:before {
    content: "\eaec"
}

.unicon-umbrella:before {
    content: "\eaed"
}

.unicon-unlink:before {
    content: "\eaee"
}

.unicon-unlocked:before {
    content: "\eaef"
}

.unicon-upload:before {
    content: "\eaf0"
}

.unicon-user-avatar-filled-alt:before {
    content: "\eaf1"
}

.unicon-user-avatar-filled:before {
    content: "\eaf2"
}

.unicon-user-avatar:before {
    content: "\eaf3"
}

.unicon-user-multiple:before {
    content: "\eaf4"
}

.unicon-user:before {
    content: "\eaf5"
}

.unicon-uv-index:before {
    content: "\eaf6"
}

.unicon-video-add:before {
    content: "\eaf7"
}

.unicon-video-chat:before {
    content: "\eaf8"
}

.unicon-video:before {
    content: "\eaf9"
}

.unicon-view-filled:before {
    content: "\eafa"
}

.unicon-view-mode-1:before {
    content: "\eafb"
}

.unicon-view-mode-2:before {
    content: "\eafc"
}

.unicon-view-next:before {
    content: "\eafd"
}

.unicon-view-off:before {
    content: "\eafe"
}

.unicon-view:before {
    content: "\eaff"
}

.unicon-virtual-column-key:before {
    content: "\eb00"
}

.unicon-virtual-private-cloud-alt:before {
    content: "\eb01"
}

.unicon-visual-recognition:before {
    content: "\eb02"
}

.unicon-volume-block-storage:before {
    content: "\eb03"
}

.unicon-volume-up:before {
    content: "\eb04"
}

.unicon-wallet:before {
    content: "\eb05"
}

.unicon-warning-alt-filled:before {
    content: "\eb06"
}

.unicon-warning-alt:before {
    content: "\eb07"
}

.unicon-warning-filled:before {
    content: "\eb08"
}

.unicon-warning:before {
    content: "\eb09"
}

.unicon-wheat:before {
    content: "\eb0a"
}

.unicon-wifi:before {
    content: "\eb0b"
}

.unicon-wikis:before {
    content: "\eb0c"
}

.unicon-word-cloud:before {
    content: "\eb0d"
}

.unicon-workspace:before {
    content: "\eb0e"
}

.unicon-zoom-area:before {
    content: "\eb0f"
}

.unicon-zoom-in-area:before {
    content: "\eb10"
}

.unicon-zoom-in:before {
    content: "\eb11"
}

.unicon-zoom-out-area:before {
    content: "\eb12"
}

.unicon-zoom-out:before {
    content: "\eb13"
}

.unicon-zoom-reset:before {
    content: "\eb14"
}

@font-face {
    font-family: brand-icons;
    src: url(../../fonts/brand-icons/brand-icons.eot);
    src: url(../../fonts/brand-icons/brand-icons.eot#iefix) format('embedded-opentype'),url(../../fonts/brand-icons/brand-icons.woff2) format('woff2'),url(../../fonts/brand-icons/brand-icons.woff) format('woff'),url(../../fonts/brand-icons/brand-icons.ttf) format('truetype'),url(../../fonts/brand-icons/brand-icons.svg#brand-icons) format('svg');
    font-weight: 400;
    font-style: normal;
    font-display: swap
}

[class*=" brand-"]:before,[class^=brand-]:before {
    font-family: brand-icons;
    font-style: normal;
    font-weight: 400;
    display: inline-block;
    text-decoration: inherit;
    width: 1em;
    text-align: center;
    font-variant: normal;
    text-transform: none;
    line-height: 1em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
}

.brand-twitter:before {
    content: '\f099'
}

.brand-facebook:before {
    content: '\f09a'
}

.brand-github-circle:before {
    content: '\f09b'
}

.brand-rss:before {
    content: '\f09e'
}

.brand-pinterest-circle:before {
    content: '\f0d2'
}

.brand-pinterest-square:before {
    content: '\f0d3'
}

.brand-gplus-square:before {
    content: '\f0d4'
}

.brand-google-plus:before {
    content: '\f0d5'
}

.brand-linkedin:before {
    content: '\f0e1'
}

.brand-html5:before {
    content: '\f13b'
}

.brand-css3:before {
    content: '\f13c'
}

.brand-xing:before {
    content: '\f168'
}

.brand-xing-square:before {
    content: '\f169'
}

.brand-youtube-play:before {
    content: '\f16a'
}

.brand-dropbox:before {
    content: '\f16b'
}

.brand-stackoverflow:before {
    content: '\f16c'
}

.brand-instagram:before {
    content: '\f16d'
}

.brand-flickr:before {
    content: '\f16e'
}

.brand-tumblr:before {
    content: '\f173'
}

.brand-tumblr-square:before {
    content: '\f174'
}

.brand-apple:before {
    content: '\f179'
}

.brand-windows:before {
    content: '\f17a'
}

.brand-android:before {
    content: '\f17b'
}

.brand-dribbble:before {
    content: '\f17d'
}

.brand-skype:before {
    content: '\f17e'
}

.brand-foursquare:before {
    content: '\f180'
}

.brand-trello:before {
    content: '\f181'
}

.brand-vkontakte:before {
    content: '\f189'
}

.brand-vimeo-square:before {
    content: '\f194'
}

.brand-slack:before {
    content: '\f198'
}

.brand-wordpress:before {
    content: '\f19a'
}

.brand-google:before {
    content: '\f1a0'
}

.brand-reddit:before {
    content: '\f1a1'
}

.brand-reddit-square:before {
    content: '\f1a2'
}

.brand-stumbleupon-circle:before {
    content: '\f1a3'
}

.brand-stumbleupon:before {
    content: '\f1a4'
}

.brand-digg:before {
    content: '\f1a6'
}

.brand-behance:before {
    content: '\f1b4'
}

.brand-behance-square:before {
    content: '\f1b5'
}

.brand-steam:before {
    content: '\f1b6'
}

.brand-steam-square:before {
    content: '\f1b7'
}

.brand-spotify:before {
    content: '\f1bc'
}

.brand-soundcloud:before {
    content: '\f1be'
}

.brand-vine:before {
    content: '\f1ca'
}

.brand-codeopen:before {
    content: '\f1cb'
}

.brand-wechat:before {
    content: '\f1d7'
}

.brand-slideshare:before {
    content: '\f1e7'
}

.brand-twitch:before {
    content: '\f1e8'
}

.brand-yelp:before {
    content: '\f1e9'
}

.brand-paypal:before {
    content: '\f1ed'
}

.brand-cc-visa:before {
    content: '\f1f0'
}

.brand-cc-mastercard:before {
    content: '\f1f1'
}

.brand-cc-discover:before {
    content: '\f1f2'
}

.brand-cc-amex:before {
    content: '\f1f3'
}

.brand-cc-paypal:before {
    content: '\f1f4'
}

.brand-cc-stripe:before {
    content: '\f1f5'
}

.brand-lastfm:before {
    content: '\f202'
}

.brand-lastfm-square:before {
    content: '\f203'
}

.brand-skyatlas:before {
    content: '\f216'
}

.brand-facebook-alt:before {
    content: '\f230'
}

.brand-pinterest:before {
    content: '\f231'
}

.brand-whatsapp:before {
    content: '\f232'
}

.brand-cc-jcb:before {
    content: '\f24b'
}

.brand-gg:before {
    content: '\f260'
}

.brand-gg-circle:before {
    content: '\f261'
}

.brand-tripadvisor:before {
    content: '\f262'
}

.brand-safari:before {
    content: '\f267'
}

.brand-chrome:before {
    content: '\f268'
}

.brand-firefox:before {
    content: '\f269'
}

.brand-opera:before {
    content: '\f26a'
}

.brand-ie:before {
    content: '\f26b'
}

.brand-contao:before {
    content: '\f26d'
}

.brand-amazon:before {
    content: '\f270'
}

.brand-houzz:before {
    content: '\f27c'
}

.brand-vimeo:before {
    content: '\f27d'
}

.brand-reddit-alien:before {
    content: '\f281'
}

.brand-edge:before {
    content: '\f282'
}

.brand-envira:before {
    content: '\f299'
}

.brand-audio-description:before {
    content: '\f29e'
}

.brand-snapchat-circle:before {
    content: '\f2ab'
}

.brand-snapchat:before {
    content: '\f2ac'
}

.brand-snapchat-square:before {
    content: '\f2ad'
}

.brand-google-plus-circle:before {
    content: '\f2b3'
}

.brand-quora:before {
    content: '\f2c4'
}

.brand-superpowers:before {
    content: '\f2dd'
}

.brand-github-square:before {
    content: '\f300'
}

.brand-twitter-square:before {
    content: '\f304'
}

.brand-facebook-square:before {
    content: '\f308'
}

.brand-linkedin-square:before {
    content: '\f30c'
}

.material-icons,.material-icons-outlined,.material-icons-round,.material-icons-sharp,.material-icons-two-tone {
    width: 1em;
    height: 1em;
    overflow: hidden
}

:root:not(.dom-ready) *,:root:not(.dom-ready) ::after,:root:not(.dom-ready) ::before {
    transition: none!important
}

:root:not(.dom-ready) .material-icons,:root:not(.dom-ready) .material-icons-outlined,:root:not(.dom-ready) .material-icons-round,:root:not(.dom-ready) .material-icons-sharp,:root:not(.dom-ready) .material-icons-two-tone {
    width: auto;
    height: auto;
    overflow: auto
}

:root {
    --font-family-primary: "Stolzl","Space Grotesk",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    --font-family-secondary: "Syne","Space Grotesk",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    --font-family-mono: "SF Mono",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    --font-family-display: "Stolzl Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    --font-family-serif: "Playfair Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    --font-weight-light: 300;
    --font-weight-normal: 400;
    --font-weight-semibold: 500;
    --font-weight-bold: 700;
    --heading-font-weight: 700;
    --heading-font-typeface: var(--font-family-secondary);
    --heading-font-style: normal;
    --heading-font-spacing: normal;
    --heading-font-transform: initial;
    --heading-color-text: var(--color-gray-100);
    --root-size: 18;
    --radius: 8px;
    --border-color: rgba(131, 131, 131, 0.25);
    --gradient-first: #2000ed;
    --gradient-second: #e348ff;
    --gradient-angle: 25deg;
    --color-primary-10: #f1e9fe;
    --color-primary-20: #d2b6fc;
    --color-primary-30: #b384fa;
    --color-primary-40: #9351f7;
    --color-primary: #741ff5;
    --color-primary-60: #5f19c9;
    --color-primary-70: #4a149d;
    --color-primary-80: #350e71;
    --color-primary-90: #200945;
    --color-primary-100: #0c0319;
    --color-secondary-10: #fcedff;
    --color-secondary-20: #f6c4ff;
    --color-secondary-30: #f09aff;
    --color-secondary-40: #e971ff;
    --color-secondary: #e348ff;
    --color-secondary-60: #ba3bd1;
    --color-secondary-70: #912ea3;
    --color-secondary-80: #682175;
    --color-secondary-90: #401447;
    --color-secondary-100: #17071a;
    --color-tertiary-10: #f2f6fc;
    --color-tertiary-20: #d4e2f7;
    --color-tertiary-30: #b7cef1;
    --color-tertiary-40: #99b9eb;
    --color-tertiary: #7ca5e5;
    --color-tertiary-60: #6687bc;
    --color-tertiary-70: #4f6a93;
    --color-tertiary-80: #394c69;
    --color-tertiary-90: #232e40;
    --color-tertiary-100: #0c1117;
    --color-quaternary-10: #edf7ee;
    --color-quaternary-20: #c5e5c6;
    --color-quaternary-30: #9dd39f;
    --color-quaternary-40: #74c177;
    --color-quaternary: #4caf50;
    --color-quaternary-60: #3e9042;
    --color-quaternary-70: #317033;
    --color-quaternary-80: #235125;
    --color-quaternary-90: #153116;
    --color-quaternary-100: #081208;
    --color-info-10: #e6f6fb;
    --color-info-20: #ade2f2;
    --color-info-30: #74cee8;
    --color-info-40: #3cb9df;
    --color-info: #03a5d6;
    --color-info-60: #0287af;
    --color-info-70: #026a89;
    --color-info-80: #014c62;
    --color-info-90: #012e3c;
    --color-info-100: #001115;
    --color-success-10: #edf7ee;
    --color-success-20: #c5e5c6;
    --color-success-30: #9dd39f;
    --color-success-40: #74c177;
    --color-success: #4caf50;
    --color-success-60: #3e9042;
    --color-success-70: #317033;
    --color-success-80: #235125;
    --color-success-90: #153116;
    --color-success-100: #081208;
    --color-warning-10: #fff7e6;
    --color-warning-20: #ffe6ae;
    --color-warning-30: #ffd577;
    --color-warning-40: #ffc43f;
    --color-warning: #ffb307;
    --color-warning-60: #d19306;
    --color-warning-70: #a37304;
    --color-warning-80: #755203;
    --color-warning-90: #473202;
    --color-warning-100: #1a1201;
    --color-danger-10: #fceded;
    --color-danger-20: #f6c5c5;
    --color-danger-30: #f09c9c;
    --color-danger-40: #ea7474;
    --color-danger: #e44b4b;
    --color-danger-60: #bb3e3e;
    --color-danger-70: #923030;
    --color-danger-80: #692323;
    --color-danger-90: #401515;
    --color-danger-100: #170808;
    --color-gray-10: #f9f9fb;
    --color-gray-20: #eaebf3;
    --color-gray-30: #dcddea;
    --color-gray-40: #cdd0e2;
    --color-gray-50: #bfc2d9;
    --color-gray-60: #9d9fb2;
    --color-gray-70: #7a7c8b;
    --color-gray-80: #585964;
    --color-gray-90: #35363d;
    --color-gray-100: #131316;
    --color-default-10: white;
    --color-default-20: white;
    --color-default-30: white;
    --color-default-40: white;
    --color-default: white;
    --color-default-60: #d1d1d1;
    --color-default-70: #a3a3a3;
    --color-default-80: #757575;
    --color-default-90: #474747;
    --color-default-100: #1a1a1a;
    --color-darkgrey-10: #e9e8ea;
    --color-darkgrey-20: #b6b3ba;
    --color-darkgrey-30: #847e8a;
    --color-darkgrey-40: #514a5b;
    --color-darkgrey: #1f152b;
    --color-darkgrey-60: #191123;
    --color-darkgrey-70: #140d1c;
    --color-darkgrey-80: #0e0a14;
    --color-darkgrey-90: #09060c;
    --color-darkgrey-100: #030204;
    --color-light-10: #fefefe;
    --color-light-20: #fbfbfb;
    --color-light-30: #f9f9f9;
    --color-light-40: #f6f6f6;
    --color-light-50: #f4f4f4;
    --color-light-60: #c8c8c8;
    --color-light-70: #9c9c9c;
    --color-light-80: #707070;
    --color-light-90: #444444;
    --color-light-100: #181818;
    --color-muted-10: #eeeeee;
    --color-muted-20: #c7c7c7;
    --color-muted-30: #a0a0a0;
    --color-muted-40: #7a7a7a;
    --color-muted: #535353;
    --color-muted-60: #444444;
    --color-muted-70: #353535;
    --color-muted-80: #262626;
    --color-muted-90: #171717;
    --color-muted-100: #080808;
    --sizes-text-size: 1rem;
    --sizes-text-lh: 1.5;
    --sizes-text-lp: normal;
    --sizes-text-xsmall-size: 0.75rem;
    --sizes-text-xsmall-lh: 1.5;
    --sizes-text-xsmall-lp: normal;
    --sizes-text-small-size: 0.875rem;
    --sizes-text-small-lh: 1.5;
    --sizes-text-small-lp: normal;
    --sizes-text-medium-size: 1rem;
    --sizes-text-medium-lh: 1.5;
    --sizes-text-medium-lp: normal;
    --sizes-text-large-size: 1.125rem;
    --sizes-text-large-lh: 1.5;
    --sizes-text-large-lp: normal;
    --sizes-text-xlarge-size: 1.25rem;
    --sizes-text-xlarge-lh: 1.5;
    --sizes-text-xlarge-lp: normal;
    --sizes-text-2xlarge-size: 1.5rem;
    --sizes-text-2xlarge-lh: 1.5;
    --sizes-text-2xlarge-lp: normal;
    --sizes-text-3xlarge-size: 1.75rem;
    --sizes-text-3xlarge-lh: 1.5;
    --sizes-text-3xlarge-lp: normal;
    --sizes-text-2xsmall-size: 10px;
    --sizes-text-2xsmall-lh: 15px;
    --sizes-text-2xsmall-lp: normal;
    --sizes-heading-d1-size: 96px;
    --sizes-heading-d1-lh: 1;
    --sizes-heading-d1-lp: -0.2rem;
    --sizes-heading-d2-size: 80px;
    --sizes-heading-d2-lh: 1;
    --sizes-heading-d2-lp: -0.2rem;
    --sizes-heading-d3-size: 72px;
    --sizes-heading-d3-lh: 1;
    --sizes-heading-d3-lp: -0.2rem;
    --sizes-heading-h1-size: 64px;
    --sizes-heading-h1-lh: 1;
    --sizes-heading-h1-lp: -0.175rem;
    --sizes-heading-h2-size: 48px;
    --sizes-heading-h2-lh: 1.175;
    --sizes-heading-h2-lp: -0.125rem;
    --sizes-heading-h3-size: 32px;
    --sizes-heading-h3-lh: 1.15;
    --sizes-heading-h3-lp: -0.075rem;
    --sizes-heading-h4-size: 28px;
    --sizes-heading-h4-lh: 1.125;
    --sizes-heading-h4-lp: -0.05rem;
    --sizes-heading-h5-size: 22px;
    --sizes-heading-h5-lh: 1;
    --sizes-heading-h5-lp: -0.025rem;
    --sizes-heading-h6-size: 18px;
    --sizes-heading-h6-lh: 1.5;
    --sizes-heading-h6-lp: 0;
    --sizes-heading-hero-size: 95px;
    --sizes-heading-hero-lh: 100px;
    --sizes-heading-hero-lp: -1.2px;
    --sizes-container: 1200px;
    --sizes-container-xsmall: 784px;
    --sizes-container-small: 992px;
    --sizes-container-large: 1376px;
    --sizes-container-xlarge: 1600px;
    --sizes-section: 32px;
    --sizes-section-2xsmall: 8px;
    --sizes-section-xsmall: 16px;
    --sizes-section-small: 24px;
    --sizes-section-medium: 48px;
    --sizes-section-large: 64px;
    --sizes-section-xlarge: 80px;
    --sizes-section-2xlarge: 128px;
    --sizes-section-collapse: 0px;
    --sizes-width-2xsmall: 80px;
    --sizes-width-xsmall: 160px;
    --sizes-width-small: 264px;
    --sizes-width-medium: 368px;
    --sizes-width-large: 472px;
    --sizes-width-xlarge: 576px;
    --sizes-width-2xlarge: 680px;
    --sizes-width-3xlarge: 992px;
    --sizes-height-2xsmall: 100px;
    --sizes-height-xsmall: 150px;
    --sizes-height-small: 200px;
    --sizes-height-medium: 250px;
    --sizes-height-large: 300px;
    --sizes-height-xlarge: 350px;
    --sizes-height-2xlarge: 400px;
    --sizes-height-3xlarge: 450px;
    --sizes-height-4xlarge: 500px;
    --sizes-grid: 32px;
    --sizes-grid-collapse: 0;
    --sizes-grid-gallery: 5px;
    --sizes-grid-2xsmall: 8px;
    --sizes-grid-xsmall: 16px;
    --sizes-grid-small: 24px;
    --sizes-grid-medium: 48px;
    --sizes-grid-large: 56px;
    --sizes-grid-xlarge: 64px;
    --sizes-grid-2xlarge: 80px;
    --sizes-grid-3xlarge: 128px;
    --sizes-spacing: 24px;
    --sizes-spacing-3xsmall: 2px;
    --sizes-spacing-2xsmall: 4px;
    --sizes-spacing-xsmall: 8px;
    --sizes-spacing-small: 16px;
    --sizes-spacing-medium: 32px;
    --sizes-spacing-large: 48px;
    --sizes-spacing-xlarge: 64px;
    --sizes-spacing-2xlarge: 80px;
    --sizes-spacing-3xlarge: 128px;
    --sizes-spacing-remove: 0px;
    --sizes-subnav: 16px;
    --sizes-subnav-2xsmall: 2px;
    --sizes-subnav-xsmall: 4px;
    --sizes-subnav-small: 8px;
    --sizes-subnav-medium: 24px;
    --sizes-subnav-large: 32px;
    --sizes-subnav-xlarge: 48px;
    --sizes-subnav-2xlarge: 64px;
    --sizes-subnav-collapse: 0px;
    --sizes-button-height: 48px;
    --sizes-button-padding: 24px;
    --sizes-button-text: 1rem;
    --sizes-button-2xsmall-height: 28px;
    --sizes-button-2xsmall-padding: 10px;
    --sizes-button-2xsmall-text: 0.75rem;
    --sizes-button-xsmall-height: 36px;
    --sizes-button-xsmall-padding: 16px;
    --sizes-button-xsmall-text: 0.875rem;
    --sizes-button-small-height: 40px;
    --sizes-button-small-padding: 20px;
    --sizes-button-small-text: 0.875rem;
    --sizes-button-medium-height: 48px;
    --sizes-button-medium-padding: 24px;
    --sizes-button-medium-text: 1rem;
    --sizes-button-large-height: 64px;
    --sizes-button-large-padding: 24px;
    --sizes-button-large-text: 1.125rem;
    --sizes-form-height: 40px;
    --sizes-form-padding: 0 16px;
    --sizes-form-text: 1;
    --sizes-form-2xsmall-height: 30px;
    --sizes-form-2xsmall-padding: 0 12px;
    --sizes-form-2xsmall-text: 0.875rem;
    --sizes-form-xsmall-height: 36px;
    --sizes-form-xsmall-padding: 0 14px;
    --sizes-form-xsmall-text: 0.875rem;
    --sizes-form-small-height: 40px;
    --sizes-form-small-padding: 0 16px;
    --sizes-form-small-text: 0.95rem;
    --sizes-form-medium-height: 48px;
    --sizes-form-medium-padding: 0 20px;
    --sizes-form-medium-text: 1rem;
    --sizes-form-large-height: 56px;
    --sizes-form-large-padding: 0 24px;
    --sizes-form-large-text: 1rem;
    --sizes-radius: var(--radius);
    --sizes-radius-xsmall: 4px;
    --sizes-radius-small: 8px;
    --sizes-radius-medium: 16px;
    --sizes-radius-large: 24px;
    --sizes-radius-xlarge: 32px;
    --sizes-radius-2xlarge: 48px;
    --sizes-radius-circle: 50%;
    --sizes-radius-remove: 0;
    --sizes-card: 32px;
    --sizes-card-collapse: 0;
    --sizes-card-2xsmall: 8px;
    --sizes-card-xsmall: 16px;
    --sizes-card-small: 24px;
    --sizes-card-medium: 32px;
    --sizes-card-large: 48px;
    --sizes-card-xlarge: 56px;
    --sizes-card-2xlarge: 64px;
    --sizes-card-3xlarge: 80px;
    --sizes-icon: 24px;
    --sizes-icon-3xsmall: 14px;
    --sizes-icon-2xsmall: 16px;
    --sizes-icon-xsmall: 20px;
    --sizes-icon-small: 24px;
    --sizes-icon-medium: 32px;
    --sizes-icon-large: 48px;
    --sizes-icon-xlarge: 54px;
    --sizes-icon-2xlarge: 64px;
    --sizes-offset: -32px;
    --sizes-offset-collapse: 0;
    --sizes-offset-2xsmall: -8px;
    --sizes-offset-xsmall: -16px;
    --sizes-offset-small: -24px;
    --sizes-offset-medium: -48px;
    --sizes-offset-large: -56px;
    --sizes-offset-xlarge: -64px;
    --sizes-offset-2xlarge: -80px;
    --sizes-offset-3xlarge: -104px;
    --sizes-offset-remove: 0;
    --sizes-position-2xsmall: 4px;
    --sizes-position-xsmall: 8px;
    --sizes-position-small: 16px;
    --sizes-position-medium: 24px;
    --sizes-position-large: 32px;
    --sizes-position-xlarge: 48px;
    --sizes-position-2xlarge: 56px;
    --link-color-text: var(--color-gray-100);
    --link-color-text-hover: var(--color-primary);
    --button-font-typeface: var(--font-family-primary);
    --button-font-size: 0.875rem;
    --button-font-weight: 700;
    --button-font-spacing: normal;
    --button-font-transform: initial;
    --button-border-width: 2px;
    --button-border-radius: 56px;
    --button-border-color: inherit;
    --button-height: var(--sizes-button-medium-height);
    --button-display: inline-flex;
    --button-align-text: center;
    --button-margin: 0;
    --button-padding: 0 var(--sizes-button-medium-padding);
    --form-font-size: var(--sizes-form-text);
    --form-font-weight: 400;
    --form-font-spacing: normal;
    --form-font-transform: initial;
    --form-font-typeface: var(--font-family-primary);
    --form-border-radius: 56px;
    --form-border-width: 0;
    --form-border-color: var(--border-color);
    --form-color-text: var(--color-gray-100);
    --form-color-background: rgba(155, 155, 155, 0.15);
    --form-color-background-hover: rgba(155, 155, 155, 0.2);
    --form-color-background-disable: rgba(155, 155, 155, 0.4);
    --form-color-background-primary: var(--color-primary);
    --form-color-background-primary-hover: var(--color-primary-60);
    --form-color-placeholder: rgba(155, 155, 155, 0.7);
    --form-shadow-default: 0 0 0 1px var(--border-color);
    --form-shadow-hover: 0 0 0 1px var(--border-color);
    --form-shadow-focus: 0 0 0 2px var(--color-primary);
    --form-height: var(--sizes-form-medium-height);
    --form-dark-color-text: var(--color-white);
    --form-dark-color-background: rgba(155, 155, 155, 0.15);
    --form-dark-color-background-hover: rgba(155, 155, 155, 0.2);
    --form-dark-color-background-disable: rgba(155, 155, 155, 0.4);
    --form-dark-color-background-primary: var(--color-primary);
    --form-dark-color-background-primary-hover: var(--color-primary-60);
    --form-dark-color-placeholder: rgba(155, 155, 155, 0.5);
    --tab-font-size: inherit;
    --tab-font-weight: 700;
    --tab-font-spacing: normal;
    --tab-font-transform: initial;
    --tab-color-text: var(--color-gray-70);
    --tab-color-text-hover: var(--color-gray-80);
    --tab-color-text-active: var(--color-gray-100);
    --tab-border-width: 4px;
    --tab-border-color: var(--color-primary);
    --tab-border-radius: var(--radius);
    --tab-display: inline-flex;
    --tab-align-text: center;
    --tab-margin: 0;
    --tab-padding: 5px;
    --accordion-color-text-active: initial;
    --accordion-color-text: var(--color-gray-100);
    --accordion-font-size: var(--sizes-form-large-text);
    --accordion-font-weight: 700;
    --accordion-font-spacing: normal;
    --accordion-font-transform: initial;
    --accordion-border-width: 1px;
    --accordion-border-color: var(--border-color);
    --accordion-margin: 20px;
    --accordion-padding: 20px;
    --header-logo-font-typeface: var(--font-family-secondary);
    --header-logo-font-weight: 700;
    --header-logo-font-spacing: -0.06rem;
    --header-logo-font-size: var(--sizes-text-2xlarge-size);
    --header-logo-font-transform: initial;
    --header-logo-width: 120px;
    --header-logo-sticky-width: 90px;
    --header-logo-image-width: initial;
    --header-logo-image-height: initial;
    --header-logo-color-text: var(--color-gray-100);
    --header-topbar-font-size: 0.8rem;
    --header-topbar-font-typeface: var(--header-navbar-font-typeface);
    --header-topbar-font-weight: 400;
    --header-topbar-font-style: normal;
    --header-topbar-font-spacing: 0.02rem;
    --header-topbar-font-transform: initial;
    --header-topbar-height: 36px;
    --header-topbar-color-text: var(--color-gray-100);
    --header-topbar-color-text-hover: var(--color-primary);
    --header-topbar-vertical-spacing: 5px;
    --header-topbar-row-spacing: 30px;
    --header-navbar-font-size: 1.125rem;
    --header-navbar-font-weight: 700;
    --header-navbar-font-spacing: 0;
    --header-navbar-font-typeface: var(--font-family-primary);
    --header-navbar-font-style: normal;
    --header-navbar-font-transform: initial;
    --header-navbar-height: 100px;
    --header-navbar-vertical-spacing: 4px;
    --header-navbar-row-spacing: 12px;
    --header-navbar-sticky-height: 80px;
    --header-navbar-sticky-color-text: inherit;
    --header-navbar-sticky-color-background: white;
    --header-navbar-sticky-shadow: 0 1px 20px -10px rgba(0, 0, 0, 0.15);
    --header-navbar-mobile-height: 80px;
    --header-navbar-color-text: var(--color-gray-100);
    --header-navbar-color-text-hover: var(--color-primary);
    --header-nav-row-spacing: 32px;
    --header-nav-font-typeface: inherit;
    --header-nav-font-size: inherit;
    --header-nav-font-weight: inherit;
    --header-nav-font-style: inherit;
    --header-nav-font-spacing: inherit;
    --header-nav-font-transform: inherit;
    --header-nav-color-text: inherit;
    --header-nav-color-text-hover: var(--header-navbar-color-text-hover);
    --header-bottombar-font-typeface: var(--header-navbar-font-typeface);
    --header-bottombar-font-size: var(--sizes-text-small-size);
    --header-bottombar-font-weight: 400;
    --header-bottombar-font-style: normal;
    --header-bottombar-font-spacing: 0.02rem;
    --header-bottombar-font-transform: initial;
    --header-bottombar-color-text: var(--color-gray-100);
    --header-bottombar-color-text-hover: var(--color-primary);
    --header-bottombar-height: 50px;
    --header-bottombar-vertical-spacing: 10px;
    --header-bottombar-row-spacing: 30px;
    --header-search-color-text: inherit;
    --header-search-color-text-hover: var(--color-primary);
    --header-cart-color-text: inherit;
    --header-cart-color-text-hover: var(--color-primary);
    --body-color-text: var(--color-gray-100);
    --body-color-background: transparent;
    --body-font-size: var(--sizes-text-medium-size);
    --body-font-typeface: var(--font-family-primary);
    --body-font-weight: 400;
    --body-font-spacing: normal;
    --breakpoints-xs: 480px;
    --breakpoints-s: 640px;
    --breakpoints-m: 960px;
    --breakpoints-l: 1200px;
    --breakpoints-xl: 1600px;
    --colors-accent-primary: var(--color-primary);
    --colors-accent-secondary: var(--color-secondary);
    --colors-accent-success: var(--color-success);
    --colors-accent-warning: var(--color-warning);
    --colors-accent-danger: var(--color-danger);
    --colors-accent-muted: var(--color-gray-40);
    --colors-button-primary: var(--color-primary);
    --colors-button-secondary: var(--color-secondary);
    --colors-button-success: var(--color-success);
    --colors-button-warning: var(--color-warning);
    --colors-button-danger: var(--color-danger);
    --colors-button-muted: var(--color-muted);
    --colors-button-primary-hover: var(--color-primary-60);
    --colors-button-secondary-hover: var(--color-secondary-60);
    --colors-button-success-hover: var(--color-success-60);
    --colors-button-warning-hover: var(--color-warning-60);
    --colors-button-danger-hover: var(--color-danger-60);
    --colors-button-muted-hover: var(--color-muted-60);
    --colors-form-primary: var(--color-primary);
    --colors-form-secondary: var(--color-secondary);
    --colors-form-success: var(--color-success);
    --colors-form-warning: var(--color-warning);
    --colors-form-danger: var(--color-danger);
    --colors-form-muted: var(--color-muted);
    --colors-card-primary: var(--color-primary);
    --colors-card-secondary: var(--color-secondary);
    --colors-card-success: var(--color-success);
    --colors-card-warning: var(--color-warning);
    --colors-card-danger: var(--color-danger);
    --colors-card-muted: var(--color-muted);
    --colors-background-primary: var(--color-primary);
    --colors-background-secondary: var(--color-secondary);
    --colors-background-success: var(--color-success);
    --colors-background-warning: var(--color-warning);
    --colors-background-danger: var(--color-danger);
    --colors-background-muted: var(--color-muted);
    --colors-text-primary: var(--color-primary);
    --colors-text-secondary: var(--color-secondary);
    --colors-text-success: var(--color-success);
    --colors-text-warning: var(--color-warning);
    --colors-text-danger: var(--color-danger);
    --colors-text-muted: var(--color-muted);
    --colors-label-primary: var(--color-primary);
    --colors-label-secondary: var(--color-secondary);
    --colors-label-success: var(--color-success);
    --colors-label-warning: var(--color-warning);
    --colors-label-danger: var(--color-danger);
    --colors-label-muted: var(--color-muted);
    --colors-alert-primary: var(--color-primary);
    --colors-alert-secondary: var(--color-secondary);
    --colors-alert-success: var(--color-success);
    --colors-alert-warning: var(--color-warning);
    --colors-alert-danger: var(--color-danger);
    --colors-alert-muted: var(--color-muted);
    --alert-font-size: var(--sizes-form-medium-text);
    --alert-font-weight: 400;
    --alert-font-style: normal;
    --alert-font-spacing: normal;
    --alert-font-transform: initial;
    --alert-color-background: var(--color-gray-10);
    --alert-color-text: var(--color-gray-100);
    --alert-border-width: 0;
    --alert-border-radius: var(--radius);
    --alert-padding: 15px;
    --subnav-font-size: inherit;
    --subnav-font-weight: inherit;
    --subnav-font-transform: unset
}

[class*=uk-width] {
    --grid-count: 12;
    --grid-total: 12
}

.uk-width-1-6 {
    --grid-count: 1;
    --grid-total: 6;
    width: 16.6666666667%
}

.uk-width-2-6 {
    --grid-count: 2;
    --grid-total: 6;
    width: 33.3333333333%
}

.uk-width-3-6 {
    --grid-count: 3;
    --grid-total: 6;
    width: 50%
}

.uk-width-4-6 {
    --grid-count: 4;
    --grid-total: 6;
    width: 66.6666666667%
}

.uk-width-5-6 {
    --grid-count: 5;
    --grid-total: 6;
    width: 83.3333333333%
}

.uk-width-1-7 {
    --grid-count: 1;
    --grid-total: 7;
    width: 14.2857142857%
}

.uk-width-2-7 {
    --grid-count: 2;
    --grid-total: 7;
    width: 28.5714285714%
}

.uk-width-3-7 {
    --grid-count: 3;
    --grid-total: 7;
    width: 42.8571428571%
}

.uk-width-4-7 {
    --grid-count: 4;
    --grid-total: 7;
    width: 57.1428571429%
}

.uk-width-5-7 {
    --grid-count: 5;
    --grid-total: 7;
    width: 71.4285714286%
}

.uk-width-6-7 {
    --grid-count: 6;
    --grid-total: 7;
    width: 85.7142857143%
}

.uk-width-1-8 {
    --grid-count: 1;
    --grid-total: 8;
    width: 12.5%
}

.uk-width-2-8 {
    --grid-count: 2;
    --grid-total: 8;
    width: 25%
}

.uk-width-3-8 {
    --grid-count: 3;
    --grid-total: 8;
    width: 37.5%
}

.uk-width-4-8 {
    --grid-count: 4;
    --grid-total: 8;
    width: 50%
}

.uk-width-5-8 {
    --grid-count: 5;
    --grid-total: 8;
    width: 62.5%
}

.uk-width-6-8 {
    --grid-count: 6;
    --grid-total: 8;
    width: 75%
}

.uk-width-7-8 {
    --grid-count: 7;
    --grid-total: 8;
    width: 87.5%
}

.uk-width-1-10 {
    --grid-count: 1;
    --grid-total: 10;
    width: 10%
}

.uk-width-2-10 {
    --grid-count: 2;
    --grid-total: 10;
    width: 20%
}

.uk-width-3-10 {
    --grid-count: 3;
    --grid-total: 10;
    width: 30%
}

.uk-width-4-10 {
    --grid-count: 4;
    --grid-total: 10;
    width: 40%
}

.uk-width-5-10 {
    --grid-count: 5;
    --grid-total: 10;
    width: 50%
}

.uk-width-6-10 {
    --grid-count: 6;
    --grid-total: 10;
    width: 60%
}

.uk-width-7-10 {
    --grid-count: 7;
    --grid-total: 10;
    width: 70%
}

.uk-width-8-10 {
    --grid-count: 8;
    --grid-total: 10;
    width: 80%
}

.uk-width-9-10 {
    --grid-count: 9;
    --grid-total: 10;
    width: 90%
}

.uk-width-1-12 {
    --grid-count: 1;
    --grid-total: 12;
    width: 8.3333333333%
}

.uk-width-2-12 {
    --grid-count: 2;
    --grid-total: 12;
    width: 16.6666666667%
}

.uk-width-3-12 {
    --grid-count: 3;
    --grid-total: 12;
    width: 25%
}

.uk-width-4-12 {
    --grid-count: 4;
    --grid-total: 12;
    width: 33.3333333333%
}

.uk-width-5-12 {
    --grid-count: 5;
    --grid-total: 12;
    width: 41.6666666667%
}

.uk-width-6-12 {
    --grid-count: 6;
    --grid-total: 12;
    width: 50%
}

.uk-width-7-12 {
    --grid-count: 7;
    --grid-total: 12;
    width: 58.3333333333%
}

.uk-width-8-12 {
    --grid-count: 8;
    --grid-total: 12;
    width: 66.6666666667%
}

.uk-width-9-12 {
    --grid-count: 9;
    --grid-total: 12;
    width: 75%
}

.uk-width-10-12 {
    --grid-count: 10;
    --grid-total: 12;
    width: 83.3333333333%
}

.uk-width-11-12 {
    --grid-count: 11;
    --grid-total: 12;
    width: 91.6666666667%
}

html.bp-xs .uk-width-1-6\@xs {
    --grid-count: 1;
    --grid-total: 6;
    width: 16.6666666667%
}

html.bp-xs .uk-width-2-6\@xs {
    --grid-count: 2;
    --grid-total: 6;
    width: 33.3333333333%
}

html.bp-xs .uk-width-3-6\@xs {
    --grid-count: 3;
    --grid-total: 6;
    width: 50%
}

html.bp-xs .uk-width-4-6\@xs {
    --grid-count: 4;
    --grid-total: 6;
    width: 66.6666666667%
}

html.bp-xs .uk-width-5-6\@xs {
    --grid-count: 5;
    --grid-total: 6;
    width: 83.3333333333%
}

html.bp-xs .uk-width-1-7\@xs {
    --grid-count: 1;
    --grid-total: 7;
    width: 14.2857142857%
}

html.bp-xs .uk-width-2-7\@xs {
    --grid-count: 2;
    --grid-total: 7;
    width: 28.5714285714%
}

html.bp-xs .uk-width-3-7\@xs {
    --grid-count: 3;
    --grid-total: 7;
    width: 42.8571428571%
}

html.bp-xs .uk-width-4-7\@xs {
    --grid-count: 4;
    --grid-total: 7;
    width: 57.1428571429%
}

html.bp-xs .uk-width-5-7\@xs {
    --grid-count: 5;
    --grid-total: 7;
    width: 71.4285714286%
}

html.bp-xs .uk-width-6-7\@xs {
    --grid-count: 6;
    --grid-total: 7;
    width: 85.7142857143%
}

html.bp-xs .uk-width-1-8\@xs {
    --grid-count: 1;
    --grid-total: 8;
    width: 12.5%
}

html.bp-xs .uk-width-2-8\@xs {
    --grid-count: 2;
    --grid-total: 8;
    width: 25%
}

html.bp-xs .uk-width-3-8\@xs {
    --grid-count: 3;
    --grid-total: 8;
    width: 37.5%
}

html.bp-xs .uk-width-4-8\@xs {
    --grid-count: 4;
    --grid-total: 8;
    width: 50%
}

html.bp-xs .uk-width-5-8\@xs {
    --grid-count: 5;
    --grid-total: 8;
    width: 62.5%
}

html.bp-xs .uk-width-6-8\@xs {
    --grid-count: 6;
    --grid-total: 8;
    width: 75%
}

html.bp-xs .uk-width-7-8\@xs {
    --grid-count: 7;
    --grid-total: 8;
    width: 87.5%
}

html.bp-xs .uk-width-1-10\@xs {
    --grid-count: 1;
    --grid-total: 10;
    width: 10%
}

html.bp-xs .uk-width-2-10\@xs {
    --grid-count: 2;
    --grid-total: 10;
    width: 20%
}

html.bp-xs .uk-width-3-10\@xs {
    --grid-count: 3;
    --grid-total: 10;
    width: 30%
}

html.bp-xs .uk-width-4-10\@xs {
    --grid-count: 4;
    --grid-total: 10;
    width: 40%
}

html.bp-xs .uk-width-5-10\@xs {
    --grid-count: 5;
    --grid-total: 10;
    width: 50%
}

html.bp-xs .uk-width-6-10\@xs {
    --grid-count: 6;
    --grid-total: 10;
    width: 60%
}

html.bp-xs .uk-width-7-10\@xs {
    --grid-count: 7;
    --grid-total: 10;
    width: 70%
}

html.bp-xs .uk-width-8-10\@xs {
    --grid-count: 8;
    --grid-total: 10;
    width: 80%
}

html.bp-xs .uk-width-9-10\@xs {
    --grid-count: 9;
    --grid-total: 10;
    width: 90%
}

html.bp-xs .uk-width-1-12\@xs {
    --grid-count: 1;
    --grid-total: 12;
    width: 8.3333333333%
}

html.bp-xs .uk-width-2-12\@xs {
    --grid-count: 2;
    --grid-total: 12;
    width: 16.6666666667%
}

html.bp-xs .uk-width-3-12\@xs {
    --grid-count: 3;
    --grid-total: 12;
    width: 25%
}

html.bp-xs .uk-width-4-12\@xs {
    --grid-count: 4;
    --grid-total: 12;
    width: 33.3333333333%
}

html.bp-xs .uk-width-5-12\@xs {
    --grid-count: 5;
    --grid-total: 12;
    width: 41.6666666667%
}

html.bp-xs .uk-width-6-12\@xs {
    --grid-count: 6;
    --grid-total: 12;
    width: 50%
}

html.bp-xs .uk-width-7-12\@xs {
    --grid-count: 7;
    --grid-total: 12;
    width: 58.3333333333%
}

html.bp-xs .uk-width-8-12\@xs {
    --grid-count: 8;
    --grid-total: 12;
    width: 66.6666666667%
}

html.bp-xs .uk-width-9-12\@xs {
    --grid-count: 9;
    --grid-total: 12;
    width: 75%
}

html.bp-xs .uk-width-10-12\@xs {
    --grid-count: 10;
    --grid-total: 12;
    width: 83.3333333333%
}

html.bp-xs .uk-width-11-12\@xs {
    --grid-count: 11;
    --grid-total: 12;
    width: 91.6666666667%
}

html.bp-s .uk-width-1-6\@s {
    --grid-count: 1;
    --grid-total: 6;
    width: 16.6666666667%
}

html.bp-s .uk-width-2-6\@s {
    --grid-count: 2;
    --grid-total: 6;
    width: 33.3333333333%
}

html.bp-s .uk-width-3-6\@s {
    --grid-count: 3;
    --grid-total: 6;
    width: 50%
}

html.bp-s .uk-width-4-6\@s {
    --grid-count: 4;
    --grid-total: 6;
    width: 66.6666666667%
}

html.bp-s .uk-width-5-6\@s {
    --grid-count: 5;
    --grid-total: 6;
    width: 83.3333333333%
}

html.bp-s .uk-width-1-7\@s {
    --grid-count: 1;
    --grid-total: 7;
    width: 14.2857142857%
}

html.bp-s .uk-width-2-7\@s {
    --grid-count: 2;
    --grid-total: 7;
    width: 28.5714285714%
}

html.bp-s .uk-width-3-7\@s {
    --grid-count: 3;
    --grid-total: 7;
    width: 42.8571428571%
}

html.bp-s .uk-width-4-7\@s {
    --grid-count: 4;
    --grid-total: 7;
    width: 57.1428571429%
}

html.bp-s .uk-width-5-7\@s {
    --grid-count: 5;
    --grid-total: 7;
    width: 71.4285714286%
}

html.bp-s .uk-width-6-7\@s {
    --grid-count: 6;
    --grid-total: 7;
    width: 85.7142857143%
}

html.bp-s .uk-width-1-8\@s {
    --grid-count: 1;
    --grid-total: 8;
    width: 12.5%
}

html.bp-s .uk-width-2-8\@s {
    --grid-count: 2;
    --grid-total: 8;
    width: 25%
}

html.bp-s .uk-width-3-8\@s {
    --grid-count: 3;
    --grid-total: 8;
    width: 37.5%
}

html.bp-s .uk-width-4-8\@s {
    --grid-count: 4;
    --grid-total: 8;
    width: 50%
}

html.bp-s .uk-width-5-8\@s {
    --grid-count: 5;
    --grid-total: 8;
    width: 62.5%
}

html.bp-s .uk-width-6-8\@s {
    --grid-count: 6;
    --grid-total: 8;
    width: 75%
}

html.bp-s .uk-width-7-8\@s {
    --grid-count: 7;
    --grid-total: 8;
    width: 87.5%
}

html.bp-s .uk-width-1-10\@s {
    --grid-count: 1;
    --grid-total: 10;
    width: 10%
}

html.bp-s .uk-width-2-10\@s {
    --grid-count: 2;
    --grid-total: 10;
    width: 20%
}

html.bp-s .uk-width-3-10\@s {
    --grid-count: 3;
    --grid-total: 10;
    width: 30%
}

html.bp-s .uk-width-4-10\@s {
    --grid-count: 4;
    --grid-total: 10;
    width: 40%
}

html.bp-s .uk-width-5-10\@s {
    --grid-count: 5;
    --grid-total: 10;
    width: 50%
}

html.bp-s .uk-width-6-10\@s {
    --grid-count: 6;
    --grid-total: 10;
    width: 60%
}

html.bp-s .uk-width-7-10\@s {
    --grid-count: 7;
    --grid-total: 10;
    width: 70%
}

html.bp-s .uk-width-8-10\@s {
    --grid-count: 8;
    --grid-total: 10;
    width: 80%
}

html.bp-s .uk-width-9-10\@s {
    --grid-count: 9;
    --grid-total: 10;
    width: 90%
}

html.bp-s .uk-width-1-12\@s {
    --grid-count: 1;
    --grid-total: 12;
    width: 8.3333333333%
}

html.bp-s .uk-width-2-12\@s {
    --grid-count: 2;
    --grid-total: 12;
    width: 16.6666666667%
}

html.bp-s .uk-width-3-12\@s {
    --grid-count: 3;
    --grid-total: 12;
    width: 25%
}

html.bp-s .uk-width-4-12\@s {
    --grid-count: 4;
    --grid-total: 12;
    width: 33.3333333333%
}

html.bp-s .uk-width-5-12\@s {
    --grid-count: 5;
    --grid-total: 12;
    width: 41.6666666667%
}

html.bp-s .uk-width-6-12\@s {
    --grid-count: 6;
    --grid-total: 12;
    width: 50%
}

html.bp-s .uk-width-7-12\@s {
    --grid-count: 7;
    --grid-total: 12;
    width: 58.3333333333%
}

html.bp-s .uk-width-8-12\@s {
    --grid-count: 8;
    --grid-total: 12;
    width: 66.6666666667%
}

html.bp-s .uk-width-9-12\@s {
    --grid-count: 9;
    --grid-total: 12;
    width: 75%
}

html.bp-s .uk-width-10-12\@s {
    --grid-count: 10;
    --grid-total: 12;
    width: 83.3333333333%
}

html.bp-s .uk-width-11-12\@s {
    --grid-count: 11;
    --grid-total: 12;
    width: 91.6666666667%
}

html.bp-m .uk-width-1-6\@m {
    --grid-count: 1;
    --grid-total: 6;
    width: 16.6666666667%
}

html.bp-m .uk-width-2-6\@m {
    --grid-count: 2;
    --grid-total: 6;
    width: 33.3333333333%
}

html.bp-m .uk-width-3-6\@m {
    --grid-count: 3;
    --grid-total: 6;
    width: 50%
}

html.bp-m .uk-width-4-6\@m {
    --grid-count: 4;
    --grid-total: 6;
    width: 66.6666666667%
}

html.bp-m .uk-width-5-6\@m {
    --grid-count: 5;
    --grid-total: 6;
    width: 83.3333333333%
}

html.bp-m .uk-width-1-7\@m {
    --grid-count: 1;
    --grid-total: 7;
    width: 14.2857142857%
}

html.bp-m .uk-width-2-7\@m {
    --grid-count: 2;
    --grid-total: 7;
    width: 28.5714285714%
}

html.bp-m .uk-width-3-7\@m {
    --grid-count: 3;
    --grid-total: 7;
    width: 42.8571428571%
}

html.bp-m .uk-width-4-7\@m {
    --grid-count: 4;
    --grid-total: 7;
    width: 57.1428571429%
}

html.bp-m .uk-width-5-7\@m {
    --grid-count: 5;
    --grid-total: 7;
    width: 71.4285714286%
}

html.bp-m .uk-width-6-7\@m {
    --grid-count: 6;
    --grid-total: 7;
    width: 85.7142857143%
}

html.bp-m .uk-width-1-8\@m {
    --grid-count: 1;
    --grid-total: 8;
    width: 12.5%
}

html.bp-m .uk-width-2-8\@m {
    --grid-count: 2;
    --grid-total: 8;
    width: 25%
}

html.bp-m .uk-width-3-8\@m {
    --grid-count: 3;
    --grid-total: 8;
    width: 37.5%
}

html.bp-m .uk-width-4-8\@m {
    --grid-count: 4;
    --grid-total: 8;
    width: 50%
}

html.bp-m .uk-width-5-8\@m {
    --grid-count: 5;
    --grid-total: 8;
    width: 62.5%
}

html.bp-m .uk-width-6-8\@m {
    --grid-count: 6;
    --grid-total: 8;
    width: 75%
}

html.bp-m .uk-width-7-8\@m {
    --grid-count: 7;
    --grid-total: 8;
    width: 87.5%
}

html.bp-m .uk-width-1-10\@m {
    --grid-count: 1;
    --grid-total: 10;
    width: 10%
}

html.bp-m .uk-width-2-10\@m {
    --grid-count: 2;
    --grid-total: 10;
    width: 20%
}

html.bp-m .uk-width-3-10\@m {
    --grid-count: 3;
    --grid-total: 10;
    width: 30%
}

html.bp-m .uk-width-4-10\@m {
    --grid-count: 4;
    --grid-total: 10;
    width: 40%
}

html.bp-m .uk-width-5-10\@m {
    --grid-count: 5;
    --grid-total: 10;
    width: 50%
}

html.bp-m .uk-width-6-10\@m {
    --grid-count: 6;
    --grid-total: 10;
    width: 60%
}

html.bp-m .uk-width-7-10\@m {
    --grid-count: 7;
    --grid-total: 10;
    width: 70%
}

html.bp-m .uk-width-8-10\@m {
    --grid-count: 8;
    --grid-total: 10;
    width: 80%
}

html.bp-m .uk-width-9-10\@m {
    --grid-count: 9;
    --grid-total: 10;
    width: 90%
}

html.bp-m .uk-width-1-12\@m {
    --grid-count: 1;
    --grid-total: 12;
    width: 8.3333333333%
}

html.bp-m .uk-width-2-12\@m {
    --grid-count: 2;
    --grid-total: 12;
    width: 16.6666666667%
}

html.bp-m .uk-width-3-12\@m {
    --grid-count: 3;
    --grid-total: 12;
    width: 25%
}

html.bp-m .uk-width-4-12\@m {
    --grid-count: 4;
    --grid-total: 12;
    width: 33.3333333333%
}

html.bp-m .uk-width-5-12\@m {
    --grid-count: 5;
    --grid-total: 12;
    width: 41.6666666667%
}

html.bp-m .uk-width-6-12\@m {
    --grid-count: 6;
    --grid-total: 12;
    width: 50%
}

html.bp-m .uk-width-7-12\@m {
    --grid-count: 7;
    --grid-total: 12;
    width: 58.3333333333%
}

html.bp-m .uk-width-8-12\@m {
    --grid-count: 8;
    --grid-total: 12;
    width: 66.6666666667%
}

html.bp-m .uk-width-9-12\@m {
    --grid-count: 9;
    --grid-total: 12;
    width: 75%
}

html.bp-m .uk-width-10-12\@m {
    --grid-count: 10;
    --grid-total: 12;
    width: 83.3333333333%
}

html.bp-m .uk-width-11-12\@m {
    --grid-count: 11;
    --grid-total: 12;
    width: 91.6666666667%
}

html.bp-l .uk-width-1-6\@l {
    --grid-count: 1;
    --grid-total: 6;
    width: 16.6666666667%
}

html.bp-l .uk-width-2-6\@l {
    --grid-count: 2;
    --grid-total: 6;
    width: 33.3333333333%
}

html.bp-l .uk-width-3-6\@l {
    --grid-count: 3;
    --grid-total: 6;
    width: 50%
}

html.bp-l .uk-width-4-6\@l {
    --grid-count: 4;
    --grid-total: 6;
    width: 66.6666666667%
}

html.bp-l .uk-width-5-6\@l {
    --grid-count: 5;
    --grid-total: 6;
    width: 83.3333333333%
}

html.bp-l .uk-width-1-7\@l {
    --grid-count: 1;
    --grid-total: 7;
    width: 14.2857142857%
}

html.bp-l .uk-width-2-7\@l {
    --grid-count: 2;
    --grid-total: 7;
    width: 28.5714285714%
}

html.bp-l .uk-width-3-7\@l {
    --grid-count: 3;
    --grid-total: 7;
    width: 42.8571428571%
}

html.bp-l .uk-width-4-7\@l {
    --grid-count: 4;
    --grid-total: 7;
    width: 57.1428571429%
}

html.bp-l .uk-width-5-7\@l {
    --grid-count: 5;
    --grid-total: 7;
    width: 71.4285714286%
}

html.bp-l .uk-width-6-7\@l {
    --grid-count: 6;
    --grid-total: 7;
    width: 85.7142857143%
}

html.bp-l .uk-width-1-8\@l {
    --grid-count: 1;
    --grid-total: 8;
    width: 12.5%
}

html.bp-l .uk-width-2-8\@l {
    --grid-count: 2;
    --grid-total: 8;
    width: 25%
}

html.bp-l .uk-width-3-8\@l {
    --grid-count: 3;
    --grid-total: 8;
    width: 37.5%
}

html.bp-l .uk-width-4-8\@l {
    --grid-count: 4;
    --grid-total: 8;
    width: 50%
}

html.bp-l .uk-width-5-8\@l {
    --grid-count: 5;
    --grid-total: 8;
    width: 62.5%
}

html.bp-l .uk-width-6-8\@l {
    --grid-count: 6;
    --grid-total: 8;
    width: 75%
}

html.bp-l .uk-width-7-8\@l {
    --grid-count: 7;
    --grid-total: 8;
    width: 87.5%
}

html.bp-l .uk-width-1-10\@l {
    --grid-count: 1;
    --grid-total: 10;
    width: 10%
}

html.bp-l .uk-width-2-10\@l {
    --grid-count: 2;
    --grid-total: 10;
    width: 20%
}

html.bp-l .uk-width-3-10\@l {
    --grid-count: 3;
    --grid-total: 10;
    width: 30%
}

html.bp-l .uk-width-4-10\@l {
    --grid-count: 4;
    --grid-total: 10;
    width: 40%
}

html.bp-l .uk-width-5-10\@l {
    --grid-count: 5;
    --grid-total: 10;
    width: 50%
}

html.bp-l .uk-width-6-10\@l {
    --grid-count: 6;
    --grid-total: 10;
    width: 60%
}

html.bp-l .uk-width-7-10\@l {
    --grid-count: 7;
    --grid-total: 10;
    width: 70%
}

html.bp-l .uk-width-8-10\@l {
    --grid-count: 8;
    --grid-total: 10;
    width: 80%
}

html.bp-l .uk-width-9-10\@l {
    --grid-count: 9;
    --grid-total: 10;
    width: 90%
}

html.bp-l .uk-width-1-12\@l {
    --grid-count: 1;
    --grid-total: 12;
    width: 8.3333333333%
}

html.bp-l .uk-width-2-12\@l {
    --grid-count: 2;
    --grid-total: 12;
    width: 16.6666666667%
}

html.bp-l .uk-width-3-12\@l {
    --grid-count: 3;
    --grid-total: 12;
    width: 25%
}

html.bp-l .uk-width-4-12\@l {
    --grid-count: 4;
    --grid-total: 12;
    width: 33.3333333333%
}

html.bp-l .uk-width-5-12\@l {
    --grid-count: 5;
    --grid-total: 12;
    width: 41.6666666667%
}

html.bp-l .uk-width-6-12\@l {
    --grid-count: 6;
    --grid-total: 12;
    width: 50%
}

html.bp-l .uk-width-7-12\@l {
    --grid-count: 7;
    --grid-total: 12;
    width: 58.3333333333%
}

html.bp-l .uk-width-8-12\@l {
    --grid-count: 8;
    --grid-total: 12;
    width: 66.6666666667%
}

html.bp-l .uk-width-9-12\@l {
    --grid-count: 9;
    --grid-total: 12;
    width: 75%
}

html.bp-l .uk-width-10-12\@l {
    --grid-count: 10;
    --grid-total: 12;
    width: 83.3333333333%
}

html.bp-l .uk-width-11-12\@l {
    --grid-count: 11;
    --grid-total: 12;
    width: 91.6666666667%
}

html.bp-xl .uk-width-1-6\@xl {
    --grid-count: 1;
    --grid-total: 6;
    width: 16.6666666667%
}

html.bp-xl .uk-width-2-6\@xl {
    --grid-count: 2;
    --grid-total: 6;
    width: 33.3333333333%
}

html.bp-xl .uk-width-3-6\@xl {
    --grid-count: 3;
    --grid-total: 6;
    width: 50%
}

html.bp-xl .uk-width-4-6\@xl {
    --grid-count: 4;
    --grid-total: 6;
    width: 66.6666666667%
}

html.bp-xl .uk-width-5-6\@xl {
    --grid-count: 5;
    --grid-total: 6;
    width: 83.3333333333%
}

html.bp-xl .uk-width-1-7\@xl {
    --grid-count: 1;
    --grid-total: 7;
    width: 14.2857142857%
}

html.bp-xl .uk-width-2-7\@xl {
    --grid-count: 2;
    --grid-total: 7;
    width: 28.5714285714%
}

html.bp-xl .uk-width-3-7\@xl {
    --grid-count: 3;
    --grid-total: 7;
    width: 42.8571428571%
}

html.bp-xl .uk-width-4-7\@xl {
    --grid-count: 4;
    --grid-total: 7;
    width: 57.1428571429%
}

html.bp-xl .uk-width-5-7\@xl {
    --grid-count: 5;
    --grid-total: 7;
    width: 71.4285714286%
}

html.bp-xl .uk-width-6-7\@xl {
    --grid-count: 6;
    --grid-total: 7;
    width: 85.7142857143%
}

html.bp-xl .uk-width-1-8\@xl {
    --grid-count: 1;
    --grid-total: 8;
    width: 12.5%
}

html.bp-xl .uk-width-2-8\@xl {
    --grid-count: 2;
    --grid-total: 8;
    width: 25%
}

html.bp-xl .uk-width-3-8\@xl {
    --grid-count: 3;
    --grid-total: 8;
    width: 37.5%
}

html.bp-xl .uk-width-4-8\@xl {
    --grid-count: 4;
    --grid-total: 8;
    width: 50%
}

html.bp-xl .uk-width-5-8\@xl {
    --grid-count: 5;
    --grid-total: 8;
    width: 62.5%
}

html.bp-xl .uk-width-6-8\@xl {
    --grid-count: 6;
    --grid-total: 8;
    width: 75%
}

html.bp-xl .uk-width-7-8\@xl {
    --grid-count: 7;
    --grid-total: 8;
    width: 87.5%
}

html.bp-xl .uk-width-1-10\@xl {
    --grid-count: 1;
    --grid-total: 10;
    width: 10%
}

html.bp-xl .uk-width-2-10\@xl {
    --grid-count: 2;
    --grid-total: 10;
    width: 20%
}

html.bp-xl .uk-width-3-10\@xl {
    --grid-count: 3;
    --grid-total: 10;
    width: 30%
}

html.bp-xl .uk-width-4-10\@xl {
    --grid-count: 4;
    --grid-total: 10;
    width: 40%
}

html.bp-xl .uk-width-5-10\@xl {
    --grid-count: 5;
    --grid-total: 10;
    width: 50%
}

html.bp-xl .uk-width-6-10\@xl {
    --grid-count: 6;
    --grid-total: 10;
    width: 60%
}

html.bp-xl .uk-width-7-10\@xl {
    --grid-count: 7;
    --grid-total: 10;
    width: 70%
}

html.bp-xl .uk-width-8-10\@xl {
    --grid-count: 8;
    --grid-total: 10;
    width: 80%
}

html.bp-xl .uk-width-9-10\@xl {
    --grid-count: 9;
    --grid-total: 10;
    width: 90%
}

html.bp-xl .uk-width-1-12\@xl {
    --grid-count: 1;
    --grid-total: 12;
    width: 8.3333333333%
}

html.bp-xl .uk-width-2-12\@xl {
    --grid-count: 2;
    --grid-total: 12;
    width: 16.6666666667%
}

html.bp-xl .uk-width-3-12\@xl {
    --grid-count: 3;
    --grid-total: 12;
    width: 25%
}

html.bp-xl .uk-width-4-12\@xl {
    --grid-count: 4;
    --grid-total: 12;
    width: 33.3333333333%
}

html.bp-xl .uk-width-5-12\@xl {
    --grid-count: 5;
    --grid-total: 12;
    width: 41.6666666667%
}

html.bp-xl .uk-width-6-12\@xl {
    --grid-count: 6;
    --grid-total: 12;
    width: 50%
}

html.bp-xl .uk-width-7-12\@xl {
    --grid-count: 7;
    --grid-total: 12;
    width: 58.3333333333%
}

html.bp-xl .uk-width-8-12\@xl {
    --grid-count: 8;
    --grid-total: 12;
    width: 66.6666666667%
}

html.bp-xl .uk-width-9-12\@xl {
    --grid-count: 9;
    --grid-total: 12;
    width: 75%
}

html.bp-xl .uk-width-10-12\@xl {
    --grid-count: 10;
    --grid-total: 12;
    width: 83.3333333333%
}

html.bp-xl .uk-width-11-12\@xl {
    --grid-count: 11;
    --grid-total: 12;
    width: 91.6666666667%
}

html {
    font-family: var(--body-font-typeface, system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif);
    color: var(--body-color-text);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: "zero" on
}

body {
    font-family: var(--body-font-typeface, system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif);
    font-size: var(--body-font-size,16px);
    font-weight: var(--body-font-weight,400);
    letter-spacing: var(--body-font-spacing,normal);
    background-color: var(--body-color-background,#fff);
    color: inherit;
    position: relative
}

.uk-link,a {
    color: var(--link-color-text)
}

.uk-link:hover,a:hover {
    color: var(--link-color-text-hover)
}

.uk-link {
    display: inline-flex;
    align-items: center;
    line-height: 16px
}

.uk-h1,.uk-h2,.uk-h3,.uk-h4,.uk-h5,.uk-h6,.uk-heading-2xlarge,.uk-heading-d1,.uk-heading-d2,.uk-heading-d3,.uk-heading-large,.uk-heading-medium,.uk-heading-small,.uk-heading-xlarge,.uk-logo,h1,h2,h3,h4,h5,h6 {
    font-family: var(--heading-font-typeface,sans-serif);
    font-weight: var(--heading-font-weight,700);
    letter-spacing: var(--heading-font-spacing,normal);
    font-style: var(--heading-font-style,normal);
    text-transform: var(--heading-font-transform,initial);
    color: var(--heading-color-text);
    font-feature-settings: "zero" on;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
}

.uk-logo {
    font-weight: 700;
    letter-spacing: var(--heading-font-spacing,normal);
    text-transform: unset;
    line-height: 1;
    color: inherit
}

.uk-font-primary {
    font-family: var(--font-family-primary)
}

.uk-font-secondary {
    font-family: var(--font-family-secondary)
}

.uk-font-condensed {
    font-family: var(--font-family-condensed);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .04rem!important
}

.uk-font-serif {
    font-family: var(--font-family-serif)
}

.uk-font-mono {
    font-family: var(--font-family-mono)
}

.uk-font-display {
    font-family: var(--font-family-display)
}

.uk-hr,hr {
    border-top-color: var(--border-color)
}

.uk-tooltip {
    font-size: .875rem;
    padding: 4px 8px;
    border-radius: var(--radius);
    background-color: var(--color-gray-90)
}

.uk-border,html.bp-l .uk-border\@l,html.bp-m .uk-border\@m,html.bp-s .uk-border\@s,html.bp-xl .uk-border\@xl,html.bp-xs .uk-border\@xs {
    border: 1px solid var(--border-color)!important
}

.uk-border-top,html.bp-l .uk-border-top\@l,html.bp-m .uk-border-top\@m,html.bp-s .uk-border-top\@s,html.bp-xl .uk-border-top\@xl,html.bp-xs .uk-border-top\@xs {
    border-top: 1px solid var(--border-color)!important
}

.uk-border-right,html.bp-l .uk-border-right\@l,html.bp-m .uk-border-right\@m,html.bp-s .uk-border-right\@s,html.bp-xl .uk-border-right\@xl,html.bp-xs .uk-border-right\@xs {
    border-right: 1px solid var(--border-color)!important
}

.uk-border-bottom,html.bp-l .uk-border-bottom\@l,html.bp-m .uk-border-bottom\@m,html.bp-s .uk-border-bottom\@s,html.bp-xl .uk-border-bottom\@xl,html.bp-xs .uk-border-bottom\@xs {
    border-bottom: 1px solid var(--border-color)!important
}

.uk-border-left,html.bp-l .uk-border-left\@l,html.bp-m .uk-border-left\@m,html.bp-s .uk-border-left\@s,html.bp-xl .uk-border-left\@xl,html.bp-xs .uk-border-left\@xs {
    border-left: 1px solid var(--border-color)!important
}

.uk-border-remove,html.bp-l .uk-border-remove\@l,html.bp-m .uk-border-remove\@m,html.bp-s .uk-border-remove\@s,html.bp-xl .uk-border-remove\@xl,html.bp-xs .uk-border-remove\@xs {
    border: 0
}

.uk-radius,html.bp-l .uk-radius\@l,html.bp-m .uk-radius\@m,html.bp-s .uk-radius\@s,html.bp-xl .uk-radius\@xl,html.bp-xs .uk-radius\@xs {
    border-radius: var(--sizes-radius)!important
}

.uk-radius-xsmall,html.bp-l .uk-radius-xsmall\@l,html.bp-m .uk-radius-xsmall\@m,html.bp-s .uk-radius-xsmall\@s,html.bp-xl .uk-radius-xsmall\@xl,html.bp-xs .uk-radius-xsmall\@xs {
    border-radius: var(--sizes-radius-xsmall)!important
}

.uk-radius-small,html.bp-l .uk-radius-small\@l,html.bp-m .uk-radius-small\@m,html.bp-s .uk-radius-small\@s,html.bp-xl .uk-radius-small\@xl,html.bp-xs .uk-radius-small\@xs {
    border-radius: var(--sizes-radius-small)!important
}

.uk-radius-medium,html.bp-l .uk-radius-medium\@l,html.bp-m .uk-radius-medium\@m,html.bp-s .uk-radius-medium\@s,html.bp-xl .uk-radius-medium\@xl,html.bp-xs .uk-radius-medium\@xs {
    border-radius: var(--sizes-radius-medium)!important
}

.uk-radius-large,html.bp-l .uk-radius-large\@l,html.bp-m .uk-radius-large\@m,html.bp-s .uk-radius-large\@s,html.bp-xl .uk-radius-large\@xl,html.bp-xs .uk-radius-large\@xs {
    border-radius: var(--sizes-radius-large)!important
}

.uk-radius-xlarge,html.bp-l .uk-radius-xlarge\@l,html.bp-m .uk-radius-xlarge\@m,html.bp-s .uk-radius-xlarge\@s,html.bp-xl .uk-radius-xlarge\@xl,html.bp-xs .uk-radius-xlarge\@xs {
    border-radius: var(--sizes-radius-xlarge)!important
}

.uk-radius-2xlarge,html.bp-l .uk-radius-2xlarge\@l,html.bp-m .uk-radius-2xlarge\@m,html.bp-s .uk-radius-2xlarge\@s,html.bp-xl .uk-radius-2xlarge\@xl,html.bp-xs .uk-radius-2xlarge\@xs {
    border-radius: var(--sizes-radius-2xlarge)!important
}

.uk-radius-circle,html.bp-l .uk-radius-circle\@l,html.bp-m .uk-radius-circle\@m,html.bp-s .uk-radius-circle\@s,html.bp-xl .uk-radius-circle\@xl,html.bp-xs .uk-radius-circle\@xs {
    border-radius: var(--sizes-radius-circle)!important
}

.uk-radius-remove,html.bp-l .uk-radius-remove\@l,html.bp-m .uk-radius-remove\@m,html.bp-s .uk-radius-remove\@s,html.bp-xl .uk-radius-remove\@xl,html.bp-xs .uk-radius-remove\@xs {
    border-radius: var(--sizes-radius-remove)!important
}

.uk-radius-remove-top {
    border-top-right-radius: 0!important;
    border-top-left-radius: 0!important
}

.uk-radius-remove-top-right {
    border-top-right-radius: 0!important
}

.uk-radius-remove-top-left {
    border-top-left-radius: 0!important
}

.uk-radius-remove-bottom {
    border-bottom-right-radius: 0!important;
    border-bottom-left-radius: 0!important
}

.uk-radius-remove-bottom-right {
    border-bottom-right-radius: 0!important
}

.uk-radius-remove-bottom-left {
    border-bottom-left-radius: 0!important
}

.uk-radius-remove-right {
    border-top-right-radius: 0!important;
    border-bottom-right-radius: 0!important
}

.uk-radius-remove-left {
    border-top-left-radius: 0!important;
    border-bottom-left-radius: 0!important
}

.uk-radius-xsmall-top {
    border-top-right-radius: var(--sizes-radius-xsmall);
    border-top-left-radius: var(--sizes-radius-xsmall)
}

.uk-radius-small-top {
    border-top-right-radius: var(--sizes-radius-small);
    border-top-left-radius: var(--sizes-radius-small)
}

.uk-radius-medium-top {
    border-top-right-radius: var(--sizes-radius-medium);
    border-top-left-radius: var(--sizes-radius-medium)
}

.uk-radius-large-top {
    border-top-right-radius: var(--sizes-radius-large);
    border-top-left-radius: var(--sizes-radius-large)
}

.uk-radius-xlarge-top {
    border-top-right-radius: var(--sizes-radius-xlarge);
    border-top-left-radius: var(--sizes-radius-xlarge)
}

.uk-radius-2xlarge-top {
    border-top-right-radius: var(--sizes-radius-2xlarge);
    border-top-left-radius: var(--sizes-radius-2xlarge)
}

.uk-radius-xsmall-top-right {
    border-top-right-radius: var(--sizes-radius-xsmall)
}

.uk-radius-small-top-right {
    border-top-right-radius: var(--sizes-radius-small)
}

.uk-radius-medium-top-right {
    border-top-right-radius: var(--sizes-radius-medium)
}

.uk-radius-large-top-right {
    border-top-right-radius: var(--sizes-radius-large)
}

.uk-radius-xlarge-top-right {
    border-top-right-radius: var(--sizes-radius-xlarge)
}

.uk-radius-2xlarge-top-right {
    border-top-right-radius: var(--sizes-radius-2xlarge)
}

.uk-radius-xsmall-top-left {
    border-top-left-radius: var(--sizes-radius-xsmall)
}

.uk-radius-small-top-left {
    border-top-left-radius: var(--sizes-radius-small)
}

.uk-radius-medium-top-left {
    border-top-left-radius: var(--sizes-radius-medium)
}

.uk-radius-large-top-left {
    border-top-left-radius: var(--sizes-radius-large)
}

.uk-radius-xlarge-top-left {
    border-top-left-radius: var(--sizes-radius-xlarge)
}

.uk-radius-2xlarge-top-left {
    border-top-left-radius: var(--sizes-radius-2xlarge)
}

.uk-radius-xsmall-bottom {
    border-bottom-right-radius: var(--sizes-radius-xsmall);
    border-bottom-left-radius: var(--sizes-radius-xsmall)
}

.uk-radius-small-bottom {
    border-bottom-right-radius: var(--sizes-radius-small);
    border-bottom-left-radius: var(--sizes-radius-small)
}

.uk-radius-medium-bottom {
    border-bottom-right-radius: var(--sizes-radius-medium);
    border-bottom-left-radius: var(--sizes-radius-medium)
}

.uk-radius-large-bottom {
    border-bottom-right-radius: var(--sizes-radius-large);
    border-bottom-left-radius: var(--sizes-radius-large)
}

.uk-radius-xlarge-bottom {
    border-bottom-right-radius: var(--sizes-radius-xlarge);
    border-bottom-left-radius: var(--sizes-radius-xlarge)
}

.uk-radius-2xlarge-bottom {
    border-bottom-right-radius: var(--sizes-radius-2xlarge);
    border-bottom-left-radius: var(--sizes-radius-2xlarge)
}

.uk-radius-xsmall-bottom-right {
    border-bottom-right-radius: var(--sizes-radius-xsmall)
}

.uk-radius-small-bottom-right {
    border-bottom-right-radius: var(--sizes-radius-small)
}

.uk-radius-medium-bottom-right {
    border-bottom-right-radius: var(--sizes-radius-medium)
}

.uk-radius-large-bottom-right {
    border-bottom-right-radius: var(--sizes-radius-large)
}

.uk-radius-xlarge-bottom-right {
    border-bottom-right-radius: var(--sizes-radius-xlarge)
}

.uk-radius-2xlarge-bottom-right {
    border-bottom-right-radius: var(--sizes-radius-2xlarge)
}

.uk-radius-xsmall-bottom-left {
    border-bottom-left-radius: var(--sizes-radius-xsmall)
}

.uk-radius-small-bottom-left {
    border-bottom-left-radius: var(--sizes-radius-small)
}

.uk-radius-medium-bottom-left {
    border-bottom-left-radius: var(--sizes-radius-medium)
}

.uk-radius-large-bottom-left {
    border-bottom-left-radius: var(--sizes-radius-large)
}

.uk-radius-xlarge-bottom-left {
    border-bottom-left-radius: var(--sizes-radius-xlarge)
}

.uk-radius-2xlarge-bottom-left {
    border-bottom-left-radius: var(--sizes-radius-2xlarge)
}

.uk-radius-xsmall-right {
    border-top-right-radius: var(--sizes-radius-xsmall);
    border-bottom-right-radius: var(--sizes-radius-xsmall)
}

.uk-radius-small-right {
    border-top-right-radius: var(--sizes-radius-small);
    border-bottom-right-radius: var(--sizes-radius-small)
}

.uk-radius-medium-right {
    border-top-right-radius: var(--sizes-radius-medium);
    border-bottom-right-radius: var(--sizes-radius-medium)
}

.uk-radius-large-right {
    border-top-right-radius: var(--sizes-radius-large);
    border-bottom-right-radius: var(--sizes-radius-large)
}

.uk-radius-xlarge-right {
    border-top-right-radius: var(--sizes-radius-xlarge);
    border-bottom-right-radius: var(--sizes-radius-xlarge)
}

.uk-radius-2xlarge-right {
    border-top-right-radius: var(--sizes-radius-2xlarge);
    border-bottom-right-radius: var(--sizes-radius-2xlarge)
}

.uk-radius-xsmall-left {
    border-top-left-radius: var(--sizes-radius-xsmall);
    border-bottom-left-radius: var(--sizes-radius-xsmall)
}

.uk-radius-small-left {
    border-top-left-radius: var(--sizes-radius-small);
    border-bottom-left-radius: var(--sizes-radius-small)
}

.uk-radius-medium-left {
    border-top-left-radius: var(--sizes-radius-medium);
    border-bottom-left-radius: var(--sizes-radius-medium)
}

.uk-radius-large-left {
    border-top-left-radius: var(--sizes-radius-large);
    border-bottom-left-radius: var(--sizes-radius-large)
}

.uk-radius-xlarge-left {
    border-top-left-radius: var(--sizes-radius-xlarge);
    border-bottom-left-radius: var(--sizes-radius-xlarge)
}

.uk-radius-2xlarge-left {
    border-top-left-radius: var(--sizes-radius-2xlarge);
    border-bottom-left-radius: var(--sizes-radius-2xlarge)
}

html.bp-xs .uk-radius-remove-top\@xs {
    border-top-right-radius: 0!important;
    border-top-left-radius: 0!important
}

html.bp-xs .uk-radius-remove-top-right\@xs {
    border-top-right-radius: 0!important
}

html.bp-xs .uk-radius-remove-top-left\@xs {
    border-top-left-radius: 0!important
}

html.bp-xs .uk-radius-remove-bottom\@xs {
    border-bottom-right-radius: 0!important;
    border-bottom-left-radius: 0!important
}

html.bp-xs .uk-radius-remove-bottom-right\@xs {
    border-bottom-right-radius: 0!important
}

html.bp-xs .uk-radius-remove-bottom-left\@xs {
    border-bottom-left-radius: 0!important
}

html.bp-xs .uk-radius-remove-right\@xs {
    border-top-right-radius: 0!important;
    border-bottom-right-radius: 0!important
}

html.bp-xs .uk-radius-remove-left\@xs {
    border-top-left-radius: 0!important;
    border-bottom-left-radius: 0!important
}

html.bp-xs .uk-radius-xsmall-top\@xs {
    border-top-right-radius: var(--sizes-radius-xsmall);
    border-top-left-radius: var(--sizes-radius-xsmall)
}

html.bp-xs .uk-radius-small-top\@xs {
    border-top-right-radius: var(--sizes-radius-small);
    border-top-left-radius: var(--sizes-radius-small)
}

html.bp-xs .uk-radius-medium-top\@xs {
    border-top-right-radius: var(--sizes-radius-medium);
    border-top-left-radius: var(--sizes-radius-medium)
}

html.bp-xs .uk-radius-large-top\@xs {
    border-top-right-radius: var(--sizes-radius-large);
    border-top-left-radius: var(--sizes-radius-large)
}

html.bp-xs .uk-radius-xlarge-top\@xs {
    border-top-right-radius: var(--sizes-radius-xlarge);
    border-top-left-radius: var(--sizes-radius-xlarge)
}

html.bp-xs .uk-radius-2xlarge-top\@xs {
    border-top-right-radius: var(--sizes-radius-2xlarge);
    border-top-left-radius: var(--sizes-radius-2xlarge)
}

html.bp-xs .uk-radius-xsmall-top-right\@xs {
    border-top-right-radius: var(--sizes-radius-xsmall)
}

html.bp-xs .uk-radius-small-top-right\@xs {
    border-top-right-radius: var(--sizes-radius-small)
}

html.bp-xs .uk-radius-medium-top-right\@xs {
    border-top-right-radius: var(--sizes-radius-medium)
}

html.bp-xs .uk-radius-large-top-right\@xs {
    border-top-right-radius: var(--sizes-radius-large)
}

html.bp-xs .uk-radius-xlarge-top-right\@xs {
    border-top-right-radius: var(--sizes-radius-xlarge)
}

html.bp-xs .uk-radius-2xlarge-top-right\@xs {
    border-top-right-radius: var(--sizes-radius-2xlarge)
}

html.bp-xs .uk-radius-xsmall-top-left\@xs {
    border-top-left-radius: var(--sizes-radius-xsmall)
}

html.bp-xs .uk-radius-small-top-left\@xs {
    border-top-left-radius: var(--sizes-radius-small)
}

html.bp-xs .uk-radius-medium-top-left\@xs {
    border-top-left-radius: var(--sizes-radius-medium)
}

html.bp-xs .uk-radius-large-top-left\@xs {
    border-top-left-radius: var(--sizes-radius-large)
}

html.bp-xs .uk-radius-xlarge-top-left\@xs {
    border-top-left-radius: var(--sizes-radius-xlarge)
}

html.bp-xs .uk-radius-2xlarge-top-left\@xs {
    border-top-left-radius: var(--sizes-radius-2xlarge)
}

html.bp-xs .uk-radius-xsmall-bottom\@xs {
    border-bottom-right-radius: var(--sizes-radius-xsmall);
    border-bottom-left-radius: var(--sizes-radius-xsmall)
}

html.bp-xs .uk-radius-small-bottom\@xs {
    border-bottom-right-radius: var(--sizes-radius-small);
    border-bottom-left-radius: var(--sizes-radius-small)
}

html.bp-xs .uk-radius-medium-bottom\@xs {
    border-bottom-right-radius: var(--sizes-radius-medium);
    border-bottom-left-radius: var(--sizes-radius-medium)
}

html.bp-xs .uk-radius-large-bottom\@xs {
    border-bottom-right-radius: var(--sizes-radius-large);
    border-bottom-left-radius: var(--sizes-radius-large)
}

html.bp-xs .uk-radius-xlarge-bottom\@xs {
    border-bottom-right-radius: var(--sizes-radius-xlarge);
    border-bottom-left-radius: var(--sizes-radius-xlarge)
}

html.bp-xs .uk-radius-2xlarge-bottom\@xs {
    border-bottom-right-radius: var(--sizes-radius-2xlarge);
    border-bottom-left-radius: var(--sizes-radius-2xlarge)
}

html.bp-xs .uk-radius-xsmall-bottom-right\@xs {
    border-bottom-right-radius: var(--sizes-radius-xsmall)
}

html.bp-xs .uk-radius-small-bottom-right\@xs {
    border-bottom-right-radius: var(--sizes-radius-small)
}

html.bp-xs .uk-radius-medium-bottom-right\@xs {
    border-bottom-right-radius: var(--sizes-radius-medium)
}

html.bp-xs .uk-radius-large-bottom-right\@xs {
    border-bottom-right-radius: var(--sizes-radius-large)
}

html.bp-xs .uk-radius-xlarge-bottom-right\@xs {
    border-bottom-right-radius: var(--sizes-radius-xlarge)
}

html.bp-xs .uk-radius-2xlarge-bottom-right\@xs {
    border-bottom-right-radius: var(--sizes-radius-2xlarge)
}

html.bp-xs .uk-radius-xsmall-bottom-left\@xs {
    border-bottom-left-radius: var(--sizes-radius-xsmall)
}

html.bp-xs .uk-radius-small-bottom-left\@xs {
    border-bottom-left-radius: var(--sizes-radius-small)
}

html.bp-xs .uk-radius-medium-bottom-left\@xs {
    border-bottom-left-radius: var(--sizes-radius-medium)
}

html.bp-xs .uk-radius-large-bottom-left\@xs {
    border-bottom-left-radius: var(--sizes-radius-large)
}

html.bp-xs .uk-radius-xlarge-bottom-left\@xs {
    border-bottom-left-radius: var(--sizes-radius-xlarge)
}

html.bp-xs .uk-radius-2xlarge-bottom-left\@xs {
    border-bottom-left-radius: var(--sizes-radius-2xlarge)
}

html.bp-xs .uk-radius-xsmall-right\@xs {
    border-top-right-radius: var(--sizes-radius-xsmall);
    border-bottom-right-radius: var(--sizes-radius-xsmall)
}

html.bp-xs .uk-radius-small-right\@xs {
    border-top-right-radius: var(--sizes-radius-small);
    border-bottom-right-radius: var(--sizes-radius-small)
}

html.bp-xs .uk-radius-medium-right\@xs {
    border-top-right-radius: var(--sizes-radius-medium);
    border-bottom-right-radius: var(--sizes-radius-medium)
}

html.bp-xs .uk-radius-large-right\@xs {
    border-top-right-radius: var(--sizes-radius-large);
    border-bottom-right-radius: var(--sizes-radius-large)
}

html.bp-xs .uk-radius-xlarge-right\@xs {
    border-top-right-radius: var(--sizes-radius-xlarge);
    border-bottom-right-radius: var(--sizes-radius-xlarge)
}

html.bp-xs .uk-radius-2xlarge-right\@xs {
    border-top-right-radius: var(--sizes-radius-2xlarge);
    border-bottom-right-radius: var(--sizes-radius-2xlarge)
}

html.bp-xs .uk-radius-xsmall-left\@xs {
    border-top-left-radius: var(--sizes-radius-xsmall);
    border-bottom-left-radius: var(--sizes-radius-xsmall)
}

html.bp-xs .uk-radius-small-left\@xs {
    border-top-left-radius: var(--sizes-radius-small);
    border-bottom-left-radius: var(--sizes-radius-small)
}

html.bp-xs .uk-radius-medium-left\@xs {
    border-top-left-radius: var(--sizes-radius-medium);
    border-bottom-left-radius: var(--sizes-radius-medium)
}

html.bp-xs .uk-radius-large-left\@xs {
    border-top-left-radius: var(--sizes-radius-large);
    border-bottom-left-radius: var(--sizes-radius-large)
}

html.bp-xs .uk-radius-xlarge-left\@xs {
    border-top-left-radius: var(--sizes-radius-xlarge);
    border-bottom-left-radius: var(--sizes-radius-xlarge)
}

html.bp-xs .uk-radius-2xlarge-left\@xs {
    border-top-left-radius: var(--sizes-radius-2xlarge);
    border-bottom-left-radius: var(--sizes-radius-2xlarge)
}

html.bp-s .uk-radius-remove-top\@s {
    border-top-right-radius: 0!important;
    border-top-left-radius: 0!important
}

html.bp-s .uk-radius-remove-top-right\@s {
    border-top-right-radius: 0!important
}

html.bp-s .uk-radius-remove-top-left\@s {
    border-top-left-radius: 0!important
}

html.bp-s .uk-radius-remove-bottom\@s {
    border-bottom-right-radius: 0!important;
    border-bottom-left-radius: 0!important
}

html.bp-s .uk-radius-remove-bottom-right\@s {
    border-bottom-right-radius: 0!important
}

html.bp-s .uk-radius-remove-bottom-left\@s {
    border-bottom-left-radius: 0!important
}

html.bp-s .uk-radius-remove-right\@s {
    border-top-right-radius: 0!important;
    border-bottom-right-radius: 0!important
}

html.bp-s .uk-radius-remove-left\@s {
    border-top-left-radius: 0!important;
    border-bottom-left-radius: 0!important
}

html.bp-s .uk-radius-xsmall-top\@s {
    border-top-right-radius: var(--sizes-radius-xsmall);
    border-top-left-radius: var(--sizes-radius-xsmall)
}

html.bp-s .uk-radius-small-top\@s {
    border-top-right-radius: var(--sizes-radius-small);
    border-top-left-radius: var(--sizes-radius-small)
}

html.bp-s .uk-radius-medium-top\@s {
    border-top-right-radius: var(--sizes-radius-medium);
    border-top-left-radius: var(--sizes-radius-medium)
}

html.bp-s .uk-radius-large-top\@s {
    border-top-right-radius: var(--sizes-radius-large);
    border-top-left-radius: var(--sizes-radius-large)
}

html.bp-s .uk-radius-xlarge-top\@s {
    border-top-right-radius: var(--sizes-radius-xlarge);
    border-top-left-radius: var(--sizes-radius-xlarge)
}

html.bp-s .uk-radius-2xlarge-top\@s {
    border-top-right-radius: var(--sizes-radius-2xlarge);
    border-top-left-radius: var(--sizes-radius-2xlarge)
}

html.bp-s .uk-radius-xsmall-top-right\@s {
    border-top-right-radius: var(--sizes-radius-xsmall)
}

html.bp-s .uk-radius-small-top-right\@s {
    border-top-right-radius: var(--sizes-radius-small)
}

html.bp-s .uk-radius-medium-top-right\@s {
    border-top-right-radius: var(--sizes-radius-medium)
}

html.bp-s .uk-radius-large-top-right\@s {
    border-top-right-radius: var(--sizes-radius-large)
}

html.bp-s .uk-radius-xlarge-top-right\@s {
    border-top-right-radius: var(--sizes-radius-xlarge)
}

html.bp-s .uk-radius-2xlarge-top-right\@s {
    border-top-right-radius: var(--sizes-radius-2xlarge)
}

html.bp-s .uk-radius-xsmall-top-left\@s {
    border-top-left-radius: var(--sizes-radius-xsmall)
}

html.bp-s .uk-radius-small-top-left\@s {
    border-top-left-radius: var(--sizes-radius-small)
}

html.bp-s .uk-radius-medium-top-left\@s {
    border-top-left-radius: var(--sizes-radius-medium)
}

html.bp-s .uk-radius-large-top-left\@s {
    border-top-left-radius: var(--sizes-radius-large)
}

html.bp-s .uk-radius-xlarge-top-left\@s {
    border-top-left-radius: var(--sizes-radius-xlarge)
}

html.bp-s .uk-radius-2xlarge-top-left\@s {
    border-top-left-radius: var(--sizes-radius-2xlarge)
}

html.bp-s .uk-radius-xsmall-bottom\@s {
    border-bottom-right-radius: var(--sizes-radius-xsmall);
    border-bottom-left-radius: var(--sizes-radius-xsmall)
}

html.bp-s .uk-radius-small-bottom\@s {
    border-bottom-right-radius: var(--sizes-radius-small);
    border-bottom-left-radius: var(--sizes-radius-small)
}

html.bp-s .uk-radius-medium-bottom\@s {
    border-bottom-right-radius: var(--sizes-radius-medium);
    border-bottom-left-radius: var(--sizes-radius-medium)
}

html.bp-s .uk-radius-large-bottom\@s {
    border-bottom-right-radius: var(--sizes-radius-large);
    border-bottom-left-radius: var(--sizes-radius-large)
}

html.bp-s .uk-radius-xlarge-bottom\@s {
    border-bottom-right-radius: var(--sizes-radius-xlarge);
    border-bottom-left-radius: var(--sizes-radius-xlarge)
}

html.bp-s .uk-radius-2xlarge-bottom\@s {
    border-bottom-right-radius: var(--sizes-radius-2xlarge);
    border-bottom-left-radius: var(--sizes-radius-2xlarge)
}

html.bp-s .uk-radius-xsmall-bottom-right\@s {
    border-bottom-right-radius: var(--sizes-radius-xsmall)
}

html.bp-s .uk-radius-small-bottom-right\@s {
    border-bottom-right-radius: var(--sizes-radius-small)
}

html.bp-s .uk-radius-medium-bottom-right\@s {
    border-bottom-right-radius: var(--sizes-radius-medium)
}

html.bp-s .uk-radius-large-bottom-right\@s {
    border-bottom-right-radius: var(--sizes-radius-large)
}

html.bp-s .uk-radius-xlarge-bottom-right\@s {
    border-bottom-right-radius: var(--sizes-radius-xlarge)
}

html.bp-s .uk-radius-2xlarge-bottom-right\@s {
    border-bottom-right-radius: var(--sizes-radius-2xlarge)
}

html.bp-s .uk-radius-xsmall-bottom-left\@s {
    border-bottom-left-radius: var(--sizes-radius-xsmall)
}

html.bp-s .uk-radius-small-bottom-left\@s {
    border-bottom-left-radius: var(--sizes-radius-small)
}

html.bp-s .uk-radius-medium-bottom-left\@s {
    border-bottom-left-radius: var(--sizes-radius-medium)
}

html.bp-s .uk-radius-large-bottom-left\@s {
    border-bottom-left-radius: var(--sizes-radius-large)
}

html.bp-s .uk-radius-xlarge-bottom-left\@s {
    border-bottom-left-radius: var(--sizes-radius-xlarge)
}

html.bp-s .uk-radius-2xlarge-bottom-left\@s {
    border-bottom-left-radius: var(--sizes-radius-2xlarge)
}

html.bp-s .uk-radius-xsmall-right\@s {
    border-top-right-radius: var(--sizes-radius-xsmall);
    border-bottom-right-radius: var(--sizes-radius-xsmall)
}

html.bp-s .uk-radius-small-right\@s {
    border-top-right-radius: var(--sizes-radius-small);
    border-bottom-right-radius: var(--sizes-radius-small)
}

html.bp-s .uk-radius-medium-right\@s {
    border-top-right-radius: var(--sizes-radius-medium);
    border-bottom-right-radius: var(--sizes-radius-medium)
}

html.bp-s .uk-radius-large-right\@s {
    border-top-right-radius: var(--sizes-radius-large);
    border-bottom-right-radius: var(--sizes-radius-large)
}

html.bp-s .uk-radius-xlarge-right\@s {
    border-top-right-radius: var(--sizes-radius-xlarge);
    border-bottom-right-radius: var(--sizes-radius-xlarge)
}

html.bp-s .uk-radius-2xlarge-right\@s {
    border-top-right-radius: var(--sizes-radius-2xlarge);
    border-bottom-right-radius: var(--sizes-radius-2xlarge)
}

html.bp-s .uk-radius-xsmall-left\@s {
    border-top-left-radius: var(--sizes-radius-xsmall);
    border-bottom-left-radius: var(--sizes-radius-xsmall)
}

html.bp-s .uk-radius-small-left\@s {
    border-top-left-radius: var(--sizes-radius-small);
    border-bottom-left-radius: var(--sizes-radius-small)
}

html.bp-s .uk-radius-medium-left\@s {
    border-top-left-radius: var(--sizes-radius-medium);
    border-bottom-left-radius: var(--sizes-radius-medium)
}

html.bp-s .uk-radius-large-left\@s {
    border-top-left-radius: var(--sizes-radius-large);
    border-bottom-left-radius: var(--sizes-radius-large)
}

html.bp-s .uk-radius-xlarge-left\@s {
    border-top-left-radius: var(--sizes-radius-xlarge);
    border-bottom-left-radius: var(--sizes-radius-xlarge)
}

html.bp-s .uk-radius-2xlarge-left\@s {
    border-top-left-radius: var(--sizes-radius-2xlarge);
    border-bottom-left-radius: var(--sizes-radius-2xlarge)
}

html.bp-m .uk-radius-remove-top\@m {
    border-top-right-radius: 0!important;
    border-top-left-radius: 0!important
}

html.bp-m .uk-radius-remove-top-right\@m {
    border-top-right-radius: 0!important
}

html.bp-m .uk-radius-remove-top-left\@m {
    border-top-left-radius: 0!important
}

html.bp-m .uk-radius-remove-bottom\@m {
    border-bottom-right-radius: 0!important;
    border-bottom-left-radius: 0!important
}

html.bp-m .uk-radius-remove-bottom-right\@m {
    border-bottom-right-radius: 0!important
}

html.bp-m .uk-radius-remove-bottom-left\@m {
    border-bottom-left-radius: 0!important
}

html.bp-m .uk-radius-remove-right\@m {
    border-top-right-radius: 0!important;
    border-bottom-right-radius: 0!important
}

html.bp-m .uk-radius-remove-left\@m {
    border-top-left-radius: 0!important;
    border-bottom-left-radius: 0!important
}

html.bp-m .uk-radius-xsmall-top\@m {
    border-top-right-radius: var(--sizes-radius-xsmall);
    border-top-left-radius: var(--sizes-radius-xsmall)
}

html.bp-m .uk-radius-small-top\@m {
    border-top-right-radius: var(--sizes-radius-small);
    border-top-left-radius: var(--sizes-radius-small)
}

html.bp-m .uk-radius-medium-top\@m {
    border-top-right-radius: var(--sizes-radius-medium);
    border-top-left-radius: var(--sizes-radius-medium)
}

html.bp-m .uk-radius-large-top\@m {
    border-top-right-radius: var(--sizes-radius-large);
    border-top-left-radius: var(--sizes-radius-large)
}

html.bp-m .uk-radius-xlarge-top\@m {
    border-top-right-radius: var(--sizes-radius-xlarge);
    border-top-left-radius: var(--sizes-radius-xlarge)
}

html.bp-m .uk-radius-2xlarge-top\@m {
    border-top-right-radius: var(--sizes-radius-2xlarge);
    border-top-left-radius: var(--sizes-radius-2xlarge)
}

html.bp-m .uk-radius-xsmall-top-right\@m {
    border-top-right-radius: var(--sizes-radius-xsmall)
}

html.bp-m .uk-radius-small-top-right\@m {
    border-top-right-radius: var(--sizes-radius-small)
}

html.bp-m .uk-radius-medium-top-right\@m {
    border-top-right-radius: var(--sizes-radius-medium)
}

html.bp-m .uk-radius-large-top-right\@m {
    border-top-right-radius: var(--sizes-radius-large)
}

html.bp-m .uk-radius-xlarge-top-right\@m {
    border-top-right-radius: var(--sizes-radius-xlarge)
}

html.bp-m .uk-radius-2xlarge-top-right\@m {
    border-top-right-radius: var(--sizes-radius-2xlarge)
}

html.bp-m .uk-radius-xsmall-top-left\@m {
    border-top-left-radius: var(--sizes-radius-xsmall)
}

html.bp-m .uk-radius-small-top-left\@m {
    border-top-left-radius: var(--sizes-radius-small)
}

html.bp-m .uk-radius-medium-top-left\@m {
    border-top-left-radius: var(--sizes-radius-medium)
}

html.bp-m .uk-radius-large-top-left\@m {
    border-top-left-radius: var(--sizes-radius-large)
}

html.bp-m .uk-radius-xlarge-top-left\@m {
    border-top-left-radius: var(--sizes-radius-xlarge)
}

html.bp-m .uk-radius-2xlarge-top-left\@m {
    border-top-left-radius: var(--sizes-radius-2xlarge)
}

html.bp-m .uk-radius-xsmall-bottom\@m {
    border-bottom-right-radius: var(--sizes-radius-xsmall);
    border-bottom-left-radius: var(--sizes-radius-xsmall)
}

html.bp-m .uk-radius-small-bottom\@m {
    border-bottom-right-radius: var(--sizes-radius-small);
    border-bottom-left-radius: var(--sizes-radius-small)
}

html.bp-m .uk-radius-medium-bottom\@m {
    border-bottom-right-radius: var(--sizes-radius-medium);
    border-bottom-left-radius: var(--sizes-radius-medium)
}

html.bp-m .uk-radius-large-bottom\@m {
    border-bottom-right-radius: var(--sizes-radius-large);
    border-bottom-left-radius: var(--sizes-radius-large)
}

html.bp-m .uk-radius-xlarge-bottom\@m {
    border-bottom-right-radius: var(--sizes-radius-xlarge);
    border-bottom-left-radius: var(--sizes-radius-xlarge)
}

html.bp-m .uk-radius-2xlarge-bottom\@m {
    border-bottom-right-radius: var(--sizes-radius-2xlarge);
    border-bottom-left-radius: var(--sizes-radius-2xlarge)
}

html.bp-m .uk-radius-xsmall-bottom-right\@m {
    border-bottom-right-radius: var(--sizes-radius-xsmall)
}

html.bp-m .uk-radius-small-bottom-right\@m {
    border-bottom-right-radius: var(--sizes-radius-small)
}

html.bp-m .uk-radius-medium-bottom-right\@m {
    border-bottom-right-radius: var(--sizes-radius-medium)
}

html.bp-m .uk-radius-large-bottom-right\@m {
    border-bottom-right-radius: var(--sizes-radius-large)
}

html.bp-m .uk-radius-xlarge-bottom-right\@m {
    border-bottom-right-radius: var(--sizes-radius-xlarge)
}

html.bp-m .uk-radius-2xlarge-bottom-right\@m {
    border-bottom-right-radius: var(--sizes-radius-2xlarge)
}

html.bp-m .uk-radius-xsmall-bottom-left\@m {
    border-bottom-left-radius: var(--sizes-radius-xsmall)
}

html.bp-m .uk-radius-small-bottom-left\@m {
    border-bottom-left-radius: var(--sizes-radius-small)
}

html.bp-m .uk-radius-medium-bottom-left\@m {
    border-bottom-left-radius: var(--sizes-radius-medium)
}

html.bp-m .uk-radius-large-bottom-left\@m {
    border-bottom-left-radius: var(--sizes-radius-large)
}

html.bp-m .uk-radius-xlarge-bottom-left\@m {
    border-bottom-left-radius: var(--sizes-radius-xlarge)
}

html.bp-m .uk-radius-2xlarge-bottom-left\@m {
    border-bottom-left-radius: var(--sizes-radius-2xlarge)
}

html.bp-m .uk-radius-xsmall-right\@m {
    border-top-right-radius: var(--sizes-radius-xsmall);
    border-bottom-right-radius: var(--sizes-radius-xsmall)
}

html.bp-m .uk-radius-small-right\@m {
    border-top-right-radius: var(--sizes-radius-small);
    border-bottom-right-radius: var(--sizes-radius-small)
}

html.bp-m .uk-radius-medium-right\@m {
    border-top-right-radius: var(--sizes-radius-medium);
    border-bottom-right-radius: var(--sizes-radius-medium)
}

html.bp-m .uk-radius-large-right\@m {
    border-top-right-radius: var(--sizes-radius-large);
    border-bottom-right-radius: var(--sizes-radius-large)
}

html.bp-m .uk-radius-xlarge-right\@m {
    border-top-right-radius: var(--sizes-radius-xlarge);
    border-bottom-right-radius: var(--sizes-radius-xlarge)
}

html.bp-m .uk-radius-2xlarge-right\@m {
    border-top-right-radius: var(--sizes-radius-2xlarge);
    border-bottom-right-radius: var(--sizes-radius-2xlarge)
}

html.bp-m .uk-radius-xsmall-left\@m {
    border-top-left-radius: var(--sizes-radius-xsmall);
    border-bottom-left-radius: var(--sizes-radius-xsmall)
}

html.bp-m .uk-radius-small-left\@m {
    border-top-left-radius: var(--sizes-radius-small);
    border-bottom-left-radius: var(--sizes-radius-small)
}

html.bp-m .uk-radius-medium-left\@m {
    border-top-left-radius: var(--sizes-radius-medium);
    border-bottom-left-radius: var(--sizes-radius-medium)
}

html.bp-m .uk-radius-large-left\@m {
    border-top-left-radius: var(--sizes-radius-large);
    border-bottom-left-radius: var(--sizes-radius-large)
}

html.bp-m .uk-radius-xlarge-left\@m {
    border-top-left-radius: var(--sizes-radius-xlarge);
    border-bottom-left-radius: var(--sizes-radius-xlarge)
}

html.bp-m .uk-radius-2xlarge-left\@m {
    border-top-left-radius: var(--sizes-radius-2xlarge);
    border-bottom-left-radius: var(--sizes-radius-2xlarge)
}

html.bp-l .uk-radius-remove-top\@l {
    border-top-right-radius: 0!important;
    border-top-left-radius: 0!important
}

html.bp-l .uk-radius-remove-top-right\@l {
    border-top-right-radius: 0!important
}

html.bp-l .uk-radius-remove-top-left\@l {
    border-top-left-radius: 0!important
}

html.bp-l .uk-radius-remove-bottom\@l {
    border-bottom-right-radius: 0!important;
    border-bottom-left-radius: 0!important
}

html.bp-l .uk-radius-remove-bottom-right\@l {
    border-bottom-right-radius: 0!important
}

html.bp-l .uk-radius-remove-bottom-left\@l {
    border-bottom-left-radius: 0!important
}

html.bp-l .uk-radius-remove-right\@l {
    border-top-right-radius: 0!important;
    border-bottom-right-radius: 0!important
}

html.bp-l .uk-radius-remove-left\@l {
    border-top-left-radius: 0!important;
    border-bottom-left-radius: 0!important
}

html.bp-l .uk-radius-xsmall-top\@l {
    border-top-right-radius: var(--sizes-radius-xsmall);
    border-top-left-radius: var(--sizes-radius-xsmall)
}

html.bp-l .uk-radius-small-top\@l {
    border-top-right-radius: var(--sizes-radius-small);
    border-top-left-radius: var(--sizes-radius-small)
}

html.bp-l .uk-radius-medium-top\@l {
    border-top-right-radius: var(--sizes-radius-medium);
    border-top-left-radius: var(--sizes-radius-medium)
}

html.bp-l .uk-radius-large-top\@l {
    border-top-right-radius: var(--sizes-radius-large);
    border-top-left-radius: var(--sizes-radius-large)
}

html.bp-l .uk-radius-xlarge-top\@l {
    border-top-right-radius: var(--sizes-radius-xlarge);
    border-top-left-radius: var(--sizes-radius-xlarge)
}

html.bp-l .uk-radius-2xlarge-top\@l {
    border-top-right-radius: var(--sizes-radius-2xlarge);
    border-top-left-radius: var(--sizes-radius-2xlarge)
}

html.bp-l .uk-radius-xsmall-top-right\@l {
    border-top-right-radius: var(--sizes-radius-xsmall)
}

html.bp-l .uk-radius-small-top-right\@l {
    border-top-right-radius: var(--sizes-radius-small)
}

html.bp-l .uk-radius-medium-top-right\@l {
    border-top-right-radius: var(--sizes-radius-medium)
}

html.bp-l .uk-radius-large-top-right\@l {
    border-top-right-radius: var(--sizes-radius-large)
}

html.bp-l .uk-radius-xlarge-top-right\@l {
    border-top-right-radius: var(--sizes-radius-xlarge)
}

html.bp-l .uk-radius-2xlarge-top-right\@l {
    border-top-right-radius: var(--sizes-radius-2xlarge)
}

html.bp-l .uk-radius-xsmall-top-left\@l {
    border-top-left-radius: var(--sizes-radius-xsmall)
}

html.bp-l .uk-radius-small-top-left\@l {
    border-top-left-radius: var(--sizes-radius-small)
}

html.bp-l .uk-radius-medium-top-left\@l {
    border-top-left-radius: var(--sizes-radius-medium)
}

html.bp-l .uk-radius-large-top-left\@l {
    border-top-left-radius: var(--sizes-radius-large)
}

html.bp-l .uk-radius-xlarge-top-left\@l {
    border-top-left-radius: var(--sizes-radius-xlarge)
}

html.bp-l .uk-radius-2xlarge-top-left\@l {
    border-top-left-radius: var(--sizes-radius-2xlarge)
}

html.bp-l .uk-radius-xsmall-bottom\@l {
    border-bottom-right-radius: var(--sizes-radius-xsmall);
    border-bottom-left-radius: var(--sizes-radius-xsmall)
}

html.bp-l .uk-radius-small-bottom\@l {
    border-bottom-right-radius: var(--sizes-radius-small);
    border-bottom-left-radius: var(--sizes-radius-small)
}

html.bp-l .uk-radius-medium-bottom\@l {
    border-bottom-right-radius: var(--sizes-radius-medium);
    border-bottom-left-radius: var(--sizes-radius-medium)
}

html.bp-l .uk-radius-large-bottom\@l {
    border-bottom-right-radius: var(--sizes-radius-large);
    border-bottom-left-radius: var(--sizes-radius-large)
}

html.bp-l .uk-radius-xlarge-bottom\@l {
    border-bottom-right-radius: var(--sizes-radius-xlarge);
    border-bottom-left-radius: var(--sizes-radius-xlarge)
}

html.bp-l .uk-radius-2xlarge-bottom\@l {
    border-bottom-right-radius: var(--sizes-radius-2xlarge);
    border-bottom-left-radius: var(--sizes-radius-2xlarge)
}

html.bp-l .uk-radius-xsmall-bottom-right\@l {
    border-bottom-right-radius: var(--sizes-radius-xsmall)
}

html.bp-l .uk-radius-small-bottom-right\@l {
    border-bottom-right-radius: var(--sizes-radius-small)
}

html.bp-l .uk-radius-medium-bottom-right\@l {
    border-bottom-right-radius: var(--sizes-radius-medium)
}

html.bp-l .uk-radius-large-bottom-right\@l {
    border-bottom-right-radius: var(--sizes-radius-large)
}

html.bp-l .uk-radius-xlarge-bottom-right\@l {
    border-bottom-right-radius: var(--sizes-radius-xlarge)
}

html.bp-l .uk-radius-2xlarge-bottom-right\@l {
    border-bottom-right-radius: var(--sizes-radius-2xlarge)
}

html.bp-l .uk-radius-xsmall-bottom-left\@l {
    border-bottom-left-radius: var(--sizes-radius-xsmall)
}

html.bp-l .uk-radius-small-bottom-left\@l {
    border-bottom-left-radius: var(--sizes-radius-small)
}

html.bp-l .uk-radius-medium-bottom-left\@l {
    border-bottom-left-radius: var(--sizes-radius-medium)
}

html.bp-l .uk-radius-large-bottom-left\@l {
    border-bottom-left-radius: var(--sizes-radius-large)
}

html.bp-l .uk-radius-xlarge-bottom-left\@l {
    border-bottom-left-radius: var(--sizes-radius-xlarge)
}

html.bp-l .uk-radius-2xlarge-bottom-left\@l {
    border-bottom-left-radius: var(--sizes-radius-2xlarge)
}

html.bp-l .uk-radius-xsmall-right\@l {
    border-top-right-radius: var(--sizes-radius-xsmall);
    border-bottom-right-radius: var(--sizes-radius-xsmall)
}

html.bp-l .uk-radius-small-right\@l {
    border-top-right-radius: var(--sizes-radius-small);
    border-bottom-right-radius: var(--sizes-radius-small)
}

html.bp-l .uk-radius-medium-right\@l {
    border-top-right-radius: var(--sizes-radius-medium);
    border-bottom-right-radius: var(--sizes-radius-medium)
}

html.bp-l .uk-radius-large-right\@l {
    border-top-right-radius: var(--sizes-radius-large);
    border-bottom-right-radius: var(--sizes-radius-large)
}

html.bp-l .uk-radius-xlarge-right\@l {
    border-top-right-radius: var(--sizes-radius-xlarge);
    border-bottom-right-radius: var(--sizes-radius-xlarge)
}

html.bp-l .uk-radius-2xlarge-right\@l {
    border-top-right-radius: var(--sizes-radius-2xlarge);
    border-bottom-right-radius: var(--sizes-radius-2xlarge)
}

html.bp-l .uk-radius-xsmall-left\@l {
    border-top-left-radius: var(--sizes-radius-xsmall);
    border-bottom-left-radius: var(--sizes-radius-xsmall)
}

html.bp-l .uk-radius-small-left\@l {
    border-top-left-radius: var(--sizes-radius-small);
    border-bottom-left-radius: var(--sizes-radius-small)
}

html.bp-l .uk-radius-medium-left\@l {
    border-top-left-radius: var(--sizes-radius-medium);
    border-bottom-left-radius: var(--sizes-radius-medium)
}

html.bp-l .uk-radius-large-left\@l {
    border-top-left-radius: var(--sizes-radius-large);
    border-bottom-left-radius: var(--sizes-radius-large)
}

html.bp-l .uk-radius-xlarge-left\@l {
    border-top-left-radius: var(--sizes-radius-xlarge);
    border-bottom-left-radius: var(--sizes-radius-xlarge)
}

html.bp-l .uk-radius-2xlarge-left\@l {
    border-top-left-radius: var(--sizes-radius-2xlarge);
    border-bottom-left-radius: var(--sizes-radius-2xlarge)
}

html.bp-xl .uk-radius-remove-top\@xl {
    border-top-right-radius: 0!important;
    border-top-left-radius: 0!important
}

html.bp-xl .uk-radius-remove-top-right\@xl {
    border-top-right-radius: 0!important
}

html.bp-xl .uk-radius-remove-top-left\@xl {
    border-top-left-radius: 0!important
}

html.bp-xl .uk-radius-remove-bottom\@xl {
    border-bottom-right-radius: 0!important;
    border-bottom-left-radius: 0!important
}

html.bp-xl .uk-radius-remove-bottom-right\@xl {
    border-bottom-right-radius: 0!important
}

html.bp-xl .uk-radius-remove-bottom-left\@xl {
    border-bottom-left-radius: 0!important
}

html.bp-xl .uk-radius-remove-right\@xl {
    border-top-right-radius: 0!important;
    border-bottom-right-radius: 0!important
}

html.bp-xl .uk-radius-remove-left\@xl {
    border-top-left-radius: 0!important;
    border-bottom-left-radius: 0!important
}

html.bp-xl .uk-radius-xsmall-top\@xl {
    border-top-right-radius: var(--sizes-radius-xsmall);
    border-top-left-radius: var(--sizes-radius-xsmall)
}

html.bp-xl .uk-radius-small-top\@xl {
    border-top-right-radius: var(--sizes-radius-small);
    border-top-left-radius: var(--sizes-radius-small)
}

html.bp-xl .uk-radius-medium-top\@xl {
    border-top-right-radius: var(--sizes-radius-medium);
    border-top-left-radius: var(--sizes-radius-medium)
}

html.bp-xl .uk-radius-large-top\@xl {
    border-top-right-radius: var(--sizes-radius-large);
    border-top-left-radius: var(--sizes-radius-large)
}

html.bp-xl .uk-radius-xlarge-top\@xl {
    border-top-right-radius: var(--sizes-radius-xlarge);
    border-top-left-radius: var(--sizes-radius-xlarge)
}

html.bp-xl .uk-radius-2xlarge-top\@xl {
    border-top-right-radius: var(--sizes-radius-2xlarge);
    border-top-left-radius: var(--sizes-radius-2xlarge)
}

html.bp-xl .uk-radius-xsmall-top-right\@xl {
    border-top-right-radius: var(--sizes-radius-xsmall)
}

html.bp-xl .uk-radius-small-top-right\@xl {
    border-top-right-radius: var(--sizes-radius-small)
}

html.bp-xl .uk-radius-medium-top-right\@xl {
    border-top-right-radius: var(--sizes-radius-medium)
}

html.bp-xl .uk-radius-large-top-right\@xl {
    border-top-right-radius: var(--sizes-radius-large)
}

html.bp-xl .uk-radius-xlarge-top-right\@xl {
    border-top-right-radius: var(--sizes-radius-xlarge)
}

html.bp-xl .uk-radius-2xlarge-top-right\@xl {
    border-top-right-radius: var(--sizes-radius-2xlarge)
}

html.bp-xl .uk-radius-xsmall-top-left\@xl {
    border-top-left-radius: var(--sizes-radius-xsmall)
}

html.bp-xl .uk-radius-small-top-left\@xl {
    border-top-left-radius: var(--sizes-radius-small)
}

html.bp-xl .uk-radius-medium-top-left\@xl {
    border-top-left-radius: var(--sizes-radius-medium)
}

html.bp-xl .uk-radius-large-top-left\@xl {
    border-top-left-radius: var(--sizes-radius-large)
}

html.bp-xl .uk-radius-xlarge-top-left\@xl {
    border-top-left-radius: var(--sizes-radius-xlarge)
}

html.bp-xl .uk-radius-2xlarge-top-left\@xl {
    border-top-left-radius: var(--sizes-radius-2xlarge)
}

html.bp-xl .uk-radius-xsmall-bottom\@xl {
    border-bottom-right-radius: var(--sizes-radius-xsmall);
    border-bottom-left-radius: var(--sizes-radius-xsmall)
}

html.bp-xl .uk-radius-small-bottom\@xl {
    border-bottom-right-radius: var(--sizes-radius-small);
    border-bottom-left-radius: var(--sizes-radius-small)
}

html.bp-xl .uk-radius-medium-bottom\@xl {
    border-bottom-right-radius: var(--sizes-radius-medium);
    border-bottom-left-radius: var(--sizes-radius-medium)
}

html.bp-xl .uk-radius-large-bottom\@xl {
    border-bottom-right-radius: var(--sizes-radius-large);
    border-bottom-left-radius: var(--sizes-radius-large)
}

html.bp-xl .uk-radius-xlarge-bottom\@xl {
    border-bottom-right-radius: var(--sizes-radius-xlarge);
    border-bottom-left-radius: var(--sizes-radius-xlarge)
}

html.bp-xl .uk-radius-2xlarge-bottom\@xl {
    border-bottom-right-radius: var(--sizes-radius-2xlarge);
    border-bottom-left-radius: var(--sizes-radius-2xlarge)
}

html.bp-xl .uk-radius-xsmall-bottom-right\@xl {
    border-bottom-right-radius: var(--sizes-radius-xsmall)
}

html.bp-xl .uk-radius-small-bottom-right\@xl {
    border-bottom-right-radius: var(--sizes-radius-small)
}

html.bp-xl .uk-radius-medium-bottom-right\@xl {
    border-bottom-right-radius: var(--sizes-radius-medium)
}

html.bp-xl .uk-radius-large-bottom-right\@xl {
    border-bottom-right-radius: var(--sizes-radius-large)
}

html.bp-xl .uk-radius-xlarge-bottom-right\@xl {
    border-bottom-right-radius: var(--sizes-radius-xlarge)
}

html.bp-xl .uk-radius-2xlarge-bottom-right\@xl {
    border-bottom-right-radius: var(--sizes-radius-2xlarge)
}

html.bp-xl .uk-radius-xsmall-bottom-left\@xl {
    border-bottom-left-radius: var(--sizes-radius-xsmall)
}

html.bp-xl .uk-radius-small-bottom-left\@xl {
    border-bottom-left-radius: var(--sizes-radius-small)
}

html.bp-xl .uk-radius-medium-bottom-left\@xl {
    border-bottom-left-radius: var(--sizes-radius-medium)
}

html.bp-xl .uk-radius-large-bottom-left\@xl {
    border-bottom-left-radius: var(--sizes-radius-large)
}

html.bp-xl .uk-radius-xlarge-bottom-left\@xl {
    border-bottom-left-radius: var(--sizes-radius-xlarge)
}

html.bp-xl .uk-radius-2xlarge-bottom-left\@xl {
    border-bottom-left-radius: var(--sizes-radius-2xlarge)
}

html.bp-xl .uk-radius-xsmall-right\@xl {
    border-top-right-radius: var(--sizes-radius-xsmall);
    border-bottom-right-radius: var(--sizes-radius-xsmall)
}

html.bp-xl .uk-radius-small-right\@xl {
    border-top-right-radius: var(--sizes-radius-small);
    border-bottom-right-radius: var(--sizes-radius-small)
}

html.bp-xl .uk-radius-medium-right\@xl {
    border-top-right-radius: var(--sizes-radius-medium);
    border-bottom-right-radius: var(--sizes-radius-medium)
}

html.bp-xl .uk-radius-large-right\@xl {
    border-top-right-radius: var(--sizes-radius-large);
    border-bottom-right-radius: var(--sizes-radius-large)
}

html.bp-xl .uk-radius-xlarge-right\@xl {
    border-top-right-radius: var(--sizes-radius-xlarge);
    border-bottom-right-radius: var(--sizes-radius-xlarge)
}

html.bp-xl .uk-radius-2xlarge-right\@xl {
    border-top-right-radius: var(--sizes-radius-2xlarge);
    border-bottom-right-radius: var(--sizes-radius-2xlarge)
}

html.bp-xl .uk-radius-xsmall-left\@xl {
    border-top-left-radius: var(--sizes-radius-xsmall);
    border-bottom-left-radius: var(--sizes-radius-xsmall)
}

html.bp-xl .uk-radius-small-left\@xl {
    border-top-left-radius: var(--sizes-radius-small);
    border-bottom-left-radius: var(--sizes-radius-small)
}

html.bp-xl .uk-radius-medium-left\@xl {
    border-top-left-radius: var(--sizes-radius-medium);
    border-bottom-left-radius: var(--sizes-radius-medium)
}

html.bp-xl .uk-radius-large-left\@xl {
    border-top-left-radius: var(--sizes-radius-large);
    border-bottom-left-radius: var(--sizes-radius-large)
}

html.bp-xl .uk-radius-xlarge-left\@xl {
    border-top-left-radius: var(--sizes-radius-xlarge);
    border-bottom-left-radius: var(--sizes-radius-xlarge)
}

html.bp-xl .uk-radius-2xlarge-left\@xl {
    border-top-left-radius: var(--sizes-radius-2xlarge);
    border-bottom-left-radius: var(--sizes-radius-2xlarge)
}

.uk-icon {
    font-size: var(--sizes-icon);
    width: var(--sizes-icon);
    height: var(--sizes-icon);
    line-height: 1
}

.uk-icon-3xsmall {
    font-size: var(--sizes-icon-3xsmall);
    width: var(--sizes-icon-3xsmall);
    height: var(--sizes-icon-3xsmall);
    line-height: 1
}

.uk-icon-2xsmall {
    font-size: var(--sizes-icon-2xsmall);
    width: var(--sizes-icon-2xsmall);
    height: var(--sizes-icon-2xsmall);
    line-height: 1
}

.uk-icon-xsmall {
    font-size: var(--sizes-icon-xsmall);
    width: var(--sizes-icon-xsmall);
    height: var(--sizes-icon-xsmall);
    line-height: 1
}

.uk-icon-small {
    font-size: var(--sizes-icon-small);
    width: var(--sizes-icon-small);
    height: var(--sizes-icon-small);
    line-height: 1
}

.uk-icon-medium {
    font-size: var(--sizes-icon-medium);
    width: var(--sizes-icon-medium);
    height: var(--sizes-icon-medium);
    line-height: 1
}

.uk-icon-large {
    font-size: var(--sizes-icon-large);
    width: var(--sizes-icon-large);
    height: var(--sizes-icon-large);
    line-height: 1
}

.uk-icon-xlarge {
    font-size: var(--sizes-icon-xlarge);
    width: var(--sizes-icon-xlarge);
    height: var(--sizes-icon-xlarge);
    line-height: 1
}

.uk-icon-2xlarge {
    font-size: var(--sizes-icon-2xlarge);
    width: var(--sizes-icon-2xlarge);
    height: var(--sizes-icon-2xlarge);
    line-height: 1
}

html.bp-xs .uk-icon\@xs {
    font-size: var(--sizes-icon);
    width: var(--sizes-icon);
    height: var(--sizes-icon);
    line-height: 1
}

html.bp-xs .uk-icon-3xsmall\@xs {
    font-size: var(--sizes-icon-3xsmall);
    width: var(--sizes-icon-3xsmall);
    height: var(--sizes-icon-3xsmall);
    line-height: 1
}

html.bp-xs .uk-icon-2xsmall\@xs {
    font-size: var(--sizes-icon-2xsmall);
    width: var(--sizes-icon-2xsmall);
    height: var(--sizes-icon-2xsmall);
    line-height: 1
}

html.bp-xs .uk-icon-xsmall\@xs {
    font-size: var(--sizes-icon-xsmall);
    width: var(--sizes-icon-xsmall);
    height: var(--sizes-icon-xsmall);
    line-height: 1
}

html.bp-xs .uk-icon-small\@xs {
    font-size: var(--sizes-icon-small);
    width: var(--sizes-icon-small);
    height: var(--sizes-icon-small);
    line-height: 1
}

html.bp-xs .uk-icon-medium\@xs {
    font-size: var(--sizes-icon-medium);
    width: var(--sizes-icon-medium);
    height: var(--sizes-icon-medium);
    line-height: 1
}

html.bp-xs .uk-icon-large\@xs {
    font-size: var(--sizes-icon-large);
    width: var(--sizes-icon-large);
    height: var(--sizes-icon-large);
    line-height: 1
}

html.bp-xs .uk-icon-xlarge\@xs {
    font-size: var(--sizes-icon-xlarge);
    width: var(--sizes-icon-xlarge);
    height: var(--sizes-icon-xlarge);
    line-height: 1
}

html.bp-xs .uk-icon-2xlarge\@xs {
    font-size: var(--sizes-icon-2xlarge);
    width: var(--sizes-icon-2xlarge);
    height: var(--sizes-icon-2xlarge);
    line-height: 1
}

html.bp-s .uk-icon\@s {
    font-size: var(--sizes-icon);
    width: var(--sizes-icon);
    height: var(--sizes-icon);
    line-height: 1
}

html.bp-s .uk-icon-3xsmall\@s {
    font-size: var(--sizes-icon-3xsmall);
    width: var(--sizes-icon-3xsmall);
    height: var(--sizes-icon-3xsmall);
    line-height: 1
}

html.bp-s .uk-icon-2xsmall\@s {
    font-size: var(--sizes-icon-2xsmall);
    width: var(--sizes-icon-2xsmall);
    height: var(--sizes-icon-2xsmall);
    line-height: 1
}

html.bp-s .uk-icon-xsmall\@s {
    font-size: var(--sizes-icon-xsmall);
    width: var(--sizes-icon-xsmall);
    height: var(--sizes-icon-xsmall);
    line-height: 1
}

html.bp-s .uk-icon-small\@s {
    font-size: var(--sizes-icon-small);
    width: var(--sizes-icon-small);
    height: var(--sizes-icon-small);
    line-height: 1
}

html.bp-s .uk-icon-medium\@s {
    font-size: var(--sizes-icon-medium);
    width: var(--sizes-icon-medium);
    height: var(--sizes-icon-medium);
    line-height: 1
}

html.bp-s .uk-icon-large\@s {
    font-size: var(--sizes-icon-large);
    width: var(--sizes-icon-large);
    height: var(--sizes-icon-large);
    line-height: 1
}

html.bp-s .uk-icon-xlarge\@s {
    font-size: var(--sizes-icon-xlarge);
    width: var(--sizes-icon-xlarge);
    height: var(--sizes-icon-xlarge);
    line-height: 1
}

html.bp-s .uk-icon-2xlarge\@s {
    font-size: var(--sizes-icon-2xlarge);
    width: var(--sizes-icon-2xlarge);
    height: var(--sizes-icon-2xlarge);
    line-height: 1
}

html.bp-m .uk-icon\@m {
    font-size: var(--sizes-icon);
    width: var(--sizes-icon);
    height: var(--sizes-icon);
    line-height: 1
}

html.bp-m .uk-icon-3xsmall\@m {
    font-size: var(--sizes-icon-3xsmall);
    width: var(--sizes-icon-3xsmall);
    height: var(--sizes-icon-3xsmall);
    line-height: 1
}

html.bp-m .uk-icon-2xsmall\@m {
    font-size: var(--sizes-icon-2xsmall);
    width: var(--sizes-icon-2xsmall);
    height: var(--sizes-icon-2xsmall);
    line-height: 1
}

html.bp-m .uk-icon-xsmall\@m {
    font-size: var(--sizes-icon-xsmall);
    width: var(--sizes-icon-xsmall);
    height: var(--sizes-icon-xsmall);
    line-height: 1
}

html.bp-m .uk-icon-small\@m {
    font-size: var(--sizes-icon-small);
    width: var(--sizes-icon-small);
    height: var(--sizes-icon-small);
    line-height: 1
}

html.bp-m .uk-icon-medium\@m {
    font-size: var(--sizes-icon-medium);
    width: var(--sizes-icon-medium);
    height: var(--sizes-icon-medium);
    line-height: 1
}

html.bp-m .uk-icon-large\@m {
    font-size: var(--sizes-icon-large);
    width: var(--sizes-icon-large);
    height: var(--sizes-icon-large);
    line-height: 1
}

html.bp-m .uk-icon-xlarge\@m {
    font-size: var(--sizes-icon-xlarge);
    width: var(--sizes-icon-xlarge);
    height: var(--sizes-icon-xlarge);
    line-height: 1
}

html.bp-m .uk-icon-2xlarge\@m {
    font-size: var(--sizes-icon-2xlarge);
    width: var(--sizes-icon-2xlarge);
    height: var(--sizes-icon-2xlarge);
    line-height: 1
}

html.bp-l .uk-icon\@l {
    font-size: var(--sizes-icon);
    width: var(--sizes-icon);
    height: var(--sizes-icon);
    line-height: 1
}

html.bp-l .uk-icon-3xsmall\@l {
    font-size: var(--sizes-icon-3xsmall);
    width: var(--sizes-icon-3xsmall);
    height: var(--sizes-icon-3xsmall);
    line-height: 1
}

html.bp-l .uk-icon-2xsmall\@l {
    font-size: var(--sizes-icon-2xsmall);
    width: var(--sizes-icon-2xsmall);
    height: var(--sizes-icon-2xsmall);
    line-height: 1
}

html.bp-l .uk-icon-xsmall\@l {
    font-size: var(--sizes-icon-xsmall);
    width: var(--sizes-icon-xsmall);
    height: var(--sizes-icon-xsmall);
    line-height: 1
}

html.bp-l .uk-icon-small\@l {
    font-size: var(--sizes-icon-small);
    width: var(--sizes-icon-small);
    height: var(--sizes-icon-small);
    line-height: 1
}

html.bp-l .uk-icon-medium\@l {
    font-size: var(--sizes-icon-medium);
    width: var(--sizes-icon-medium);
    height: var(--sizes-icon-medium);
    line-height: 1
}

html.bp-l .uk-icon-large\@l {
    font-size: var(--sizes-icon-large);
    width: var(--sizes-icon-large);
    height: var(--sizes-icon-large);
    line-height: 1
}

html.bp-l .uk-icon-xlarge\@l {
    font-size: var(--sizes-icon-xlarge);
    width: var(--sizes-icon-xlarge);
    height: var(--sizes-icon-xlarge);
    line-height: 1
}

html.bp-l .uk-icon-2xlarge\@l {
    font-size: var(--sizes-icon-2xlarge);
    width: var(--sizes-icon-2xlarge);
    height: var(--sizes-icon-2xlarge);
    line-height: 1
}

html.bp-xl .uk-icon\@xl {
    font-size: var(--sizes-icon);
    width: var(--sizes-icon);
    height: var(--sizes-icon);
    line-height: 1
}

html.bp-xl .uk-icon-3xsmall\@xl {
    font-size: var(--sizes-icon-3xsmall);
    width: var(--sizes-icon-3xsmall);
    height: var(--sizes-icon-3xsmall);
    line-height: 1
}

html.bp-xl .uk-icon-2xsmall\@xl {
    font-size: var(--sizes-icon-2xsmall);
    width: var(--sizes-icon-2xsmall);
    height: var(--sizes-icon-2xsmall);
    line-height: 1
}

html.bp-xl .uk-icon-xsmall\@xl {
    font-size: var(--sizes-icon-xsmall);
    width: var(--sizes-icon-xsmall);
    height: var(--sizes-icon-xsmall);
    line-height: 1
}

html.bp-xl .uk-icon-small\@xl {
    font-size: var(--sizes-icon-small);
    width: var(--sizes-icon-small);
    height: var(--sizes-icon-small);
    line-height: 1
}

html.bp-xl .uk-icon-medium\@xl {
    font-size: var(--sizes-icon-medium);
    width: var(--sizes-icon-medium);
    height: var(--sizes-icon-medium);
    line-height: 1
}

html.bp-xl .uk-icon-large\@xl {
    font-size: var(--sizes-icon-large);
    width: var(--sizes-icon-large);
    height: var(--sizes-icon-large);
    line-height: 1
}

html.bp-xl .uk-icon-xlarge\@xl {
    font-size: var(--sizes-icon-xlarge);
    width: var(--sizes-icon-xlarge);
    height: var(--sizes-icon-xlarge);
    line-height: 1
}

html.bp-xl .uk-icon-2xlarge\@xl {
    font-size: var(--sizes-icon-2xlarge);
    width: var(--sizes-icon-2xlarge);
    height: var(--sizes-icon-2xlarge);
    line-height: 1
}

.uk-overflow-hidden-horizontal {
    overflow-x: hidden
}

.uk-overflow-hidden-vertical {
    overflow-y: hidden
}

.uk-heading-line>::after,.uk-heading-line>::before {
    top: calc(50% + 2px)
}

.uk-overflow-unset,html.bp-l .uk-overflow-unset\@l,html.bp-m .uk-overflow-unset\@m,html.bp-s .uk-overflow-unset\@s,html.bp-xl .uk-overflow-unset\@xl,html.bp-xs .uk-overflow-unset\@xs {
    overflow: unset!important
}

.uk-overflow-hide,html.bp-l .uk-overflow-hide\@l,html.bp-m .uk-overflow-hide\@m,html.bp-s .uk-overflow-hide\@s,html.bp-xl .uk-overflow-hide\@xl,html.bp-xs .uk-overflow-hide\@xs {
    overflow: hidden!important
}

.uk-clip-left,html.bp-l .uk-clip-left\@l,html.bp-m .uk-clip-left\@m,html.bp-s .uk-clip-left\@s,html.bp-xl .uk-clip-left\@xl,html.bp-xs .uk-clip-left\@xs {
    clip-path: inset(0 -1000px 0 0)!important
}

.uk-clip-right,html.bp-l .uk-clip-right\@l,html.bp-m .uk-clip-right\@m,html.bp-s .uk-clip-right\@s,html.bp-xl .uk-clip-right\@xl,html.bp-xs .uk-clip-right\@xs {
    clip-path: inset(0 1000px 0 0)!important
}

.uk-opacity-0 {
    opacity: 0
}

.uk-opacity-10 {
    opacity: .1
}

.uk-opacity-20 {
    opacity: .2
}

.uk-opacity-30 {
    opacity: .3
}

.uk-opacity-40 {
    opacity: .4
}

.uk-opacity-50 {
    opacity: .5
}

.uk-opacity-60 {
    opacity: .6
}

.uk-opacity-70 {
    opacity: .7
}

.uk-opacity-80 {
    opacity: .8
}

.uk-opacity-90 {
    opacity: .9
}

.uk-opacity-100 {
    opacity: 1
}

.uk-position-2xsmall {
    margin: 4px
}

.uk-position-xsmall {
    margin: 8px
}

.uk-position-small {
    margin: 16px
}

.uk-position-medium {
    margin: 24px
}

.uk-position-large {
    margin: 32px
}

.uk-position-xlarge {
    margin: 48px
}

.uk-position-2xlarge {
    margin: 56px
}

.uk-position html.bp-xs .uk-position-2xsmall {
    margin: 4px
}

.uk-position html.bp-xs .uk-position-xsmall {
    margin: 8px
}

.uk-position html.bp-xs .uk-position-small {
    margin: 16px
}

.uk-position html.bp-xs .uk-position-medium {
    margin: 24px
}

.uk-position html.bp-xs .uk-position-large {
    margin: 32px
}

.uk-position html.bp-xs .uk-position-xlarge {
    margin: 48px
}

.uk-position html.bp-xs .uk-position-2xlarge {
    margin: 56px
}

.uk-position html.bp-s .uk-position-2xsmall {
    margin: 4px
}

.uk-position html.bp-s .uk-position-xsmall {
    margin: 8px
}

.uk-position html.bp-s .uk-position-small {
    margin: 16px
}

.uk-position html.bp-s .uk-position-medium {
    margin: 24px
}

.uk-position html.bp-s .uk-position-large {
    margin: 32px
}

.uk-position html.bp-s .uk-position-xlarge {
    margin: 48px
}

.uk-position html.bp-s .uk-position-2xlarge {
    margin: 56px
}

.uk-position html.bp-m .uk-position-2xsmall {
    margin: 4px
}

.uk-position html.bp-m .uk-position-xsmall {
    margin: 8px
}

.uk-position html.bp-m .uk-position-small {
    margin: 16px
}

.uk-position html.bp-m .uk-position-medium {
    margin: 24px
}

.uk-position html.bp-m .uk-position-large {
    margin: 32px
}

.uk-position html.bp-m .uk-position-xlarge {
    margin: 48px
}

.uk-position html.bp-m .uk-position-2xlarge {
    margin: 56px
}

.uk-position html.bp-l .uk-position-2xsmall {
    margin: 4px
}

.uk-position html.bp-l .uk-position-xsmall {
    margin: 8px
}

.uk-position html.bp-l .uk-position-small {
    margin: 16px
}

.uk-position html.bp-l .uk-position-medium {
    margin: 24px
}

.uk-position html.bp-l .uk-position-large {
    margin: 32px
}

.uk-position html.bp-l .uk-position-xlarge {
    margin: 48px
}

.uk-position html.bp-l .uk-position-2xlarge {
    margin: 56px
}

.uk-position html.bp-xl .uk-position-2xsmall {
    margin: 4px
}

.uk-position html.bp-xl .uk-position-xsmall {
    margin: 8px
}

.uk-position html.bp-xl .uk-position-small {
    margin: 16px
}

.uk-position html.bp-xl .uk-position-medium {
    margin: 24px
}

.uk-position html.bp-xl .uk-position-large {
    margin: 32px
}

.uk-position html.bp-xl .uk-position-xlarge {
    margin: 48px
}

.uk-position html.bp-xl .uk-position-2xlarge {
    margin: 56px
}

[class*=uk-box-shadow] {
    --shadow-color: rgba(0, 0, 0, 0.08)
}

.uk-dark [class*=uk-box-shadow],[class*=uk-box-shadow].uk-dark {
    --shadow-color: rgba(0, 0, 0, 0.16)
}

.uk-box-shadow-2xsmall {
    box-shadow: 0 2px 4px -1px var(--shadow-color)
}

.uk-box-shadow-xsmall {
    box-shadow: 0 3px 8px -1px var(--shadow-color)
}

.uk-box-shadow-small {
    box-shadow: 0 4px 16px -1px var(--shadow-color)
}

.uk-box-shadow-medium {
    box-shadow: 0 5px 24px -1px var(--shadow-color)
}

.uk-box-shadow-large {
    box-shadow: 0 6px 32px -1px var(--shadow-color)
}

.uk-box-shadow-xlarge {
    box-shadow: 0 7px 48px -1px var(--shadow-color)
}

.uk-box-shadow-2xlarge {
    box-shadow: 0 8px 64px -1px var(--shadow-color)
}

.uk-dark .uni-circles>div {
    display: block;
    width: 600px;
    height: 600px;
    border-radius: 100%;
    position: fixed;
    background: linear-gradient(to left,var(--color-tertiary),var(--color-quaternary));
    filter: blur(300px);
    z-index: -1
}

.uk-dark .uni-circles>div:first-child {
    left: -20%;
    top: -20%
}

.uk-dark .uni-circles>div:last-child {
    right: -20%;
    bottom: -20%;
    mix-blend-mode: exclusion;
    background: linear-gradient(to left,var(--color-primary),var(--color-secondary))
}

.uni-preloader>.loading>div {
    border-top-color: var(--color-primary)
}

.sr-only:not(:focus):not(:active) {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px
}

pre {
    tab-size: 4;
    overflow: auto;
    padding: 25px;
    color: inherit;
    border: 0 solid #e5e5e5;
    border-radius: 0;
    background: #f8f8f8
}

:not(pre)>code,:not(pre)>kbd,:not(pre)>samp,pre {
    font-family: "Operator Mono SSm",Menlo,Monaco,"Courier New",monospace;
    font-size: 13px;
    line-height: 24px
}

:not(pre)>samp {
    color: inherit
}

.hljs {
    display: block;
    color: #333;
    padding: 0;
    background: 0 0
}

.hljs-comment,.hljs-meta {
    color: #969896
}

.hljs-emphasis,.hljs-quote,.hljs-string,.hljs-strong,.hljs-template-variable,.hljs-variable {
    color: #f0506e
}

.hljs-keyword,.hljs-selector-tag,.hljs-type {
    color: #1f34aa
}

.hljs-attribute,.hljs-bullet,.hljs-literal,.hljs-symbol {
    color: #0086b3
}

.hljs-name,.hljs-section {
    color: #63a35c
}

.hljs-tag {
    color: #333
}

.hljs-attr,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-selector-pseudo,.hljs-title {
    color: #795da3
}

.hljs-addition {
    color: #55a532;
    background-color: #eaffea
}

.hljs-deletion {
    color: #bd2c00;
    background-color: #ffecec
}

.hljs-link {
    text-decoration: underline
}

.hljs-attribute,.hljs-doctag,.hljs-keyword,.hljs-meta-keyword,.hljs-name,.hljs-selector-tag {
    font-weight: 400
}

.uk-cover:not([style*="width:"]) {
    width: 100%;
    height: 100%;
    object-fit: cover
}

.swiper:not(.swiper-initialized)>* {
    display: none
}

.uk-grid,.uk-grid-column {
    margin-left: calc(var(--sizes-grid) * -1)!important
}

.uk-grid-column>*,.uk-grid>* {
    --gap-size: var(--sizes-grid);
    padding-left: var(--sizes-grid)!important
}

*+.uk-grid-margin,.uk-grid+.uk-grid,.uk-grid+.uk-grid-row,.uk-grid-row>.uk-grid-margin,.uk-grid>.uk-grid-margin {
    margin-top: var(--sizes-grid)!important
}

.uk-grid-divider.uk-grid-column>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid)/ 2)!important;
    z-index: 1
}

.uk-grid-divider.uk-grid-column.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid);
    z-index: 1
}

.uk-grid-divider.uk-grid-row>:not(.uk-first-column)::before {
    z-index: 1
}

.uk-grid-divider.uk-grid-row.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid)/ 2 * -1)!important;
    z-index: 1
}

.uk-grid-divider.uk-grid>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid)/ 2)!important;
    z-index: 1
}

.uk-grid-divider.uk-grid.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid)/ 2 * -1)!important;
    left: var(--sizes-grid);
    z-index: 1
}

.uk-grid.uk-grid-collapse,.uk-grid.uk-grid-column-collapse {
    margin-left: calc(var(--sizes-grid-collapse) * -1)!important
}

.uk-grid.uk-grid-collapse>*,.uk-grid.uk-grid-column-collapse>* {
    --gap-size: var(--sizes-grid-collapse);
    padding-left: var(--sizes-grid-collapse)!important
}

*+.uk-grid-margin-collapse,.uk-grid+.uk-grid-collapse,.uk-grid+.uk-grid-row-collapse,.uk-grid-collapse>.uk-grid-margin,.uk-grid-row-collapse>.uk-grid-margin {
    margin-top: var(--sizes-grid-collapse)!important
}

.uk-grid-divider.uk-grid-column-collapse>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-collapse)/ 2)!important;
    z-index: 1
}

.uk-grid-divider.uk-grid-column-collapse.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-collapse);
    z-index: 1
}

.uk-grid-divider.uk-grid-row-collapse>:not(.uk-first-column)::before {
    z-index: 1
}

.uk-grid-divider.uk-grid-row-collapse.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-collapse)/ 2 * -1)!important;
    z-index: 1
}

.uk-grid-divider.uk-grid-collapse>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-collapse)/ 2)!important;
    z-index: 1
}

.uk-grid-divider.uk-grid-collapse.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-collapse)/ 2 * -1)!important;
    left: var(--sizes-grid-collapse);
    z-index: 1
}

.uk-grid.uk-grid-column-gallery,.uk-grid.uk-grid-gallery {
    margin-left: calc(var(--sizes-grid-gallery) * -1)!important
}

.uk-grid.uk-grid-column-gallery>*,.uk-grid.uk-grid-gallery>* {
    --gap-size: var(--sizes-grid-gallery);
    padding-left: var(--sizes-grid-gallery)!important
}

*+.uk-grid-margin-gallery,.uk-grid+.uk-grid-gallery,.uk-grid+.uk-grid-row-gallery,.uk-grid-gallery>.uk-grid-margin,.uk-grid-row-gallery>.uk-grid-margin {
    margin-top: var(--sizes-grid-gallery)!important
}

.uk-grid-divider.uk-grid-column-gallery>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-gallery)/ 2)!important;
    z-index: 1
}

.uk-grid-divider.uk-grid-column-gallery.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-gallery);
    z-index: 1
}

.uk-grid-divider.uk-grid-row-gallery>:not(.uk-first-column)::before {
    z-index: 1
}

.uk-grid-divider.uk-grid-row-gallery.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-gallery)/ 2 * -1)!important;
    z-index: 1
}

.uk-grid-divider.uk-grid-gallery>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-gallery)/ 2)!important;
    z-index: 1
}

.uk-grid-divider.uk-grid-gallery.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-gallery)/ 2 * -1)!important;
    left: var(--sizes-grid-gallery);
    z-index: 1
}

.uk-grid.uk-grid-2xsmall,.uk-grid.uk-grid-column-2xsmall {
    margin-left: calc(var(--sizes-grid-2xsmall) * -1)!important
}

.uk-grid.uk-grid-2xsmall>*,.uk-grid.uk-grid-column-2xsmall>* {
    --gap-size: var(--sizes-grid-2xsmall);
    padding-left: var(--sizes-grid-2xsmall)!important
}

*+.uk-grid-margin-2xsmall,.uk-grid+.uk-grid-2xsmall,.uk-grid+.uk-grid-row-2xsmall,.uk-grid-2xsmall>.uk-grid-margin,.uk-grid-row-2xsmall>.uk-grid-margin {
    margin-top: var(--sizes-grid-2xsmall)!important
}

.uk-grid-divider.uk-grid-column-2xsmall>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-2xsmall)/ 2)!important;
    z-index: 1
}

.uk-grid-divider.uk-grid-column-2xsmall.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-2xsmall);
    z-index: 1
}

.uk-grid-divider.uk-grid-row-2xsmall>:not(.uk-first-column)::before {
    z-index: 1
}

.uk-grid-divider.uk-grid-row-2xsmall.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-2xsmall)/ 2 * -1)!important;
    z-index: 1
}

.uk-grid-divider.uk-grid-2xsmall>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-2xsmall)/ 2)!important;
    z-index: 1
}

.uk-grid-divider.uk-grid-2xsmall.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-2xsmall)/ 2 * -1)!important;
    left: var(--sizes-grid-2xsmall);
    z-index: 1
}

.uk-grid.uk-grid-column-xsmall,.uk-grid.uk-grid-xsmall {
    margin-left: calc(var(--sizes-grid-xsmall) * -1)!important
}

.uk-grid.uk-grid-column-xsmall>*,.uk-grid.uk-grid-xsmall>* {
    --gap-size: var(--sizes-grid-xsmall);
    padding-left: var(--sizes-grid-xsmall)!important
}

*+.uk-grid-margin-xsmall,.uk-grid+.uk-grid-row-xsmall,.uk-grid+.uk-grid-xsmall,.uk-grid-row-xsmall>.uk-grid-margin,.uk-grid-xsmall>.uk-grid-margin {
    margin-top: var(--sizes-grid-xsmall)!important
}

.uk-grid-divider.uk-grid-column-xsmall>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-xsmall)/ 2)!important;
    z-index: 1
}

.uk-grid-divider.uk-grid-column-xsmall.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-xsmall);
    z-index: 1
}

.uk-grid-divider.uk-grid-row-xsmall>:not(.uk-first-column)::before {
    z-index: 1
}

.uk-grid-divider.uk-grid-row-xsmall.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-xsmall)/ 2 * -1)!important;
    z-index: 1
}

.uk-grid-divider.uk-grid-xsmall>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-xsmall)/ 2)!important;
    z-index: 1
}

.uk-grid-divider.uk-grid-xsmall.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-xsmall)/ 2 * -1)!important;
    left: var(--sizes-grid-xsmall);
    z-index: 1
}

.uk-grid.uk-grid-column-small,.uk-grid.uk-grid-small {
    margin-left: calc(var(--sizes-grid-small) * -1)!important
}

.uk-grid.uk-grid-column-small>*,.uk-grid.uk-grid-small>* {
    --gap-size: var(--sizes-grid-small);
    padding-left: var(--sizes-grid-small)!important
}

*+.uk-grid-margin-small,.uk-grid+.uk-grid-row-small,.uk-grid+.uk-grid-small,.uk-grid-row-small>.uk-grid-margin,.uk-grid-small>.uk-grid-margin {
    margin-top: var(--sizes-grid-small)!important
}

.uk-grid-divider.uk-grid-column-small>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-small)/ 2)!important;
    z-index: 1
}

.uk-grid-divider.uk-grid-column-small.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-small);
    z-index: 1
}

.uk-grid-divider.uk-grid-row-small>:not(.uk-first-column)::before {
    z-index: 1
}

.uk-grid-divider.uk-grid-row-small.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-small)/ 2 * -1)!important;
    z-index: 1
}

.uk-grid-divider.uk-grid-small>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-small)/ 2)!important;
    z-index: 1
}

.uk-grid-divider.uk-grid-small.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-small)/ 2 * -1)!important;
    left: var(--sizes-grid-small);
    z-index: 1
}

.uk-grid.uk-grid-column-medium,.uk-grid.uk-grid-medium {
    margin-left: calc(var(--sizes-grid-medium) * -1)!important
}

.uk-grid.uk-grid-column-medium>*,.uk-grid.uk-grid-medium>* {
    --gap-size: var(--sizes-grid-medium);
    padding-left: var(--sizes-grid-medium)!important
}

*+.uk-grid-margin-medium,.uk-grid+.uk-grid-medium,.uk-grid+.uk-grid-row-medium,.uk-grid-medium>.uk-grid-margin,.uk-grid-row-medium>.uk-grid-margin {
    margin-top: var(--sizes-grid-medium)!important
}

.uk-grid-divider.uk-grid-column-medium>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-medium)/ 2)!important;
    z-index: 1
}

.uk-grid-divider.uk-grid-column-medium.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-medium);
    z-index: 1
}

.uk-grid-divider.uk-grid-row-medium>:not(.uk-first-column)::before {
    z-index: 1
}

.uk-grid-divider.uk-grid-row-medium.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-medium)/ 2 * -1)!important;
    z-index: 1
}

.uk-grid-divider.uk-grid-medium>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-medium)/ 2)!important;
    z-index: 1
}

.uk-grid-divider.uk-grid-medium.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-medium)/ 2 * -1)!important;
    left: var(--sizes-grid-medium);
    z-index: 1
}

.uk-grid.uk-grid-column-large,.uk-grid.uk-grid-large {
    margin-left: calc(var(--sizes-grid-large) * -1)!important
}

.uk-grid.uk-grid-column-large>*,.uk-grid.uk-grid-large>* {
    --gap-size: var(--sizes-grid-large);
    padding-left: var(--sizes-grid-large)!important
}

*+.uk-grid-margin-large,.uk-grid+.uk-grid-large,.uk-grid+.uk-grid-row-large,.uk-grid-large>.uk-grid-margin,.uk-grid-row-large>.uk-grid-margin {
    margin-top: var(--sizes-grid-large)!important
}

.uk-grid-divider.uk-grid-column-large>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-large)/ 2)!important;
    z-index: 1
}

.uk-grid-divider.uk-grid-column-large.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-large);
    z-index: 1
}

.uk-grid-divider.uk-grid-row-large>:not(.uk-first-column)::before {
    z-index: 1
}

.uk-grid-divider.uk-grid-row-large.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-large)/ 2 * -1)!important;
    z-index: 1
}

.uk-grid-divider.uk-grid-large>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-large)/ 2)!important;
    z-index: 1
}

.uk-grid-divider.uk-grid-large.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-large)/ 2 * -1)!important;
    left: var(--sizes-grid-large);
    z-index: 1
}

.uk-grid.uk-grid-column-xlarge,.uk-grid.uk-grid-xlarge {
    margin-left: calc(var(--sizes-grid-xlarge) * -1)!important
}

.uk-grid.uk-grid-column-xlarge>*,.uk-grid.uk-grid-xlarge>* {
    --gap-size: var(--sizes-grid-xlarge);
    padding-left: var(--sizes-grid-xlarge)!important
}

*+.uk-grid-margin-xlarge,.uk-grid+.uk-grid-row-xlarge,.uk-grid+.uk-grid-xlarge,.uk-grid-row-xlarge>.uk-grid-margin,.uk-grid-xlarge>.uk-grid-margin {
    margin-top: var(--sizes-grid-xlarge)!important
}

.uk-grid-divider.uk-grid-column-xlarge>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-xlarge)/ 2)!important;
    z-index: 1
}

.uk-grid-divider.uk-grid-column-xlarge.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-xlarge);
    z-index: 1
}

.uk-grid-divider.uk-grid-row-xlarge>:not(.uk-first-column)::before {
    z-index: 1
}

.uk-grid-divider.uk-grid-row-xlarge.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-xlarge)/ 2 * -1)!important;
    z-index: 1
}

.uk-grid-divider.uk-grid-xlarge>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-xlarge)/ 2)!important;
    z-index: 1
}

.uk-grid-divider.uk-grid-xlarge.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-xlarge)/ 2 * -1)!important;
    left: var(--sizes-grid-xlarge);
    z-index: 1
}

.uk-grid.uk-grid-2xlarge,.uk-grid.uk-grid-column-2xlarge {
    margin-left: calc(var(--sizes-grid-2xlarge) * -1)!important
}

.uk-grid.uk-grid-2xlarge>*,.uk-grid.uk-grid-column-2xlarge>* {
    --gap-size: var(--sizes-grid-2xlarge);
    padding-left: var(--sizes-grid-2xlarge)!important
}

*+.uk-grid-margin-2xlarge,.uk-grid+.uk-grid-2xlarge,.uk-grid+.uk-grid-row-2xlarge,.uk-grid-2xlarge>.uk-grid-margin,.uk-grid-row-2xlarge>.uk-grid-margin {
    margin-top: var(--sizes-grid-2xlarge)!important
}

.uk-grid-divider.uk-grid-column-2xlarge>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-2xlarge)/ 2)!important;
    z-index: 1
}

.uk-grid-divider.uk-grid-column-2xlarge.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-2xlarge);
    z-index: 1
}

.uk-grid-divider.uk-grid-row-2xlarge>:not(.uk-first-column)::before {
    z-index: 1
}

.uk-grid-divider.uk-grid-row-2xlarge.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-2xlarge)/ 2 * -1)!important;
    z-index: 1
}

.uk-grid-divider.uk-grid-2xlarge>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-2xlarge)/ 2)!important;
    z-index: 1
}

.uk-grid-divider.uk-grid-2xlarge.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-2xlarge)/ 2 * -1)!important;
    left: var(--sizes-grid-2xlarge);
    z-index: 1
}

.uk-grid.uk-grid-3xlarge,.uk-grid.uk-grid-column-3xlarge {
    margin-left: calc(var(--sizes-grid-3xlarge) * -1)!important
}

.uk-grid.uk-grid-3xlarge>*,.uk-grid.uk-grid-column-3xlarge>* {
    --gap-size: var(--sizes-grid-3xlarge);
    padding-left: var(--sizes-grid-3xlarge)!important
}

*+.uk-grid-margin-3xlarge,.uk-grid+.uk-grid-3xlarge,.uk-grid+.uk-grid-row-3xlarge,.uk-grid-3xlarge>.uk-grid-margin,.uk-grid-row-3xlarge>.uk-grid-margin {
    margin-top: var(--sizes-grid-3xlarge)!important
}

.uk-grid-divider.uk-grid-column-3xlarge>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-3xlarge)/ 2)!important;
    z-index: 1
}

.uk-grid-divider.uk-grid-column-3xlarge.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-3xlarge);
    z-index: 1
}

.uk-grid-divider.uk-grid-row-3xlarge>:not(.uk-first-column)::before {
    z-index: 1
}

.uk-grid-divider.uk-grid-row-3xlarge.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-3xlarge)/ 2 * -1)!important;
    z-index: 1
}

.uk-grid-divider.uk-grid-3xlarge>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-3xlarge)/ 2)!important;
    z-index: 1
}

.uk-grid-divider.uk-grid-3xlarge.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-3xlarge)/ 2 * -1)!important;
    left: var(--sizes-grid-3xlarge);
    z-index: 1
}

html.bp-xs .uk-grid-column\@xs,html.bp-xs .uk-grid\@xs {
    margin-left: calc(var(--sizes-grid) * -1)!important
}

html.bp-xs .uk-grid-column\@xs>*,html.bp-xs .uk-grid\@xs>* {
    --gap-size: var(--sizes-grid);
    padding-left: var(--sizes-grid)!important
}

html.bp-xs *+.uk-grid-margin\@xs,html.bp-xs .uk-grid+.uk-grid-row\@xs,html.bp-xs .uk-grid+.uk-grid\@xs,html.bp-xs .uk-grid-row\@xs>.uk-grid-margin,html.bp-xs .uk-grid\@xs>.uk-grid-margin {
    margin-top: var(--sizes-grid)!important
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-column\@xs>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid)/ 2)!important;
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-column\@xs.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid);
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-row\@xs>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-row\@xs.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid)/ 2 * -1)!important;
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid\@xs>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid)/ 2)!important;
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid\@xs.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid)/ 2 * -1)!important;
    left: var(--sizes-grid);
    z-index: 1
}

html.bp-xs .uk-grid.uk-grid-collapse\@xs,html.bp-xs .uk-grid.uk-grid-column-collapse\@xs {
    margin-left: calc(var(--sizes-grid-collapse) * -1)!important
}

html.bp-xs .uk-grid.uk-grid-collapse\@xs>*,html.bp-xs .uk-grid.uk-grid-column-collapse\@xs>* {
    --gap-size: var(--sizes-grid-collapse);
    padding-left: var(--sizes-grid-collapse)!important
}

html.bp-xs *+.uk-grid-margin-collapse\@xs,html.bp-xs .uk-grid+.uk-grid-collapse\@xs,html.bp-xs .uk-grid+.uk-grid-row-collapse\@xs,html.bp-xs .uk-grid-collapse\@xs>.uk-grid-margin,html.bp-xs .uk-grid-row-collapse\@xs>.uk-grid-margin {
    margin-top: var(--sizes-grid-collapse)!important
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-column-collapse\@xs>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-collapse)/ 2)!important;
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-column-collapse\@xs.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-collapse);
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-row-collapse\@xs>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-row-collapse\@xs.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-collapse)/ 2 * -1)!important;
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-collapse\@xs>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-collapse)/ 2)!important;
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-collapse\@xs.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-collapse)/ 2 * -1)!important;
    left: var(--sizes-grid-collapse);
    z-index: 1
}

html.bp-xs .uk-grid.uk-grid-column-gallery\@xs,html.bp-xs .uk-grid.uk-grid-gallery\@xs {
    margin-left: calc(var(--sizes-grid-gallery) * -1)!important
}

html.bp-xs .uk-grid.uk-grid-column-gallery\@xs>*,html.bp-xs .uk-grid.uk-grid-gallery\@xs>* {
    --gap-size: var(--sizes-grid-gallery);
    padding-left: var(--sizes-grid-gallery)!important
}

html.bp-xs *+.uk-grid-margin-gallery\@xs,html.bp-xs .uk-grid+.uk-grid-gallery\@xs,html.bp-xs .uk-grid+.uk-grid-row-gallery\@xs,html.bp-xs .uk-grid-gallery\@xs>.uk-grid-margin,html.bp-xs .uk-grid-row-gallery\@xs>.uk-grid-margin {
    margin-top: var(--sizes-grid-gallery)!important
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-column-gallery\@xs>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-gallery)/ 2)!important;
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-column-gallery\@xs.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-gallery);
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-row-gallery\@xs>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-row-gallery\@xs.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-gallery)/ 2 * -1)!important;
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-gallery\@xs>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-gallery)/ 2)!important;
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-gallery\@xs.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-gallery)/ 2 * -1)!important;
    left: var(--sizes-grid-gallery);
    z-index: 1
}

html.bp-xs .uk-grid.uk-grid-2xsmall\@xs,html.bp-xs .uk-grid.uk-grid-column-2xsmall\@xs {
    margin-left: calc(var(--sizes-grid-2xsmall) * -1)!important
}

html.bp-xs .uk-grid.uk-grid-2xsmall\@xs>*,html.bp-xs .uk-grid.uk-grid-column-2xsmall\@xs>* {
    --gap-size: var(--sizes-grid-2xsmall);
    padding-left: var(--sizes-grid-2xsmall)!important
}

html.bp-xs *+.uk-grid-margin-2xsmall\@xs,html.bp-xs .uk-grid+.uk-grid-2xsmall\@xs,html.bp-xs .uk-grid+.uk-grid-row-2xsmall\@xs,html.bp-xs .uk-grid-2xsmall\@xs>.uk-grid-margin,html.bp-xs .uk-grid-row-2xsmall\@xs>.uk-grid-margin {
    margin-top: var(--sizes-grid-2xsmall)!important
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-column-2xsmall\@xs>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-2xsmall)/ 2)!important;
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-column-2xsmall\@xs.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-2xsmall);
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-row-2xsmall\@xs>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-row-2xsmall\@xs.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-2xsmall)/ 2 * -1)!important;
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-2xsmall\@xs>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-2xsmall)/ 2)!important;
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-2xsmall\@xs.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-2xsmall)/ 2 * -1)!important;
    left: var(--sizes-grid-2xsmall);
    z-index: 1
}

html.bp-xs .uk-grid.uk-grid-column-xsmall\@xs,html.bp-xs .uk-grid.uk-grid-xsmall\@xs {
    margin-left: calc(var(--sizes-grid-xsmall) * -1)!important
}

html.bp-xs .uk-grid.uk-grid-column-xsmall\@xs>*,html.bp-xs .uk-grid.uk-grid-xsmall\@xs>* {
    --gap-size: var(--sizes-grid-xsmall);
    padding-left: var(--sizes-grid-xsmall)!important
}

html.bp-xs *+.uk-grid-margin-xsmall\@xs,html.bp-xs .uk-grid+.uk-grid-row-xsmall\@xs,html.bp-xs .uk-grid+.uk-grid-xsmall\@xs,html.bp-xs .uk-grid-row-xsmall\@xs>.uk-grid-margin,html.bp-xs .uk-grid-xsmall\@xs>.uk-grid-margin {
    margin-top: var(--sizes-grid-xsmall)!important
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-column-xsmall\@xs>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-xsmall)/ 2)!important;
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-column-xsmall\@xs.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-xsmall);
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-row-xsmall\@xs>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-row-xsmall\@xs.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-xsmall)/ 2 * -1)!important;
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-xsmall\@xs>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-xsmall)/ 2)!important;
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-xsmall\@xs.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-xsmall)/ 2 * -1)!important;
    left: var(--sizes-grid-xsmall);
    z-index: 1
}

html.bp-xs .uk-grid.uk-grid-column-small\@xs,html.bp-xs .uk-grid.uk-grid-small\@xs {
    margin-left: calc(var(--sizes-grid-small) * -1)!important
}

html.bp-xs .uk-grid.uk-grid-column-small\@xs>*,html.bp-xs .uk-grid.uk-grid-small\@xs>* {
    --gap-size: var(--sizes-grid-small);
    padding-left: var(--sizes-grid-small)!important
}

html.bp-xs *+.uk-grid-margin-small\@xs,html.bp-xs .uk-grid+.uk-grid-row-small\@xs,html.bp-xs .uk-grid+.uk-grid-small\@xs,html.bp-xs .uk-grid-row-small\@xs>.uk-grid-margin,html.bp-xs .uk-grid-small\@xs>.uk-grid-margin {
    margin-top: var(--sizes-grid-small)!important
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-column-small\@xs>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-small)/ 2)!important;
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-column-small\@xs.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-small);
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-row-small\@xs>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-row-small\@xs.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-small)/ 2 * -1)!important;
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-small\@xs>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-small)/ 2)!important;
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-small\@xs.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-small)/ 2 * -1)!important;
    left: var(--sizes-grid-small);
    z-index: 1
}

html.bp-xs .uk-grid.uk-grid-column-medium\@xs,html.bp-xs .uk-grid.uk-grid-medium\@xs {
    margin-left: calc(var(--sizes-grid-medium) * -1)!important
}

html.bp-xs .uk-grid.uk-grid-column-medium\@xs>*,html.bp-xs .uk-grid.uk-grid-medium\@xs>* {
    --gap-size: var(--sizes-grid-medium);
    padding-left: var(--sizes-grid-medium)!important
}

html.bp-xs *+.uk-grid-margin-medium\@xs,html.bp-xs .uk-grid+.uk-grid-medium\@xs,html.bp-xs .uk-grid+.uk-grid-row-medium\@xs,html.bp-xs .uk-grid-medium\@xs>.uk-grid-margin,html.bp-xs .uk-grid-row-medium\@xs>.uk-grid-margin {
    margin-top: var(--sizes-grid-medium)!important
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-column-medium\@xs>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-medium)/ 2)!important;
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-column-medium\@xs.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-medium);
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-row-medium\@xs>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-row-medium\@xs.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-medium)/ 2 * -1)!important;
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-medium\@xs>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-medium)/ 2)!important;
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-medium\@xs.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-medium)/ 2 * -1)!important;
    left: var(--sizes-grid-medium);
    z-index: 1
}

html.bp-xs .uk-grid.uk-grid-column-large\@xs,html.bp-xs .uk-grid.uk-grid-large\@xs {
    margin-left: calc(var(--sizes-grid-large) * -1)!important
}

html.bp-xs .uk-grid.uk-grid-column-large\@xs>*,html.bp-xs .uk-grid.uk-grid-large\@xs>* {
    --gap-size: var(--sizes-grid-large);
    padding-left: var(--sizes-grid-large)!important
}

html.bp-xs *+.uk-grid-margin-large\@xs,html.bp-xs .uk-grid+.uk-grid-large\@xs,html.bp-xs .uk-grid+.uk-grid-row-large\@xs,html.bp-xs .uk-grid-large\@xs>.uk-grid-margin,html.bp-xs .uk-grid-row-large\@xs>.uk-grid-margin {
    margin-top: var(--sizes-grid-large)!important
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-column-large\@xs>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-large)/ 2)!important;
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-column-large\@xs.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-large);
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-row-large\@xs>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-row-large\@xs.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-large)/ 2 * -1)!important;
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-large\@xs>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-large)/ 2)!important;
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-large\@xs.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-large)/ 2 * -1)!important;
    left: var(--sizes-grid-large);
    z-index: 1
}

html.bp-xs .uk-grid.uk-grid-column-xlarge\@xs,html.bp-xs .uk-grid.uk-grid-xlarge\@xs {
    margin-left: calc(var(--sizes-grid-xlarge) * -1)!important
}

html.bp-xs .uk-grid.uk-grid-column-xlarge\@xs>*,html.bp-xs .uk-grid.uk-grid-xlarge\@xs>* {
    --gap-size: var(--sizes-grid-xlarge);
    padding-left: var(--sizes-grid-xlarge)!important
}

html.bp-xs *+.uk-grid-margin-xlarge\@xs,html.bp-xs .uk-grid+.uk-grid-row-xlarge\@xs,html.bp-xs .uk-grid+.uk-grid-xlarge\@xs,html.bp-xs .uk-grid-row-xlarge\@xs>.uk-grid-margin,html.bp-xs .uk-grid-xlarge\@xs>.uk-grid-margin {
    margin-top: var(--sizes-grid-xlarge)!important
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-column-xlarge\@xs>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-xlarge)/ 2)!important;
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-column-xlarge\@xs.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-xlarge);
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-row-xlarge\@xs>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-row-xlarge\@xs.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-xlarge)/ 2 * -1)!important;
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-xlarge\@xs>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-xlarge)/ 2)!important;
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-xlarge\@xs.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-xlarge)/ 2 * -1)!important;
    left: var(--sizes-grid-xlarge);
    z-index: 1
}

html.bp-xs .uk-grid.uk-grid-2xlarge\@xs,html.bp-xs .uk-grid.uk-grid-column-2xlarge\@xs {
    margin-left: calc(var(--sizes-grid-2xlarge) * -1)!important
}

html.bp-xs .uk-grid.uk-grid-2xlarge\@xs>*,html.bp-xs .uk-grid.uk-grid-column-2xlarge\@xs>* {
    --gap-size: var(--sizes-grid-2xlarge);
    padding-left: var(--sizes-grid-2xlarge)!important
}

html.bp-xs *+.uk-grid-margin-2xlarge\@xs,html.bp-xs .uk-grid+.uk-grid-2xlarge\@xs,html.bp-xs .uk-grid+.uk-grid-row-2xlarge\@xs,html.bp-xs .uk-grid-2xlarge\@xs>.uk-grid-margin,html.bp-xs .uk-grid-row-2xlarge\@xs>.uk-grid-margin {
    margin-top: var(--sizes-grid-2xlarge)!important
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-column-2xlarge\@xs>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-2xlarge)/ 2)!important;
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-column-2xlarge\@xs.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-2xlarge);
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-row-2xlarge\@xs>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-row-2xlarge\@xs.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-2xlarge)/ 2 * -1)!important;
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-2xlarge\@xs>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-2xlarge)/ 2)!important;
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-2xlarge\@xs.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-2xlarge)/ 2 * -1)!important;
    left: var(--sizes-grid-2xlarge);
    z-index: 1
}

html.bp-xs .uk-grid.uk-grid-3xlarge\@xs,html.bp-xs .uk-grid.uk-grid-column-3xlarge\@xs {
    margin-left: calc(var(--sizes-grid-3xlarge) * -1)!important
}

html.bp-xs .uk-grid.uk-grid-3xlarge\@xs>*,html.bp-xs .uk-grid.uk-grid-column-3xlarge\@xs>* {
    --gap-size: var(--sizes-grid-3xlarge);
    padding-left: var(--sizes-grid-3xlarge)!important
}

html.bp-xs *+.uk-grid-margin-3xlarge\@xs,html.bp-xs .uk-grid+.uk-grid-3xlarge\@xs,html.bp-xs .uk-grid+.uk-grid-row-3xlarge\@xs,html.bp-xs .uk-grid-3xlarge\@xs>.uk-grid-margin,html.bp-xs .uk-grid-row-3xlarge\@xs>.uk-grid-margin {
    margin-top: var(--sizes-grid-3xlarge)!important
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-column-3xlarge\@xs>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-3xlarge)/ 2)!important;
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-column-3xlarge\@xs.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-3xlarge);
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-row-3xlarge\@xs>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-row-3xlarge\@xs.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-3xlarge)/ 2 * -1)!important;
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-3xlarge\@xs>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-3xlarge)/ 2)!important;
    z-index: 1
}

html.bp-xs .uk-grid-divider\@xs.uk-grid-3xlarge\@xs.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-3xlarge)/ 2 * -1)!important;
    left: var(--sizes-grid-3xlarge);
    z-index: 1
}

html.bp-s .uk-grid-column\@s,html.bp-s .uk-grid\@s {
    margin-left: calc(var(--sizes-grid) * -1)!important
}

html.bp-s .uk-grid-column\@s>*,html.bp-s .uk-grid\@s>* {
    --gap-size: var(--sizes-grid);
    padding-left: var(--sizes-grid)!important
}

html.bp-s *+.uk-grid-margin\@s,html.bp-s .uk-grid+.uk-grid-row\@s,html.bp-s .uk-grid+.uk-grid\@s,html.bp-s .uk-grid-row\@s>.uk-grid-margin,html.bp-s .uk-grid\@s>.uk-grid-margin {
    margin-top: var(--sizes-grid)!important
}

html.bp-s .uk-grid-divider\@s.uk-grid-column\@s>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid)/ 2)!important;
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-column\@s.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid);
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-row\@s>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-row\@s.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid)/ 2 * -1)!important;
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid\@s>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid)/ 2)!important;
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid\@s.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid)/ 2 * -1)!important;
    left: var(--sizes-grid);
    z-index: 1
}

html.bp-s .uk-grid.uk-grid-collapse\@s,html.bp-s .uk-grid.uk-grid-column-collapse\@s {
    margin-left: calc(var(--sizes-grid-collapse) * -1)!important
}

html.bp-s .uk-grid.uk-grid-collapse\@s>*,html.bp-s .uk-grid.uk-grid-column-collapse\@s>* {
    --gap-size: var(--sizes-grid-collapse);
    padding-left: var(--sizes-grid-collapse)!important
}

html.bp-s *+.uk-grid-margin-collapse\@s,html.bp-s .uk-grid+.uk-grid-collapse\@s,html.bp-s .uk-grid+.uk-grid-row-collapse\@s,html.bp-s .uk-grid-collapse\@s>.uk-grid-margin,html.bp-s .uk-grid-row-collapse\@s>.uk-grid-margin {
    margin-top: var(--sizes-grid-collapse)!important
}

html.bp-s .uk-grid-divider\@s.uk-grid-column-collapse\@s>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-collapse)/ 2)!important;
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-column-collapse\@s.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-collapse);
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-row-collapse\@s>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-row-collapse\@s.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-collapse)/ 2 * -1)!important;
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-collapse\@s>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-collapse)/ 2)!important;
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-collapse\@s.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-collapse)/ 2 * -1)!important;
    left: var(--sizes-grid-collapse);
    z-index: 1
}

html.bp-s .uk-grid.uk-grid-column-gallery\@s,html.bp-s .uk-grid.uk-grid-gallery\@s {
    margin-left: calc(var(--sizes-grid-gallery) * -1)!important
}

html.bp-s .uk-grid.uk-grid-column-gallery\@s>*,html.bp-s .uk-grid.uk-grid-gallery\@s>* {
    --gap-size: var(--sizes-grid-gallery);
    padding-left: var(--sizes-grid-gallery)!important
}

html.bp-s *+.uk-grid-margin-gallery\@s,html.bp-s .uk-grid+.uk-grid-gallery\@s,html.bp-s .uk-grid+.uk-grid-row-gallery\@s,html.bp-s .uk-grid-gallery\@s>.uk-grid-margin,html.bp-s .uk-grid-row-gallery\@s>.uk-grid-margin {
    margin-top: var(--sizes-grid-gallery)!important
}

html.bp-s .uk-grid-divider\@s.uk-grid-column-gallery\@s>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-gallery)/ 2)!important;
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-column-gallery\@s.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-gallery);
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-row-gallery\@s>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-row-gallery\@s.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-gallery)/ 2 * -1)!important;
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-gallery\@s>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-gallery)/ 2)!important;
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-gallery\@s.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-gallery)/ 2 * -1)!important;
    left: var(--sizes-grid-gallery);
    z-index: 1
}

html.bp-s .uk-grid.uk-grid-2xsmall\@s,html.bp-s .uk-grid.uk-grid-column-2xsmall\@s {
    margin-left: calc(var(--sizes-grid-2xsmall) * -1)!important
}

html.bp-s .uk-grid.uk-grid-2xsmall\@s>*,html.bp-s .uk-grid.uk-grid-column-2xsmall\@s>* {
    --gap-size: var(--sizes-grid-2xsmall);
    padding-left: var(--sizes-grid-2xsmall)!important
}

html.bp-s *+.uk-grid-margin-2xsmall\@s,html.bp-s .uk-grid+.uk-grid-2xsmall\@s,html.bp-s .uk-grid+.uk-grid-row-2xsmall\@s,html.bp-s .uk-grid-2xsmall\@s>.uk-grid-margin,html.bp-s .uk-grid-row-2xsmall\@s>.uk-grid-margin {
    margin-top: var(--sizes-grid-2xsmall)!important
}

html.bp-s .uk-grid-divider\@s.uk-grid-column-2xsmall\@s>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-2xsmall)/ 2)!important;
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-column-2xsmall\@s.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-2xsmall);
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-row-2xsmall\@s>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-row-2xsmall\@s.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-2xsmall)/ 2 * -1)!important;
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-2xsmall\@s>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-2xsmall)/ 2)!important;
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-2xsmall\@s.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-2xsmall)/ 2 * -1)!important;
    left: var(--sizes-grid-2xsmall);
    z-index: 1
}

html.bp-s .uk-grid.uk-grid-column-xsmall\@s,html.bp-s .uk-grid.uk-grid-xsmall\@s {
    margin-left: calc(var(--sizes-grid-xsmall) * -1)!important
}

html.bp-s .uk-grid.uk-grid-column-xsmall\@s>*,html.bp-s .uk-grid.uk-grid-xsmall\@s>* {
    --gap-size: var(--sizes-grid-xsmall);
    padding-left: var(--sizes-grid-xsmall)!important
}

html.bp-s *+.uk-grid-margin-xsmall\@s,html.bp-s .uk-grid+.uk-grid-row-xsmall\@s,html.bp-s .uk-grid+.uk-grid-xsmall\@s,html.bp-s .uk-grid-row-xsmall\@s>.uk-grid-margin,html.bp-s .uk-grid-xsmall\@s>.uk-grid-margin {
    margin-top: var(--sizes-grid-xsmall)!important
}

html.bp-s .uk-grid-divider\@s.uk-grid-column-xsmall\@s>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-xsmall)/ 2)!important;
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-column-xsmall\@s.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-xsmall);
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-row-xsmall\@s>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-row-xsmall\@s.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-xsmall)/ 2 * -1)!important;
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-xsmall\@s>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-xsmall)/ 2)!important;
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-xsmall\@s.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-xsmall)/ 2 * -1)!important;
    left: var(--sizes-grid-xsmall);
    z-index: 1
}

html.bp-s .uk-grid.uk-grid-column-small\@s,html.bp-s .uk-grid.uk-grid-small\@s {
    margin-left: calc(var(--sizes-grid-small) * -1)!important
}

html.bp-s .uk-grid.uk-grid-column-small\@s>*,html.bp-s .uk-grid.uk-grid-small\@s>* {
    --gap-size: var(--sizes-grid-small);
    padding-left: var(--sizes-grid-small)!important
}

html.bp-s *+.uk-grid-margin-small\@s,html.bp-s .uk-grid+.uk-grid-row-small\@s,html.bp-s .uk-grid+.uk-grid-small\@s,html.bp-s .uk-grid-row-small\@s>.uk-grid-margin,html.bp-s .uk-grid-small\@s>.uk-grid-margin {
    margin-top: var(--sizes-grid-small)!important
}

html.bp-s .uk-grid-divider\@s.uk-grid-column-small\@s>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-small)/ 2)!important;
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-column-small\@s.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-small);
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-row-small\@s>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-row-small\@s.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-small)/ 2 * -1)!important;
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-small\@s>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-small)/ 2)!important;
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-small\@s.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-small)/ 2 * -1)!important;
    left: var(--sizes-grid-small);
    z-index: 1
}

html.bp-s .uk-grid.uk-grid-column-medium\@s,html.bp-s .uk-grid.uk-grid-medium\@s {
    margin-left: calc(var(--sizes-grid-medium) * -1)!important
}

html.bp-s .uk-grid.uk-grid-column-medium\@s>*,html.bp-s .uk-grid.uk-grid-medium\@s>* {
    --gap-size: var(--sizes-grid-medium);
    padding-left: var(--sizes-grid-medium)!important
}

html.bp-s *+.uk-grid-margin-medium\@s,html.bp-s .uk-grid+.uk-grid-medium\@s,html.bp-s .uk-grid+.uk-grid-row-medium\@s,html.bp-s .uk-grid-medium\@s>.uk-grid-margin,html.bp-s .uk-grid-row-medium\@s>.uk-grid-margin {
    margin-top: var(--sizes-grid-medium)!important
}

html.bp-s .uk-grid-divider\@s.uk-grid-column-medium\@s>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-medium)/ 2)!important;
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-column-medium\@s.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-medium);
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-row-medium\@s>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-row-medium\@s.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-medium)/ 2 * -1)!important;
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-medium\@s>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-medium)/ 2)!important;
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-medium\@s.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-medium)/ 2 * -1)!important;
    left: var(--sizes-grid-medium);
    z-index: 1
}

html.bp-s .uk-grid.uk-grid-column-large\@s,html.bp-s .uk-grid.uk-grid-large\@s {
    margin-left: calc(var(--sizes-grid-large) * -1)!important
}

html.bp-s .uk-grid.uk-grid-column-large\@s>*,html.bp-s .uk-grid.uk-grid-large\@s>* {
    --gap-size: var(--sizes-grid-large);
    padding-left: var(--sizes-grid-large)!important
}

html.bp-s *+.uk-grid-margin-large\@s,html.bp-s .uk-grid+.uk-grid-large\@s,html.bp-s .uk-grid+.uk-grid-row-large\@s,html.bp-s .uk-grid-large\@s>.uk-grid-margin,html.bp-s .uk-grid-row-large\@s>.uk-grid-margin {
    margin-top: var(--sizes-grid-large)!important
}

html.bp-s .uk-grid-divider\@s.uk-grid-column-large\@s>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-large)/ 2)!important;
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-column-large\@s.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-large);
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-row-large\@s>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-row-large\@s.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-large)/ 2 * -1)!important;
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-large\@s>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-large)/ 2)!important;
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-large\@s.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-large)/ 2 * -1)!important;
    left: var(--sizes-grid-large);
    z-index: 1
}

html.bp-s .uk-grid.uk-grid-column-xlarge\@s,html.bp-s .uk-grid.uk-grid-xlarge\@s {
    margin-left: calc(var(--sizes-grid-xlarge) * -1)!important
}

html.bp-s .uk-grid.uk-grid-column-xlarge\@s>*,html.bp-s .uk-grid.uk-grid-xlarge\@s>* {
    --gap-size: var(--sizes-grid-xlarge);
    padding-left: var(--sizes-grid-xlarge)!important
}

html.bp-s *+.uk-grid-margin-xlarge\@s,html.bp-s .uk-grid+.uk-grid-row-xlarge\@s,html.bp-s .uk-grid+.uk-grid-xlarge\@s,html.bp-s .uk-grid-row-xlarge\@s>.uk-grid-margin,html.bp-s .uk-grid-xlarge\@s>.uk-grid-margin {
    margin-top: var(--sizes-grid-xlarge)!important
}

html.bp-s .uk-grid-divider\@s.uk-grid-column-xlarge\@s>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-xlarge)/ 2)!important;
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-column-xlarge\@s.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-xlarge);
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-row-xlarge\@s>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-row-xlarge\@s.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-xlarge)/ 2 * -1)!important;
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-xlarge\@s>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-xlarge)/ 2)!important;
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-xlarge\@s.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-xlarge)/ 2 * -1)!important;
    left: var(--sizes-grid-xlarge);
    z-index: 1
}

html.bp-s .uk-grid.uk-grid-2xlarge\@s,html.bp-s .uk-grid.uk-grid-column-2xlarge\@s {
    margin-left: calc(var(--sizes-grid-2xlarge) * -1)!important
}

html.bp-s .uk-grid.uk-grid-2xlarge\@s>*,html.bp-s .uk-grid.uk-grid-column-2xlarge\@s>* {
    --gap-size: var(--sizes-grid-2xlarge);
    padding-left: var(--sizes-grid-2xlarge)!important
}

html.bp-s *+.uk-grid-margin-2xlarge\@s,html.bp-s .uk-grid+.uk-grid-2xlarge\@s,html.bp-s .uk-grid+.uk-grid-row-2xlarge\@s,html.bp-s .uk-grid-2xlarge\@s>.uk-grid-margin,html.bp-s .uk-grid-row-2xlarge\@s>.uk-grid-margin {
    margin-top: var(--sizes-grid-2xlarge)!important
}

html.bp-s .uk-grid-divider\@s.uk-grid-column-2xlarge\@s>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-2xlarge)/ 2)!important;
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-column-2xlarge\@s.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-2xlarge);
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-row-2xlarge\@s>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-row-2xlarge\@s.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-2xlarge)/ 2 * -1)!important;
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-2xlarge\@s>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-2xlarge)/ 2)!important;
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-2xlarge\@s.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-2xlarge)/ 2 * -1)!important;
    left: var(--sizes-grid-2xlarge);
    z-index: 1
}

html.bp-s .uk-grid.uk-grid-3xlarge\@s,html.bp-s .uk-grid.uk-grid-column-3xlarge\@s {
    margin-left: calc(var(--sizes-grid-3xlarge) * -1)!important
}

html.bp-s .uk-grid.uk-grid-3xlarge\@s>*,html.bp-s .uk-grid.uk-grid-column-3xlarge\@s>* {
    --gap-size: var(--sizes-grid-3xlarge);
    padding-left: var(--sizes-grid-3xlarge)!important
}

html.bp-s *+.uk-grid-margin-3xlarge\@s,html.bp-s .uk-grid+.uk-grid-3xlarge\@s,html.bp-s .uk-grid+.uk-grid-row-3xlarge\@s,html.bp-s .uk-grid-3xlarge\@s>.uk-grid-margin,html.bp-s .uk-grid-row-3xlarge\@s>.uk-grid-margin {
    margin-top: var(--sizes-grid-3xlarge)!important
}

html.bp-s .uk-grid-divider\@s.uk-grid-column-3xlarge\@s>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-3xlarge)/ 2)!important;
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-column-3xlarge\@s.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-3xlarge);
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-row-3xlarge\@s>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-row-3xlarge\@s.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-3xlarge)/ 2 * -1)!important;
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-3xlarge\@s>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-3xlarge)/ 2)!important;
    z-index: 1
}

html.bp-s .uk-grid-divider\@s.uk-grid-3xlarge\@s.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-3xlarge)/ 2 * -1)!important;
    left: var(--sizes-grid-3xlarge);
    z-index: 1
}

html.bp-m .uk-grid-column\@m,html.bp-m .uk-grid\@m {
    margin-left: calc(var(--sizes-grid) * -1)!important
}

html.bp-m .uk-grid-column\@m>*,html.bp-m .uk-grid\@m>* {
    --gap-size: var(--sizes-grid);
    padding-left: var(--sizes-grid)!important
}

html.bp-m *+.uk-grid-margin\@m,html.bp-m .uk-grid+.uk-grid-row\@m,html.bp-m .uk-grid+.uk-grid\@m,html.bp-m .uk-grid-row\@m>.uk-grid-margin,html.bp-m .uk-grid\@m>.uk-grid-margin {
    margin-top: var(--sizes-grid)!important
}

html.bp-m .uk-grid-divider\@m.uk-grid-column\@m>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid)/ 2)!important;
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-column\@m.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid);
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-row\@m>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-row\@m.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid)/ 2 * -1)!important;
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid\@m>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid)/ 2)!important;
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid\@m.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid)/ 2 * -1)!important;
    left: var(--sizes-grid);
    z-index: 1
}

html.bp-m .uk-grid.uk-grid-collapse\@m,html.bp-m .uk-grid.uk-grid-column-collapse\@m {
    margin-left: calc(var(--sizes-grid-collapse) * -1)!important
}

html.bp-m .uk-grid.uk-grid-collapse\@m>*,html.bp-m .uk-grid.uk-grid-column-collapse\@m>* {
    --gap-size: var(--sizes-grid-collapse);
    padding-left: var(--sizes-grid-collapse)!important
}

html.bp-m *+.uk-grid-margin-collapse\@m,html.bp-m .uk-grid+.uk-grid-collapse\@m,html.bp-m .uk-grid+.uk-grid-row-collapse\@m,html.bp-m .uk-grid-collapse\@m>.uk-grid-margin,html.bp-m .uk-grid-row-collapse\@m>.uk-grid-margin {
    margin-top: var(--sizes-grid-collapse)!important
}

html.bp-m .uk-grid-divider\@m.uk-grid-column-collapse\@m>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-collapse)/ 2)!important;
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-column-collapse\@m.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-collapse);
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-row-collapse\@m>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-row-collapse\@m.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-collapse)/ 2 * -1)!important;
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-collapse\@m>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-collapse)/ 2)!important;
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-collapse\@m.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-collapse)/ 2 * -1)!important;
    left: var(--sizes-grid-collapse);
    z-index: 1
}

html.bp-m .uk-grid.uk-grid-column-gallery\@m,html.bp-m .uk-grid.uk-grid-gallery\@m {
    margin-left: calc(var(--sizes-grid-gallery) * -1)!important
}

html.bp-m .uk-grid.uk-grid-column-gallery\@m>*,html.bp-m .uk-grid.uk-grid-gallery\@m>* {
    --gap-size: var(--sizes-grid-gallery);
    padding-left: var(--sizes-grid-gallery)!important
}

html.bp-m *+.uk-grid-margin-gallery\@m,html.bp-m .uk-grid+.uk-grid-gallery\@m,html.bp-m .uk-grid+.uk-grid-row-gallery\@m,html.bp-m .uk-grid-gallery\@m>.uk-grid-margin,html.bp-m .uk-grid-row-gallery\@m>.uk-grid-margin {
    margin-top: var(--sizes-grid-gallery)!important
}

html.bp-m .uk-grid-divider\@m.uk-grid-column-gallery\@m>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-gallery)/ 2)!important;
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-column-gallery\@m.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-gallery);
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-row-gallery\@m>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-row-gallery\@m.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-gallery)/ 2 * -1)!important;
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-gallery\@m>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-gallery)/ 2)!important;
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-gallery\@m.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-gallery)/ 2 * -1)!important;
    left: var(--sizes-grid-gallery);
    z-index: 1
}

html.bp-m .uk-grid.uk-grid-2xsmall\@m,html.bp-m .uk-grid.uk-grid-column-2xsmall\@m {
    margin-left: calc(var(--sizes-grid-2xsmall) * -1)!important
}

html.bp-m .uk-grid.uk-grid-2xsmall\@m>*,html.bp-m .uk-grid.uk-grid-column-2xsmall\@m>* {
    --gap-size: var(--sizes-grid-2xsmall);
    padding-left: var(--sizes-grid-2xsmall)!important
}

html.bp-m *+.uk-grid-margin-2xsmall\@m,html.bp-m .uk-grid+.uk-grid-2xsmall\@m,html.bp-m .uk-grid+.uk-grid-row-2xsmall\@m,html.bp-m .uk-grid-2xsmall\@m>.uk-grid-margin,html.bp-m .uk-grid-row-2xsmall\@m>.uk-grid-margin {
    margin-top: var(--sizes-grid-2xsmall)!important
}

html.bp-m .uk-grid-divider\@m.uk-grid-column-2xsmall\@m>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-2xsmall)/ 2)!important;
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-column-2xsmall\@m.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-2xsmall);
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-row-2xsmall\@m>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-row-2xsmall\@m.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-2xsmall)/ 2 * -1)!important;
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-2xsmall\@m>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-2xsmall)/ 2)!important;
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-2xsmall\@m.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-2xsmall)/ 2 * -1)!important;
    left: var(--sizes-grid-2xsmall);
    z-index: 1
}

html.bp-m .uk-grid.uk-grid-column-xsmall\@m,html.bp-m .uk-grid.uk-grid-xsmall\@m {
    margin-left: calc(var(--sizes-grid-xsmall) * -1)!important
}

html.bp-m .uk-grid.uk-grid-column-xsmall\@m>*,html.bp-m .uk-grid.uk-grid-xsmall\@m>* {
    --gap-size: var(--sizes-grid-xsmall);
    padding-left: var(--sizes-grid-xsmall)!important
}

html.bp-m *+.uk-grid-margin-xsmall\@m,html.bp-m .uk-grid+.uk-grid-row-xsmall\@m,html.bp-m .uk-grid+.uk-grid-xsmall\@m,html.bp-m .uk-grid-row-xsmall\@m>.uk-grid-margin,html.bp-m .uk-grid-xsmall\@m>.uk-grid-margin {
    margin-top: var(--sizes-grid-xsmall)!important
}

html.bp-m .uk-grid-divider\@m.uk-grid-column-xsmall\@m>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-xsmall)/ 2)!important;
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-column-xsmall\@m.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-xsmall);
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-row-xsmall\@m>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-row-xsmall\@m.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-xsmall)/ 2 * -1)!important;
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-xsmall\@m>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-xsmall)/ 2)!important;
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-xsmall\@m.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-xsmall)/ 2 * -1)!important;
    left: var(--sizes-grid-xsmall);
    z-index: 1
}

html.bp-m .uk-grid.uk-grid-column-small\@m,html.bp-m .uk-grid.uk-grid-small\@m {
    margin-left: calc(var(--sizes-grid-small) * -1)!important
}

html.bp-m .uk-grid.uk-grid-column-small\@m>*,html.bp-m .uk-grid.uk-grid-small\@m>* {
    --gap-size: var(--sizes-grid-small);
    padding-left: var(--sizes-grid-small)!important
}

html.bp-m *+.uk-grid-margin-small\@m,html.bp-m .uk-grid+.uk-grid-row-small\@m,html.bp-m .uk-grid+.uk-grid-small\@m,html.bp-m .uk-grid-row-small\@m>.uk-grid-margin,html.bp-m .uk-grid-small\@m>.uk-grid-margin {
    margin-top: var(--sizes-grid-small)!important
}

html.bp-m .uk-grid-divider\@m.uk-grid-column-small\@m>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-small)/ 2)!important;
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-column-small\@m.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-small);
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-row-small\@m>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-row-small\@m.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-small)/ 2 * -1)!important;
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-small\@m>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-small)/ 2)!important;
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-small\@m.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-small)/ 2 * -1)!important;
    left: var(--sizes-grid-small);
    z-index: 1
}

html.bp-m .uk-grid.uk-grid-column-medium\@m,html.bp-m .uk-grid.uk-grid-medium\@m {
    margin-left: calc(var(--sizes-grid-medium) * -1)!important
}

html.bp-m .uk-grid.uk-grid-column-medium\@m>*,html.bp-m .uk-grid.uk-grid-medium\@m>* {
    --gap-size: var(--sizes-grid-medium);
    padding-left: var(--sizes-grid-medium)!important
}

html.bp-m *+.uk-grid-margin-medium\@m,html.bp-m .uk-grid+.uk-grid-medium\@m,html.bp-m .uk-grid+.uk-grid-row-medium\@m,html.bp-m .uk-grid-medium\@m>.uk-grid-margin,html.bp-m .uk-grid-row-medium\@m>.uk-grid-margin {
    margin-top: var(--sizes-grid-medium)!important
}

html.bp-m .uk-grid-divider\@m.uk-grid-column-medium\@m>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-medium)/ 2)!important;
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-column-medium\@m.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-medium);
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-row-medium\@m>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-row-medium\@m.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-medium)/ 2 * -1)!important;
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-medium\@m>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-medium)/ 2)!important;
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-medium\@m.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-medium)/ 2 * -1)!important;
    left: var(--sizes-grid-medium);
    z-index: 1
}

html.bp-m .uk-grid.uk-grid-column-large\@m,html.bp-m .uk-grid.uk-grid-large\@m {
    margin-left: calc(var(--sizes-grid-large) * -1)!important
}

html.bp-m .uk-grid.uk-grid-column-large\@m>*,html.bp-m .uk-grid.uk-grid-large\@m>* {
    --gap-size: var(--sizes-grid-large);
    padding-left: var(--sizes-grid-large)!important
}

html.bp-m *+.uk-grid-margin-large\@m,html.bp-m .uk-grid+.uk-grid-large\@m,html.bp-m .uk-grid+.uk-grid-row-large\@m,html.bp-m .uk-grid-large\@m>.uk-grid-margin,html.bp-m .uk-grid-row-large\@m>.uk-grid-margin {
    margin-top: var(--sizes-grid-large)!important
}

html.bp-m .uk-grid-divider\@m.uk-grid-column-large\@m>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-large)/ 2)!important;
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-column-large\@m.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-large);
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-row-large\@m>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-row-large\@m.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-large)/ 2 * -1)!important;
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-large\@m>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-large)/ 2)!important;
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-large\@m.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-large)/ 2 * -1)!important;
    left: var(--sizes-grid-large);
    z-index: 1
}

html.bp-m .uk-grid.uk-grid-column-xlarge\@m,html.bp-m .uk-grid.uk-grid-xlarge\@m {
    margin-left: calc(var(--sizes-grid-xlarge) * -1)!important
}

html.bp-m .uk-grid.uk-grid-column-xlarge\@m>*,html.bp-m .uk-grid.uk-grid-xlarge\@m>* {
    --gap-size: var(--sizes-grid-xlarge);
    padding-left: var(--sizes-grid-xlarge)!important
}

html.bp-m *+.uk-grid-margin-xlarge\@m,html.bp-m .uk-grid+.uk-grid-row-xlarge\@m,html.bp-m .uk-grid+.uk-grid-xlarge\@m,html.bp-m .uk-grid-row-xlarge\@m>.uk-grid-margin,html.bp-m .uk-grid-xlarge\@m>.uk-grid-margin {
    margin-top: var(--sizes-grid-xlarge)!important
}

html.bp-m .uk-grid-divider\@m.uk-grid-column-xlarge\@m>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-xlarge)/ 2)!important;
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-column-xlarge\@m.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-xlarge);
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-row-xlarge\@m>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-row-xlarge\@m.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-xlarge)/ 2 * -1)!important;
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-xlarge\@m>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-xlarge)/ 2)!important;
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-xlarge\@m.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-xlarge)/ 2 * -1)!important;
    left: var(--sizes-grid-xlarge);
    z-index: 1
}

html.bp-m .uk-grid.uk-grid-2xlarge\@m,html.bp-m .uk-grid.uk-grid-column-2xlarge\@m {
    margin-left: calc(var(--sizes-grid-2xlarge) * -1)!important
}

html.bp-m .uk-grid.uk-grid-2xlarge\@m>*,html.bp-m .uk-grid.uk-grid-column-2xlarge\@m>* {
    --gap-size: var(--sizes-grid-2xlarge);
    padding-left: var(--sizes-grid-2xlarge)!important
}

html.bp-m *+.uk-grid-margin-2xlarge\@m,html.bp-m .uk-grid+.uk-grid-2xlarge\@m,html.bp-m .uk-grid+.uk-grid-row-2xlarge\@m,html.bp-m .uk-grid-2xlarge\@m>.uk-grid-margin,html.bp-m .uk-grid-row-2xlarge\@m>.uk-grid-margin {
    margin-top: var(--sizes-grid-2xlarge)!important
}

html.bp-m .uk-grid-divider\@m.uk-grid-column-2xlarge\@m>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-2xlarge)/ 2)!important;
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-column-2xlarge\@m.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-2xlarge);
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-row-2xlarge\@m>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-row-2xlarge\@m.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-2xlarge)/ 2 * -1)!important;
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-2xlarge\@m>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-2xlarge)/ 2)!important;
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-2xlarge\@m.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-2xlarge)/ 2 * -1)!important;
    left: var(--sizes-grid-2xlarge);
    z-index: 1
}

html.bp-m .uk-grid.uk-grid-3xlarge\@m,html.bp-m .uk-grid.uk-grid-column-3xlarge\@m {
    margin-left: calc(var(--sizes-grid-3xlarge) * -1)!important
}

html.bp-m .uk-grid.uk-grid-3xlarge\@m>*,html.bp-m .uk-grid.uk-grid-column-3xlarge\@m>* {
    --gap-size: var(--sizes-grid-3xlarge);
    padding-left: var(--sizes-grid-3xlarge)!important
}

html.bp-m *+.uk-grid-margin-3xlarge\@m,html.bp-m .uk-grid+.uk-grid-3xlarge\@m,html.bp-m .uk-grid+.uk-grid-row-3xlarge\@m,html.bp-m .uk-grid-3xlarge\@m>.uk-grid-margin,html.bp-m .uk-grid-row-3xlarge\@m>.uk-grid-margin {
    margin-top: var(--sizes-grid-3xlarge)!important
}

html.bp-m .uk-grid-divider\@m.uk-grid-column-3xlarge\@m>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-3xlarge)/ 2)!important;
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-column-3xlarge\@m.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-3xlarge);
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-row-3xlarge\@m>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-row-3xlarge\@m.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-3xlarge)/ 2 * -1)!important;
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-3xlarge\@m>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-3xlarge)/ 2)!important;
    z-index: 1
}

html.bp-m .uk-grid-divider\@m.uk-grid-3xlarge\@m.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-3xlarge)/ 2 * -1)!important;
    left: var(--sizes-grid-3xlarge);
    z-index: 1
}

html.bp-l .uk-grid-column\@l,html.bp-l .uk-grid\@l {
    margin-left: calc(var(--sizes-grid) * -1)!important
}

html.bp-l .uk-grid-column\@l>*,html.bp-l .uk-grid\@l>* {
    --gap-size: var(--sizes-grid);
    padding-left: var(--sizes-grid)!important
}

html.bp-l *+.uk-grid-margin\@l,html.bp-l .uk-grid+.uk-grid-row\@l,html.bp-l .uk-grid+.uk-grid\@l,html.bp-l .uk-grid-row\@l>.uk-grid-margin,html.bp-l .uk-grid\@l>.uk-grid-margin {
    margin-top: var(--sizes-grid)!important
}

html.bp-l .uk-grid-divider\@l.uk-grid-column\@l>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid)/ 2)!important;
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-column\@l.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid);
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-row\@l>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-row\@l.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid)/ 2 * -1)!important;
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid\@l>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid)/ 2)!important;
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid\@l.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid)/ 2 * -1)!important;
    left: var(--sizes-grid);
    z-index: 1
}

html.bp-l .uk-grid.uk-grid-collapse\@l,html.bp-l .uk-grid.uk-grid-column-collapse\@l {
    margin-left: calc(var(--sizes-grid-collapse) * -1)!important
}

html.bp-l .uk-grid.uk-grid-collapse\@l>*,html.bp-l .uk-grid.uk-grid-column-collapse\@l>* {
    --gap-size: var(--sizes-grid-collapse);
    padding-left: var(--sizes-grid-collapse)!important
}

html.bp-l *+.uk-grid-margin-collapse\@l,html.bp-l .uk-grid+.uk-grid-collapse\@l,html.bp-l .uk-grid+.uk-grid-row-collapse\@l,html.bp-l .uk-grid-collapse\@l>.uk-grid-margin,html.bp-l .uk-grid-row-collapse\@l>.uk-grid-margin {
    margin-top: var(--sizes-grid-collapse)!important
}

html.bp-l .uk-grid-divider\@l.uk-grid-column-collapse\@l>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-collapse)/ 2)!important;
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-column-collapse\@l.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-collapse);
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-row-collapse\@l>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-row-collapse\@l.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-collapse)/ 2 * -1)!important;
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-collapse\@l>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-collapse)/ 2)!important;
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-collapse\@l.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-collapse)/ 2 * -1)!important;
    left: var(--sizes-grid-collapse);
    z-index: 1
}

html.bp-l .uk-grid.uk-grid-column-gallery\@l,html.bp-l .uk-grid.uk-grid-gallery\@l {
    margin-left: calc(var(--sizes-grid-gallery) * -1)!important
}

html.bp-l .uk-grid.uk-grid-column-gallery\@l>*,html.bp-l .uk-grid.uk-grid-gallery\@l>* {
    --gap-size: var(--sizes-grid-gallery);
    padding-left: var(--sizes-grid-gallery)!important
}

html.bp-l *+.uk-grid-margin-gallery\@l,html.bp-l .uk-grid+.uk-grid-gallery\@l,html.bp-l .uk-grid+.uk-grid-row-gallery\@l,html.bp-l .uk-grid-gallery\@l>.uk-grid-margin,html.bp-l .uk-grid-row-gallery\@l>.uk-grid-margin {
    margin-top: var(--sizes-grid-gallery)!important
}

html.bp-l .uk-grid-divider\@l.uk-grid-column-gallery\@l>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-gallery)/ 2)!important;
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-column-gallery\@l.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-gallery);
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-row-gallery\@l>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-row-gallery\@l.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-gallery)/ 2 * -1)!important;
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-gallery\@l>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-gallery)/ 2)!important;
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-gallery\@l.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-gallery)/ 2 * -1)!important;
    left: var(--sizes-grid-gallery);
    z-index: 1
}

html.bp-l .uk-grid.uk-grid-2xsmall\@l,html.bp-l .uk-grid.uk-grid-column-2xsmall\@l {
    margin-left: calc(var(--sizes-grid-2xsmall) * -1)!important
}

html.bp-l .uk-grid.uk-grid-2xsmall\@l>*,html.bp-l .uk-grid.uk-grid-column-2xsmall\@l>* {
    --gap-size: var(--sizes-grid-2xsmall);
    padding-left: var(--sizes-grid-2xsmall)!important
}

html.bp-l *+.uk-grid-margin-2xsmall\@l,html.bp-l .uk-grid+.uk-grid-2xsmall\@l,html.bp-l .uk-grid+.uk-grid-row-2xsmall\@l,html.bp-l .uk-grid-2xsmall\@l>.uk-grid-margin,html.bp-l .uk-grid-row-2xsmall\@l>.uk-grid-margin {
    margin-top: var(--sizes-grid-2xsmall)!important
}

html.bp-l .uk-grid-divider\@l.uk-grid-column-2xsmall\@l>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-2xsmall)/ 2)!important;
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-column-2xsmall\@l.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-2xsmall);
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-row-2xsmall\@l>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-row-2xsmall\@l.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-2xsmall)/ 2 * -1)!important;
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-2xsmall\@l>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-2xsmall)/ 2)!important;
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-2xsmall\@l.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-2xsmall)/ 2 * -1)!important;
    left: var(--sizes-grid-2xsmall);
    z-index: 1
}

html.bp-l .uk-grid.uk-grid-column-xsmall\@l,html.bp-l .uk-grid.uk-grid-xsmall\@l {
    margin-left: calc(var(--sizes-grid-xsmall) * -1)!important
}

html.bp-l .uk-grid.uk-grid-column-xsmall\@l>*,html.bp-l .uk-grid.uk-grid-xsmall\@l>* {
    --gap-size: var(--sizes-grid-xsmall);
    padding-left: var(--sizes-grid-xsmall)!important
}

html.bp-l *+.uk-grid-margin-xsmall\@l,html.bp-l .uk-grid+.uk-grid-row-xsmall\@l,html.bp-l .uk-grid+.uk-grid-xsmall\@l,html.bp-l .uk-grid-row-xsmall\@l>.uk-grid-margin,html.bp-l .uk-grid-xsmall\@l>.uk-grid-margin {
    margin-top: var(--sizes-grid-xsmall)!important
}

html.bp-l .uk-grid-divider\@l.uk-grid-column-xsmall\@l>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-xsmall)/ 2)!important;
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-column-xsmall\@l.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-xsmall);
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-row-xsmall\@l>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-row-xsmall\@l.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-xsmall)/ 2 * -1)!important;
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-xsmall\@l>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-xsmall)/ 2)!important;
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-xsmall\@l.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-xsmall)/ 2 * -1)!important;
    left: var(--sizes-grid-xsmall);
    z-index: 1
}

html.bp-l .uk-grid.uk-grid-column-small\@l,html.bp-l .uk-grid.uk-grid-small\@l {
    margin-left: calc(var(--sizes-grid-small) * -1)!important
}

html.bp-l .uk-grid.uk-grid-column-small\@l>*,html.bp-l .uk-grid.uk-grid-small\@l>* {
    --gap-size: var(--sizes-grid-small);
    padding-left: var(--sizes-grid-small)!important
}

html.bp-l *+.uk-grid-margin-small\@l,html.bp-l .uk-grid+.uk-grid-row-small\@l,html.bp-l .uk-grid+.uk-grid-small\@l,html.bp-l .uk-grid-row-small\@l>.uk-grid-margin,html.bp-l .uk-grid-small\@l>.uk-grid-margin {
    margin-top: var(--sizes-grid-small)!important
}

html.bp-l .uk-grid-divider\@l.uk-grid-column-small\@l>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-small)/ 2)!important;
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-column-small\@l.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-small);
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-row-small\@l>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-row-small\@l.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-small)/ 2 * -1)!important;
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-small\@l>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-small)/ 2)!important;
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-small\@l.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-small)/ 2 * -1)!important;
    left: var(--sizes-grid-small);
    z-index: 1
}

html.bp-l .uk-grid.uk-grid-column-medium\@l,html.bp-l .uk-grid.uk-grid-medium\@l {
    margin-left: calc(var(--sizes-grid-medium) * -1)!important
}

html.bp-l .uk-grid.uk-grid-column-medium\@l>*,html.bp-l .uk-grid.uk-grid-medium\@l>* {
    --gap-size: var(--sizes-grid-medium);
    padding-left: var(--sizes-grid-medium)!important
}

html.bp-l *+.uk-grid-margin-medium\@l,html.bp-l .uk-grid+.uk-grid-medium\@l,html.bp-l .uk-grid+.uk-grid-row-medium\@l,html.bp-l .uk-grid-medium\@l>.uk-grid-margin,html.bp-l .uk-grid-row-medium\@l>.uk-grid-margin {
    margin-top: var(--sizes-grid-medium)!important
}

html.bp-l .uk-grid-divider\@l.uk-grid-column-medium\@l>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-medium)/ 2)!important;
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-column-medium\@l.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-medium);
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-row-medium\@l>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-row-medium\@l.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-medium)/ 2 * -1)!important;
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-medium\@l>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-medium)/ 2)!important;
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-medium\@l.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-medium)/ 2 * -1)!important;
    left: var(--sizes-grid-medium);
    z-index: 1
}

html.bp-l .uk-grid.uk-grid-column-large\@l,html.bp-l .uk-grid.uk-grid-large\@l {
    margin-left: calc(var(--sizes-grid-large) * -1)!important
}

html.bp-l .uk-grid.uk-grid-column-large\@l>*,html.bp-l .uk-grid.uk-grid-large\@l>* {
    --gap-size: var(--sizes-grid-large);
    padding-left: var(--sizes-grid-large)!important
}

html.bp-l *+.uk-grid-margin-large\@l,html.bp-l .uk-grid+.uk-grid-large\@l,html.bp-l .uk-grid+.uk-grid-row-large\@l,html.bp-l .uk-grid-large\@l>.uk-grid-margin,html.bp-l .uk-grid-row-large\@l>.uk-grid-margin {
    margin-top: var(--sizes-grid-large)!important
}

html.bp-l .uk-grid-divider\@l.uk-grid-column-large\@l>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-large)/ 2)!important;
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-column-large\@l.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-large);
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-row-large\@l>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-row-large\@l.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-large)/ 2 * -1)!important;
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-large\@l>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-large)/ 2)!important;
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-large\@l.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-large)/ 2 * -1)!important;
    left: var(--sizes-grid-large);
    z-index: 1
}

html.bp-l .uk-grid.uk-grid-column-xlarge\@l,html.bp-l .uk-grid.uk-grid-xlarge\@l {
    margin-left: calc(var(--sizes-grid-xlarge) * -1)!important
}

html.bp-l .uk-grid.uk-grid-column-xlarge\@l>*,html.bp-l .uk-grid.uk-grid-xlarge\@l>* {
    --gap-size: var(--sizes-grid-xlarge);
    padding-left: var(--sizes-grid-xlarge)!important
}

html.bp-l *+.uk-grid-margin-xlarge\@l,html.bp-l .uk-grid+.uk-grid-row-xlarge\@l,html.bp-l .uk-grid+.uk-grid-xlarge\@l,html.bp-l .uk-grid-row-xlarge\@l>.uk-grid-margin,html.bp-l .uk-grid-xlarge\@l>.uk-grid-margin {
    margin-top: var(--sizes-grid-xlarge)!important
}

html.bp-l .uk-grid-divider\@l.uk-grid-column-xlarge\@l>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-xlarge)/ 2)!important;
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-column-xlarge\@l.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-xlarge);
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-row-xlarge\@l>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-row-xlarge\@l.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-xlarge)/ 2 * -1)!important;
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-xlarge\@l>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-xlarge)/ 2)!important;
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-xlarge\@l.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-xlarge)/ 2 * -1)!important;
    left: var(--sizes-grid-xlarge);
    z-index: 1
}

html.bp-l .uk-grid.uk-grid-2xlarge\@l,html.bp-l .uk-grid.uk-grid-column-2xlarge\@l {
    margin-left: calc(var(--sizes-grid-2xlarge) * -1)!important
}

html.bp-l .uk-grid.uk-grid-2xlarge\@l>*,html.bp-l .uk-grid.uk-grid-column-2xlarge\@l>* {
    --gap-size: var(--sizes-grid-2xlarge);
    padding-left: var(--sizes-grid-2xlarge)!important
}

html.bp-l *+.uk-grid-margin-2xlarge\@l,html.bp-l .uk-grid+.uk-grid-2xlarge\@l,html.bp-l .uk-grid+.uk-grid-row-2xlarge\@l,html.bp-l .uk-grid-2xlarge\@l>.uk-grid-margin,html.bp-l .uk-grid-row-2xlarge\@l>.uk-grid-margin {
    margin-top: var(--sizes-grid-2xlarge)!important
}

html.bp-l .uk-grid-divider\@l.uk-grid-column-2xlarge\@l>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-2xlarge)/ 2)!important;
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-column-2xlarge\@l.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-2xlarge);
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-row-2xlarge\@l>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-row-2xlarge\@l.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-2xlarge)/ 2 * -1)!important;
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-2xlarge\@l>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-2xlarge)/ 2)!important;
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-2xlarge\@l.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-2xlarge)/ 2 * -1)!important;
    left: var(--sizes-grid-2xlarge);
    z-index: 1
}

html.bp-l .uk-grid.uk-grid-3xlarge\@l,html.bp-l .uk-grid.uk-grid-column-3xlarge\@l {
    margin-left: calc(var(--sizes-grid-3xlarge) * -1)!important
}

html.bp-l .uk-grid.uk-grid-3xlarge\@l>*,html.bp-l .uk-grid.uk-grid-column-3xlarge\@l>* {
    --gap-size: var(--sizes-grid-3xlarge);
    padding-left: var(--sizes-grid-3xlarge)!important
}

html.bp-l *+.uk-grid-margin-3xlarge\@l,html.bp-l .uk-grid+.uk-grid-3xlarge\@l,html.bp-l .uk-grid+.uk-grid-row-3xlarge\@l,html.bp-l .uk-grid-3xlarge\@l>.uk-grid-margin,html.bp-l .uk-grid-row-3xlarge\@l>.uk-grid-margin {
    margin-top: var(--sizes-grid-3xlarge)!important
}

html.bp-l .uk-grid-divider\@l.uk-grid-column-3xlarge\@l>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-3xlarge)/ 2)!important;
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-column-3xlarge\@l.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-3xlarge);
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-row-3xlarge\@l>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-row-3xlarge\@l.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-3xlarge)/ 2 * -1)!important;
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-3xlarge\@l>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-3xlarge)/ 2)!important;
    z-index: 1
}

html.bp-l .uk-grid-divider\@l.uk-grid-3xlarge\@l.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-3xlarge)/ 2 * -1)!important;
    left: var(--sizes-grid-3xlarge);
    z-index: 1
}

html.bp-xl .uk-grid-column\@xl,html.bp-xl .uk-grid\@xl {
    margin-left: calc(var(--sizes-grid) * -1)!important
}

html.bp-xl .uk-grid-column\@xl>*,html.bp-xl .uk-grid\@xl>* {
    --gap-size: var(--sizes-grid);
    padding-left: var(--sizes-grid)!important
}

html.bp-xl *+.uk-grid-margin\@xl,html.bp-xl .uk-grid+.uk-grid-row\@xl,html.bp-xl .uk-grid+.uk-grid\@xl,html.bp-xl .uk-grid-row\@xl>.uk-grid-margin,html.bp-xl .uk-grid\@xl>.uk-grid-margin {
    margin-top: var(--sizes-grid)!important
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-column\@xl>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid)/ 2)!important;
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-column\@xl.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid);
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-row\@xl>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-row\@xl.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid)/ 2 * -1)!important;
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid\@xl>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid)/ 2)!important;
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid\@xl.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid)/ 2 * -1)!important;
    left: var(--sizes-grid);
    z-index: 1
}

html.bp-xl .uk-grid.uk-grid-collapse\@xl,html.bp-xl .uk-grid.uk-grid-column-collapse\@xl {
    margin-left: calc(var(--sizes-grid-collapse) * -1)!important
}

html.bp-xl .uk-grid.uk-grid-collapse\@xl>*,html.bp-xl .uk-grid.uk-grid-column-collapse\@xl>* {
    --gap-size: var(--sizes-grid-collapse);
    padding-left: var(--sizes-grid-collapse)!important
}

html.bp-xl *+.uk-grid-margin-collapse\@xl,html.bp-xl .uk-grid+.uk-grid-collapse\@xl,html.bp-xl .uk-grid+.uk-grid-row-collapse\@xl,html.bp-xl .uk-grid-collapse\@xl>.uk-grid-margin,html.bp-xl .uk-grid-row-collapse\@xl>.uk-grid-margin {
    margin-top: var(--sizes-grid-collapse)!important
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-column-collapse\@xl>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-collapse)/ 2)!important;
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-column-collapse\@xl.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-collapse);
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-row-collapse\@xl>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-row-collapse\@xl.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-collapse)/ 2 * -1)!important;
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-collapse\@xl>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-collapse)/ 2)!important;
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-collapse\@xl.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-collapse)/ 2 * -1)!important;
    left: var(--sizes-grid-collapse);
    z-index: 1
}

html.bp-xl .uk-grid.uk-grid-column-gallery\@xl,html.bp-xl .uk-grid.uk-grid-gallery\@xl {
    margin-left: calc(var(--sizes-grid-gallery) * -1)!important
}

html.bp-xl .uk-grid.uk-grid-column-gallery\@xl>*,html.bp-xl .uk-grid.uk-grid-gallery\@xl>* {
    --gap-size: var(--sizes-grid-gallery);
    padding-left: var(--sizes-grid-gallery)!important
}

html.bp-xl *+.uk-grid-margin-gallery\@xl,html.bp-xl .uk-grid+.uk-grid-gallery\@xl,html.bp-xl .uk-grid+.uk-grid-row-gallery\@xl,html.bp-xl .uk-grid-gallery\@xl>.uk-grid-margin,html.bp-xl .uk-grid-row-gallery\@xl>.uk-grid-margin {
    margin-top: var(--sizes-grid-gallery)!important
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-column-gallery\@xl>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-gallery)/ 2)!important;
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-column-gallery\@xl.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-gallery);
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-row-gallery\@xl>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-row-gallery\@xl.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-gallery)/ 2 * -1)!important;
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-gallery\@xl>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-gallery)/ 2)!important;
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-gallery\@xl.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-gallery)/ 2 * -1)!important;
    left: var(--sizes-grid-gallery);
    z-index: 1
}

html.bp-xl .uk-grid.uk-grid-2xsmall\@xl,html.bp-xl .uk-grid.uk-grid-column-2xsmall\@xl {
    margin-left: calc(var(--sizes-grid-2xsmall) * -1)!important
}

html.bp-xl .uk-grid.uk-grid-2xsmall\@xl>*,html.bp-xl .uk-grid.uk-grid-column-2xsmall\@xl>* {
    --gap-size: var(--sizes-grid-2xsmall);
    padding-left: var(--sizes-grid-2xsmall)!important
}

html.bp-xl *+.uk-grid-margin-2xsmall\@xl,html.bp-xl .uk-grid+.uk-grid-2xsmall\@xl,html.bp-xl .uk-grid+.uk-grid-row-2xsmall\@xl,html.bp-xl .uk-grid-2xsmall\@xl>.uk-grid-margin,html.bp-xl .uk-grid-row-2xsmall\@xl>.uk-grid-margin {
    margin-top: var(--sizes-grid-2xsmall)!important
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-column-2xsmall\@xl>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-2xsmall)/ 2)!important;
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-column-2xsmall\@xl.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-2xsmall);
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-row-2xsmall\@xl>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-row-2xsmall\@xl.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-2xsmall)/ 2 * -1)!important;
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-2xsmall\@xl>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-2xsmall)/ 2)!important;
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-2xsmall\@xl.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-2xsmall)/ 2 * -1)!important;
    left: var(--sizes-grid-2xsmall);
    z-index: 1
}

html.bp-xl .uk-grid.uk-grid-column-xsmall\@xl,html.bp-xl .uk-grid.uk-grid-xsmall\@xl {
    margin-left: calc(var(--sizes-grid-xsmall) * -1)!important
}

html.bp-xl .uk-grid.uk-grid-column-xsmall\@xl>*,html.bp-xl .uk-grid.uk-grid-xsmall\@xl>* {
    --gap-size: var(--sizes-grid-xsmall);
    padding-left: var(--sizes-grid-xsmall)!important
}

html.bp-xl *+.uk-grid-margin-xsmall\@xl,html.bp-xl .uk-grid+.uk-grid-row-xsmall\@xl,html.bp-xl .uk-grid+.uk-grid-xsmall\@xl,html.bp-xl .uk-grid-row-xsmall\@xl>.uk-grid-margin,html.bp-xl .uk-grid-xsmall\@xl>.uk-grid-margin {
    margin-top: var(--sizes-grid-xsmall)!important
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-column-xsmall\@xl>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-xsmall)/ 2)!important;
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-column-xsmall\@xl.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-xsmall);
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-row-xsmall\@xl>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-row-xsmall\@xl.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-xsmall)/ 2 * -1)!important;
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-xsmall\@xl>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-xsmall)/ 2)!important;
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-xsmall\@xl.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-xsmall)/ 2 * -1)!important;
    left: var(--sizes-grid-xsmall);
    z-index: 1
}

html.bp-xl .uk-grid.uk-grid-column-small\@xl,html.bp-xl .uk-grid.uk-grid-small\@xl {
    margin-left: calc(var(--sizes-grid-small) * -1)!important
}

html.bp-xl .uk-grid.uk-grid-column-small\@xl>*,html.bp-xl .uk-grid.uk-grid-small\@xl>* {
    --gap-size: var(--sizes-grid-small);
    padding-left: var(--sizes-grid-small)!important
}

html.bp-xl *+.uk-grid-margin-small\@xl,html.bp-xl .uk-grid+.uk-grid-row-small\@xl,html.bp-xl .uk-grid+.uk-grid-small\@xl,html.bp-xl .uk-grid-row-small\@xl>.uk-grid-margin,html.bp-xl .uk-grid-small\@xl>.uk-grid-margin {
    margin-top: var(--sizes-grid-small)!important
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-column-small\@xl>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-small)/ 2)!important;
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-column-small\@xl.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-small);
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-row-small\@xl>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-row-small\@xl.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-small)/ 2 * -1)!important;
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-small\@xl>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-small)/ 2)!important;
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-small\@xl.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-small)/ 2 * -1)!important;
    left: var(--sizes-grid-small);
    z-index: 1
}

html.bp-xl .uk-grid.uk-grid-column-medium\@xl,html.bp-xl .uk-grid.uk-grid-medium\@xl {
    margin-left: calc(var(--sizes-grid-medium) * -1)!important
}

html.bp-xl .uk-grid.uk-grid-column-medium\@xl>*,html.bp-xl .uk-grid.uk-grid-medium\@xl>* {
    --gap-size: var(--sizes-grid-medium);
    padding-left: var(--sizes-grid-medium)!important
}

html.bp-xl *+.uk-grid-margin-medium\@xl,html.bp-xl .uk-grid+.uk-grid-medium\@xl,html.bp-xl .uk-grid+.uk-grid-row-medium\@xl,html.bp-xl .uk-grid-medium\@xl>.uk-grid-margin,html.bp-xl .uk-grid-row-medium\@xl>.uk-grid-margin {
    margin-top: var(--sizes-grid-medium)!important
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-column-medium\@xl>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-medium)/ 2)!important;
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-column-medium\@xl.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-medium);
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-row-medium\@xl>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-row-medium\@xl.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-medium)/ 2 * -1)!important;
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-medium\@xl>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-medium)/ 2)!important;
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-medium\@xl.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-medium)/ 2 * -1)!important;
    left: var(--sizes-grid-medium);
    z-index: 1
}

html.bp-xl .uk-grid.uk-grid-column-large\@xl,html.bp-xl .uk-grid.uk-grid-large\@xl {
    margin-left: calc(var(--sizes-grid-large) * -1)!important
}

html.bp-xl .uk-grid.uk-grid-column-large\@xl>*,html.bp-xl .uk-grid.uk-grid-large\@xl>* {
    --gap-size: var(--sizes-grid-large);
    padding-left: var(--sizes-grid-large)!important
}

html.bp-xl *+.uk-grid-margin-large\@xl,html.bp-xl .uk-grid+.uk-grid-large\@xl,html.bp-xl .uk-grid+.uk-grid-row-large\@xl,html.bp-xl .uk-grid-large\@xl>.uk-grid-margin,html.bp-xl .uk-grid-row-large\@xl>.uk-grid-margin {
    margin-top: var(--sizes-grid-large)!important
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-column-large\@xl>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-large)/ 2)!important;
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-column-large\@xl.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-large);
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-row-large\@xl>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-row-large\@xl.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-large)/ 2 * -1)!important;
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-large\@xl>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-large)/ 2)!important;
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-large\@xl.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-large)/ 2 * -1)!important;
    left: var(--sizes-grid-large);
    z-index: 1
}

html.bp-xl .uk-grid.uk-grid-column-xlarge\@xl,html.bp-xl .uk-grid.uk-grid-xlarge\@xl {
    margin-left: calc(var(--sizes-grid-xlarge) * -1)!important
}

html.bp-xl .uk-grid.uk-grid-column-xlarge\@xl>*,html.bp-xl .uk-grid.uk-grid-xlarge\@xl>* {
    --gap-size: var(--sizes-grid-xlarge);
    padding-left: var(--sizes-grid-xlarge)!important
}

html.bp-xl *+.uk-grid-margin-xlarge\@xl,html.bp-xl .uk-grid+.uk-grid-row-xlarge\@xl,html.bp-xl .uk-grid+.uk-grid-xlarge\@xl,html.bp-xl .uk-grid-row-xlarge\@xl>.uk-grid-margin,html.bp-xl .uk-grid-xlarge\@xl>.uk-grid-margin {
    margin-top: var(--sizes-grid-xlarge)!important
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-column-xlarge\@xl>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-xlarge)/ 2)!important;
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-column-xlarge\@xl.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-xlarge);
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-row-xlarge\@xl>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-row-xlarge\@xl.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-xlarge)/ 2 * -1)!important;
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-xlarge\@xl>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-xlarge)/ 2)!important;
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-xlarge\@xl.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-xlarge)/ 2 * -1)!important;
    left: var(--sizes-grid-xlarge);
    z-index: 1
}

html.bp-xl .uk-grid.uk-grid-2xlarge\@xl,html.bp-xl .uk-grid.uk-grid-column-2xlarge\@xl {
    margin-left: calc(var(--sizes-grid-2xlarge) * -1)!important
}

html.bp-xl .uk-grid.uk-grid-2xlarge\@xl>*,html.bp-xl .uk-grid.uk-grid-column-2xlarge\@xl>* {
    --gap-size: var(--sizes-grid-2xlarge);
    padding-left: var(--sizes-grid-2xlarge)!important
}

html.bp-xl *+.uk-grid-margin-2xlarge\@xl,html.bp-xl .uk-grid+.uk-grid-2xlarge\@xl,html.bp-xl .uk-grid+.uk-grid-row-2xlarge\@xl,html.bp-xl .uk-grid-2xlarge\@xl>.uk-grid-margin,html.bp-xl .uk-grid-row-2xlarge\@xl>.uk-grid-margin {
    margin-top: var(--sizes-grid-2xlarge)!important
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-column-2xlarge\@xl>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-2xlarge)/ 2)!important;
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-column-2xlarge\@xl.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-2xlarge);
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-row-2xlarge\@xl>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-row-2xlarge\@xl.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-2xlarge)/ 2 * -1)!important;
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-2xlarge\@xl>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-2xlarge)/ 2)!important;
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-2xlarge\@xl.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-2xlarge)/ 2 * -1)!important;
    left: var(--sizes-grid-2xlarge);
    z-index: 1
}

html.bp-xl .uk-grid.uk-grid-3xlarge\@xl,html.bp-xl .uk-grid.uk-grid-column-3xlarge\@xl {
    margin-left: calc(var(--sizes-grid-3xlarge) * -1)!important
}

html.bp-xl .uk-grid.uk-grid-3xlarge\@xl>*,html.bp-xl .uk-grid.uk-grid-column-3xlarge\@xl>* {
    --gap-size: var(--sizes-grid-3xlarge);
    padding-left: var(--sizes-grid-3xlarge)!important
}

html.bp-xl *+.uk-grid-margin-3xlarge\@xl,html.bp-xl .uk-grid+.uk-grid-3xlarge\@xl,html.bp-xl .uk-grid+.uk-grid-row-3xlarge\@xl,html.bp-xl .uk-grid-3xlarge\@xl>.uk-grid-margin,html.bp-xl .uk-grid-row-3xlarge\@xl>.uk-grid-margin {
    margin-top: var(--sizes-grid-3xlarge)!important
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-column-3xlarge\@xl>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-3xlarge)/ 2)!important;
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-column-3xlarge\@xl.uk-grid-stack>.uk-grid-margin::before {
    left: var(--sizes-grid-3xlarge);
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-row-3xlarge\@xl>:not(.uk-first-column)::before {
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-row-3xlarge\@xl.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-3xlarge)/ 2 * -1)!important;
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-3xlarge\@xl>:not(.uk-first-column)::before {
    left: calc(var(--sizes-grid-3xlarge)/ 2)!important;
    z-index: 1
}

html.bp-xl .uk-grid-divider\@xl.uk-grid-3xlarge\@xl.uk-grid-stack>.uk-grid-margin::before {
    top: calc(var(--sizes-grid-3xlarge)/ 2 * -1)!important;
    left: var(--sizes-grid-3xlarge);
    z-index: 1
}

.uk-expand-container {
    --scroll-width: var(--body-scroll-width, 17px);
    --container-width: calc((100% + var(--gap-size)) * var(--grid-total) / var(--grid-count) - var(--gap-size));
    --expand-size: calc((100vw - var(--scroll-width) - var(--container-width)) / -2);
    margin-right: var(--expand-size);
    margin-left: var(--expand-size)
}

.uk-dark .uk-grid-divider.uk-grid-column.uk-grid-stack>.uk-grid-margin::before,.uk-dark .uk-grid-divider.uk-grid-column>:not(.uk-first-column)::before,.uk-dark .uk-grid-divider.uk-grid-row.uk-grid-stack>.uk-grid-margin::before,.uk-dark .uk-grid-divider.uk-grid-row>:not(.uk-first-column)::before,.uk-dark .uk-grid-divider.uk-grid.uk-grid-stack>.uk-grid-margin::before,.uk-dark .uk-grid-divider.uk-grid>:not(.uk-first-column)::before,.uk-dark.uk-grid-divider.uk-grid-column.uk-grid-stack>.uk-grid-margin::before,.uk-dark.uk-grid-divider.uk-grid-column>:not(.uk-first-column)::before,.uk-dark.uk-grid-divider.uk-grid-row.uk-grid-stack>.uk-grid-margin::before,.uk-dark.uk-grid-divider.uk-grid-row>:not(.uk-first-column)::before,.uk-dark.uk-grid-divider.uk-grid.uk-grid-stack>.uk-grid-margin::before,.uk-dark.uk-grid-divider.uk-grid>:not(.uk-first-column)::before {
    border-color: rgba(255,255,255,.1)
}

[class*=uk-link] {
    position: relative;
    display: inline-flex;
    align-items: center;
    text-decoration: none!important
}

[class*=uk-link]>i {
    transition: transform .7s cubic-bezier(.17,.67,0,1.01)
}

[class*=uk-link]>*+* {
    margin-left: var(--sizes-spacing-xsmall)
}

[class*=uk-link].uk-link-expand:hover>i {
    transform: rotate(-45deg)
}

[class*=uk-link].uk-link-back:hover>i {
    transform: rotate(-180deg)
}

[class*=uk-link].uk-link-up:hover>i {
    transform: rotate(-90deg)
}

[class*=uk-link].uk-link-down:hover>i {
    transform: rotate(90deg)
}

[class*=uk-link].uk-link-line>span:not(i) {
    position: relative
}

[class*=uk-link].uk-link-line>span:not(i)::after {
    content: "";
    width: 100%;
    height: 1px;
    border-bottom: 1px solid rgba(138,138,138,.5);
    position: absolute;
    top: calc(100% - 1px);
    left: 0;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform .7s cubic-bezier(.17,.67,0,1.01)
}

[class*=uk-link].uk-link-line:hover>span:not(i)::after {
    transform-origin: bottom left;
    transform: scaleX(1)
}

.uk-link-underline {
    position: relative
}

.uk-link-underline::after {
    content: "";
    width: 100%;
    height: 1px;
    border-bottom: 1px solid rgba(138,138,138,.5);
    position: absolute;
    bottom: -3px;
    left: 0;
    transform-origin: bottom right;
    transition: transform .7s cubic-bezier(.17,.67,0,1.01)
}

.uk-heading-d1 {
    font-size: var(--sizes-heading-d1-size)!important;
    line-height: var(--sizes-heading-d1-lh);
    letter-spacing: var(--sizes-heading-d1-lp)
}

*+.uk-heading-d1 {
    margin-top: 20px
}

.uk-heading-d2 {
    font-size: var(--sizes-heading-d2-size)!important;
    line-height: var(--sizes-heading-d2-lh);
    letter-spacing: var(--sizes-heading-d2-lp)
}

*+.uk-heading-d2 {
    margin-top: 20px
}

.uk-heading-d3 {
    font-size: var(--sizes-heading-d3-size)!important;
    line-height: var(--sizes-heading-d3-lh);
    letter-spacing: var(--sizes-heading-d3-lp)
}

*+.uk-heading-d3 {
    margin-top: 20px
}

.uk-h1 {
    font-size: var(--sizes-heading-h1-size)!important;
    line-height: var(--sizes-heading-h1-lh);
    letter-spacing: var(--sizes-heading-h1-lp)
}

*+.uk-h1 {
    margin-top: 20px
}

.uk-h2 {
    font-size: var(--sizes-heading-h2-size)!important;
    line-height: var(--sizes-heading-h2-lh);
    letter-spacing: var(--sizes-heading-h2-lp)
}

*+.uk-h2 {
    margin-top: 20px
}

.uk-h3 {
    font-size: var(--sizes-heading-h3-size)!important;
    line-height: var(--sizes-heading-h3-lh);
    letter-spacing: var(--sizes-heading-h3-lp)
}

*+.uk-h3 {
    margin-top: 20px
}

.uk-h4 {
    font-size: var(--sizes-heading-h4-size)!important;
    line-height: var(--sizes-heading-h4-lh);
    letter-spacing: var(--sizes-heading-h4-lp)
}

*+.uk-h4 {
    margin-top: 20px
}

.uk-h5 {
    font-size: var(--sizes-heading-h5-size)!important;
    line-height: var(--sizes-heading-h5-lh);
    letter-spacing: var(--sizes-heading-h5-lp)
}

*+.uk-h5 {
    margin-top: 20px
}

.uk-h6 {
    font-size: var(--sizes-heading-h6-size)!important;
    line-height: var(--sizes-heading-h6-lh);
    letter-spacing: var(--sizes-heading-h6-lp)
}

*+.uk-h6 {
    margin-top: 20px
}

.uk-hero {
    font-size: var(--sizes-heading-hero-size)!important;
    line-height: var(--sizes-heading-hero-lh);
    letter-spacing: var(--sizes-heading-hero-lp)
}

*+.uk-hero {
    margin-top: 20px
}

.uk-text {
    font-size: var(--sizes-text-size)!important;
    line-height: var(--sizes-text-lh);
    letter-spacing: var(--sizes-text-lp)
}

.uk-text-xsmall {
    font-size: var(--sizes-text-xsmall-size)!important;
    line-height: var(--sizes-text-xsmall-lh);
    letter-spacing: var(--sizes-text-xsmall-lp)
}

.uk-text-small {
    font-size: var(--sizes-text-small-size)!important;
    line-height: var(--sizes-text-small-lh);
    letter-spacing: var(--sizes-text-small-lp)
}

.uk-text-medium {
    font-size: var(--sizes-text-medium-size)!important;
    line-height: var(--sizes-text-medium-lh);
    letter-spacing: var(--sizes-text-medium-lp)
}

.uk-text-large {
    font-size: var(--sizes-text-large-size)!important;
    line-height: var(--sizes-text-large-lh);
    letter-spacing: var(--sizes-text-large-lp)
}

.uk-text-xlarge {
    font-size: var(--sizes-text-xlarge-size)!important;
    line-height: var(--sizes-text-xlarge-lh);
    letter-spacing: var(--sizes-text-xlarge-lp)
}

.uk-text-2xlarge {
    font-size: var(--sizes-text-2xlarge-size)!important;
    line-height: var(--sizes-text-2xlarge-lh);
    letter-spacing: var(--sizes-text-2xlarge-lp)
}

.uk-text-3xlarge {
    font-size: var(--sizes-text-3xlarge-size)!important;
    line-height: var(--sizes-text-3xlarge-lh);
    letter-spacing: var(--sizes-text-3xlarge-lp)
}

.uk-text-2xsmall {
    font-size: var(--sizes-text-2xsmall-size)!important;
    line-height: var(--sizes-text-2xsmall-lh);
    letter-spacing: var(--sizes-text-2xsmall-lp)
}

.uk-text-lead {
    font-size: var(--sizes-text-xlarge-size)!important;
    line-height: var(--sizes-text-xlarge-lh);
    letter-spacing: var(--sizes-text-xlarge-lp);
    color: var(--body-color-text)
}

.uk-text-meta {
    font-size: var(--sizes-text-xsmall-size)!important;
    line-height: var(--sizes-text-xsmall-lh);
    letter-spacing: var(--sizes-text-xsmall-lp)
}

.uk-text-overline {
    font-size: var(--sizes-text-xsmall-size)!important;
    line-height: var(--sizes-text-xsmall-lh);
    letter-spacing: var(--sizes-text-xsmall-lp);
    font-weight: 500!important;
    text-transform: uppercase!important;
    letter-spacing: 1px!important
}

.uk-text-light {
    font-weight: var(--font-weight-light)!important
}

.uk-text-normal {
    font-weight: var(--font-weight-normal)!important
}

.uk-text-semibold {
    font-weight: var(--font-weight-semibold)!important
}

.uk-text-bold {
    font-weight: var(--font-weight-bold)!important
}

html.bp-xs .uk-heading-d1\@xs {
    font-size: var(--sizes-heading-d1-size)!important;
    line-height: var(--sizes-heading-d1-lh);
    letter-spacing: var(--sizes-heading-d1-lp)
}

html.bp-xs *+.uk-heading-d1\@xs {
    margin-top: 20px
}

html.bp-xs .uk-heading-d2\@xs {
    font-size: var(--sizes-heading-d2-size)!important;
    line-height: var(--sizes-heading-d2-lh);
    letter-spacing: var(--sizes-heading-d2-lp)
}

html.bp-xs *+.uk-heading-d2\@xs {
    margin-top: 20px
}

html.bp-xs .uk-heading-d3\@xs {
    font-size: var(--sizes-heading-d3-size)!important;
    line-height: var(--sizes-heading-d3-lh);
    letter-spacing: var(--sizes-heading-d3-lp)
}

html.bp-xs *+.uk-heading-d3\@xs {
    margin-top: 20px
}

html.bp-xs .uk-h1\@xs {
    font-size: var(--sizes-heading-h1-size)!important;
    line-height: var(--sizes-heading-h1-lh);
    letter-spacing: var(--sizes-heading-h1-lp)
}

html.bp-xs *+.uk-h1\@xs {
    margin-top: 20px
}

html.bp-xs .uk-h2\@xs {
    font-size: var(--sizes-heading-h2-size)!important;
    line-height: var(--sizes-heading-h2-lh);
    letter-spacing: var(--sizes-heading-h2-lp)
}

html.bp-xs *+.uk-h2\@xs {
    margin-top: 20px
}

html.bp-xs .uk-h3\@xs {
    font-size: var(--sizes-heading-h3-size)!important;
    line-height: var(--sizes-heading-h3-lh);
    letter-spacing: var(--sizes-heading-h3-lp)
}

html.bp-xs *+.uk-h3\@xs {
    margin-top: 20px
}

html.bp-xs .uk-h4\@xs {
    font-size: var(--sizes-heading-h4-size)!important;
    line-height: var(--sizes-heading-h4-lh);
    letter-spacing: var(--sizes-heading-h4-lp)
}

html.bp-xs *+.uk-h4\@xs {
    margin-top: 20px
}

html.bp-xs .uk-h5\@xs {
    font-size: var(--sizes-heading-h5-size)!important;
    line-height: var(--sizes-heading-h5-lh);
    letter-spacing: var(--sizes-heading-h5-lp)
}

html.bp-xs *+.uk-h5\@xs {
    margin-top: 20px
}

html.bp-xs .uk-h6\@xs {
    font-size: var(--sizes-heading-h6-size)!important;
    line-height: var(--sizes-heading-h6-lh);
    letter-spacing: var(--sizes-heading-h6-lp)
}

html.bp-xs *+.uk-h6\@xs {
    margin-top: 20px
}

html.bp-xs .uk-hero\@xs {
    font-size: var(--sizes-heading-hero-size)!important;
    line-height: var(--sizes-heading-hero-lh);
    letter-spacing: var(--sizes-heading-hero-lp)
}

html.bp-xs *+.uk-hero\@xs {
    margin-top: 20px
}

html.bp-xs .uk-text\@xs {
    font-size: var(--sizes-text-size)!important;
    line-height: var(--sizes-text-lh);
    letter-spacing: var(--sizes-text-lp)
}

html.bp-xs .uk-text-xsmall\@xs {
    font-size: var(--sizes-text-xsmall-size)!important;
    line-height: var(--sizes-text-xsmall-lh);
    letter-spacing: var(--sizes-text-xsmall-lp)
}

html.bp-xs .uk-text-small\@xs {
    font-size: var(--sizes-text-small-size)!important;
    line-height: var(--sizes-text-small-lh);
    letter-spacing: var(--sizes-text-small-lp)
}

html.bp-xs .uk-text-medium\@xs {
    font-size: var(--sizes-text-medium-size)!important;
    line-height: var(--sizes-text-medium-lh);
    letter-spacing: var(--sizes-text-medium-lp)
}

html.bp-xs .uk-text-large\@xs {
    font-size: var(--sizes-text-large-size)!important;
    line-height: var(--sizes-text-large-lh);
    letter-spacing: var(--sizes-text-large-lp)
}

html.bp-xs .uk-text-xlarge\@xs {
    font-size: var(--sizes-text-xlarge-size)!important;
    line-height: var(--sizes-text-xlarge-lh);
    letter-spacing: var(--sizes-text-xlarge-lp)
}

html.bp-xs .uk-text-2xlarge\@xs {
    font-size: var(--sizes-text-2xlarge-size)!important;
    line-height: var(--sizes-text-2xlarge-lh);
    letter-spacing: var(--sizes-text-2xlarge-lp)
}

html.bp-xs .uk-text-3xlarge\@xs {
    font-size: var(--sizes-text-3xlarge-size)!important;
    line-height: var(--sizes-text-3xlarge-lh);
    letter-spacing: var(--sizes-text-3xlarge-lp)
}

html.bp-xs .uk-text-2xsmall\@xs {
    font-size: var(--sizes-text-2xsmall-size)!important;
    line-height: var(--sizes-text-2xsmall-lh);
    letter-spacing: var(--sizes-text-2xsmall-lp)
}

html.bp-xs .uk-text-lead\@xs {
    font-size: var(--sizes-text-xlarge-size)!important;
    line-height: var(--sizes-text-xlarge-lh);
    letter-spacing: var(--sizes-text-xlarge-lp);
    color: var(--body-color-text)
}

html.bp-xs .uk-text-meta\@xs {
    font-size: var(--sizes-text-xsmall-size)!important;
    line-height: var(--sizes-text-xsmall-lh);
    letter-spacing: var(--sizes-text-xsmall-lp)
}

html.bp-xs .uk-text-overline\@xs {
    font-size: var(--sizes-text-xsmall-size)!important;
    line-height: var(--sizes-text-xsmall-lh);
    letter-spacing: var(--sizes-text-xsmall-lp);
    font-weight: 500!important;
    text-transform: uppercase!important;
    letter-spacing: 1px!important
}

html.bp-xs .uk-text-light\@xs {
    font-weight: var(--font-weight-light)!important
}

html.bp-xs .uk-text-normal\@xs {
    font-weight: var(--font-weight-normal)!important
}

html.bp-xs .uk-text-semibold\@xs {
    font-weight: var(--font-weight-semibold)!important
}

html.bp-xs .uk-text-bold\@xs {
    font-weight: var(--font-weight-bold)!important
}

html.bp-s .uk-heading-d1\@s {
    font-size: var(--sizes-heading-d1-size)!important;
    line-height: var(--sizes-heading-d1-lh);
    letter-spacing: var(--sizes-heading-d1-lp)
}

html.bp-s *+.uk-heading-d1\@s {
    margin-top: 20px
}

html.bp-s .uk-heading-d2\@s {
    font-size: var(--sizes-heading-d2-size)!important;
    line-height: var(--sizes-heading-d2-lh);
    letter-spacing: var(--sizes-heading-d2-lp)
}

html.bp-s *+.uk-heading-d2\@s {
    margin-top: 20px
}

html.bp-s .uk-heading-d3\@s {
    font-size: var(--sizes-heading-d3-size)!important;
    line-height: var(--sizes-heading-d3-lh);
    letter-spacing: var(--sizes-heading-d3-lp)
}

html.bp-s *+.uk-heading-d3\@s {
    margin-top: 20px
}

html.bp-s .uk-h1\@s {
    font-size: var(--sizes-heading-h1-size)!important;
    line-height: var(--sizes-heading-h1-lh);
    letter-spacing: var(--sizes-heading-h1-lp)
}

html.bp-s *+.uk-h1\@s {
    margin-top: 20px
}

html.bp-s .uk-h2\@s {
    font-size: var(--sizes-heading-h2-size)!important;
    line-height: var(--sizes-heading-h2-lh);
    letter-spacing: var(--sizes-heading-h2-lp)
}

html.bp-s *+.uk-h2\@s {
    margin-top: 20px
}

html.bp-s .uk-h3\@s {
    font-size: var(--sizes-heading-h3-size)!important;
    line-height: var(--sizes-heading-h3-lh);
    letter-spacing: var(--sizes-heading-h3-lp)
}

html.bp-s *+.uk-h3\@s {
    margin-top: 20px
}

html.bp-s .uk-h4\@s {
    font-size: var(--sizes-heading-h4-size)!important;
    line-height: var(--sizes-heading-h4-lh);
    letter-spacing: var(--sizes-heading-h4-lp)
}

html.bp-s *+.uk-h4\@s {
    margin-top: 20px
}

html.bp-s .uk-h5\@s {
    font-size: var(--sizes-heading-h5-size)!important;
    line-height: var(--sizes-heading-h5-lh);
    letter-spacing: var(--sizes-heading-h5-lp)
}

html.bp-s *+.uk-h5\@s {
    margin-top: 20px
}

html.bp-s .uk-h6\@s {
    font-size: var(--sizes-heading-h6-size)!important;
    line-height: var(--sizes-heading-h6-lh);
    letter-spacing: var(--sizes-heading-h6-lp)
}

html.bp-s *+.uk-h6\@s {
    margin-top: 20px
}

html.bp-s .uk-hero\@s {
    font-size: var(--sizes-heading-hero-size)!important;
    line-height: var(--sizes-heading-hero-lh);
    letter-spacing: var(--sizes-heading-hero-lp)
}

html.bp-s *+.uk-hero\@s {
    margin-top: 20px
}

html.bp-s .uk-text\@s {
    font-size: var(--sizes-text-size)!important;
    line-height: var(--sizes-text-lh);
    letter-spacing: var(--sizes-text-lp)
}

html.bp-s .uk-text-xsmall\@s {
    font-size: var(--sizes-text-xsmall-size)!important;
    line-height: var(--sizes-text-xsmall-lh);
    letter-spacing: var(--sizes-text-xsmall-lp)
}

html.bp-s .uk-text-small\@s {
    font-size: var(--sizes-text-small-size)!important;
    line-height: var(--sizes-text-small-lh);
    letter-spacing: var(--sizes-text-small-lp)
}

html.bp-s .uk-text-medium\@s {
    font-size: var(--sizes-text-medium-size)!important;
    line-height: var(--sizes-text-medium-lh);
    letter-spacing: var(--sizes-text-medium-lp)
}

html.bp-s .uk-text-large\@s {
    font-size: var(--sizes-text-large-size)!important;
    line-height: var(--sizes-text-large-lh);
    letter-spacing: var(--sizes-text-large-lp)
}

html.bp-s .uk-text-xlarge\@s {
    font-size: var(--sizes-text-xlarge-size)!important;
    line-height: var(--sizes-text-xlarge-lh);
    letter-spacing: var(--sizes-text-xlarge-lp)
}

html.bp-s .uk-text-2xlarge\@s {
    font-size: var(--sizes-text-2xlarge-size)!important;
    line-height: var(--sizes-text-2xlarge-lh);
    letter-spacing: var(--sizes-text-2xlarge-lp)
}

html.bp-s .uk-text-3xlarge\@s {
    font-size: var(--sizes-text-3xlarge-size)!important;
    line-height: var(--sizes-text-3xlarge-lh);
    letter-spacing: var(--sizes-text-3xlarge-lp)
}

html.bp-s .uk-text-2xsmall\@s {
    font-size: var(--sizes-text-2xsmall-size)!important;
    line-height: var(--sizes-text-2xsmall-lh);
    letter-spacing: var(--sizes-text-2xsmall-lp)
}

html.bp-s .uk-text-lead\@s {
    font-size: var(--sizes-text-xlarge-size)!important;
    line-height: var(--sizes-text-xlarge-lh);
    letter-spacing: var(--sizes-text-xlarge-lp);
    color: var(--body-color-text)
}

html.bp-s .uk-text-meta\@s {
    font-size: var(--sizes-text-xsmall-size)!important;
    line-height: var(--sizes-text-xsmall-lh);
    letter-spacing: var(--sizes-text-xsmall-lp)
}

html.bp-s .uk-text-overline\@s {
    font-size: var(--sizes-text-xsmall-size)!important;
    line-height: var(--sizes-text-xsmall-lh);
    letter-spacing: var(--sizes-text-xsmall-lp);
    font-weight: 500!important;
    text-transform: uppercase!important;
    letter-spacing: 1px!important
}

html.bp-s .uk-text-light\@s {
    font-weight: var(--font-weight-light)!important
}

html.bp-s .uk-text-normal\@s {
    font-weight: var(--font-weight-normal)!important
}

html.bp-s .uk-text-semibold\@s {
    font-weight: var(--font-weight-semibold)!important
}

html.bp-s .uk-text-bold\@s {
    font-weight: var(--font-weight-bold)!important
}

html.bp-m .uk-heading-d1\@m {
    font-size: var(--sizes-heading-d1-size)!important;
    line-height: var(--sizes-heading-d1-lh);
    letter-spacing: var(--sizes-heading-d1-lp)
}

html.bp-m *+.uk-heading-d1\@m {
    margin-top: 20px
}

html.bp-m .uk-heading-d2\@m {
    font-size: var(--sizes-heading-d2-size)!important;
    line-height: var(--sizes-heading-d2-lh);
    letter-spacing: var(--sizes-heading-d2-lp)
}

html.bp-m *+.uk-heading-d2\@m {
    margin-top: 20px
}

html.bp-m .uk-heading-d3\@m {
    font-size: var(--sizes-heading-d3-size)!important;
    line-height: var(--sizes-heading-d3-lh);
    letter-spacing: var(--sizes-heading-d3-lp)
}

html.bp-m *+.uk-heading-d3\@m {
    margin-top: 20px
}

html.bp-m .uk-h1\@m {
    font-size: var(--sizes-heading-h1-size)!important;
    line-height: var(--sizes-heading-h1-lh);
    letter-spacing: var(--sizes-heading-h1-lp)
}

html.bp-m *+.uk-h1\@m {
    margin-top: 20px
}

html.bp-m .uk-h2\@m {
    font-size: var(--sizes-heading-h2-size)!important;
    line-height: var(--sizes-heading-h2-lh);
    letter-spacing: var(--sizes-heading-h2-lp)
}

html.bp-m *+.uk-h2\@m {
    margin-top: 20px
}

html.bp-m .uk-h3\@m {
    font-size: var(--sizes-heading-h3-size)!important;
    line-height: var(--sizes-heading-h3-lh);
    letter-spacing: var(--sizes-heading-h3-lp)
}

html.bp-m *+.uk-h3\@m {
    margin-top: 20px
}

html.bp-m .uk-h4\@m {
    font-size: var(--sizes-heading-h4-size)!important;
    line-height: var(--sizes-heading-h4-lh);
    letter-spacing: var(--sizes-heading-h4-lp)
}

html.bp-m *+.uk-h4\@m {
    margin-top: 20px
}

html.bp-m .uk-h5\@m {
    font-size: var(--sizes-heading-h5-size)!important;
    line-height: var(--sizes-heading-h5-lh);
    letter-spacing: var(--sizes-heading-h5-lp)
}

html.bp-m *+.uk-h5\@m {
    margin-top: 20px
}

html.bp-m .uk-h6\@m {
    font-size: var(--sizes-heading-h6-size)!important;
    line-height: var(--sizes-heading-h6-lh);
    letter-spacing: var(--sizes-heading-h6-lp)
}

html.bp-m *+.uk-h6\@m {
    margin-top: 20px
}

html.bp-m .uk-hero\@m {
    font-size: var(--sizes-heading-hero-size)!important;
    line-height: var(--sizes-heading-hero-lh);
    letter-spacing: var(--sizes-heading-hero-lp)
}

html.bp-m *+.uk-hero\@m {
    margin-top: 20px
}

html.bp-m .uk-text\@m {
    font-size: var(--sizes-text-size)!important;
    line-height: var(--sizes-text-lh);
    letter-spacing: var(--sizes-text-lp)
}

html.bp-m .uk-text-xsmall\@m {
    font-size: var(--sizes-text-xsmall-size)!important;
    line-height: var(--sizes-text-xsmall-lh);
    letter-spacing: var(--sizes-text-xsmall-lp)
}

html.bp-m .uk-text-small\@m {
    font-size: var(--sizes-text-small-size)!important;
    line-height: var(--sizes-text-small-lh);
    letter-spacing: var(--sizes-text-small-lp)
}

html.bp-m .uk-text-medium\@m {
    font-size: var(--sizes-text-medium-size)!important;
    line-height: var(--sizes-text-medium-lh);
    letter-spacing: var(--sizes-text-medium-lp)
}

html.bp-m .uk-text-large\@m {
    font-size: var(--sizes-text-large-size)!important;
    line-height: var(--sizes-text-large-lh);
    letter-spacing: var(--sizes-text-large-lp)
}

html.bp-m .uk-text-xlarge\@m {
    font-size: var(--sizes-text-xlarge-size)!important;
    line-height: var(--sizes-text-xlarge-lh);
    letter-spacing: var(--sizes-text-xlarge-lp)
}

html.bp-m .uk-text-2xlarge\@m {
    font-size: var(--sizes-text-2xlarge-size)!important;
    line-height: var(--sizes-text-2xlarge-lh);
    letter-spacing: var(--sizes-text-2xlarge-lp)
}

html.bp-m .uk-text-3xlarge\@m {
    font-size: var(--sizes-text-3xlarge-size)!important;
    line-height: var(--sizes-text-3xlarge-lh);
    letter-spacing: var(--sizes-text-3xlarge-lp)
}

html.bp-m .uk-text-2xsmall\@m {
    font-size: var(--sizes-text-2xsmall-size)!important;
    line-height: var(--sizes-text-2xsmall-lh);
    letter-spacing: var(--sizes-text-2xsmall-lp)
}

html.bp-m .uk-text-lead\@m {
    font-size: var(--sizes-text-xlarge-size)!important;
    line-height: var(--sizes-text-xlarge-lh);
    letter-spacing: var(--sizes-text-xlarge-lp);
    color: var(--body-color-text)
}

html.bp-m .uk-text-meta\@m {
    font-size: var(--sizes-text-xsmall-size)!important;
    line-height: var(--sizes-text-xsmall-lh);
    letter-spacing: var(--sizes-text-xsmall-lp)
}

html.bp-m .uk-text-overline\@m {
    font-size: var(--sizes-text-xsmall-size)!important;
    line-height: var(--sizes-text-xsmall-lh);
    letter-spacing: var(--sizes-text-xsmall-lp);
    font-weight: 500!important;
    text-transform: uppercase!important;
    letter-spacing: 1px!important
}

html.bp-m .uk-text-light\@m {
    font-weight: var(--font-weight-light)!important
}

html.bp-m .uk-text-normal\@m {
    font-weight: var(--font-weight-normal)!important
}

html.bp-m .uk-text-semibold\@m {
    font-weight: var(--font-weight-semibold)!important
}

html.bp-m .uk-text-bold\@m {
    font-weight: var(--font-weight-bold)!important
}

html.bp-l .uk-heading-d1\@l {
    font-size: var(--sizes-heading-d1-size)!important;
    line-height: var(--sizes-heading-d1-lh);
    letter-spacing: var(--sizes-heading-d1-lp)
}

html.bp-l *+.uk-heading-d1\@l {
    margin-top: 20px
}

html.bp-l .uk-heading-d2\@l {
    font-size: var(--sizes-heading-d2-size)!important;
    line-height: var(--sizes-heading-d2-lh);
    letter-spacing: var(--sizes-heading-d2-lp)
}

html.bp-l *+.uk-heading-d2\@l {
    margin-top: 20px
}

html.bp-l .uk-heading-d3\@l {
    font-size: var(--sizes-heading-d3-size)!important;
    line-height: var(--sizes-heading-d3-lh);
    letter-spacing: var(--sizes-heading-d3-lp)
}

html.bp-l *+.uk-heading-d3\@l {
    margin-top: 20px
}

html.bp-l .uk-h1\@l {
    font-size: var(--sizes-heading-h1-size)!important;
    line-height: var(--sizes-heading-h1-lh);
    letter-spacing: var(--sizes-heading-h1-lp)
}

html.bp-l *+.uk-h1\@l {
    margin-top: 20px
}

html.bp-l .uk-h2\@l {
    font-size: var(--sizes-heading-h2-size)!important;
    line-height: var(--sizes-heading-h2-lh);
    letter-spacing: var(--sizes-heading-h2-lp)
}

html.bp-l *+.uk-h2\@l {
    margin-top: 20px
}

html.bp-l .uk-h3\@l {
    font-size: var(--sizes-heading-h3-size)!important;
    line-height: var(--sizes-heading-h3-lh);
    letter-spacing: var(--sizes-heading-h3-lp)
}

html.bp-l *+.uk-h3\@l {
    margin-top: 20px
}

html.bp-l .uk-h4\@l {
    font-size: var(--sizes-heading-h4-size)!important;
    line-height: var(--sizes-heading-h4-lh);
    letter-spacing: var(--sizes-heading-h4-lp)
}

html.bp-l *+.uk-h4\@l {
    margin-top: 20px
}

html.bp-l .uk-h5\@l {
    font-size: var(--sizes-heading-h5-size)!important;
    line-height: var(--sizes-heading-h5-lh);
    letter-spacing: var(--sizes-heading-h5-lp)
}

html.bp-l *+.uk-h5\@l {
    margin-top: 20px
}

html.bp-l .uk-h6\@l {
    font-size: var(--sizes-heading-h6-size)!important;
    line-height: var(--sizes-heading-h6-lh);
    letter-spacing: var(--sizes-heading-h6-lp)
}

html.bp-l *+.uk-h6\@l {
    margin-top: 20px
}

html.bp-l .uk-hero\@l {
    font-size: var(--sizes-heading-hero-size)!important;
    line-height: var(--sizes-heading-hero-lh);
    letter-spacing: var(--sizes-heading-hero-lp)
}

html.bp-l *+.uk-hero\@l {
    margin-top: 20px
}

html.bp-l .uk-text\@l {
    font-size: var(--sizes-text-size)!important;
    line-height: var(--sizes-text-lh);
    letter-spacing: var(--sizes-text-lp)
}

html.bp-l .uk-text-xsmall\@l {
    font-size: var(--sizes-text-xsmall-size)!important;
    line-height: var(--sizes-text-xsmall-lh);
    letter-spacing: var(--sizes-text-xsmall-lp)
}

html.bp-l .uk-text-small\@l {
    font-size: var(--sizes-text-small-size)!important;
    line-height: var(--sizes-text-small-lh);
    letter-spacing: var(--sizes-text-small-lp)
}

html.bp-l .uk-text-medium\@l {
    font-size: var(--sizes-text-medium-size)!important;
    line-height: var(--sizes-text-medium-lh);
    letter-spacing: var(--sizes-text-medium-lp)
}

html.bp-l .uk-text-large\@l {
    font-size: var(--sizes-text-large-size)!important;
    line-height: var(--sizes-text-large-lh);
    letter-spacing: var(--sizes-text-large-lp)
}

html.bp-l .uk-text-xlarge\@l {
    font-size: var(--sizes-text-xlarge-size)!important;
    line-height: var(--sizes-text-xlarge-lh);
    letter-spacing: var(--sizes-text-xlarge-lp)
}

html.bp-l .uk-text-2xlarge\@l {
    font-size: var(--sizes-text-2xlarge-size)!important;
    line-height: var(--sizes-text-2xlarge-lh);
    letter-spacing: var(--sizes-text-2xlarge-lp)
}

html.bp-l .uk-text-3xlarge\@l {
    font-size: var(--sizes-text-3xlarge-size)!important;
    line-height: var(--sizes-text-3xlarge-lh);
    letter-spacing: var(--sizes-text-3xlarge-lp)
}

html.bp-l .uk-text-2xsmall\@l {
    font-size: var(--sizes-text-2xsmall-size)!important;
    line-height: var(--sizes-text-2xsmall-lh);
    letter-spacing: var(--sizes-text-2xsmall-lp)
}

html.bp-l .uk-text-lead\@l {
    font-size: var(--sizes-text-xlarge-size)!important;
    line-height: var(--sizes-text-xlarge-lh);
    letter-spacing: var(--sizes-text-xlarge-lp);
    color: var(--body-color-text)
}

html.bp-l .uk-text-meta\@l {
    font-size: var(--sizes-text-xsmall-size)!important;
    line-height: var(--sizes-text-xsmall-lh);
    letter-spacing: var(--sizes-text-xsmall-lp)
}

html.bp-l .uk-text-overline\@l {
    font-size: var(--sizes-text-xsmall-size)!important;
    line-height: var(--sizes-text-xsmall-lh);
    letter-spacing: var(--sizes-text-xsmall-lp);
    font-weight: 500!important;
    text-transform: uppercase!important;
    letter-spacing: 1px!important
}

html.bp-l .uk-text-light\@l {
    font-weight: var(--font-weight-light)!important
}

html.bp-l .uk-text-normal\@l {
    font-weight: var(--font-weight-normal)!important
}

html.bp-l .uk-text-semibold\@l {
    font-weight: var(--font-weight-semibold)!important
}

html.bp-l .uk-text-bold\@l {
    font-weight: var(--font-weight-bold)!important
}

html.bp-xl .uk-heading-d1\@xl {
    font-size: var(--sizes-heading-d1-size)!important;
    line-height: var(--sizes-heading-d1-lh);
    letter-spacing: var(--sizes-heading-d1-lp)
}

html.bp-xl *+.uk-heading-d1\@xl {
    margin-top: 20px
}

html.bp-xl .uk-heading-d2\@xl {
    font-size: var(--sizes-heading-d2-size)!important;
    line-height: var(--sizes-heading-d2-lh);
    letter-spacing: var(--sizes-heading-d2-lp)
}

html.bp-xl *+.uk-heading-d2\@xl {
    margin-top: 20px
}

html.bp-xl .uk-heading-d3\@xl {
    font-size: var(--sizes-heading-d3-size)!important;
    line-height: var(--sizes-heading-d3-lh);
    letter-spacing: var(--sizes-heading-d3-lp)
}

html.bp-xl *+.uk-heading-d3\@xl {
    margin-top: 20px
}

html.bp-xl .uk-h1\@xl {
    font-size: var(--sizes-heading-h1-size)!important;
    line-height: var(--sizes-heading-h1-lh);
    letter-spacing: var(--sizes-heading-h1-lp)
}

html.bp-xl *+.uk-h1\@xl {
    margin-top: 20px
}

html.bp-xl .uk-h2\@xl {
    font-size: var(--sizes-heading-h2-size)!important;
    line-height: var(--sizes-heading-h2-lh);
    letter-spacing: var(--sizes-heading-h2-lp)
}

html.bp-xl *+.uk-h2\@xl {
    margin-top: 20px
}

html.bp-xl .uk-h3\@xl {
    font-size: var(--sizes-heading-h3-size)!important;
    line-height: var(--sizes-heading-h3-lh);
    letter-spacing: var(--sizes-heading-h3-lp)
}

html.bp-xl *+.uk-h3\@xl {
    margin-top: 20px
}

html.bp-xl .uk-h4\@xl {
    font-size: var(--sizes-heading-h4-size)!important;
    line-height: var(--sizes-heading-h4-lh);
    letter-spacing: var(--sizes-heading-h4-lp)
}

html.bp-xl *+.uk-h4\@xl {
    margin-top: 20px
}

html.bp-xl .uk-h5\@xl {
    font-size: var(--sizes-heading-h5-size)!important;
    line-height: var(--sizes-heading-h5-lh);
    letter-spacing: var(--sizes-heading-h5-lp)
}

html.bp-xl *+.uk-h5\@xl {
    margin-top: 20px
}

html.bp-xl .uk-h6\@xl {
    font-size: var(--sizes-heading-h6-size)!important;
    line-height: var(--sizes-heading-h6-lh);
    letter-spacing: var(--sizes-heading-h6-lp)
}

html.bp-xl *+.uk-h6\@xl {
    margin-top: 20px
}

html.bp-xl .uk-hero\@xl {
    font-size: var(--sizes-heading-hero-size)!important;
    line-height: var(--sizes-heading-hero-lh);
    letter-spacing: var(--sizes-heading-hero-lp)
}

html.bp-xl *+.uk-hero\@xl {
    margin-top: 20px
}

html.bp-xl .uk-text\@xl {
    font-size: var(--sizes-text-size)!important;
    line-height: var(--sizes-text-lh);
    letter-spacing: var(--sizes-text-lp)
}

html.bp-xl .uk-text-xsmall\@xl {
    font-size: var(--sizes-text-xsmall-size)!important;
    line-height: var(--sizes-text-xsmall-lh);
    letter-spacing: var(--sizes-text-xsmall-lp)
}

html.bp-xl .uk-text-small\@xl {
    font-size: var(--sizes-text-small-size)!important;
    line-height: var(--sizes-text-small-lh);
    letter-spacing: var(--sizes-text-small-lp)
}

html.bp-xl .uk-text-medium\@xl {
    font-size: var(--sizes-text-medium-size)!important;
    line-height: var(--sizes-text-medium-lh);
    letter-spacing: var(--sizes-text-medium-lp)
}

html.bp-xl .uk-text-large\@xl {
    font-size: var(--sizes-text-large-size)!important;
    line-height: var(--sizes-text-large-lh);
    letter-spacing: var(--sizes-text-large-lp)
}

html.bp-xl .uk-text-xlarge\@xl {
    font-size: var(--sizes-text-xlarge-size)!important;
    line-height: var(--sizes-text-xlarge-lh);
    letter-spacing: var(--sizes-text-xlarge-lp)
}

html.bp-xl .uk-text-2xlarge\@xl {
    font-size: var(--sizes-text-2xlarge-size)!important;
    line-height: var(--sizes-text-2xlarge-lh);
    letter-spacing: var(--sizes-text-2xlarge-lp)
}

html.bp-xl .uk-text-3xlarge\@xl {
    font-size: var(--sizes-text-3xlarge-size)!important;
    line-height: var(--sizes-text-3xlarge-lh);
    letter-spacing: var(--sizes-text-3xlarge-lp)
}

html.bp-xl .uk-text-2xsmall\@xl {
    font-size: var(--sizes-text-2xsmall-size)!important;
    line-height: var(--sizes-text-2xsmall-lh);
    letter-spacing: var(--sizes-text-2xsmall-lp)
}

html.bp-xl .uk-text-lead\@xl {
    font-size: var(--sizes-text-xlarge-size)!important;
    line-height: var(--sizes-text-xlarge-lh);
    letter-spacing: var(--sizes-text-xlarge-lp);
    color: var(--body-color-text)
}

html.bp-xl .uk-text-meta\@xl {
    font-size: var(--sizes-text-xsmall-size)!important;
    line-height: var(--sizes-text-xsmall-lh);
    letter-spacing: var(--sizes-text-xsmall-lp)
}

html.bp-xl .uk-text-overline\@xl {
    font-size: var(--sizes-text-xsmall-size)!important;
    line-height: var(--sizes-text-xsmall-lh);
    letter-spacing: var(--sizes-text-xsmall-lp);
    font-weight: 500!important;
    text-transform: uppercase!important;
    letter-spacing: 1px!important
}

html.bp-xl .uk-text-light\@xl {
    font-weight: var(--font-weight-light)!important
}

html.bp-xl .uk-text-normal\@xl {
    font-weight: var(--font-weight-normal)!important
}

html.bp-xl .uk-text-semibold\@xl {
    font-weight: var(--font-weight-semibold)!important
}

html.bp-xl .uk-text-bold\@xl {
    font-weight: var(--font-weight-bold)!important
}

.uk-list>*>* {
    color: inherit
}

.uk-list>*>:hover {
    color: inherit
}

.uk-form-button {
    position: absolute!important;
    background: 0 0;
    border: 0;
    outline: 0;
    cursor: pointer
}

.uk-form-button {
    color: var(--color-gray-50)
}

.uk-dark .uk-form-button,.uk-form-button.uk-dark {
    color: var(--color-gray-40)
}

.uk-form-icon {
    background: 0 0;
    border: 0;
    outline: 0;
    cursor: pointer
}

.uk-form-icon {
    color: var(--color-gray-50)
}

.uk-dark .uk-form-icon,.uk-form-icon.uk-dark {
    color: var(--color-gray-40)
}

.uk-form-label {
    display: flex;
    font-size: .875rem;
    font-weight: 700;
    text-transform: unset;
    color: inherit;
    margin-bottom: 10px
}

.uk-form-label {
    color: var(--color-gray-100)
}

.uk-dark .uk-form-label,.uk-form-label.uk-dark {
    color: #fff
}

.uk-checkbox,.uk-input,.uk-radio,.uk-select:not([multiple]):not([size]),.uk-textarea {
    font-family: var(--form-font-typeface);
    font-size: var(--form-font-size);
    font-weight: var(--form-font-weight);
    letter-spacing: var(--form-font-spacing);
    text-transform: var(--form-font-transform);
    border: 0;
    border-radius: var(--form-border-radius);
    transition: .1s ease-in-out
}

.uk-checkbox,.uk-input,.uk-radio,.uk-select:not([multiple]):not([size]),.uk-textarea {
    background-color: rgba(0,0,0,.05)!important;
    color: #000!important
}

.uk-checkbox.uk-dark,.uk-dark .uk-checkbox,.uk-dark .uk-input,.uk-dark .uk-radio,.uk-dark .uk-select:not([multiple]):not([size]),.uk-dark .uk-textarea,.uk-input.uk-dark,.uk-radio.uk-dark,.uk-select:not([multiple]):not([size]).uk-dark,.uk-textarea.uk-dark {
    background-color: rgba(255,255,255,.05)!important;
    color: #fff!important
}

.uk-checkbox,.uk-input,.uk-radio,.uk-select:not([multiple]):not([size]),.uk-textarea {
    --inner-shadow: rgba(0, 0, 0, 0.08)
}

.uk-checkbox.uk-dark,.uk-dark .uk-checkbox,.uk-dark .uk-input,.uk-dark .uk-radio,.uk-dark .uk-select:not([multiple]):not([size]),.uk-dark .uk-textarea,.uk-input.uk-dark,.uk-radio.uk-dark,.uk-select:not([multiple]):not([size]).uk-dark,.uk-textarea.uk-dark {
    --inner-shadow: rgba(255, 255, 255, 0.08)
}

.uk-checkbox:hover,.uk-input:hover,.uk-radio:hover,.uk-select:not([multiple]):not([size]):hover,.uk-textarea:hover {
    box-shadow: inset 0 0 0 1px var(--inner-shadow)
}

.uk-checkbox:focus,.uk-input:focus,.uk-radio:focus,.uk-select:not([multiple]):not([size]):focus,.uk-textarea:focus {
    background-color: transparent!important;
    box-shadow: inset 0 0 0 1px var(--inner-shadow),0 0 0 4px var(--outer-shadow)
}

.uk-checkbox:focus,.uk-input:focus,.uk-radio:focus,.uk-select:not([multiple]):not([size]):focus,.uk-textarea:focus {
    --inner-shadow: rgba(0, 0, 0, 0.15)!important;
    --outer-shadow: rgba(0, 0, 0, 0.03)!important
}

.uk-checkbox:focus.uk-dark,.uk-dark .uk-checkbox:focus,.uk-dark .uk-input:focus,.uk-dark .uk-radio:focus,.uk-dark .uk-select:not([multiple]):not([size]):focus,.uk-dark .uk-textarea:focus,.uk-input:focus.uk-dark,.uk-radio:focus.uk-dark,.uk-select:not([multiple]):not([size]):focus.uk-dark,.uk-textarea:focus.uk-dark {
    --inner-shadow: rgba(255, 255, 255, 0.15)!important;
    --outer-shadow: rgba(255, 255, 255, 0.03)!important
}

.uk-checkbox::placeholder,.uk-input::placeholder,.uk-radio::placeholder,.uk-select:not([multiple]):not([size])::placeholder,.uk-textarea::placeholder {
    color: var(--color-gray-60)
}

.uk-checkbox::placeholder.uk-dark,.uk-dark .uk-checkbox::placeholder,.uk-dark .uk-input::placeholder,.uk-dark .uk-radio::placeholder,.uk-dark .uk-select:not([multiple]):not([size])::placeholder,.uk-dark .uk-textarea::placeholder,.uk-input::placeholder.uk-dark,.uk-radio::placeholder.uk-dark,.uk-select:not([multiple]):not([size])::placeholder.uk-dark,.uk-textarea::placeholder.uk-dark {
    color: var(--color-gray-40)
}

.uk-input,.uk-select:not([multiple]):not([size]) {
    height: var(--sizes-form-height);
    padding: var(--sizes-form-padding)
}

.uk-checkbox {
    width: 18px;
    height: 18px;
    position: relative;
    top: 2px;
    border-radius: 50%
}

.uk-checkbox:checked {
    background-size: 14px;
    background-repeat: no-repeat;
    background-position: center;
    background-color: var(--color-primary)!important
}

.uk-radio {
    width: 18px;
    height: 18px;
    border-radius: 50%
}

.uk-radio:checked {
    background-color: var(--color-primary)!important
}

.uk-switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px
}

.uk-switch>input {
    display: none
}

.uk-switch>input:checked+span {
    background-color: var(--color-primary)
}

.uk-switch>input:checked+span:before {
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px)
}

.uk-switch>span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 24px;
    transition: .2s
}

.uk-switch>span {
    background-color: rgba(0,0,0,.08)
}

.uk-dark .uk-switch>span,.uk-switch>span.uk-dark {
    background-color: rgba(255,255,255,.08)
}

.uk-switch>span:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 3px;
    bottom: 3px;
    border-radius: 24px;
    background-color: #fff;
    -webkit-transition: .2s;
    transition: .2s
}

.uk-radio-button {
    position: relative
}

.uk-radio-button>input {
    display: none
}

.uk-radio-button>input:checked+span {
    border-color: var(--color-primary)
}

.uk-radio-button>span {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: stretch;
    padding: 16px 16px 8px;
    border-radius: var(--radius);
    border: 2px solid;
    min-height: 80px
}

.uk-radio-button>span {
    border-color: rgba(0,0,0,.08)
}

.uk-dark .uk-radio-button>span,.uk-radio-button>span.uk-dark {
    border-color: rgba(255,255,255,.08)
}

.uk-radio-button>span>span {
    font-size: .9rem;
    font-weight: 700;
    margin-top: 4px
}

.uk-input[type=datetime-local] {
    background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2224%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23666%22%20points%3D%2212%201%209%206%2015%206%22%20%2F%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23666%22%20points%3D%2212%2013%209%208%2015%208%22%20%2F%3E%0A%3C%2Fsvg%3E%0A");
    background-repeat: no-repeat;
    background-position: 97% 50%
}

.uk-input[type=datetime-local]::-webkit-calendar-picker-indicator,.uk-input[type=datetime-local]::-webkit-inner-spin-button {
    opacity: 0;
    -webkit-appearance: none
}

.uk-form-2xsmall,html.bp-l .uk-form-2xsmall\@l,html.bp-m .uk-form-2xsmall\@m,html.bp-s .uk-form-2xsmall\@s,html.bp-xl .uk-form-2xsmall\@xl,html.bp-xs .uk-form-2xsmall\@xs {
    font-size: var(--sizes-form-2xsmall-text)!important;
    height: var(--sizes-form-2xsmall-height)!important;
    padding: var(--sizes-form-2xsmall-padding)!important
}

.uk-form-icon {
    position: absolute!important
}

.uk-form-icon:not(.uk-form-icon-flip)~.uk-input.uk-form-2xsmall {
    padding-left: var(--sizes-form-2xsmall-height)!important
}

.uk-form-icon.uk-form-icon-flip~.uk-input.uk-form-2xsmall {
    padding-right: var(--sizes-form-2xsmall-height)!important
}

.uk-form-icon.uk-form-2xsmall {
    width: var(--sizes-form-2xsmall-height)!important;
    padding: 0!important;
    line-height: initial!important
}

.uk-form-xsmall,html.bp-l .uk-form-xsmall\@l,html.bp-m .uk-form-xsmall\@m,html.bp-s .uk-form-xsmall\@s,html.bp-xl .uk-form-xsmall\@xl,html.bp-xs .uk-form-xsmall\@xs {
    font-size: var(--sizes-form-xsmall-text)!important;
    height: var(--sizes-form-xsmall-height)!important;
    padding: var(--sizes-form-xsmall-padding)!important
}

.uk-form-icon {
    position: absolute!important
}

.uk-form-icon:not(.uk-form-icon-flip)~.uk-input.uk-form-xsmall {
    padding-left: var(--sizes-form-xsmall-height)!important
}

.uk-form-icon.uk-form-icon-flip~.uk-input.uk-form-xsmall {
    padding-right: var(--sizes-form-xsmall-height)!important
}

.uk-form-icon.uk-form-xsmall {
    width: var(--sizes-form-xsmall-height)!important;
    padding: 0!important;
    line-height: initial!important
}

.uk-form-small,html.bp-l .uk-form-small\@l,html.bp-m .uk-form-small\@m,html.bp-s .uk-form-small\@s,html.bp-xl .uk-form-small\@xl,html.bp-xs .uk-form-small\@xs {
    font-size: var(--sizes-form-small-text)!important;
    height: var(--sizes-form-small-height)!important;
    padding: var(--sizes-form-small-padding)!important
}

.uk-form-icon {
    position: absolute!important
}

.uk-form-icon:not(.uk-form-icon-flip)~.uk-input.uk-form-small {
    padding-left: var(--sizes-form-small-height)!important
}

.uk-form-icon.uk-form-icon-flip~.uk-input.uk-form-small {
    padding-right: var(--sizes-form-small-height)!important
}

.uk-form-icon.uk-form-small {
    width: var(--sizes-form-small-height)!important;
    padding: 0!important;
    line-height: initial!important
}

.uk-form-medium,html.bp-l .uk-form-medium\@l,html.bp-m .uk-form-medium\@m,html.bp-s .uk-form-medium\@s,html.bp-xl .uk-form-medium\@xl,html.bp-xs .uk-form-medium\@xs {
    font-size: var(--sizes-form-medium-text)!important;
    height: var(--sizes-form-medium-height)!important;
    padding: var(--sizes-form-medium-padding)!important
}

.uk-form-icon {
    position: absolute!important
}

.uk-form-icon:not(.uk-form-icon-flip)~.uk-input.uk-form-medium {
    padding-left: var(--sizes-form-medium-height)!important
}

.uk-form-icon.uk-form-icon-flip~.uk-input.uk-form-medium {
    padding-right: var(--sizes-form-medium-height)!important
}

.uk-form-icon.uk-form-medium {
    width: var(--sizes-form-medium-height)!important;
    padding: 0!important;
    line-height: initial!important
}

.uk-form-large,html.bp-l .uk-form-large\@l,html.bp-m .uk-form-large\@m,html.bp-s .uk-form-large\@s,html.bp-xl .uk-form-large\@xl,html.bp-xs .uk-form-large\@xs {
    font-size: var(--sizes-form-large-text)!important;
    height: var(--sizes-form-large-height)!important;
    padding: var(--sizes-form-large-padding)!important
}

.uk-form-icon {
    position: absolute!important
}

.uk-form-icon:not(.uk-form-icon-flip)~.uk-input.uk-form-large {
    padding-left: var(--sizes-form-large-height)!important
}

.uk-form-icon.uk-form-icon-flip~.uk-input.uk-form-large {
    padding-right: var(--sizes-form-large-height)!important
}

.uk-form-icon.uk-form-large {
    width: var(--sizes-form-large-height)!important;
    padding: 0!important;
    line-height: initial!important
}

.uk-button {
    --btn-shadow-color: transparent;
    box-sizing: border-box;
    position: relative;
    display: var(--button-display);
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    background: 0 0;
    font-family: var(--button-font-typeface,sans-serif);
    font-weight: var(--button-font-weight,700);
    text-transform: var(--button-font-transform,initial);
    font-size: var(--button-font-size);
    height: var(--button-height);
    padding: var(--button-padding);
    margin: var(--button-margin);
    color: inherit;
    text-align: var(--button-align-text);
    text-decoration: none;
    line-height: 1;
    letter-spacing: var(--button-font-spacing,normal);
    vertical-align: top;
    border: 0;
    border-radius: var(--button-border-radius,0);
    outline: 0;
    cursor: pointer;
    transition: .2s ease
}

.uk-button {
    color: inherit
}

.uk-button.uk-dark,.uk-dark .uk-button {
    color: #fff
}

.uk-button::before {
    content: "";
    position: absolute;
    border-radius: inherit;
    inset: 0;
    box-shadow: inset 0 0 0 var(--button-border-width,0) var(--btn-shadow-color);
    transition: .2s ease
}

.uk-button:focus,.uk-button:hover {
    color: rgba(0,0,0,.5)
}

.uk-button:focus.uk-dark,.uk-button:hover.uk-dark,.uk-dark .uk-button:focus,.uk-dark .uk-button:hover {
    color: rgba(255,255,255,.5)
}

.uk-button-justify {
    justify-content: space-between;
    padding: 0 calc(var(--sizes-button-medium-padding)/ 2)!important
}

.uk-button-link {
    color: inherit;
    padding: 0!important
}

.uk-button-link {
    --border-color: var(--color-gray-30)!important
}

.uk-button-link.uk-dark,.uk-dark .uk-button-link {
    --border-color: var(--color-gray-80)!important
}

.uk-button-link::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 20%;
    left: 0;
    background-color: var(--border-color)
}

.uk-button-link:focus,.uk-button-link:hover {
    color: var(--colors-button-primary-hover)
}

.uk-button-text {
    padding: 0!important
}

.uk-button-text::before {
    display: none
}

.uk-button-text::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 20%;
    left: 0;
    background-color: var(--color-primary);
    transform-origin: bottom right;
    transition: transform .4s cubic-bezier(.86,0,.07,1)
}

.uk-button-text:hover {
    color: var(--color-primary)
}

.uk-button-text:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left
}

.uk-button-icon {
    width: var(--button-height);
    padding: 0!important
}

.uk-button-gradient {
    color: #fff!important
}

.uk-button-gradient::after {
    content: "";
    position: absolute;
    border-radius: inherit;
    inset: 0;
    z-index: -1;
    transition: .2s ease;
    background-color: var(--gradient-first);
    background-image: linear-gradient(var(--gradient-angle),var(--gradient-first),var(--gradient-second))
}

.uk-button-gradient:hover::after {
    opacity: .85
}

.uk-button-gradient.uk-button-ghost,.uk-button-gradient.uk-button-outline {
    background: linear-gradient(var(--gradient-angle),var(--gradient-primary),var(--gradient-secondary));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent
}

.uk-button-gradient.uk-button-ghost::after,.uk-button-gradient.uk-button-outline::after {
    display: none
}

.uk-button-gradient.uk-button-outline {
    --btn-shadow-color: rgba(0, 0, 0, 0.15)
}

.uk-button-gradient.uk-button-outline.uk-dark,.uk-dark .uk-button-gradient.uk-button-outline {
    --btn-shadow-color: rgba(255, 255, 255, 0.15)
}

.uk-button-gradient.uk-button-outline:hover {
    --btn-shadow-color: rgba(0, 0, 0, 0.25)
}

.uk-button-gradient.uk-button-outline:hover.uk-dark,.uk-dark .uk-button-gradient.uk-button-outline:hover {
    --btn-shadow-color: rgba(255, 255, 255, 0.25)
}

.uk-button-gradient.uk-button-ghost:hover {
    background-clip: unset;
    -webkit-background-clip: unset;
    -webkit-text-fill-color: unset
}

.uk-button.uk-button-disabled,.uk-button:disabled {
    background-color: var(--color-gray-30)!important;
    color: var(--color-gray-60)!important;
    border: 0;
    cursor: not-allowed
}

.uk-button.uk-border-circle {
    border-radius: 50%
}

.uk-button .uk-text-unset {
    color: #000
}

.uk-button .uk-text-unset.uk-dark,.uk-dark .uk-button .uk-text-unset {
    color: #fff
}

.uk-button:not([data-toggle-active])>*+* {
    margin-left: 8px
}

.uk-button-primary {
    background-color: var(--color-primary)!important;
    color: #fff!important
}

.uk-button-primary.uk-active,.uk-button-primary:focus,.uk-button-primary:hover {
    background-color: var(--color-primary-40)!important
}

.uk-button-primary.uk-active .uk-text-unset,.uk-button-primary:focus .uk-text-unset,.uk-button-primary:hover .uk-text-unset {
    color: inherit!important
}

.uk-button-primary.uk-button-outline {
    background-color: transparent!important;
    color: var(--color-primary)!important
}

.uk-button-primary.uk-button-outline {
    --btn-shadow-color: rgba(0, 0, 0, 0.15)
}

.uk-button-primary.uk-button-outline.uk-dark,.uk-dark .uk-button-primary.uk-button-outline {
    --btn-shadow-color: rgba(255, 255, 255, 0.15)
}

.uk-button-primary.uk-button-outline.uk-active,.uk-button-primary.uk-button-outline:focus,.uk-button-primary.uk-button-outline:hover {
    --btn-shadow-color: transparent!important;
    background-color: var(--color-primary)!important;
    color: #fff!important
}

.uk-button-primary.uk-button-ghost {
    background-color: transparent!important;
    color: var(--color-primary)!important
}

.uk-button-primary.uk-button-ghost.uk-active,.uk-button-primary.uk-button-ghost:focus,.uk-button-primary.uk-button-ghost:hover {
    background-color: var(--color-primary)!important;
    color: #fff!important
}

.uk-button-primary.uk-button-alt {
    background-color: var(--color-primary-10)!important;
    color: var(--color-primary)!important
}

.uk-button-primary.uk-button-alt.uk-active,.uk-button-primary.uk-button-alt:focus,.uk-button-primary.uk-button-alt:hover {
    background-color: var(--color-primary)!important;
    color: #fff!important
}

.uk-button-primary.uk-button-invert {
    color: var(--color-primary)!important
}

.uk-button-primary.uk-button-invert {
    background-color: #fff!important
}

.uk-button-primary.uk-button-invert.uk-dark,.uk-dark .uk-button-primary.uk-button-invert {
    background-color: var(--color-gray-90)
}

.uk-button-primary.uk-button-invert.uk-active,.uk-button-primary.uk-button-invert:focus,.uk-button-primary.uk-button-invert:hover {
    background-color: var(--color-primary)!important;
    color: #fff!important
}

.uk-button-secondary {
    background-color: var(--color-secondary)!important;
    color: #fff!important
}

.uk-button-secondary.uk-active,.uk-button-secondary:focus,.uk-button-secondary:hover {
    background-color: var(--color-secondary-40)!important
}

.uk-button-secondary.uk-active .uk-text-unset,.uk-button-secondary:focus .uk-text-unset,.uk-button-secondary:hover .uk-text-unset {
    color: inherit!important
}

.uk-button-secondary.uk-button-outline {
    background-color: transparent!important;
    color: var(--color-secondary)!important
}

.uk-button-secondary.uk-button-outline {
    --btn-shadow-color: rgba(0, 0, 0, 0.15)
}

.uk-button-secondary.uk-button-outline.uk-dark,.uk-dark .uk-button-secondary.uk-button-outline {
    --btn-shadow-color: rgba(255, 255, 255, 0.15)
}

.uk-button-secondary.uk-button-outline.uk-active,.uk-button-secondary.uk-button-outline:focus,.uk-button-secondary.uk-button-outline:hover {
    --btn-shadow-color: transparent!important;
    background-color: var(--color-secondary)!important;
    color: #fff!important
}

.uk-button-secondary.uk-button-ghost {
    background-color: transparent!important;
    color: var(--color-secondary)!important
}

.uk-button-secondary.uk-button-ghost.uk-active,.uk-button-secondary.uk-button-ghost:focus,.uk-button-secondary.uk-button-ghost:hover {
    background-color: var(--color-secondary)!important;
    color: #fff!important
}

.uk-button-secondary.uk-button-alt {
    background-color: var(--color-secondary-10)!important;
    color: var(--color-secondary)!important
}

.uk-button-secondary.uk-button-alt.uk-active,.uk-button-secondary.uk-button-alt:focus,.uk-button-secondary.uk-button-alt:hover {
    background-color: var(--color-secondary)!important;
    color: #fff!important
}

.uk-button-secondary.uk-button-invert {
    color: var(--color-secondary)!important
}

.uk-button-secondary.uk-button-invert {
    background-color: #fff!important
}

.uk-button-secondary.uk-button-invert.uk-dark,.uk-dark .uk-button-secondary.uk-button-invert {
    background-color: var(--color-gray-90)
}

.uk-button-secondary.uk-button-invert.uk-active,.uk-button-secondary.uk-button-invert:focus,.uk-button-secondary.uk-button-invert:hover {
    background-color: var(--color-secondary)!important;
    color: #fff!important
}

.uk-button-tertiary {
    background-color: var(--color-tertiary)!important;
    color: #fff!important
}

.uk-button-tertiary.uk-active,.uk-button-tertiary:focus,.uk-button-tertiary:hover {
    background-color: var(--color-tertiary-40)!important
}

.uk-button-tertiary.uk-active .uk-text-unset,.uk-button-tertiary:focus .uk-text-unset,.uk-button-tertiary:hover .uk-text-unset {
    color: inherit!important
}

.uk-button-tertiary.uk-button-outline {
    background-color: transparent!important;
    color: var(--color-tertiary)!important
}

.uk-button-tertiary.uk-button-outline {
    --btn-shadow-color: rgba(0, 0, 0, 0.15)
}

.uk-button-tertiary.uk-button-outline.uk-dark,.uk-dark .uk-button-tertiary.uk-button-outline {
    --btn-shadow-color: rgba(255, 255, 255, 0.15)
}

.uk-button-tertiary.uk-button-outline.uk-active,.uk-button-tertiary.uk-button-outline:focus,.uk-button-tertiary.uk-button-outline:hover {
    --btn-shadow-color: transparent!important;
    background-color: var(--color-tertiary)!important;
    color: #fff!important
}

.uk-button-tertiary.uk-button-ghost {
    background-color: transparent!important;
    color: var(--color-tertiary)!important
}

.uk-button-tertiary.uk-button-ghost.uk-active,.uk-button-tertiary.uk-button-ghost:focus,.uk-button-tertiary.uk-button-ghost:hover {
    background-color: var(--color-tertiary)!important;
    color: #fff!important
}

.uk-button-tertiary.uk-button-alt {
    background-color: var(--color-tertiary-10)!important;
    color: var(--color-tertiary)!important
}

.uk-button-tertiary.uk-button-alt.uk-active,.uk-button-tertiary.uk-button-alt:focus,.uk-button-tertiary.uk-button-alt:hover {
    background-color: var(--color-tertiary)!important;
    color: #fff!important
}

.uk-button-tertiary.uk-button-invert {
    color: var(--color-tertiary)!important
}

.uk-button-tertiary.uk-button-invert {
    background-color: #fff!important
}

.uk-button-tertiary.uk-button-invert.uk-dark,.uk-dark .uk-button-tertiary.uk-button-invert {
    background-color: var(--color-gray-90)
}

.uk-button-tertiary.uk-button-invert.uk-active,.uk-button-tertiary.uk-button-invert:focus,.uk-button-tertiary.uk-button-invert:hover {
    background-color: var(--color-tertiary)!important;
    color: #fff!important
}

.uk-button-quaternary {
    background-color: var(--color-quaternary)!important;
    color: #fff!important
}

.uk-button-quaternary.uk-active,.uk-button-quaternary:focus,.uk-button-quaternary:hover {
    background-color: var(--color-quaternary-40)!important
}

.uk-button-quaternary.uk-active .uk-text-unset,.uk-button-quaternary:focus .uk-text-unset,.uk-button-quaternary:hover .uk-text-unset {
    color: inherit!important
}

.uk-button-quaternary.uk-button-outline {
    background-color: transparent!important;
    color: var(--color-quaternary)!important
}

.uk-button-quaternary.uk-button-outline {
    --btn-shadow-color: rgba(0, 0, 0, 0.15)
}

.uk-button-quaternary.uk-button-outline.uk-dark,.uk-dark .uk-button-quaternary.uk-button-outline {
    --btn-shadow-color: rgba(255, 255, 255, 0.15)
}

.uk-button-quaternary.uk-button-outline.uk-active,.uk-button-quaternary.uk-button-outline:focus,.uk-button-quaternary.uk-button-outline:hover {
    --btn-shadow-color: transparent!important;
    background-color: var(--color-quaternary)!important;
    color: #fff!important
}

.uk-button-quaternary.uk-button-ghost {
    background-color: transparent!important;
    color: var(--color-quaternary)!important
}

.uk-button-quaternary.uk-button-ghost.uk-active,.uk-button-quaternary.uk-button-ghost:focus,.uk-button-quaternary.uk-button-ghost:hover {
    background-color: var(--color-quaternary)!important;
    color: #fff!important
}

.uk-button-quaternary.uk-button-alt {
    background-color: var(--color-quaternary-10)!important;
    color: var(--color-quaternary)!important
}

.uk-button-quaternary.uk-button-alt.uk-active,.uk-button-quaternary.uk-button-alt:focus,.uk-button-quaternary.uk-button-alt:hover {
    background-color: var(--color-quaternary)!important;
    color: #fff!important
}

.uk-button-quaternary.uk-button-invert {
    color: var(--color-quaternary)!important
}

.uk-button-quaternary.uk-button-invert {
    background-color: #fff!important
}

.uk-button-quaternary.uk-button-invert.uk-dark,.uk-dark .uk-button-quaternary.uk-button-invert {
    background-color: var(--color-gray-90)
}

.uk-button-quaternary.uk-button-invert.uk-active,.uk-button-quaternary.uk-button-invert:focus,.uk-button-quaternary.uk-button-invert:hover {
    background-color: var(--color-quaternary)!important;
    color: #fff!important
}

.uk-button-info {
    background-color: var(--color-info)!important;
    color: #fff!important
}

.uk-button-info.uk-active,.uk-button-info:focus,.uk-button-info:hover {
    background-color: var(--color-info-40)!important
}

.uk-button-info.uk-active .uk-text-unset,.uk-button-info:focus .uk-text-unset,.uk-button-info:hover .uk-text-unset {
    color: inherit!important
}

.uk-button-info.uk-button-outline {
    background-color: transparent!important;
    color: var(--color-info)!important
}

.uk-button-info.uk-button-outline {
    --btn-shadow-color: rgba(0, 0, 0, 0.15)
}

.uk-button-info.uk-button-outline.uk-dark,.uk-dark .uk-button-info.uk-button-outline {
    --btn-shadow-color: rgba(255, 255, 255, 0.15)
}

.uk-button-info.uk-button-outline.uk-active,.uk-button-info.uk-button-outline:focus,.uk-button-info.uk-button-outline:hover {
    --btn-shadow-color: transparent!important;
    background-color: var(--color-info)!important;
    color: #fff!important
}

.uk-button-info.uk-button-ghost {
    background-color: transparent!important;
    color: var(--color-info)!important
}

.uk-button-info.uk-button-ghost.uk-active,.uk-button-info.uk-button-ghost:focus,.uk-button-info.uk-button-ghost:hover {
    background-color: var(--color-info)!important;
    color: #fff!important
}

.uk-button-info.uk-button-alt {
    background-color: var(--color-info-10)!important;
    color: var(--color-info)!important
}

.uk-button-info.uk-button-alt.uk-active,.uk-button-info.uk-button-alt:focus,.uk-button-info.uk-button-alt:hover {
    background-color: var(--color-info)!important;
    color: #fff!important
}

.uk-button-info.uk-button-invert {
    color: var(--color-info)!important
}

.uk-button-info.uk-button-invert {
    background-color: #fff!important
}

.uk-button-info.uk-button-invert.uk-dark,.uk-dark .uk-button-info.uk-button-invert {
    background-color: var(--color-gray-90)
}

.uk-button-info.uk-button-invert.uk-active,.uk-button-info.uk-button-invert:focus,.uk-button-info.uk-button-invert:hover {
    background-color: var(--color-info)!important;
    color: #fff!important
}

.uk-button-success {
    background-color: var(--color-success)!important;
    color: #fff!important
}

.uk-button-success.uk-active,.uk-button-success:focus,.uk-button-success:hover {
    background-color: var(--color-success-40)!important
}

.uk-button-success.uk-active .uk-text-unset,.uk-button-success:focus .uk-text-unset,.uk-button-success:hover .uk-text-unset {
    color: inherit!important
}

.uk-button-success.uk-button-outline {
    background-color: transparent!important;
    color: var(--color-success)!important
}

.uk-button-success.uk-button-outline {
    --btn-shadow-color: rgba(0, 0, 0, 0.15)
}

.uk-button-success.uk-button-outline.uk-dark,.uk-dark .uk-button-success.uk-button-outline {
    --btn-shadow-color: rgba(255, 255, 255, 0.15)
}

.uk-button-success.uk-button-outline.uk-active,.uk-button-success.uk-button-outline:focus,.uk-button-success.uk-button-outline:hover {
    --btn-shadow-color: transparent!important;
    background-color: var(--color-success)!important;
    color: #fff!important
}

.uk-button-success.uk-button-ghost {
    background-color: transparent!important;
    color: var(--color-success)!important
}

.uk-button-success.uk-button-ghost.uk-active,.uk-button-success.uk-button-ghost:focus,.uk-button-success.uk-button-ghost:hover {
    background-color: var(--color-success)!important;
    color: #fff!important
}

.uk-button-success.uk-button-alt {
    background-color: var(--color-success-10)!important;
    color: var(--color-success)!important
}

.uk-button-success.uk-button-alt.uk-active,.uk-button-success.uk-button-alt:focus,.uk-button-success.uk-button-alt:hover {
    background-color: var(--color-success)!important;
    color: #fff!important
}

.uk-button-success.uk-button-invert {
    color: var(--color-success)!important
}

.uk-button-success.uk-button-invert {
    background-color: #fff!important
}

.uk-button-success.uk-button-invert.uk-dark,.uk-dark .uk-button-success.uk-button-invert {
    background-color: var(--color-gray-90)
}

.uk-button-success.uk-button-invert.uk-active,.uk-button-success.uk-button-invert:focus,.uk-button-success.uk-button-invert:hover {
    background-color: var(--color-success)!important;
    color: #fff!important
}

.uk-button-warning {
    background-color: var(--color-warning)!important;
    color: #fff!important
}

.uk-button-warning.uk-active,.uk-button-warning:focus,.uk-button-warning:hover {
    background-color: var(--color-warning-40)!important
}

.uk-button-warning.uk-active .uk-text-unset,.uk-button-warning:focus .uk-text-unset,.uk-button-warning:hover .uk-text-unset {
    color: inherit!important
}

.uk-button-warning.uk-button-outline {
    background-color: transparent!important;
    color: var(--color-warning)!important
}

.uk-button-warning.uk-button-outline {
    --btn-shadow-color: rgba(0, 0, 0, 0.15)
}

.uk-button-warning.uk-button-outline.uk-dark,.uk-dark .uk-button-warning.uk-button-outline {
    --btn-shadow-color: rgba(255, 255, 255, 0.15)
}

.uk-button-warning.uk-button-outline.uk-active,.uk-button-warning.uk-button-outline:focus,.uk-button-warning.uk-button-outline:hover {
    --btn-shadow-color: transparent!important;
    background-color: var(--color-warning)!important;
    color: #fff!important
}

.uk-button-warning.uk-button-ghost {
    background-color: transparent!important;
    color: var(--color-warning)!important
}

.uk-button-warning.uk-button-ghost.uk-active,.uk-button-warning.uk-button-ghost:focus,.uk-button-warning.uk-button-ghost:hover {
    background-color: var(--color-warning)!important;
    color: #fff!important
}

.uk-button-warning.uk-button-alt {
    background-color: var(--color-warning-10)!important;
    color: var(--color-warning)!important
}

.uk-button-warning.uk-button-alt.uk-active,.uk-button-warning.uk-button-alt:focus,.uk-button-warning.uk-button-alt:hover {
    background-color: var(--color-warning)!important;
    color: #fff!important
}

.uk-button-warning.uk-button-invert {
    color: var(--color-warning)!important
}

.uk-button-warning.uk-button-invert {
    background-color: #fff!important
}

.uk-button-warning.uk-button-invert.uk-dark,.uk-dark .uk-button-warning.uk-button-invert {
    background-color: var(--color-gray-90)
}

.uk-button-warning.uk-button-invert.uk-active,.uk-button-warning.uk-button-invert:focus,.uk-button-warning.uk-button-invert:hover {
    background-color: var(--color-warning)!important;
    color: #fff!important
}

.uk-button-danger {
    background-color: var(--color-danger)!important;
    color: #fff!important
}

.uk-button-danger.uk-active,.uk-button-danger:focus,.uk-button-danger:hover {
    background-color: var(--color-danger-40)!important
}

.uk-button-danger.uk-active .uk-text-unset,.uk-button-danger:focus .uk-text-unset,.uk-button-danger:hover .uk-text-unset {
    color: inherit!important
}

.uk-button-danger.uk-button-outline {
    background-color: transparent!important;
    color: var(--color-danger)!important
}

.uk-button-danger.uk-button-outline {
    --btn-shadow-color: rgba(0, 0, 0, 0.15)
}

.uk-button-danger.uk-button-outline.uk-dark,.uk-dark .uk-button-danger.uk-button-outline {
    --btn-shadow-color: rgba(255, 255, 255, 0.15)
}

.uk-button-danger.uk-button-outline.uk-active,.uk-button-danger.uk-button-outline:focus,.uk-button-danger.uk-button-outline:hover {
    --btn-shadow-color: transparent!important;
    background-color: var(--color-danger)!important;
    color: #fff!important
}

.uk-button-danger.uk-button-ghost {
    background-color: transparent!important;
    color: var(--color-danger)!important
}

.uk-button-danger.uk-button-ghost.uk-active,.uk-button-danger.uk-button-ghost:focus,.uk-button-danger.uk-button-ghost:hover {
    background-color: var(--color-danger)!important;
    color: #fff!important
}

.uk-button-danger.uk-button-alt {
    background-color: var(--color-danger-10)!important;
    color: var(--color-danger)!important
}

.uk-button-danger.uk-button-alt.uk-active,.uk-button-danger.uk-button-alt:focus,.uk-button-danger.uk-button-alt:hover {
    background-color: var(--color-danger)!important;
    color: #fff!important
}

.uk-button-danger.uk-button-invert {
    color: var(--color-danger)!important
}

.uk-button-danger.uk-button-invert {
    background-color: #fff!important
}

.uk-button-danger.uk-button-invert.uk-dark,.uk-dark .uk-button-danger.uk-button-invert {
    background-color: var(--color-gray-90)
}

.uk-button-danger.uk-button-invert.uk-active,.uk-button-danger.uk-button-invert:focus,.uk-button-danger.uk-button-invert:hover {
    background-color: var(--color-danger)!important;
    color: #fff!important
}

.uk-button-gray {
    background-color: var(--color-gray)!important;
    color: #fff!important
}

.uk-button-gray.uk-active,.uk-button-gray:focus,.uk-button-gray:hover {
    background-color: var(--color-gray-40)!important
}

.uk-button-gray.uk-active .uk-text-unset,.uk-button-gray:focus .uk-text-unset,.uk-button-gray:hover .uk-text-unset {
    color: inherit!important
}

.uk-button-gray.uk-button-outline {
    background-color: transparent!important;
    color: var(--color-gray)!important
}

.uk-button-gray.uk-button-outline {
    --btn-shadow-color: rgba(0, 0, 0, 0.15)
}

.uk-button-gray.uk-button-outline.uk-dark,.uk-dark .uk-button-gray.uk-button-outline {
    --btn-shadow-color: rgba(255, 255, 255, 0.15)
}

.uk-button-gray.uk-button-outline.uk-active,.uk-button-gray.uk-button-outline:focus,.uk-button-gray.uk-button-outline:hover {
    --btn-shadow-color: transparent!important;
    background-color: var(--color-gray)!important;
    color: #fff!important
}

.uk-button-gray.uk-button-ghost {
    background-color: transparent!important;
    color: var(--color-gray)!important
}

.uk-button-gray.uk-button-ghost.uk-active,.uk-button-gray.uk-button-ghost:focus,.uk-button-gray.uk-button-ghost:hover {
    background-color: var(--color-gray)!important;
    color: #fff!important
}

.uk-button-gray.uk-button-alt {
    background-color: var(--color-gray-10)!important;
    color: var(--color-gray)!important
}

.uk-button-gray.uk-button-alt.uk-active,.uk-button-gray.uk-button-alt:focus,.uk-button-gray.uk-button-alt:hover {
    background-color: var(--color-gray)!important;
    color: #fff!important
}

.uk-button-gray.uk-button-invert {
    color: var(--color-gray)!important
}

.uk-button-gray.uk-button-invert {
    background-color: #fff!important
}

.uk-button-gray.uk-button-invert.uk-dark,.uk-dark .uk-button-gray.uk-button-invert {
    background-color: var(--color-gray-90)
}

.uk-button-gray.uk-button-invert.uk-active,.uk-button-gray.uk-button-invert:focus,.uk-button-gray.uk-button-invert:hover {
    background-color: var(--color-gray)!important;
    color: #fff!important
}

.uk-button-default {
    background-color: var(--color-default)!important;
    color: #fff!important
}

.uk-button-default.uk-active,.uk-button-default:focus,.uk-button-default:hover {
    background-color: var(--color-default-40)!important
}

.uk-button-default.uk-active .uk-text-unset,.uk-button-default:focus .uk-text-unset,.uk-button-default:hover .uk-text-unset {
    color: inherit!important
}

.uk-button-default {
    background-color: rgba(0,0,0,.08)!important;
    color: #000!important
}

.uk-button-default.uk-dark,.uk-dark .uk-button-default {
    background-color: rgba(255,255,255,.08)!important;
    color: #fff!important
}

.uk-button-default.uk-active,.uk-button-default:focus,.uk-button-default:hover {
    background-color: var(--color-primary)!important;
    color: #fff!important
}

.uk-button-default.uk-button-outline {
    background-color: transparent!important
}

.uk-button-default.uk-button-outline {
    --btn-shadow-color: rgba(0, 0, 0, 0.15)
}

.uk-button-default.uk-button-outline.uk-dark,.uk-dark .uk-button-default.uk-button-outline {
    --btn-shadow-color: rgba(255, 255, 255, 0.15)
}

.uk-button-default.uk-button-outline {
    color: #000
}

.uk-button-default.uk-button-outline.uk-dark,.uk-dark .uk-button-default.uk-button-outline {
    color: #fff
}

.uk-button-default.uk-button-outline.uk-active,.uk-button-default.uk-button-outline:focus,.uk-button-default.uk-button-outline:hover {
    --btn-shadow-color: transparent!important;
    background-color: var(--color-primary)!important;
    color: #fff!important
}

.uk-button-default.uk-button-ghost {
    background-color: transparent!important
}

.uk-button-default.uk-button-ghost {
    color: #000
}

.uk-button-default.uk-button-ghost.uk-dark,.uk-dark .uk-button-default.uk-button-ghost {
    color: #fff
}

.uk-button-default.uk-button-ghost.uk-active,.uk-button-default.uk-button-ghost:focus,.uk-button-default.uk-button-ghost:hover {
    background-color: rgba(0,0,0,.08)!important;
    color: #000!important
}

.uk-button-default.uk-button-ghost.uk-active.uk-dark,.uk-button-default.uk-button-ghost:focus.uk-dark,.uk-button-default.uk-button-ghost:hover.uk-dark,.uk-dark .uk-button-default.uk-button-ghost.uk-active,.uk-dark .uk-button-default.uk-button-ghost:focus,.uk-dark .uk-button-default.uk-button-ghost:hover {
    background-color: rgba(255,255,255,.08)!important;
    color: #fff!important
}

.uk-button-default.uk-button-alt {
    background-color: var(--color-default-10)!important
}

.uk-button-default.uk-button-alt {
    background-color: rgba(0,0,0,.08)!important;
    color: #000!important
}

.uk-button-default.uk-button-alt.uk-dark,.uk-dark .uk-button-default.uk-button-alt {
    background-color: rgba(255,255,255,.08)!important;
    color: #fff!important
}

.uk-button-default.uk-button-alt.uk-active,.uk-button-default.uk-button-alt:focus,.uk-button-default.uk-button-alt:hover {
    background-color: rgba(0,0,0,.15)
}

.uk-button-default.uk-button-alt.uk-active.uk-dark,.uk-button-default.uk-button-alt:focus.uk-dark,.uk-button-default.uk-button-alt:hover.uk-dark,.uk-dark .uk-button-default.uk-button-alt.uk-active,.uk-dark .uk-button-default.uk-button-alt:focus,.uk-dark .uk-button-default.uk-button-alt:hover {
    background-color: rgba(255,255,255,.15)
}

.uk-button-default.uk-button-invert {
    color: #000!important
}

.uk-button-default.uk-button-invert {
    background-color: #fff!important
}

.uk-button-default.uk-button-invert.uk-dark,.uk-dark .uk-button-default.uk-button-invert {
    background-color: var(--color-gray-90)
}

.uk-button-default.uk-button-invert.uk-active,.uk-button-default.uk-button-invert:focus,.uk-button-default.uk-button-invert:hover {
    background-color: var(--color-gray-10)!important;
    color: #000!important
}

.uk-button-default.uk-button-invert.uk-active.uk-dark,.uk-button-default.uk-button-invert:focus.uk-dark,.uk-button-default.uk-button-invert:hover.uk-dark,.uk-dark .uk-button-default.uk-button-invert.uk-active,.uk-dark .uk-button-default.uk-button-invert:focus,.uk-dark .uk-button-default.uk-button-invert:hover {
    background-color: var(--color-gray-80)!important;
    color: #fff!important
}

.uk-button-darkgrey {
    background-color: var(--color-darkgrey)!important;
    color: #fff!important
}

.uk-button-darkgrey.uk-active,.uk-button-darkgrey:focus,.uk-button-darkgrey:hover {
    background-color: var(--color-darkgrey-40)!important
}

.uk-button-darkgrey.uk-active .uk-text-unset,.uk-button-darkgrey:focus .uk-text-unset,.uk-button-darkgrey:hover .uk-text-unset {
    color: inherit!important
}

.uk-button-darkgrey {
    background-color: var(--color-darkgrey)!important;
    color: #fff!important
}

.uk-button-darkgrey.uk-dark,.uk-dark .uk-button-darkgrey {
    background-color: #fff!important;
    color: #000!important
}

.uk-button-darkgrey.uk-active,.uk-button-darkgrey:focus,.uk-button-darkgrey:hover {
    background-color: var(--color-darkgrey-40)!important;
    color: #fff!important
}

.uk-button-darkgrey.uk-active.uk-dark,.uk-button-darkgrey:focus.uk-dark,.uk-button-darkgrey:hover.uk-dark,.uk-dark .uk-button-darkgrey.uk-active,.uk-dark .uk-button-darkgrey:focus,.uk-dark .uk-button-darkgrey:hover {
    background-color: var(--color-gray-20)!important;
    color: #000!important
}

.uk-button-darkgrey.uk-button-outline {
    background-color: transparent!important
}

.uk-button-darkgrey.uk-button-outline {
    --btn-shadow-color: rgba(0, 0, 0, 0.15)
}

.uk-button-darkgrey.uk-button-outline.uk-dark,.uk-dark .uk-button-darkgrey.uk-button-outline {
    --btn-shadow-color: rgba(255, 255, 255, 0.15)
}

.uk-button-darkgrey.uk-button-outline {
    --btn-shadow-color: var(--color-darkgrey)!important;
    color: #000!important
}

.uk-button-darkgrey.uk-button-outline.uk-dark,.uk-dark .uk-button-darkgrey.uk-button-outline {
    --btn-shadow-color: white!important;
    color: #fff!important
}

.uk-button-darkgrey.uk-button-outline.uk-active,.uk-button-darkgrey.uk-button-outline:focus,.uk-button-darkgrey.uk-button-outline:hover {
    background-color: var(--color-darkgrey)!important;
    color: #fff!important
}

.uk-button-darkgrey.uk-button-outline.uk-active.uk-dark,.uk-button-darkgrey.uk-button-outline:focus.uk-dark,.uk-button-darkgrey.uk-button-outline:hover.uk-dark,.uk-dark .uk-button-darkgrey.uk-button-outline.uk-active,.uk-dark .uk-button-darkgrey.uk-button-outline:focus,.uk-dark .uk-button-darkgrey.uk-button-outline:hover {
    background-color: #fff!important;
    color: #000!important
}

.uk-button-darkgrey.uk-button-ghost {
    background-color: transparent!important
}

.uk-button-darkgrey.uk-button-ghost {
    color: #000!important
}

.uk-button-darkgrey.uk-button-ghost.uk-dark,.uk-dark .uk-button-darkgrey.uk-button-ghost {
    color: #fff!important
}

.uk-button-darkgrey.uk-button-ghost.uk-active,.uk-button-darkgrey.uk-button-ghost:focus,.uk-button-darkgrey.uk-button-ghost:hover {
    background-color: var(--color-darkgrey)!important;
    color: #fff!important
}

.uk-button-darkgrey.uk-button-ghost.uk-active.uk-dark,.uk-button-darkgrey.uk-button-ghost:focus.uk-dark,.uk-button-darkgrey.uk-button-ghost:hover.uk-dark,.uk-dark .uk-button-darkgrey.uk-button-ghost.uk-active,.uk-dark .uk-button-darkgrey.uk-button-ghost:focus,.uk-dark .uk-button-darkgrey.uk-button-ghost:hover {
    background-color: #fff!important;
    color: #000!important
}

.uk-button-darkgrey.uk-button-alt {
    background-color: var(--color-darkgrey-10)!important
}

.uk-button-darkgrey.uk-button-alt {
    color: #000
}

.uk-button-darkgrey.uk-button-alt.uk-dark,.uk-dark .uk-button-darkgrey.uk-button-alt {
    color: #000
}

.uk-button-darkgrey.uk-button-alt.uk-active,.uk-button-darkgrey.uk-button-alt:focus,.uk-button-darkgrey.uk-button-alt:hover {
    background-color: var(--color-darkgrey)!important;
    color: #fff!important
}

.uk-button-darkgrey.uk-button-alt.uk-active.uk-dark,.uk-button-darkgrey.uk-button-alt:focus.uk-dark,.uk-button-darkgrey.uk-button-alt:hover.uk-dark,.uk-dark .uk-button-darkgrey.uk-button-alt.uk-active,.uk-dark .uk-button-darkgrey.uk-button-alt:focus,.uk-dark .uk-button-darkgrey.uk-button-alt:hover {
    background-color: #fff!important;
    color: #000!important
}

.uk-button-darkgrey.uk-button-invert {
    color: #000!important
}

.uk-button-darkgrey.uk-button-invert {
    background-color: #fff!important
}

.uk-button-darkgrey.uk-button-invert.uk-dark,.uk-dark .uk-button-darkgrey.uk-button-invert {
    background-color: var(--color-gray-90)
}

.uk-button-darkgrey.uk-button-invert.uk-active,.uk-button-darkgrey.uk-button-invert:focus,.uk-button-darkgrey.uk-button-invert:hover {
    background-color: var(--color-darkgrey)!important;
    color: #fff!important
}

.uk-button-darkgrey.uk-button-invert.uk-active.uk-dark,.uk-button-darkgrey.uk-button-invert:focus.uk-dark,.uk-button-darkgrey.uk-button-invert:hover.uk-dark,.uk-dark .uk-button-darkgrey.uk-button-invert.uk-active,.uk-dark .uk-button-darkgrey.uk-button-invert:focus,.uk-dark .uk-button-darkgrey.uk-button-invert:hover {
    background-color: #fff!important;
    color: #000!important
}

.uk-button-light {
    background-color: var(--color-light)!important;
    color: #fff!important
}

.uk-button-light.uk-active,.uk-button-light:focus,.uk-button-light:hover {
    background-color: var(--color-light-40)!important
}

.uk-button-light.uk-active .uk-text-unset,.uk-button-light:focus .uk-text-unset,.uk-button-light:hover .uk-text-unset {
    color: inherit!important
}

.uk-button-light.uk-button-outline {
    background-color: transparent!important;
    color: var(--color-light)!important
}

.uk-button-light.uk-button-outline {
    --btn-shadow-color: rgba(0, 0, 0, 0.15)
}

.uk-button-light.uk-button-outline.uk-dark,.uk-dark .uk-button-light.uk-button-outline {
    --btn-shadow-color: rgba(255, 255, 255, 0.15)
}

.uk-button-light.uk-button-outline.uk-active,.uk-button-light.uk-button-outline:focus,.uk-button-light.uk-button-outline:hover {
    --btn-shadow-color: transparent!important;
    background-color: var(--color-light)!important;
    color: #fff!important
}

.uk-button-light.uk-button-ghost {
    background-color: transparent!important;
    color: var(--color-light)!important
}

.uk-button-light.uk-button-ghost.uk-active,.uk-button-light.uk-button-ghost:focus,.uk-button-light.uk-button-ghost:hover {
    background-color: var(--color-light)!important;
    color: #fff!important
}

.uk-button-light.uk-button-alt {
    background-color: var(--color-light-10)!important;
    color: var(--color-light)!important
}

.uk-button-light.uk-button-alt.uk-active,.uk-button-light.uk-button-alt:focus,.uk-button-light.uk-button-alt:hover {
    background-color: var(--color-light)!important;
    color: #fff!important
}

.uk-button-light.uk-button-invert {
    color: var(--color-light)!important
}

.uk-button-light.uk-button-invert {
    background-color: #fff!important
}

.uk-button-light.uk-button-invert.uk-dark,.uk-dark .uk-button-light.uk-button-invert {
    background-color: var(--color-gray-90)
}

.uk-button-light.uk-button-invert.uk-active,.uk-button-light.uk-button-invert:focus,.uk-button-light.uk-button-invert:hover {
    background-color: var(--color-light)!important;
    color: #fff!important
}

.uk-button-muted {
    background-color: var(--color-muted)!important;
    color: #fff!important
}

.uk-button-muted.uk-active,.uk-button-muted:focus,.uk-button-muted:hover {
    background-color: var(--color-muted-40)!important
}

.uk-button-muted.uk-active .uk-text-unset,.uk-button-muted:focus .uk-text-unset,.uk-button-muted:hover .uk-text-unset {
    color: inherit!important
}

.uk-button-muted.uk-button-outline {
    background-color: transparent!important;
    color: var(--color-muted)!important
}

.uk-button-muted.uk-button-outline {
    --btn-shadow-color: rgba(0, 0, 0, 0.15)
}

.uk-button-muted.uk-button-outline.uk-dark,.uk-dark .uk-button-muted.uk-button-outline {
    --btn-shadow-color: rgba(255, 255, 255, 0.15)
}

.uk-button-muted.uk-button-outline.uk-active,.uk-button-muted.uk-button-outline:focus,.uk-button-muted.uk-button-outline:hover {
    --btn-shadow-color: transparent!important;
    background-color: var(--color-muted)!important;
    color: #fff!important
}

.uk-button-muted.uk-button-ghost {
    background-color: transparent!important;
    color: var(--color-muted)!important
}

.uk-button-muted.uk-button-ghost.uk-active,.uk-button-muted.uk-button-ghost:focus,.uk-button-muted.uk-button-ghost:hover {
    background-color: var(--color-muted)!important;
    color: #fff!important
}

.uk-button-muted.uk-button-alt {
    background-color: var(--color-muted-10)!important;
    color: var(--color-muted)!important
}

.uk-button-muted.uk-button-alt.uk-active,.uk-button-muted.uk-button-alt:focus,.uk-button-muted.uk-button-alt:hover {
    background-color: var(--color-muted)!important;
    color: #fff!important
}

.uk-button-muted.uk-button-invert {
    color: var(--color-muted)!important
}

.uk-button-muted.uk-button-invert {
    background-color: #fff!important
}

.uk-button-muted.uk-button-invert.uk-dark,.uk-dark .uk-button-muted.uk-button-invert {
    background-color: var(--color-gray-90)
}

.uk-button-muted.uk-button-invert.uk-active,.uk-button-muted.uk-button-invert:focus,.uk-button-muted.uk-button-invert:hover {
    background-color: var(--color-muted)!important;
    color: #fff!important
}

.uk-button- {
    font-size: var(--sizes-button--text);
    height: var(--sizes-button--height);
    padding: 0 var(--sizes-button--padding)
}

.uk-button-.uk-button-icon {
    width: var(--sizes-button--height)!important
}

.uk-button-.uk-button-justify {
    justify-content: space-between;
    padding: 0 calc(var(--sizes-button--padding)/ 2)!important
}

.uk-button-2xsmall {
    font-size: var(--sizes-button-2xsmall-text);
    height: var(--sizes-button-2xsmall-height);
    padding: 0 var(--sizes-button-2xsmall-padding)
}

.uk-button-2xsmall.uk-button-icon {
    width: var(--sizes-button-2xsmall-height)!important
}

.uk-button-2xsmall.uk-button-justify {
    justify-content: space-between;
    padding: 0 calc(var(--sizes-button-2xsmall-padding)/ 2)!important
}

.uk-button-xsmall {
    font-size: var(--sizes-button-xsmall-text);
    height: var(--sizes-button-xsmall-height);
    padding: 0 var(--sizes-button-xsmall-padding)
}

.uk-button-xsmall.uk-button-icon {
    width: var(--sizes-button-xsmall-height)!important
}

.uk-button-xsmall.uk-button-justify {
    justify-content: space-between;
    padding: 0 calc(var(--sizes-button-xsmall-padding)/ 2)!important
}

.uk-button-small {
    font-size: var(--sizes-button-small-text);
    height: var(--sizes-button-small-height);
    padding: 0 var(--sizes-button-small-padding)
}

.uk-button-small.uk-button-icon {
    width: var(--sizes-button-small-height)!important
}

.uk-button-small.uk-button-justify {
    justify-content: space-between;
    padding: 0 calc(var(--sizes-button-small-padding)/ 2)!important
}

.uk-button-medium {
    font-size: var(--sizes-button-medium-text);
    height: var(--sizes-button-medium-height);
    padding: 0 var(--sizes-button-medium-padding)
}

.uk-button-medium.uk-button-icon {
    width: var(--sizes-button-medium-height)!important
}

.uk-button-medium.uk-button-justify {
    justify-content: space-between;
    padding: 0 calc(var(--sizes-button-medium-padding)/ 2)!important
}

.uk-button-large {
    font-size: var(--sizes-button-large-text);
    height: var(--sizes-button-large-height);
    padding: 0 var(--sizes-button-large-padding)
}

.uk-button-large.uk-button-icon {
    width: var(--sizes-button-large-height)!important
}

.uk-button-large.uk-button-justify {
    justify-content: space-between;
    padding: 0 calc(var(--sizes-button-large-padding)/ 2)!important
}

html.bp-xs .uk-button-\@xs {
    font-size: var(--sizes-button--text);
    height: var(--sizes-button--height);
    padding: 0 var(--sizes-button--padding)
}

html.bp-xs .uk-button-\@xs.uk-button-icon {
    width: var(--sizes-button--height)!important
}

html.bp-xs .uk-button-\@xs.uk-button-justify {
    justify-content: space-between;
    padding: 0 calc(var(--sizes-button--padding)/ 2)!important
}

html.bp-xs .uk-button-2xsmall\@xs {
    font-size: var(--sizes-button-2xsmall-text);
    height: var(--sizes-button-2xsmall-height);
    padding: 0 var(--sizes-button-2xsmall-padding)
}

html.bp-xs .uk-button-2xsmall\@xs.uk-button-icon {
    width: var(--sizes-button-2xsmall-height)!important
}

html.bp-xs .uk-button-2xsmall\@xs.uk-button-justify {
    justify-content: space-between;
    padding: 0 calc(var(--sizes-button-2xsmall-padding)/ 2)!important
}

html.bp-xs .uk-button-xsmall\@xs {
    font-size: var(--sizes-button-xsmall-text);
    height: var(--sizes-button-xsmall-height);
    padding: 0 var(--sizes-button-xsmall-padding)
}

html.bp-xs .uk-button-xsmall\@xs.uk-button-icon {
    width: var(--sizes-button-xsmall-height)!important
}

html.bp-xs .uk-button-xsmall\@xs.uk-button-justify {
    justify-content: space-between;
    padding: 0 calc(var(--sizes-button-xsmall-padding)/ 2)!important
}

html.bp-xs .uk-button-small\@xs {
    font-size: var(--sizes-button-small-text);
    height: var(--sizes-button-small-height);
    padding: 0 var(--sizes-button-small-padding)
}

html.bp-xs .uk-button-small\@xs.uk-button-icon {
    width: var(--sizes-button-small-height)!important
}

html.bp-xs .uk-button-small\@xs.uk-button-justify {
    justify-content: space-between;
    padding: 0 calc(var(--sizes-button-small-padding)/ 2)!important
}

html.bp-xs .uk-button-medium\@xs {
    font-size: var(--sizes-button-medium-text);
    height: var(--sizes-button-medium-height);
    padding: 0 var(--sizes-button-medium-padding)
}

html.bp-xs .uk-button-medium\@xs.uk-button-icon {
    width: var(--sizes-button-medium-height)!important
}

html.bp-xs .uk-button-medium\@xs.uk-button-justify {
    justify-content: space-between;
    padding: 0 calc(var(--sizes-button-medium-padding)/ 2)!important
}

html.bp-xs .uk-button-large\@xs {
    font-size: var(--sizes-button-large-text);
    height: var(--sizes-button-large-height);
    padding: 0 var(--sizes-button-large-padding)
}

html.bp-xs .uk-button-large\@xs.uk-button-icon {
    width: var(--sizes-button-large-height)!important
}

html.bp-xs .uk-button-large\@xs.uk-button-justify {
    justify-content: space-between;
    padding: 0 calc(var(--sizes-button-large-padding)/ 2)!important
}

html.bp-s .uk-button-\@s {
    font-size: var(--sizes-button--text);
    height: var(--sizes-button--height);
    padding: 0 var(--sizes-button--padding)
}

html.bp-s .uk-button-\@s.uk-button-icon {
    width: var(--sizes-button--height)!important
}

html.bp-s .uk-button-\@s.uk-button-justify {
    justify-content: space-between;
    padding: 0 calc(var(--sizes-button--padding)/ 2)!important
}

html.bp-s .uk-button-2xsmall\@s {
    font-size: var(--sizes-button-2xsmall-text);
    height: var(--sizes-button-2xsmall-height);
    padding: 0 var(--sizes-button-2xsmall-padding)
}

html.bp-s .uk-button-2xsmall\@s.uk-button-icon {
    width: var(--sizes-button-2xsmall-height)!important
}

html.bp-s .uk-button-2xsmall\@s.uk-button-justify {
    justify-content: space-between;
    padding: 0 calc(var(--sizes-button-2xsmall-padding)/ 2)!important
}

html.bp-s .uk-button-xsmall\@s {
    font-size: var(--sizes-button-xsmall-text);
    height: var(--sizes-button-xsmall-height);
    padding: 0 var(--sizes-button-xsmall-padding)
}

html.bp-s .uk-button-xsmall\@s.uk-button-icon {
    width: var(--sizes-button-xsmall-height)!important
}

html.bp-s .uk-button-xsmall\@s.uk-button-justify {
    justify-content: space-between;
    padding: 0 calc(var(--sizes-button-xsmall-padding)/ 2)!important
}

html.bp-s .uk-button-small\@s {
    font-size: var(--sizes-button-small-text);
    height: var(--sizes-button-small-height);
    padding: 0 var(--sizes-button-small-padding)
}

html.bp-s .uk-button-small\@s.uk-button-icon {
    width: var(--sizes-button-small-height)!important
}

html.bp-s .uk-button-small\@s.uk-button-justify {
    justify-content: space-between;
    padding: 0 calc(var(--sizes-button-small-padding)/ 2)!important
}

html.bp-s .uk-button-medium\@s {
    font-size: var(--sizes-button-medium-text);
    height: var(--sizes-button-medium-height);
    padding: 0 var(--sizes-button-medium-padding)
}

html.bp-s .uk-button-medium\@s.uk-button-icon {
    width: var(--sizes-button-medium-height)!important
}

html.bp-s .uk-button-medium\@s.uk-button-justify {
    justify-content: space-between;
    padding: 0 calc(var(--sizes-button-medium-padding)/ 2)!important
}

html.bp-s .uk-button-large\@s {
    font-size: var(--sizes-button-large-text);
    height: var(--sizes-button-large-height);
    padding: 0 var(--sizes-button-large-padding)
}

html.bp-s .uk-button-large\@s.uk-button-icon {
    width: var(--sizes-button-large-height)!important
}

html.bp-s .uk-button-large\@s.uk-button-justify {
    justify-content: space-between;
    padding: 0 calc(var(--sizes-button-large-padding)/ 2)!important
}

html.bp-m .uk-button-\@m {
    font-size: var(--sizes-button--text);
    height: var(--sizes-button--height);
    padding: 0 var(--sizes-button--padding)
}

html.bp-m .uk-button-\@m.uk-button-icon {
    width: var(--sizes-button--height)!important
}

html.bp-m .uk-button-\@m.uk-button-justify {
    justify-content: space-between;
    padding: 0 calc(var(--sizes-button--padding)/ 2)!important
}

html.bp-m .uk-button-2xsmall\@m {
    font-size: var(--sizes-button-2xsmall-text);
    height: var(--sizes-button-2xsmall-height);
    padding: 0 var(--sizes-button-2xsmall-padding)
}

html.bp-m .uk-button-2xsmall\@m.uk-button-icon {
    width: var(--sizes-button-2xsmall-height)!important
}

html.bp-m .uk-button-2xsmall\@m.uk-button-justify {
    justify-content: space-between;
    padding: 0 calc(var(--sizes-button-2xsmall-padding)/ 2)!important
}

html.bp-m .uk-button-xsmall\@m {
    font-size: var(--sizes-button-xsmall-text);
    height: var(--sizes-button-xsmall-height);
    padding: 0 var(--sizes-button-xsmall-padding)
}

html.bp-m .uk-button-xsmall\@m.uk-button-icon {
    width: var(--sizes-button-xsmall-height)!important
}

html.bp-m .uk-button-xsmall\@m.uk-button-justify {
    justify-content: space-between;
    padding: 0 calc(var(--sizes-button-xsmall-padding)/ 2)!important
}

html.bp-m .uk-button-small\@m {
    font-size: var(--sizes-button-small-text);
    height: var(--sizes-button-small-height);
    padding: 0 var(--sizes-button-small-padding)
}

html.bp-m .uk-button-small\@m.uk-button-icon {
    width: var(--sizes-button-small-height)!important
}

html.bp-m .uk-button-small\@m.uk-button-justify {
    justify-content: space-between;
    padding: 0 calc(var(--sizes-button-small-padding)/ 2)!important
}

html.bp-m .uk-button-medium\@m {
    font-size: var(--sizes-button-medium-text);
    height: var(--sizes-button-medium-height);
    padding: 0 var(--sizes-button-medium-padding)
}

html.bp-m .uk-button-medium\@m.uk-button-icon {
    width: var(--sizes-button-medium-height)!important
}

html.bp-m .uk-button-medium\@m.uk-button-justify {
    justify-content: space-between;
    padding: 0 calc(var(--sizes-button-medium-padding)/ 2)!important
}

html.bp-m .uk-button-large\@m {
    font-size: var(--sizes-button-large-text);
    height: var(--sizes-button-large-height);
    padding: 0 var(--sizes-button-large-padding)
}

html.bp-m .uk-button-large\@m.uk-button-icon {
    width: var(--sizes-button-large-height)!important
}

html.bp-m .uk-button-large\@m.uk-button-justify {
    justify-content: space-between;
    padding: 0 calc(var(--sizes-button-large-padding)/ 2)!important
}

html.bp-l .uk-button-\@l {
    font-size: var(--sizes-button--text);
    height: var(--sizes-button--height);
    padding: 0 var(--sizes-button--padding)
}

html.bp-l .uk-button-\@l.uk-button-icon {
    width: var(--sizes-button--height)!important
}

html.bp-l .uk-button-\@l.uk-button-justify {
    justify-content: space-between;
    padding: 0 calc(var(--sizes-button--padding)/ 2)!important
}

html.bp-l .uk-button-2xsmall\@l {
    font-size: var(--sizes-button-2xsmall-text);
    height: var(--sizes-button-2xsmall-height);
    padding: 0 var(--sizes-button-2xsmall-padding)
}

html.bp-l .uk-button-2xsmall\@l.uk-button-icon {
    width: var(--sizes-button-2xsmall-height)!important
}

html.bp-l .uk-button-2xsmall\@l.uk-button-justify {
    justify-content: space-between;
    padding: 0 calc(var(--sizes-button-2xsmall-padding)/ 2)!important
}

html.bp-l .uk-button-xsmall\@l {
    font-size: var(--sizes-button-xsmall-text);
    height: var(--sizes-button-xsmall-height);
    padding: 0 var(--sizes-button-xsmall-padding)
}

html.bp-l .uk-button-xsmall\@l.uk-button-icon {
    width: var(--sizes-button-xsmall-height)!important
}

html.bp-l .uk-button-xsmall\@l.uk-button-justify {
    justify-content: space-between;
    padding: 0 calc(var(--sizes-button-xsmall-padding)/ 2)!important
}

html.bp-l .uk-button-small\@l {
    font-size: var(--sizes-button-small-text);
    height: var(--sizes-button-small-height);
    padding: 0 var(--sizes-button-small-padding)
}

html.bp-l .uk-button-small\@l.uk-button-icon {
    width: var(--sizes-button-small-height)!important
}

html.bp-l .uk-button-small\@l.uk-button-justify {
    justify-content: space-between;
    padding: 0 calc(var(--sizes-button-small-padding)/ 2)!important
}

html.bp-l .uk-button-medium\@l {
    font-size: var(--sizes-button-medium-text);
    height: var(--sizes-button-medium-height);
    padding: 0 var(--sizes-button-medium-padding)
}

html.bp-l .uk-button-medium\@l.uk-button-icon {
    width: var(--sizes-button-medium-height)!important
}

html.bp-l .uk-button-medium\@l.uk-button-justify {
    justify-content: space-between;
    padding: 0 calc(var(--sizes-button-medium-padding)/ 2)!important
}

html.bp-l .uk-button-large\@l {
    font-size: var(--sizes-button-large-text);
    height: var(--sizes-button-large-height);
    padding: 0 var(--sizes-button-large-padding)
}

html.bp-l .uk-button-large\@l.uk-button-icon {
    width: var(--sizes-button-large-height)!important
}

html.bp-l .uk-button-large\@l.uk-button-justify {
    justify-content: space-between;
    padding: 0 calc(var(--sizes-button-large-padding)/ 2)!important
}

html.bp-xl .uk-button-\@xl {
    font-size: var(--sizes-button--text);
    height: var(--sizes-button--height);
    padding: 0 var(--sizes-button--padding)
}

html.bp-xl .uk-button-\@xl.uk-button-icon {
    width: var(--sizes-button--height)!important
}

html.bp-xl .uk-button-\@xl.uk-button-justify {
    justify-content: space-between;
    padding: 0 calc(var(--sizes-button--padding)/ 2)!important
}

html.bp-xl .uk-button-2xsmall\@xl {
    font-size: var(--sizes-button-2xsmall-text);
    height: var(--sizes-button-2xsmall-height);
    padding: 0 var(--sizes-button-2xsmall-padding)
}

html.bp-xl .uk-button-2xsmall\@xl.uk-button-icon {
    width: var(--sizes-button-2xsmall-height)!important
}

html.bp-xl .uk-button-2xsmall\@xl.uk-button-justify {
    justify-content: space-between;
    padding: 0 calc(var(--sizes-button-2xsmall-padding)/ 2)!important
}

html.bp-xl .uk-button-xsmall\@xl {
    font-size: var(--sizes-button-xsmall-text);
    height: var(--sizes-button-xsmall-height);
    padding: 0 var(--sizes-button-xsmall-padding)
}

html.bp-xl .uk-button-xsmall\@xl.uk-button-icon {
    width: var(--sizes-button-xsmall-height)!important
}

html.bp-xl .uk-button-xsmall\@xl.uk-button-justify {
    justify-content: space-between;
    padding: 0 calc(var(--sizes-button-xsmall-padding)/ 2)!important
}

html.bp-xl .uk-button-small\@xl {
    font-size: var(--sizes-button-small-text);
    height: var(--sizes-button-small-height);
    padding: 0 var(--sizes-button-small-padding)
}

html.bp-xl .uk-button-small\@xl.uk-button-icon {
    width: var(--sizes-button-small-height)!important
}

html.bp-xl .uk-button-small\@xl.uk-button-justify {
    justify-content: space-between;
    padding: 0 calc(var(--sizes-button-small-padding)/ 2)!important
}

html.bp-xl .uk-button-medium\@xl {
    font-size: var(--sizes-button-medium-text);
    height: var(--sizes-button-medium-height);
    padding: 0 var(--sizes-button-medium-padding)
}

html.bp-xl .uk-button-medium\@xl.uk-button-icon {
    width: var(--sizes-button-medium-height)!important
}

html.bp-xl .uk-button-medium\@xl.uk-button-justify {
    justify-content: space-between;
    padding: 0 calc(var(--sizes-button-medium-padding)/ 2)!important
}

html.bp-xl .uk-button-large\@xl {
    font-size: var(--sizes-button-large-text);
    height: var(--sizes-button-large-height);
    padding: 0 var(--sizes-button-large-padding)
}

html.bp-xl .uk-button-large\@xl.uk-button-icon {
    width: var(--sizes-button-large-height)!important
}

html.bp-xl .uk-button-large\@xl.uk-button-justify {
    justify-content: space-between;
    padding: 0 calc(var(--sizes-button-large-padding)/ 2)!important
}

.uk-text-primary-10 {
    color: var(--color-primary-10)!important
}

.uk-text-primary-20 {
    color: var(--color-primary-20)!important
}

.uk-text-primary-30 {
    color: var(--color-primary-30)!important
}

.uk-text-primary-40 {
    color: var(--color-primary-40)!important
}

.uk-text-primary {
    color: var(--color-primary)!important
}

.uk-text-primary-60 {
    color: var(--color-primary-60)!important
}

.uk-text-primary-70 {
    color: var(--color-primary-70)!important
}

.uk-text-primary-80 {
    color: var(--color-primary-80)!important
}

.uk-text-primary-90 {
    color: var(--color-primary-90)!important
}

.uk-text-primary-100 {
    color: var(--color-primary-100)!important
}

.uk-background-primary-10 {
    background-color: var(--color-primary-10)!important
}

.uk-background-primary-20 {
    background-color: var(--color-primary-20)!important
}

.uk-background-primary-30 {
    background-color: var(--color-primary-30)!important
}

.uk-background-primary-40 {
    background-color: var(--color-primary-40)!important
}

.uk-background-primary {
    background-color: var(--color-primary)!important
}

.uk-background-primary-60 {
    background-color: var(--color-primary-60)!important
}

.uk-background-primary-70 {
    background-color: var(--color-primary-70)!important
}

.uk-background-primary-80 {
    background-color: var(--color-primary-80)!important
}

.uk-background-primary-90 {
    background-color: var(--color-primary-90)!important
}

.uk-background-primary-100 {
    background-color: var(--color-primary-100)!important
}

.uk-border-primary-10 {
    border-color: var(--color-primary-10)!important
}

.uk-border-primary-20 {
    border-color: var(--color-primary-20)!important
}

.uk-border-primary-30 {
    border-color: var(--color-primary-30)!important
}

.uk-border-primary-40 {
    border-color: var(--color-primary-40)!important
}

.uk-border-primary {
    border-color: var(--color-primary)!important
}

.uk-border-primary-60 {
    border-color: var(--color-primary-60)!important
}

.uk-border-primary-70 {
    border-color: var(--color-primary-70)!important
}

.uk-border-primary-80 {
    border-color: var(--color-primary-80)!important
}

.uk-border-primary-90 {
    border-color: var(--color-primary-90)!important
}

.uk-border-primary-100 {
    border-color: var(--color-primary-100)!important
}

.hover\:uk-text-primary-10:hover {
    color: var(--color-primary-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-primary-20:hover {
    color: var(--color-primary-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-primary-30:hover {
    color: var(--color-primary-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-primary-40:hover {
    color: var(--color-primary-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-primary:hover {
    color: var(--color-primary)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-primary-60:hover {
    color: var(--color-primary-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-primary-70:hover {
    color: var(--color-primary-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-primary-80:hover {
    color: var(--color-primary-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-primary-90:hover {
    color: var(--color-primary-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-primary-100:hover {
    color: var(--color-primary-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-primary-10:hover {
    background-color: var(--color-primary-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-primary-20:hover {
    background-color: var(--color-primary-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-primary-30:hover {
    background-color: var(--color-primary-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-primary-40:hover {
    background-color: var(--color-primary-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-primary:hover {
    background-color: var(--color-primary)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-primary-60:hover {
    background-color: var(--color-primary-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-primary-70:hover {
    background-color: var(--color-primary-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-primary-80:hover {
    background-color: var(--color-primary-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-primary-90:hover {
    background-color: var(--color-primary-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-primary-100:hover {
    background-color: var(--color-primary-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-primary-10:hover {
    border-color: var(--color-primary-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-primary-20:hover {
    border-color: var(--color-primary-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-primary-30:hover {
    border-color: var(--color-primary-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-primary-40:hover {
    border-color: var(--color-primary-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-primary:hover {
    border-color: var(--color-primary)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-primary-60:hover {
    border-color: var(--color-primary-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-primary-70:hover {
    border-color: var(--color-primary-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-primary-80:hover {
    border-color: var(--color-primary-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-primary-90:hover {
    border-color: var(--color-primary-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-primary-100:hover {
    border-color: var(--color-primary-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-text-secondary-10 {
    color: var(--color-secondary-10)!important
}

.uk-text-secondary-20 {
    color: var(--color-secondary-20)!important
}

.uk-text-secondary-30 {
    color: var(--color-secondary-30)!important
}

.uk-text-secondary-40 {
    color: var(--color-secondary-40)!important
}

.uk-text-secondary {
    color: var(--color-secondary)!important
}

.uk-text-secondary-60 {
    color: var(--color-secondary-60)!important
}

.uk-text-secondary-70 {
    color: var(--color-secondary-70)!important
}

.uk-text-secondary-80 {
    color: var(--color-secondary-80)!important
}

.uk-text-secondary-90 {
    color: var(--color-secondary-90)!important
}

.uk-text-secondary-100 {
    color: var(--color-secondary-100)!important
}

.uk-background-secondary-10 {
    background-color: var(--color-secondary-10)!important
}

.uk-background-secondary-20 {
    background-color: var(--color-secondary-20)!important
}

.uk-background-secondary-30 {
    background-color: var(--color-secondary-30)!important
}

.uk-background-secondary-40 {
    background-color: var(--color-secondary-40)!important
}

.uk-background-secondary {
    background-color: var(--color-secondary)!important
}

.uk-background-secondary-60 {
    background-color: var(--color-secondary-60)!important
}

.uk-background-secondary-70 {
    background-color: var(--color-secondary-70)!important
}

.uk-background-secondary-80 {
    background-color: var(--color-secondary-80)!important
}

.uk-background-secondary-90 {
    background-color: var(--color-secondary-90)!important
}

.uk-background-secondary-100 {
    background-color: var(--color-secondary-100)!important
}

.uk-border-secondary-10 {
    border-color: var(--color-secondary-10)!important
}

.uk-border-secondary-20 {
    border-color: var(--color-secondary-20)!important
}

.uk-border-secondary-30 {
    border-color: var(--color-secondary-30)!important
}

.uk-border-secondary-40 {
    border-color: var(--color-secondary-40)!important
}

.uk-border-secondary {
    border-color: var(--color-secondary)!important
}

.uk-border-secondary-60 {
    border-color: var(--color-secondary-60)!important
}

.uk-border-secondary-70 {
    border-color: var(--color-secondary-70)!important
}

.uk-border-secondary-80 {
    border-color: var(--color-secondary-80)!important
}

.uk-border-secondary-90 {
    border-color: var(--color-secondary-90)!important
}

.uk-border-secondary-100 {
    border-color: var(--color-secondary-100)!important
}

.hover\:uk-text-secondary-10:hover {
    color: var(--color-secondary-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-secondary-20:hover {
    color: var(--color-secondary-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-secondary-30:hover {
    color: var(--color-secondary-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-secondary-40:hover {
    color: var(--color-secondary-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-secondary:hover {
    color: var(--color-secondary)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-secondary-60:hover {
    color: var(--color-secondary-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-secondary-70:hover {
    color: var(--color-secondary-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-secondary-80:hover {
    color: var(--color-secondary-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-secondary-90:hover {
    color: var(--color-secondary-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-secondary-100:hover {
    color: var(--color-secondary-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-secondary-10:hover {
    background-color: var(--color-secondary-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-secondary-20:hover {
    background-color: var(--color-secondary-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-secondary-30:hover {
    background-color: var(--color-secondary-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-secondary-40:hover {
    background-color: var(--color-secondary-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-secondary:hover {
    background-color: var(--color-secondary)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-secondary-60:hover {
    background-color: var(--color-secondary-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-secondary-70:hover {
    background-color: var(--color-secondary-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-secondary-80:hover {
    background-color: var(--color-secondary-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-secondary-90:hover {
    background-color: var(--color-secondary-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-secondary-100:hover {
    background-color: var(--color-secondary-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-secondary-10:hover {
    border-color: var(--color-secondary-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-secondary-20:hover {
    border-color: var(--color-secondary-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-secondary-30:hover {
    border-color: var(--color-secondary-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-secondary-40:hover {
    border-color: var(--color-secondary-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-secondary:hover {
    border-color: var(--color-secondary)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-secondary-60:hover {
    border-color: var(--color-secondary-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-secondary-70:hover {
    border-color: var(--color-secondary-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-secondary-80:hover {
    border-color: var(--color-secondary-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-secondary-90:hover {
    border-color: var(--color-secondary-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-secondary-100:hover {
    border-color: var(--color-secondary-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-text-tertiary-10 {
    color: var(--color-tertiary-10)!important
}

.uk-text-tertiary-20 {
    color: var(--color-tertiary-20)!important
}

.uk-text-tertiary-30 {
    color: var(--color-tertiary-30)!important
}

.uk-text-tertiary-40 {
    color: var(--color-tertiary-40)!important
}

.uk-text-tertiary {
    color: var(--color-tertiary)!important
}

.uk-text-tertiary-60 {
    color: var(--color-tertiary-60)!important
}

.uk-text-tertiary-70 {
    color: var(--color-tertiary-70)!important
}

.uk-text-tertiary-80 {
    color: var(--color-tertiary-80)!important
}

.uk-text-tertiary-90 {
    color: var(--color-tertiary-90)!important
}

.uk-text-tertiary-100 {
    color: var(--color-tertiary-100)!important
}

.uk-background-tertiary-10 {
    background-color: var(--color-tertiary-10)!important
}

.uk-background-tertiary-20 {
    background-color: var(--color-tertiary-20)!important
}

.uk-background-tertiary-30 {
    background-color: var(--color-tertiary-30)!important
}

.uk-background-tertiary-40 {
    background-color: var(--color-tertiary-40)!important
}

.uk-background-tertiary {
    background-color: var(--color-tertiary)!important
}

.uk-background-tertiary-60 {
    background-color: var(--color-tertiary-60)!important
}

.uk-background-tertiary-70 {
    background-color: var(--color-tertiary-70)!important
}

.uk-background-tertiary-80 {
    background-color: var(--color-tertiary-80)!important
}

.uk-background-tertiary-90 {
    background-color: var(--color-tertiary-90)!important
}

.uk-background-tertiary-100 {
    background-color: var(--color-tertiary-100)!important
}

.uk-border-tertiary-10 {
    border-color: var(--color-tertiary-10)!important
}

.uk-border-tertiary-20 {
    border-color: var(--color-tertiary-20)!important
}

.uk-border-tertiary-30 {
    border-color: var(--color-tertiary-30)!important
}

.uk-border-tertiary-40 {
    border-color: var(--color-tertiary-40)!important
}

.uk-border-tertiary {
    border-color: var(--color-tertiary)!important
}

.uk-border-tertiary-60 {
    border-color: var(--color-tertiary-60)!important
}

.uk-border-tertiary-70 {
    border-color: var(--color-tertiary-70)!important
}

.uk-border-tertiary-80 {
    border-color: var(--color-tertiary-80)!important
}

.uk-border-tertiary-90 {
    border-color: var(--color-tertiary-90)!important
}

.uk-border-tertiary-100 {
    border-color: var(--color-tertiary-100)!important
}

.hover\:uk-text-tertiary-10:hover {
    color: var(--color-tertiary-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-tertiary-20:hover {
    color: var(--color-tertiary-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-tertiary-30:hover {
    color: var(--color-tertiary-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-tertiary-40:hover {
    color: var(--color-tertiary-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-tertiary:hover {
    color: var(--color-tertiary)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-tertiary-60:hover {
    color: var(--color-tertiary-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-tertiary-70:hover {
    color: var(--color-tertiary-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-tertiary-80:hover {
    color: var(--color-tertiary-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-tertiary-90:hover {
    color: var(--color-tertiary-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-tertiary-100:hover {
    color: var(--color-tertiary-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-tertiary-10:hover {
    background-color: var(--color-tertiary-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-tertiary-20:hover {
    background-color: var(--color-tertiary-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-tertiary-30:hover {
    background-color: var(--color-tertiary-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-tertiary-40:hover {
    background-color: var(--color-tertiary-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-tertiary:hover {
    background-color: var(--color-tertiary)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-tertiary-60:hover {
    background-color: var(--color-tertiary-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-tertiary-70:hover {
    background-color: var(--color-tertiary-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-tertiary-80:hover {
    background-color: var(--color-tertiary-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-tertiary-90:hover {
    background-color: var(--color-tertiary-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-tertiary-100:hover {
    background-color: var(--color-tertiary-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-tertiary-10:hover {
    border-color: var(--color-tertiary-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-tertiary-20:hover {
    border-color: var(--color-tertiary-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-tertiary-30:hover {
    border-color: var(--color-tertiary-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-tertiary-40:hover {
    border-color: var(--color-tertiary-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-tertiary:hover {
    border-color: var(--color-tertiary)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-tertiary-60:hover {
    border-color: var(--color-tertiary-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-tertiary-70:hover {
    border-color: var(--color-tertiary-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-tertiary-80:hover {
    border-color: var(--color-tertiary-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-tertiary-90:hover {
    border-color: var(--color-tertiary-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-tertiary-100:hover {
    border-color: var(--color-tertiary-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-text-quaternary-10 {
    color: var(--color-quaternary-10)!important
}

.uk-text-quaternary-20 {
    color: var(--color-quaternary-20)!important
}

.uk-text-quaternary-30 {
    color: var(--color-quaternary-30)!important
}

.uk-text-quaternary-40 {
    color: var(--color-quaternary-40)!important
}

.uk-text-quaternary {
    color: var(--color-quaternary)!important
}

.uk-text-quaternary-60 {
    color: var(--color-quaternary-60)!important
}

.uk-text-quaternary-70 {
    color: var(--color-quaternary-70)!important
}

.uk-text-quaternary-80 {
    color: var(--color-quaternary-80)!important
}

.uk-text-quaternary-90 {
    color: var(--color-quaternary-90)!important
}

.uk-text-quaternary-100 {
    color: var(--color-quaternary-100)!important
}

.uk-background-quaternary-10 {
    background-color: var(--color-quaternary-10)!important
}

.uk-background-quaternary-20 {
    background-color: var(--color-quaternary-20)!important
}

.uk-background-quaternary-30 {
    background-color: var(--color-quaternary-30)!important
}

.uk-background-quaternary-40 {
    background-color: var(--color-quaternary-40)!important
}

.uk-background-quaternary {
    background-color: var(--color-quaternary)!important
}

.uk-background-quaternary-60 {
    background-color: var(--color-quaternary-60)!important
}

.uk-background-quaternary-70 {
    background-color: var(--color-quaternary-70)!important
}

.uk-background-quaternary-80 {
    background-color: var(--color-quaternary-80)!important
}

.uk-background-quaternary-90 {
    background-color: var(--color-quaternary-90)!important
}

.uk-background-quaternary-100 {
    background-color: var(--color-quaternary-100)!important
}

.uk-border-quaternary-10 {
    border-color: var(--color-quaternary-10)!important
}

.uk-border-quaternary-20 {
    border-color: var(--color-quaternary-20)!important
}

.uk-border-quaternary-30 {
    border-color: var(--color-quaternary-30)!important
}

.uk-border-quaternary-40 {
    border-color: var(--color-quaternary-40)!important
}

.uk-border-quaternary {
    border-color: var(--color-quaternary)!important
}

.uk-border-quaternary-60 {
    border-color: var(--color-quaternary-60)!important
}

.uk-border-quaternary-70 {
    border-color: var(--color-quaternary-70)!important
}

.uk-border-quaternary-80 {
    border-color: var(--color-quaternary-80)!important
}

.uk-border-quaternary-90 {
    border-color: var(--color-quaternary-90)!important
}

.uk-border-quaternary-100 {
    border-color: var(--color-quaternary-100)!important
}

.hover\:uk-text-quaternary-10:hover {
    color: var(--color-quaternary-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-quaternary-20:hover {
    color: var(--color-quaternary-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-quaternary-30:hover {
    color: var(--color-quaternary-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-quaternary-40:hover {
    color: var(--color-quaternary-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-quaternary:hover {
    color: var(--color-quaternary)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-quaternary-60:hover {
    color: var(--color-quaternary-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-quaternary-70:hover {
    color: var(--color-quaternary-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-quaternary-80:hover {
    color: var(--color-quaternary-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-quaternary-90:hover {
    color: var(--color-quaternary-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-quaternary-100:hover {
    color: var(--color-quaternary-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-quaternary-10:hover {
    background-color: var(--color-quaternary-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-quaternary-20:hover {
    background-color: var(--color-quaternary-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-quaternary-30:hover {
    background-color: var(--color-quaternary-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-quaternary-40:hover {
    background-color: var(--color-quaternary-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-quaternary:hover {
    background-color: var(--color-quaternary)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-quaternary-60:hover {
    background-color: var(--color-quaternary-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-quaternary-70:hover {
    background-color: var(--color-quaternary-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-quaternary-80:hover {
    background-color: var(--color-quaternary-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-quaternary-90:hover {
    background-color: var(--color-quaternary-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-quaternary-100:hover {
    background-color: var(--color-quaternary-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-quaternary-10:hover {
    border-color: var(--color-quaternary-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-quaternary-20:hover {
    border-color: var(--color-quaternary-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-quaternary-30:hover {
    border-color: var(--color-quaternary-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-quaternary-40:hover {
    border-color: var(--color-quaternary-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-quaternary:hover {
    border-color: var(--color-quaternary)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-quaternary-60:hover {
    border-color: var(--color-quaternary-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-quaternary-70:hover {
    border-color: var(--color-quaternary-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-quaternary-80:hover {
    border-color: var(--color-quaternary-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-quaternary-90:hover {
    border-color: var(--color-quaternary-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-quaternary-100:hover {
    border-color: var(--color-quaternary-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-text-info-10 {
    color: var(--color-info-10)!important
}

.uk-text-info-20 {
    color: var(--color-info-20)!important
}

.uk-text-info-30 {
    color: var(--color-info-30)!important
}

.uk-text-info-40 {
    color: var(--color-info-40)!important
}

.uk-text-info {
    color: var(--color-info)!important
}

.uk-text-info-60 {
    color: var(--color-info-60)!important
}

.uk-text-info-70 {
    color: var(--color-info-70)!important
}

.uk-text-info-80 {
    color: var(--color-info-80)!important
}

.uk-text-info-90 {
    color: var(--color-info-90)!important
}

.uk-text-info-100 {
    color: var(--color-info-100)!important
}

.uk-background-info-10 {
    background-color: var(--color-info-10)!important
}

.uk-background-info-20 {
    background-color: var(--color-info-20)!important
}

.uk-background-info-30 {
    background-color: var(--color-info-30)!important
}

.uk-background-info-40 {
    background-color: var(--color-info-40)!important
}

.uk-background-info {
    background-color: var(--color-info)!important
}

.uk-background-info-60 {
    background-color: var(--color-info-60)!important
}

.uk-background-info-70 {
    background-color: var(--color-info-70)!important
}

.uk-background-info-80 {
    background-color: var(--color-info-80)!important
}

.uk-background-info-90 {
    background-color: var(--color-info-90)!important
}

.uk-background-info-100 {
    background-color: var(--color-info-100)!important
}

.uk-border-info-10 {
    border-color: var(--color-info-10)!important
}

.uk-border-info-20 {
    border-color: var(--color-info-20)!important
}

.uk-border-info-30 {
    border-color: var(--color-info-30)!important
}

.uk-border-info-40 {
    border-color: var(--color-info-40)!important
}

.uk-border-info {
    border-color: var(--color-info)!important
}

.uk-border-info-60 {
    border-color: var(--color-info-60)!important
}

.uk-border-info-70 {
    border-color: var(--color-info-70)!important
}

.uk-border-info-80 {
    border-color: var(--color-info-80)!important
}

.uk-border-info-90 {
    border-color: var(--color-info-90)!important
}

.uk-border-info-100 {
    border-color: var(--color-info-100)!important
}

.hover\:uk-text-info-10:hover {
    color: var(--color-info-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-info-20:hover {
    color: var(--color-info-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-info-30:hover {
    color: var(--color-info-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-info-40:hover {
    color: var(--color-info-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-info:hover {
    color: var(--color-info)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-info-60:hover {
    color: var(--color-info-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-info-70:hover {
    color: var(--color-info-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-info-80:hover {
    color: var(--color-info-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-info-90:hover {
    color: var(--color-info-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-info-100:hover {
    color: var(--color-info-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-info-10:hover {
    background-color: var(--color-info-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-info-20:hover {
    background-color: var(--color-info-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-info-30:hover {
    background-color: var(--color-info-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-info-40:hover {
    background-color: var(--color-info-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-info:hover {
    background-color: var(--color-info)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-info-60:hover {
    background-color: var(--color-info-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-info-70:hover {
    background-color: var(--color-info-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-info-80:hover {
    background-color: var(--color-info-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-info-90:hover {
    background-color: var(--color-info-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-info-100:hover {
    background-color: var(--color-info-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-info-10:hover {
    border-color: var(--color-info-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-info-20:hover {
    border-color: var(--color-info-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-info-30:hover {
    border-color: var(--color-info-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-info-40:hover {
    border-color: var(--color-info-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-info:hover {
    border-color: var(--color-info)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-info-60:hover {
    border-color: var(--color-info-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-info-70:hover {
    border-color: var(--color-info-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-info-80:hover {
    border-color: var(--color-info-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-info-90:hover {
    border-color: var(--color-info-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-info-100:hover {
    border-color: var(--color-info-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-text-success-10 {
    color: var(--color-success-10)!important
}

.uk-text-success-20 {
    color: var(--color-success-20)!important
}

.uk-text-success-30 {
    color: var(--color-success-30)!important
}

.uk-text-success-40 {
    color: var(--color-success-40)!important
}

.uk-text-success {
    color: var(--color-success)!important
}

.uk-text-success-60 {
    color: var(--color-success-60)!important
}

.uk-text-success-70 {
    color: var(--color-success-70)!important
}

.uk-text-success-80 {
    color: var(--color-success-80)!important
}

.uk-text-success-90 {
    color: var(--color-success-90)!important
}

.uk-text-success-100 {
    color: var(--color-success-100)!important
}

.uk-background-success-10 {
    background-color: var(--color-success-10)!important
}

.uk-background-success-20 {
    background-color: var(--color-success-20)!important
}

.uk-background-success-30 {
    background-color: var(--color-success-30)!important
}

.uk-background-success-40 {
    background-color: var(--color-success-40)!important
}

.uk-background-success {
    background-color: var(--color-success)!important
}

.uk-background-success-60 {
    background-color: var(--color-success-60)!important
}

.uk-background-success-70 {
    background-color: var(--color-success-70)!important
}

.uk-background-success-80 {
    background-color: var(--color-success-80)!important
}

.uk-background-success-90 {
    background-color: var(--color-success-90)!important
}

.uk-background-success-100 {
    background-color: var(--color-success-100)!important
}

.uk-border-success-10 {
    border-color: var(--color-success-10)!important
}

.uk-border-success-20 {
    border-color: var(--color-success-20)!important
}

.uk-border-success-30 {
    border-color: var(--color-success-30)!important
}

.uk-border-success-40 {
    border-color: var(--color-success-40)!important
}

.uk-border-success {
    border-color: var(--color-success)!important
}

.uk-border-success-60 {
    border-color: var(--color-success-60)!important
}

.uk-border-success-70 {
    border-color: var(--color-success-70)!important
}

.uk-border-success-80 {
    border-color: var(--color-success-80)!important
}

.uk-border-success-90 {
    border-color: var(--color-success-90)!important
}

.uk-border-success-100 {
    border-color: var(--color-success-100)!important
}

.hover\:uk-text-success-10:hover {
    color: var(--color-success-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-success-20:hover {
    color: var(--color-success-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-success-30:hover {
    color: var(--color-success-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-success-40:hover {
    color: var(--color-success-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-success:hover {
    color: var(--color-success)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-success-60:hover {
    color: var(--color-success-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-success-70:hover {
    color: var(--color-success-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-success-80:hover {
    color: var(--color-success-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-success-90:hover {
    color: var(--color-success-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-success-100:hover {
    color: var(--color-success-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-success-10:hover {
    background-color: var(--color-success-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-success-20:hover {
    background-color: var(--color-success-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-success-30:hover {
    background-color: var(--color-success-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-success-40:hover {
    background-color: var(--color-success-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-success:hover {
    background-color: var(--color-success)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-success-60:hover {
    background-color: var(--color-success-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-success-70:hover {
    background-color: var(--color-success-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-success-80:hover {
    background-color: var(--color-success-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-success-90:hover {
    background-color: var(--color-success-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-success-100:hover {
    background-color: var(--color-success-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-success-10:hover {
    border-color: var(--color-success-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-success-20:hover {
    border-color: var(--color-success-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-success-30:hover {
    border-color: var(--color-success-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-success-40:hover {
    border-color: var(--color-success-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-success:hover {
    border-color: var(--color-success)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-success-60:hover {
    border-color: var(--color-success-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-success-70:hover {
    border-color: var(--color-success-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-success-80:hover {
    border-color: var(--color-success-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-success-90:hover {
    border-color: var(--color-success-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-success-100:hover {
    border-color: var(--color-success-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-text-warning-10 {
    color: var(--color-warning-10)!important
}

.uk-text-warning-20 {
    color: var(--color-warning-20)!important
}

.uk-text-warning-30 {
    color: var(--color-warning-30)!important
}

.uk-text-warning-40 {
    color: var(--color-warning-40)!important
}

.uk-text-warning {
    color: var(--color-warning)!important
}

.uk-text-warning-60 {
    color: var(--color-warning-60)!important
}

.uk-text-warning-70 {
    color: var(--color-warning-70)!important
}

.uk-text-warning-80 {
    color: var(--color-warning-80)!important
}

.uk-text-warning-90 {
    color: var(--color-warning-90)!important
}

.uk-text-warning-100 {
    color: var(--color-warning-100)!important
}

.uk-background-warning-10 {
    background-color: var(--color-warning-10)!important
}

.uk-background-warning-20 {
    background-color: var(--color-warning-20)!important
}

.uk-background-warning-30 {
    background-color: var(--color-warning-30)!important
}

.uk-background-warning-40 {
    background-color: var(--color-warning-40)!important
}

.uk-background-warning {
    background-color: var(--color-warning)!important
}

.uk-background-warning-60 {
    background-color: var(--color-warning-60)!important
}

.uk-background-warning-70 {
    background-color: var(--color-warning-70)!important
}

.uk-background-warning-80 {
    background-color: var(--color-warning-80)!important
}

.uk-background-warning-90 {
    background-color: var(--color-warning-90)!important
}

.uk-background-warning-100 {
    background-color: var(--color-warning-100)!important
}

.uk-border-warning-10 {
    border-color: var(--color-warning-10)!important
}

.uk-border-warning-20 {
    border-color: var(--color-warning-20)!important
}

.uk-border-warning-30 {
    border-color: var(--color-warning-30)!important
}

.uk-border-warning-40 {
    border-color: var(--color-warning-40)!important
}

.uk-border-warning {
    border-color: var(--color-warning)!important
}

.uk-border-warning-60 {
    border-color: var(--color-warning-60)!important
}

.uk-border-warning-70 {
    border-color: var(--color-warning-70)!important
}

.uk-border-warning-80 {
    border-color: var(--color-warning-80)!important
}

.uk-border-warning-90 {
    border-color: var(--color-warning-90)!important
}

.uk-border-warning-100 {
    border-color: var(--color-warning-100)!important
}

.hover\:uk-text-warning-10:hover {
    color: var(--color-warning-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-warning-20:hover {
    color: var(--color-warning-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-warning-30:hover {
    color: var(--color-warning-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-warning-40:hover {
    color: var(--color-warning-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-warning:hover {
    color: var(--color-warning)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-warning-60:hover {
    color: var(--color-warning-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-warning-70:hover {
    color: var(--color-warning-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-warning-80:hover {
    color: var(--color-warning-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-warning-90:hover {
    color: var(--color-warning-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-warning-100:hover {
    color: var(--color-warning-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-warning-10:hover {
    background-color: var(--color-warning-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-warning-20:hover {
    background-color: var(--color-warning-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-warning-30:hover {
    background-color: var(--color-warning-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-warning-40:hover {
    background-color: var(--color-warning-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-warning:hover {
    background-color: var(--color-warning)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-warning-60:hover {
    background-color: var(--color-warning-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-warning-70:hover {
    background-color: var(--color-warning-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-warning-80:hover {
    background-color: var(--color-warning-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-warning-90:hover {
    background-color: var(--color-warning-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-warning-100:hover {
    background-color: var(--color-warning-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-warning-10:hover {
    border-color: var(--color-warning-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-warning-20:hover {
    border-color: var(--color-warning-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-warning-30:hover {
    border-color: var(--color-warning-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-warning-40:hover {
    border-color: var(--color-warning-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-warning:hover {
    border-color: var(--color-warning)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-warning-60:hover {
    border-color: var(--color-warning-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-warning-70:hover {
    border-color: var(--color-warning-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-warning-80:hover {
    border-color: var(--color-warning-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-warning-90:hover {
    border-color: var(--color-warning-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-warning-100:hover {
    border-color: var(--color-warning-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-text-danger-10 {
    color: var(--color-danger-10)!important
}

.uk-text-danger-20 {
    color: var(--color-danger-20)!important
}

.uk-text-danger-30 {
    color: var(--color-danger-30)!important
}

.uk-text-danger-40 {
    color: var(--color-danger-40)!important
}

.uk-text-danger {
    color: var(--color-danger)!important
}

.uk-text-danger-60 {
    color: var(--color-danger-60)!important
}

.uk-text-danger-70 {
    color: var(--color-danger-70)!important
}

.uk-text-danger-80 {
    color: var(--color-danger-80)!important
}

.uk-text-danger-90 {
    color: var(--color-danger-90)!important
}

.uk-text-danger-100 {
    color: var(--color-danger-100)!important
}

.uk-background-danger-10 {
    background-color: var(--color-danger-10)!important
}

.uk-background-danger-20 {
    background-color: var(--color-danger-20)!important
}

.uk-background-danger-30 {
    background-color: var(--color-danger-30)!important
}

.uk-background-danger-40 {
    background-color: var(--color-danger-40)!important
}

.uk-background-danger {
    background-color: var(--color-danger)!important
}

.uk-background-danger-60 {
    background-color: var(--color-danger-60)!important
}

.uk-background-danger-70 {
    background-color: var(--color-danger-70)!important
}

.uk-background-danger-80 {
    background-color: var(--color-danger-80)!important
}

.uk-background-danger-90 {
    background-color: var(--color-danger-90)!important
}

.uk-background-danger-100 {
    background-color: var(--color-danger-100)!important
}

.uk-border-danger-10 {
    border-color: var(--color-danger-10)!important
}

.uk-border-danger-20 {
    border-color: var(--color-danger-20)!important
}

.uk-border-danger-30 {
    border-color: var(--color-danger-30)!important
}

.uk-border-danger-40 {
    border-color: var(--color-danger-40)!important
}

.uk-border-danger {
    border-color: var(--color-danger)!important
}

.uk-border-danger-60 {
    border-color: var(--color-danger-60)!important
}

.uk-border-danger-70 {
    border-color: var(--color-danger-70)!important
}

.uk-border-danger-80 {
    border-color: var(--color-danger-80)!important
}

.uk-border-danger-90 {
    border-color: var(--color-danger-90)!important
}

.uk-border-danger-100 {
    border-color: var(--color-danger-100)!important
}

.hover\:uk-text-danger-10:hover {
    color: var(--color-danger-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-danger-20:hover {
    color: var(--color-danger-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-danger-30:hover {
    color: var(--color-danger-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-danger-40:hover {
    color: var(--color-danger-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-danger:hover {
    color: var(--color-danger)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-danger-60:hover {
    color: var(--color-danger-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-danger-70:hover {
    color: var(--color-danger-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-danger-80:hover {
    color: var(--color-danger-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-danger-90:hover {
    color: var(--color-danger-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-danger-100:hover {
    color: var(--color-danger-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-danger-10:hover {
    background-color: var(--color-danger-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-danger-20:hover {
    background-color: var(--color-danger-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-danger-30:hover {
    background-color: var(--color-danger-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-danger-40:hover {
    background-color: var(--color-danger-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-danger:hover {
    background-color: var(--color-danger)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-danger-60:hover {
    background-color: var(--color-danger-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-danger-70:hover {
    background-color: var(--color-danger-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-danger-80:hover {
    background-color: var(--color-danger-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-danger-90:hover {
    background-color: var(--color-danger-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-danger-100:hover {
    background-color: var(--color-danger-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-danger-10:hover {
    border-color: var(--color-danger-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-danger-20:hover {
    border-color: var(--color-danger-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-danger-30:hover {
    border-color: var(--color-danger-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-danger-40:hover {
    border-color: var(--color-danger-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-danger:hover {
    border-color: var(--color-danger)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-danger-60:hover {
    border-color: var(--color-danger-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-danger-70:hover {
    border-color: var(--color-danger-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-danger-80:hover {
    border-color: var(--color-danger-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-danger-90:hover {
    border-color: var(--color-danger-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-danger-100:hover {
    border-color: var(--color-danger-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-text-gray-10 {
    color: var(--color-gray-10)!important
}

.uk-text-gray-20 {
    color: var(--color-gray-20)!important
}

.uk-text-gray-30 {
    color: var(--color-gray-30)!important
}

.uk-text-gray-40 {
    color: var(--color-gray-40)!important
}

.uk-text-gray-50 {
    color: var(--color-gray-50)!important
}

.uk-text-gray-60 {
    color: var(--color-gray-60)!important
}

.uk-text-gray-70 {
    color: var(--color-gray-70)!important
}

.uk-text-gray-80 {
    color: var(--color-gray-80)!important
}

.uk-text-gray-90 {
    color: var(--color-gray-90)!important
}

.uk-text-gray-100 {
    color: var(--color-gray-100)!important
}

.uk-background-gray-10 {
    background-color: var(--color-gray-10)!important
}

.uk-background-gray-20 {
    background-color: var(--color-gray-20)!important
}

.uk-background-gray-30 {
    background-color: var(--color-gray-30)!important
}

.uk-background-gray-40 {
    background-color: var(--color-gray-40)!important
}

.uk-background-gray-50 {
    background-color: var(--color-gray-50)!important
}

.uk-background-gray-60 {
    background-color: var(--color-gray-60)!important
}

.uk-background-gray-70 {
    background-color: var(--color-gray-70)!important
}

.uk-background-gray-80 {
    background-color: var(--color-gray-80)!important
}

.uk-background-gray-90 {
    background-color: var(--color-gray-90)!important
}

.uk-background-gray-100 {
    background-color: var(--color-gray-100)!important
}

.uk-border-gray-10 {
    border-color: var(--color-gray-10)!important
}

.uk-border-gray-20 {
    border-color: var(--color-gray-20)!important
}

.uk-border-gray-30 {
    border-color: var(--color-gray-30)!important
}

.uk-border-gray-40 {
    border-color: var(--color-gray-40)!important
}

.uk-border-gray-50 {
    border-color: var(--color-gray-50)!important
}

.uk-border-gray-60 {
    border-color: var(--color-gray-60)!important
}

.uk-border-gray-70 {
    border-color: var(--color-gray-70)!important
}

.uk-border-gray-80 {
    border-color: var(--color-gray-80)!important
}

.uk-border-gray-90 {
    border-color: var(--color-gray-90)!important
}

.uk-border-gray-100 {
    border-color: var(--color-gray-100)!important
}

.hover\:uk-text-gray-10:hover {
    color: var(--color-gray-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-gray-20:hover {
    color: var(--color-gray-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-gray-30:hover {
    color: var(--color-gray-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-gray-40:hover {
    color: var(--color-gray-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-gray-50:hover {
    color: var(--color-gray-50)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-gray-60:hover {
    color: var(--color-gray-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-gray-70:hover {
    color: var(--color-gray-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-gray-80:hover {
    color: var(--color-gray-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-gray-90:hover {
    color: var(--color-gray-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-gray-100:hover {
    color: var(--color-gray-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-gray-10:hover {
    background-color: var(--color-gray-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-gray-20:hover {
    background-color: var(--color-gray-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-gray-30:hover {
    background-color: var(--color-gray-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-gray-40:hover {
    background-color: var(--color-gray-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-gray-50:hover {
    background-color: var(--color-gray-50)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-gray-60:hover {
    background-color: var(--color-gray-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-gray-70:hover {
    background-color: var(--color-gray-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-gray-80:hover {
    background-color: var(--color-gray-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-gray-90:hover {
    background-color: var(--color-gray-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-gray-100:hover {
    background-color: var(--color-gray-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-gray-10:hover {
    border-color: var(--color-gray-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-gray-20:hover {
    border-color: var(--color-gray-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-gray-30:hover {
    border-color: var(--color-gray-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-gray-40:hover {
    border-color: var(--color-gray-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-gray-50:hover {
    border-color: var(--color-gray-50)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-gray-60:hover {
    border-color: var(--color-gray-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-gray-70:hover {
    border-color: var(--color-gray-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-gray-80:hover {
    border-color: var(--color-gray-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-gray-90:hover {
    border-color: var(--color-gray-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-gray-100:hover {
    border-color: var(--color-gray-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-text-default-10 {
    color: var(--color-default-10)!important
}

.uk-text-default-20 {
    color: var(--color-default-20)!important
}

.uk-text-default-30 {
    color: var(--color-default-30)!important
}

.uk-text-default-40 {
    color: var(--color-default-40)!important
}

.uk-text-default {
    color: var(--color-default)!important
}

.uk-text-default-60 {
    color: var(--color-default-60)!important
}

.uk-text-default-70 {
    color: var(--color-default-70)!important
}

.uk-text-default-80 {
    color: var(--color-default-80)!important
}

.uk-text-default-90 {
    color: var(--color-default-90)!important
}

.uk-text-default-100 {
    color: var(--color-default-100)!important
}

.uk-background-default-10 {
    background-color: var(--color-default-10)!important
}

.uk-background-default-20 {
    background-color: var(--color-default-20)!important
}

.uk-background-default-30 {
    background-color: var(--color-default-30)!important
}

.uk-background-default-40 {
    background-color: var(--color-default-40)!important
}

.uk-background-default {
    background-color: var(--color-default)!important
}

.uk-background-default-60 {
    background-color: var(--color-default-60)!important
}

.uk-background-default-70 {
    background-color: var(--color-default-70)!important
}

.uk-background-default-80 {
    background-color: var(--color-default-80)!important
}

.uk-background-default-90 {
    background-color: var(--color-default-90)!important
}

.uk-background-default-100 {
    background-color: var(--color-default-100)!important
}

.uk-border-default-10 {
    border-color: var(--color-default-10)!important
}

.uk-border-default-20 {
    border-color: var(--color-default-20)!important
}

.uk-border-default-30 {
    border-color: var(--color-default-30)!important
}

.uk-border-default-40 {
    border-color: var(--color-default-40)!important
}

.uk-border-default {
    border-color: var(--color-default)!important
}

.uk-border-default-60 {
    border-color: var(--color-default-60)!important
}

.uk-border-default-70 {
    border-color: var(--color-default-70)!important
}

.uk-border-default-80 {
    border-color: var(--color-default-80)!important
}

.uk-border-default-90 {
    border-color: var(--color-default-90)!important
}

.uk-border-default-100 {
    border-color: var(--color-default-100)!important
}

.hover\:uk-text-default-10:hover {
    color: var(--color-default-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-default-20:hover {
    color: var(--color-default-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-default-30:hover {
    color: var(--color-default-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-default-40:hover {
    color: var(--color-default-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-default:hover {
    color: var(--color-default)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-default-60:hover {
    color: var(--color-default-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-default-70:hover {
    color: var(--color-default-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-default-80:hover {
    color: var(--color-default-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-default-90:hover {
    color: var(--color-default-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-default-100:hover {
    color: var(--color-default-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-default-10:hover {
    background-color: var(--color-default-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-default-20:hover {
    background-color: var(--color-default-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-default-30:hover {
    background-color: var(--color-default-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-default-40:hover {
    background-color: var(--color-default-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-default:hover {
    background-color: var(--color-default)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-default-60:hover {
    background-color: var(--color-default-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-default-70:hover {
    background-color: var(--color-default-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-default-80:hover {
    background-color: var(--color-default-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-default-90:hover {
    background-color: var(--color-default-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-default-100:hover {
    background-color: var(--color-default-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-default-10:hover {
    border-color: var(--color-default-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-default-20:hover {
    border-color: var(--color-default-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-default-30:hover {
    border-color: var(--color-default-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-default-40:hover {
    border-color: var(--color-default-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-default:hover {
    border-color: var(--color-default)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-default-60:hover {
    border-color: var(--color-default-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-default-70:hover {
    border-color: var(--color-default-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-default-80:hover {
    border-color: var(--color-default-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-default-90:hover {
    border-color: var(--color-default-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-default-100:hover {
    border-color: var(--color-default-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-text-darkgrey-10 {
    color: var(--color-darkgrey-10)!important
}

.uk-text-darkgrey-20 {
    color: var(--color-darkgrey-20)!important
}

.uk-text-darkgrey-30 {
    color: var(--color-darkgrey-30)!important
}

.uk-text-darkgrey-40 {
    color: var(--color-darkgrey-40)!important
}

.uk-text-darkgrey {
    color: var(--color-darkgrey)!important
}

.uk-text-darkgrey-60 {
    color: var(--color-darkgrey-60)!important
}

.uk-text-darkgrey-70 {
    color: var(--color-darkgrey-70)!important
}

.uk-text-darkgrey-80 {
    color: var(--color-darkgrey-80)!important
}

.uk-text-darkgrey-90 {
    color: var(--color-darkgrey-90)!important
}

.uk-text-darkgrey-100 {
    color: var(--color-darkgrey-100)!important
}

.uk-background-darkgrey-10 {
    background-color: var(--color-darkgrey-10)!important
}

.uk-background-darkgrey-20 {
    background-color: var(--color-darkgrey-20)!important
}

.uk-background-darkgrey-30 {
    background-color: var(--color-darkgrey-30)!important
}

.uk-background-darkgrey-40 {
    background-color: var(--color-darkgrey-40)!important
}

.uk-background-darkgrey {
    background-color: var(--color-darkgrey)!important
}

.uk-background-darkgrey-60 {
    background-color: var(--color-darkgrey-60)!important
}

.uk-background-darkgrey-70 {
    background-color: var(--color-darkgrey-70)!important
}

.uk-background-darkgrey-80 {
    background-color: var(--color-darkgrey-80)!important
}

.uk-background-darkgrey-90 {
    background-color: var(--color-darkgrey-90)!important
}

.uk-background-darkgrey-100 {
    background-color: var(--color-darkgrey-100)!important
}

.uk-border-darkgrey-10 {
    border-color: var(--color-darkgrey-10)!important
}

.uk-border-darkgrey-20 {
    border-color: var(--color-darkgrey-20)!important
}

.uk-border-darkgrey-30 {
    border-color: var(--color-darkgrey-30)!important
}

.uk-border-darkgrey-40 {
    border-color: var(--color-darkgrey-40)!important
}

.uk-border-darkgrey {
    border-color: var(--color-darkgrey)!important
}

.uk-border-darkgrey-60 {
    border-color: var(--color-darkgrey-60)!important
}

.uk-border-darkgrey-70 {
    border-color: var(--color-darkgrey-70)!important
}

.uk-border-darkgrey-80 {
    border-color: var(--color-darkgrey-80)!important
}

.uk-border-darkgrey-90 {
    border-color: var(--color-darkgrey-90)!important
}

.uk-border-darkgrey-100 {
    border-color: var(--color-darkgrey-100)!important
}

.hover\:uk-text-darkgrey-10:hover {
    color: var(--color-darkgrey-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-darkgrey-20:hover {
    color: var(--color-darkgrey-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-darkgrey-30:hover {
    color: var(--color-darkgrey-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-darkgrey-40:hover {
    color: var(--color-darkgrey-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-darkgrey:hover {
    color: var(--color-darkgrey)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-darkgrey-60:hover {
    color: var(--color-darkgrey-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-darkgrey-70:hover {
    color: var(--color-darkgrey-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-darkgrey-80:hover {
    color: var(--color-darkgrey-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-darkgrey-90:hover {
    color: var(--color-darkgrey-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-darkgrey-100:hover {
    color: var(--color-darkgrey-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-darkgrey-10:hover {
    background-color: var(--color-darkgrey-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-darkgrey-20:hover {
    background-color: var(--color-darkgrey-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-darkgrey-30:hover {
    background-color: var(--color-darkgrey-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-darkgrey-40:hover {
    background-color: var(--color-darkgrey-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-darkgrey:hover {
    background-color: var(--color-darkgrey)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-darkgrey-60:hover {
    background-color: var(--color-darkgrey-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-darkgrey-70:hover {
    background-color: var(--color-darkgrey-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-darkgrey-80:hover {
    background-color: var(--color-darkgrey-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-darkgrey-90:hover {
    background-color: var(--color-darkgrey-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-darkgrey-100:hover {
    background-color: var(--color-darkgrey-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-darkgrey-10:hover {
    border-color: var(--color-darkgrey-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-darkgrey-20:hover {
    border-color: var(--color-darkgrey-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-darkgrey-30:hover {
    border-color: var(--color-darkgrey-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-darkgrey-40:hover {
    border-color: var(--color-darkgrey-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-darkgrey:hover {
    border-color: var(--color-darkgrey)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-darkgrey-60:hover {
    border-color: var(--color-darkgrey-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-darkgrey-70:hover {
    border-color: var(--color-darkgrey-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-darkgrey-80:hover {
    border-color: var(--color-darkgrey-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-darkgrey-90:hover {
    border-color: var(--color-darkgrey-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-darkgrey-100:hover {
    border-color: var(--color-darkgrey-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-text-light-10 {
    color: var(--color-light-10)!important
}

.uk-text-light-20 {
    color: var(--color-light-20)!important
}

.uk-text-light-30 {
    color: var(--color-light-30)!important
}

.uk-text-light-40 {
    color: var(--color-light-40)!important
}

.uk-text-light-50 {
    color: var(--color-light-50)!important
}

.uk-text-light-60 {
    color: var(--color-light-60)!important
}

.uk-text-light-70 {
    color: var(--color-light-70)!important
}

.uk-text-light-80 {
    color: var(--color-light-80)!important
}

.uk-text-light-90 {
    color: var(--color-light-90)!important
}

.uk-text-light-100 {
    color: var(--color-light-100)!important
}

.uk-background-light-10 {
    background-color: var(--color-light-10)!important
}

.uk-background-light-20 {
    background-color: var(--color-light-20)!important
}

.uk-background-light-30 {
    background-color: var(--color-light-30)!important
}

.uk-background-light-40 {
    background-color: var(--color-light-40)!important
}

.uk-background-light-50 {
    background-color: var(--color-light-50)!important
}

.uk-background-light-60 {
    background-color: var(--color-light-60)!important
}

.uk-background-light-70 {
    background-color: var(--color-light-70)!important
}

.uk-background-light-80 {
    background-color: var(--color-light-80)!important
}

.uk-background-light-90 {
    background-color: var(--color-light-90)!important
}

.uk-background-light-100 {
    background-color: var(--color-light-100)!important
}

.uk-border-light-10 {
    border-color: var(--color-light-10)!important
}

.uk-border-light-20 {
    border-color: var(--color-light-20)!important
}

.uk-border-light-30 {
    border-color: var(--color-light-30)!important
}

.uk-border-light-40 {
    border-color: var(--color-light-40)!important
}

.uk-border-light-50 {
    border-color: var(--color-light-50)!important
}

.uk-border-light-60 {
    border-color: var(--color-light-60)!important
}

.uk-border-light-70 {
    border-color: var(--color-light-70)!important
}

.uk-border-light-80 {
    border-color: var(--color-light-80)!important
}

.uk-border-light-90 {
    border-color: var(--color-light-90)!important
}

.uk-border-light-100 {
    border-color: var(--color-light-100)!important
}

.hover\:uk-text-light-10:hover {
    color: var(--color-light-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-light-20:hover {
    color: var(--color-light-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-light-30:hover {
    color: var(--color-light-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-light-40:hover {
    color: var(--color-light-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-light-50:hover {
    color: var(--color-light-50)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-light-60:hover {
    color: var(--color-light-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-light-70:hover {
    color: var(--color-light-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-light-80:hover {
    color: var(--color-light-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-light-90:hover {
    color: var(--color-light-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-light-100:hover {
    color: var(--color-light-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-light-10:hover {
    background-color: var(--color-light-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-light-20:hover {
    background-color: var(--color-light-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-light-30:hover {
    background-color: var(--color-light-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-light-40:hover {
    background-color: var(--color-light-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-light-50:hover {
    background-color: var(--color-light-50)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-light-60:hover {
    background-color: var(--color-light-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-light-70:hover {
    background-color: var(--color-light-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-light-80:hover {
    background-color: var(--color-light-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-light-90:hover {
    background-color: var(--color-light-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-light-100:hover {
    background-color: var(--color-light-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-light-10:hover {
    border-color: var(--color-light-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-light-20:hover {
    border-color: var(--color-light-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-light-30:hover {
    border-color: var(--color-light-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-light-40:hover {
    border-color: var(--color-light-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-light-50:hover {
    border-color: var(--color-light-50)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-light-60:hover {
    border-color: var(--color-light-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-light-70:hover {
    border-color: var(--color-light-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-light-80:hover {
    border-color: var(--color-light-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-light-90:hover {
    border-color: var(--color-light-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-light-100:hover {
    border-color: var(--color-light-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-text-muted-10 {
    color: var(--color-muted-10)!important
}

.uk-text-muted-20 {
    color: var(--color-muted-20)!important
}

.uk-text-muted-30 {
    color: var(--color-muted-30)!important
}

.uk-text-muted-40 {
    color: var(--color-muted-40)!important
}

.uk-text-muted {
    color: var(--color-muted)!important
}

.uk-text-muted-60 {
    color: var(--color-muted-60)!important
}

.uk-text-muted-70 {
    color: var(--color-muted-70)!important
}

.uk-text-muted-80 {
    color: var(--color-muted-80)!important
}

.uk-text-muted-90 {
    color: var(--color-muted-90)!important
}

.uk-text-muted-100 {
    color: var(--color-muted-100)!important
}

.uk-background-muted-10 {
    background-color: var(--color-muted-10)!important
}

.uk-background-muted-20 {
    background-color: var(--color-muted-20)!important
}

.uk-background-muted-30 {
    background-color: var(--color-muted-30)!important
}

.uk-background-muted-40 {
    background-color: var(--color-muted-40)!important
}

.uk-background-muted {
    background-color: var(--color-muted)!important
}

.uk-background-muted-60 {
    background-color: var(--color-muted-60)!important
}

.uk-background-muted-70 {
    background-color: var(--color-muted-70)!important
}

.uk-background-muted-80 {
    background-color: var(--color-muted-80)!important
}

.uk-background-muted-90 {
    background-color: var(--color-muted-90)!important
}

.uk-background-muted-100 {
    background-color: var(--color-muted-100)!important
}

.uk-border-muted-10 {
    border-color: var(--color-muted-10)!important
}

.uk-border-muted-20 {
    border-color: var(--color-muted-20)!important
}

.uk-border-muted-30 {
    border-color: var(--color-muted-30)!important
}

.uk-border-muted-40 {
    border-color: var(--color-muted-40)!important
}

.uk-border-muted {
    border-color: var(--color-muted)!important
}

.uk-border-muted-60 {
    border-color: var(--color-muted-60)!important
}

.uk-border-muted-70 {
    border-color: var(--color-muted-70)!important
}

.uk-border-muted-80 {
    border-color: var(--color-muted-80)!important
}

.uk-border-muted-90 {
    border-color: var(--color-muted-90)!important
}

.uk-border-muted-100 {
    border-color: var(--color-muted-100)!important
}

.hover\:uk-text-muted-10:hover {
    color: var(--color-muted-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-muted-20:hover {
    color: var(--color-muted-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-muted-30:hover {
    color: var(--color-muted-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-muted-40:hover {
    color: var(--color-muted-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-muted:hover {
    color: var(--color-muted)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-muted-60:hover {
    color: var(--color-muted-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-muted-70:hover {
    color: var(--color-muted-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-muted-80:hover {
    color: var(--color-muted-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-muted-90:hover {
    color: var(--color-muted-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-text-muted-100:hover {
    color: var(--color-muted-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-muted-10:hover {
    background-color: var(--color-muted-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-muted-20:hover {
    background-color: var(--color-muted-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-muted-30:hover {
    background-color: var(--color-muted-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-muted-40:hover {
    background-color: var(--color-muted-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-muted:hover {
    background-color: var(--color-muted)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-muted-60:hover {
    background-color: var(--color-muted-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-muted-70:hover {
    background-color: var(--color-muted-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-muted-80:hover {
    background-color: var(--color-muted-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-muted-90:hover {
    background-color: var(--color-muted-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-background-muted-100:hover {
    background-color: var(--color-muted-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-muted-10:hover {
    border-color: var(--color-muted-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-muted-20:hover {
    border-color: var(--color-muted-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-muted-30:hover {
    border-color: var(--color-muted-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-muted-40:hover {
    border-color: var(--color-muted-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-muted:hover {
    border-color: var(--color-muted)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-muted-60:hover {
    border-color: var(--color-muted-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-muted-70:hover {
    border-color: var(--color-muted-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-muted-80:hover {
    border-color: var(--color-muted-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-muted-90:hover {
    border-color: var(--color-muted-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.hover\:uk-border-muted-100:hover {
    border-color: var(--color-muted-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:uk-text-primary-10,.uk-dark.dark\:uk-text-primary-10 {
    color: var(--color-primary-10)!important
}

.uk-dark .dark\:uk-text-primary-20,.uk-dark.dark\:uk-text-primary-20 {
    color: var(--color-primary-20)!important
}

.uk-dark .dark\:uk-text-primary-30,.uk-dark.dark\:uk-text-primary-30 {
    color: var(--color-primary-30)!important
}

.uk-dark .dark\:uk-text-primary-40,.uk-dark.dark\:uk-text-primary-40 {
    color: var(--color-primary-40)!important
}

.uk-dark .dark\:uk-text-primary,.uk-dark.dark\:uk-text-primary {
    color: var(--color-primary)!important
}

.uk-dark .dark\:uk-text-primary-60,.uk-dark.dark\:uk-text-primary-60 {
    color: var(--color-primary-60)!important
}

.uk-dark .dark\:uk-text-primary-70,.uk-dark.dark\:uk-text-primary-70 {
    color: var(--color-primary-70)!important
}

.uk-dark .dark\:uk-text-primary-80,.uk-dark.dark\:uk-text-primary-80 {
    color: var(--color-primary-80)!important
}

.uk-dark .dark\:uk-text-primary-90,.uk-dark.dark\:uk-text-primary-90 {
    color: var(--color-primary-90)!important
}

.uk-dark .dark\:uk-text-primary-100,.uk-dark.dark\:uk-text-primary-100 {
    color: var(--color-primary-100)!important
}

.uk-dark .dark\:uk-background-primary-10,.uk-dark.dark\:uk-background-primary-10 {
    background-color: var(--color-primary-10)!important
}

.uk-dark .dark\:uk-background-primary-20,.uk-dark.dark\:uk-background-primary-20 {
    background-color: var(--color-primary-20)!important
}

.uk-dark .dark\:uk-background-primary-30,.uk-dark.dark\:uk-background-primary-30 {
    background-color: var(--color-primary-30)!important
}

.uk-dark .dark\:uk-background-primary-40,.uk-dark.dark\:uk-background-primary-40 {
    background-color: var(--color-primary-40)!important
}

.uk-dark .dark\:uk-background-primary,.uk-dark.dark\:uk-background-primary {
    background-color: var(--color-primary)!important
}

.uk-dark .dark\:uk-background-primary-60,.uk-dark.dark\:uk-background-primary-60 {
    background-color: var(--color-primary-60)!important
}

.uk-dark .dark\:uk-background-primary-70,.uk-dark.dark\:uk-background-primary-70 {
    background-color: var(--color-primary-70)!important
}

.uk-dark .dark\:uk-background-primary-80,.uk-dark.dark\:uk-background-primary-80 {
    background-color: var(--color-primary-80)!important
}

.uk-dark .dark\:uk-background-primary-90,.uk-dark.dark\:uk-background-primary-90 {
    background-color: var(--color-primary-90)!important
}

.uk-dark .dark\:uk-background-primary-100,.uk-dark.dark\:uk-background-primary-100 {
    background-color: var(--color-primary-100)!important
}

.uk-dark .dark\:uk-border-primary-10,.uk-dark.dark\:uk-border-primary-10 {
    border-color: var(--color-primary-10)!important
}

.uk-dark .dark\:uk-border-primary-20,.uk-dark.dark\:uk-border-primary-20 {
    border-color: var(--color-primary-20)!important
}

.uk-dark .dark\:uk-border-primary-30,.uk-dark.dark\:uk-border-primary-30 {
    border-color: var(--color-primary-30)!important
}

.uk-dark .dark\:uk-border-primary-40,.uk-dark.dark\:uk-border-primary-40 {
    border-color: var(--color-primary-40)!important
}

.uk-dark .dark\:uk-border-primary,.uk-dark.dark\:uk-border-primary {
    border-color: var(--color-primary)!important
}

.uk-dark .dark\:uk-border-primary-60,.uk-dark.dark\:uk-border-primary-60 {
    border-color: var(--color-primary-60)!important
}

.uk-dark .dark\:uk-border-primary-70,.uk-dark.dark\:uk-border-primary-70 {
    border-color: var(--color-primary-70)!important
}

.uk-dark .dark\:uk-border-primary-80,.uk-dark.dark\:uk-border-primary-80 {
    border-color: var(--color-primary-80)!important
}

.uk-dark .dark\:uk-border-primary-90,.uk-dark.dark\:uk-border-primary-90 {
    border-color: var(--color-primary-90)!important
}

.uk-dark .dark\:uk-border-primary-100,.uk-dark.dark\:uk-border-primary-100 {
    border-color: var(--color-primary-100)!important
}

.uk-dark .dark\:hover\:uk-text-primary-10:hover,.uk-dark.dark\:hover\:uk-text-primary-10:hover {
    color: var(--color-primary-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-primary-20:hover,.uk-dark.dark\:hover\:uk-text-primary-20:hover {
    color: var(--color-primary-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-primary-30:hover,.uk-dark.dark\:hover\:uk-text-primary-30:hover {
    color: var(--color-primary-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-primary-40:hover,.uk-dark.dark\:hover\:uk-text-primary-40:hover {
    color: var(--color-primary-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-primary:hover,.uk-dark.dark\:hover\:uk-text-primary:hover {
    color: var(--color-primary)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-primary-60:hover,.uk-dark.dark\:hover\:uk-text-primary-60:hover {
    color: var(--color-primary-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-primary-70:hover,.uk-dark.dark\:hover\:uk-text-primary-70:hover {
    color: var(--color-primary-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-primary-80:hover,.uk-dark.dark\:hover\:uk-text-primary-80:hover {
    color: var(--color-primary-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-primary-90:hover,.uk-dark.dark\:hover\:uk-text-primary-90:hover {
    color: var(--color-primary-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-primary-100:hover,.uk-dark.dark\:hover\:uk-text-primary-100:hover {
    color: var(--color-primary-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-primary-10:hover,.uk-dark.dark\:hover\:uk-background-primary-10:hover {
    background-color: var(--color-primary-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-primary-20:hover,.uk-dark.dark\:hover\:uk-background-primary-20:hover {
    background-color: var(--color-primary-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-primary-30:hover,.uk-dark.dark\:hover\:uk-background-primary-30:hover {
    background-color: var(--color-primary-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-primary-40:hover,.uk-dark.dark\:hover\:uk-background-primary-40:hover {
    background-color: var(--color-primary-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-primary:hover,.uk-dark.dark\:hover\:uk-background-primary:hover {
    background-color: var(--color-primary)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-primary-60:hover,.uk-dark.dark\:hover\:uk-background-primary-60:hover {
    background-color: var(--color-primary-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-primary-70:hover,.uk-dark.dark\:hover\:uk-background-primary-70:hover {
    background-color: var(--color-primary-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-primary-80:hover,.uk-dark.dark\:hover\:uk-background-primary-80:hover {
    background-color: var(--color-primary-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-primary-90:hover,.uk-dark.dark\:hover\:uk-background-primary-90:hover {
    background-color: var(--color-primary-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-primary-100:hover,.uk-dark.dark\:hover\:uk-background-primary-100:hover {
    background-color: var(--color-primary-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-primary-10:hover,.uk-dark.dark\:hover\:uk-border-primary-10:hover {
    border-color: var(--color-primary-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-primary-20:hover,.uk-dark.dark\:hover\:uk-border-primary-20:hover {
    border-color: var(--color-primary-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-primary-30:hover,.uk-dark.dark\:hover\:uk-border-primary-30:hover {
    border-color: var(--color-primary-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-primary-40:hover,.uk-dark.dark\:hover\:uk-border-primary-40:hover {
    border-color: var(--color-primary-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-primary:hover,.uk-dark.dark\:hover\:uk-border-primary:hover {
    border-color: var(--color-primary)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-primary-60:hover,.uk-dark.dark\:hover\:uk-border-primary-60:hover {
    border-color: var(--color-primary-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-primary-70:hover,.uk-dark.dark\:hover\:uk-border-primary-70:hover {
    border-color: var(--color-primary-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-primary-80:hover,.uk-dark.dark\:hover\:uk-border-primary-80:hover {
    border-color: var(--color-primary-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-primary-90:hover,.uk-dark.dark\:hover\:uk-border-primary-90:hover {
    border-color: var(--color-primary-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-primary-100:hover,.uk-dark.dark\:hover\:uk-border-primary-100:hover {
    border-color: var(--color-primary-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:uk-text-secondary-10,.uk-dark.dark\:uk-text-secondary-10 {
    color: var(--color-secondary-10)!important
}

.uk-dark .dark\:uk-text-secondary-20,.uk-dark.dark\:uk-text-secondary-20 {
    color: var(--color-secondary-20)!important
}

.uk-dark .dark\:uk-text-secondary-30,.uk-dark.dark\:uk-text-secondary-30 {
    color: var(--color-secondary-30)!important
}

.uk-dark .dark\:uk-text-secondary-40,.uk-dark.dark\:uk-text-secondary-40 {
    color: var(--color-secondary-40)!important
}

.uk-dark .dark\:uk-text-secondary,.uk-dark.dark\:uk-text-secondary {
    color: var(--color-secondary)!important
}

.uk-dark .dark\:uk-text-secondary-60,.uk-dark.dark\:uk-text-secondary-60 {
    color: var(--color-secondary-60)!important
}

.uk-dark .dark\:uk-text-secondary-70,.uk-dark.dark\:uk-text-secondary-70 {
    color: var(--color-secondary-70)!important
}

.uk-dark .dark\:uk-text-secondary-80,.uk-dark.dark\:uk-text-secondary-80 {
    color: var(--color-secondary-80)!important
}

.uk-dark .dark\:uk-text-secondary-90,.uk-dark.dark\:uk-text-secondary-90 {
    color: var(--color-secondary-90)!important
}

.uk-dark .dark\:uk-text-secondary-100,.uk-dark.dark\:uk-text-secondary-100 {
    color: var(--color-secondary-100)!important
}

.uk-dark .dark\:uk-background-secondary-10,.uk-dark.dark\:uk-background-secondary-10 {
    background-color: var(--color-secondary-10)!important
}

.uk-dark .dark\:uk-background-secondary-20,.uk-dark.dark\:uk-background-secondary-20 {
    background-color: var(--color-secondary-20)!important
}

.uk-dark .dark\:uk-background-secondary-30,.uk-dark.dark\:uk-background-secondary-30 {
    background-color: var(--color-secondary-30)!important
}

.uk-dark .dark\:uk-background-secondary-40,.uk-dark.dark\:uk-background-secondary-40 {
    background-color: var(--color-secondary-40)!important
}

.uk-dark .dark\:uk-background-secondary,.uk-dark.dark\:uk-background-secondary {
    background-color: var(--color-secondary)!important
}

.uk-dark .dark\:uk-background-secondary-60,.uk-dark.dark\:uk-background-secondary-60 {
    background-color: var(--color-secondary-60)!important
}

.uk-dark .dark\:uk-background-secondary-70,.uk-dark.dark\:uk-background-secondary-70 {
    background-color: var(--color-secondary-70)!important
}

.uk-dark .dark\:uk-background-secondary-80,.uk-dark.dark\:uk-background-secondary-80 {
    background-color: var(--color-secondary-80)!important
}

.uk-dark .dark\:uk-background-secondary-90,.uk-dark.dark\:uk-background-secondary-90 {
    background-color: var(--color-secondary-90)!important
}

.uk-dark .dark\:uk-background-secondary-100,.uk-dark.dark\:uk-background-secondary-100 {
    background-color: var(--color-secondary-100)!important
}

.uk-dark .dark\:uk-border-secondary-10,.uk-dark.dark\:uk-border-secondary-10 {
    border-color: var(--color-secondary-10)!important
}

.uk-dark .dark\:uk-border-secondary-20,.uk-dark.dark\:uk-border-secondary-20 {
    border-color: var(--color-secondary-20)!important
}

.uk-dark .dark\:uk-border-secondary-30,.uk-dark.dark\:uk-border-secondary-30 {
    border-color: var(--color-secondary-30)!important
}

.uk-dark .dark\:uk-border-secondary-40,.uk-dark.dark\:uk-border-secondary-40 {
    border-color: var(--color-secondary-40)!important
}

.uk-dark .dark\:uk-border-secondary,.uk-dark.dark\:uk-border-secondary {
    border-color: var(--color-secondary)!important
}

.uk-dark .dark\:uk-border-secondary-60,.uk-dark.dark\:uk-border-secondary-60 {
    border-color: var(--color-secondary-60)!important
}

.uk-dark .dark\:uk-border-secondary-70,.uk-dark.dark\:uk-border-secondary-70 {
    border-color: var(--color-secondary-70)!important
}

.uk-dark .dark\:uk-border-secondary-80,.uk-dark.dark\:uk-border-secondary-80 {
    border-color: var(--color-secondary-80)!important
}

.uk-dark .dark\:uk-border-secondary-90,.uk-dark.dark\:uk-border-secondary-90 {
    border-color: var(--color-secondary-90)!important
}

.uk-dark .dark\:uk-border-secondary-100,.uk-dark.dark\:uk-border-secondary-100 {
    border-color: var(--color-secondary-100)!important
}

.uk-dark .dark\:hover\:uk-text-secondary-10:hover,.uk-dark.dark\:hover\:uk-text-secondary-10:hover {
    color: var(--color-secondary-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-secondary-20:hover,.uk-dark.dark\:hover\:uk-text-secondary-20:hover {
    color: var(--color-secondary-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-secondary-30:hover,.uk-dark.dark\:hover\:uk-text-secondary-30:hover {
    color: var(--color-secondary-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-secondary-40:hover,.uk-dark.dark\:hover\:uk-text-secondary-40:hover {
    color: var(--color-secondary-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-secondary:hover,.uk-dark.dark\:hover\:uk-text-secondary:hover {
    color: var(--color-secondary)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-secondary-60:hover,.uk-dark.dark\:hover\:uk-text-secondary-60:hover {
    color: var(--color-secondary-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-secondary-70:hover,.uk-dark.dark\:hover\:uk-text-secondary-70:hover {
    color: var(--color-secondary-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-secondary-80:hover,.uk-dark.dark\:hover\:uk-text-secondary-80:hover {
    color: var(--color-secondary-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-secondary-90:hover,.uk-dark.dark\:hover\:uk-text-secondary-90:hover {
    color: var(--color-secondary-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-secondary-100:hover,.uk-dark.dark\:hover\:uk-text-secondary-100:hover {
    color: var(--color-secondary-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-secondary-10:hover,.uk-dark.dark\:hover\:uk-background-secondary-10:hover {
    background-color: var(--color-secondary-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-secondary-20:hover,.uk-dark.dark\:hover\:uk-background-secondary-20:hover {
    background-color: var(--color-secondary-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-secondary-30:hover,.uk-dark.dark\:hover\:uk-background-secondary-30:hover {
    background-color: var(--color-secondary-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-secondary-40:hover,.uk-dark.dark\:hover\:uk-background-secondary-40:hover {
    background-color: var(--color-secondary-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-secondary:hover,.uk-dark.dark\:hover\:uk-background-secondary:hover {
    background-color: var(--color-secondary)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-secondary-60:hover,.uk-dark.dark\:hover\:uk-background-secondary-60:hover {
    background-color: var(--color-secondary-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-secondary-70:hover,.uk-dark.dark\:hover\:uk-background-secondary-70:hover {
    background-color: var(--color-secondary-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-secondary-80:hover,.uk-dark.dark\:hover\:uk-background-secondary-80:hover {
    background-color: var(--color-secondary-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-secondary-90:hover,.uk-dark.dark\:hover\:uk-background-secondary-90:hover {
    background-color: var(--color-secondary-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-secondary-100:hover,.uk-dark.dark\:hover\:uk-background-secondary-100:hover {
    background-color: var(--color-secondary-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-secondary-10:hover,.uk-dark.dark\:hover\:uk-border-secondary-10:hover {
    border-color: var(--color-secondary-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-secondary-20:hover,.uk-dark.dark\:hover\:uk-border-secondary-20:hover {
    border-color: var(--color-secondary-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-secondary-30:hover,.uk-dark.dark\:hover\:uk-border-secondary-30:hover {
    border-color: var(--color-secondary-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-secondary-40:hover,.uk-dark.dark\:hover\:uk-border-secondary-40:hover {
    border-color: var(--color-secondary-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-secondary:hover,.uk-dark.dark\:hover\:uk-border-secondary:hover {
    border-color: var(--color-secondary)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-secondary-60:hover,.uk-dark.dark\:hover\:uk-border-secondary-60:hover {
    border-color: var(--color-secondary-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-secondary-70:hover,.uk-dark.dark\:hover\:uk-border-secondary-70:hover {
    border-color: var(--color-secondary-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-secondary-80:hover,.uk-dark.dark\:hover\:uk-border-secondary-80:hover {
    border-color: var(--color-secondary-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-secondary-90:hover,.uk-dark.dark\:hover\:uk-border-secondary-90:hover {
    border-color: var(--color-secondary-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-secondary-100:hover,.uk-dark.dark\:hover\:uk-border-secondary-100:hover {
    border-color: var(--color-secondary-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:uk-text-tertiary-10,.uk-dark.dark\:uk-text-tertiary-10 {
    color: var(--color-tertiary-10)!important
}

.uk-dark .dark\:uk-text-tertiary-20,.uk-dark.dark\:uk-text-tertiary-20 {
    color: var(--color-tertiary-20)!important
}

.uk-dark .dark\:uk-text-tertiary-30,.uk-dark.dark\:uk-text-tertiary-30 {
    color: var(--color-tertiary-30)!important
}

.uk-dark .dark\:uk-text-tertiary-40,.uk-dark.dark\:uk-text-tertiary-40 {
    color: var(--color-tertiary-40)!important
}

.uk-dark .dark\:uk-text-tertiary,.uk-dark.dark\:uk-text-tertiary {
    color: var(--color-tertiary)!important
}

.uk-dark .dark\:uk-text-tertiary-60,.uk-dark.dark\:uk-text-tertiary-60 {
    color: var(--color-tertiary-60)!important
}

.uk-dark .dark\:uk-text-tertiary-70,.uk-dark.dark\:uk-text-tertiary-70 {
    color: var(--color-tertiary-70)!important
}

.uk-dark .dark\:uk-text-tertiary-80,.uk-dark.dark\:uk-text-tertiary-80 {
    color: var(--color-tertiary-80)!important
}

.uk-dark .dark\:uk-text-tertiary-90,.uk-dark.dark\:uk-text-tertiary-90 {
    color: var(--color-tertiary-90)!important
}

.uk-dark .dark\:uk-text-tertiary-100,.uk-dark.dark\:uk-text-tertiary-100 {
    color: var(--color-tertiary-100)!important
}

.uk-dark .dark\:uk-background-tertiary-10,.uk-dark.dark\:uk-background-tertiary-10 {
    background-color: var(--color-tertiary-10)!important
}

.uk-dark .dark\:uk-background-tertiary-20,.uk-dark.dark\:uk-background-tertiary-20 {
    background-color: var(--color-tertiary-20)!important
}

.uk-dark .dark\:uk-background-tertiary-30,.uk-dark.dark\:uk-background-tertiary-30 {
    background-color: var(--color-tertiary-30)!important
}

.uk-dark .dark\:uk-background-tertiary-40,.uk-dark.dark\:uk-background-tertiary-40 {
    background-color: var(--color-tertiary-40)!important
}

.uk-dark .dark\:uk-background-tertiary,.uk-dark.dark\:uk-background-tertiary {
    background-color: var(--color-tertiary)!important
}

.uk-dark .dark\:uk-background-tertiary-60,.uk-dark.dark\:uk-background-tertiary-60 {
    background-color: var(--color-tertiary-60)!important
}

.uk-dark .dark\:uk-background-tertiary-70,.uk-dark.dark\:uk-background-tertiary-70 {
    background-color: var(--color-tertiary-70)!important
}

.uk-dark .dark\:uk-background-tertiary-80,.uk-dark.dark\:uk-background-tertiary-80 {
    background-color: var(--color-tertiary-80)!important
}

.uk-dark .dark\:uk-background-tertiary-90,.uk-dark.dark\:uk-background-tertiary-90 {
    background-color: var(--color-tertiary-90)!important
}

.uk-dark .dark\:uk-background-tertiary-100,.uk-dark.dark\:uk-background-tertiary-100 {
    background-color: var(--color-tertiary-100)!important
}

.uk-dark .dark\:uk-border-tertiary-10,.uk-dark.dark\:uk-border-tertiary-10 {
    border-color: var(--color-tertiary-10)!important
}

.uk-dark .dark\:uk-border-tertiary-20,.uk-dark.dark\:uk-border-tertiary-20 {
    border-color: var(--color-tertiary-20)!important
}

.uk-dark .dark\:uk-border-tertiary-30,.uk-dark.dark\:uk-border-tertiary-30 {
    border-color: var(--color-tertiary-30)!important
}

.uk-dark .dark\:uk-border-tertiary-40,.uk-dark.dark\:uk-border-tertiary-40 {
    border-color: var(--color-tertiary-40)!important
}

.uk-dark .dark\:uk-border-tertiary,.uk-dark.dark\:uk-border-tertiary {
    border-color: var(--color-tertiary)!important
}

.uk-dark .dark\:uk-border-tertiary-60,.uk-dark.dark\:uk-border-tertiary-60 {
    border-color: var(--color-tertiary-60)!important
}

.uk-dark .dark\:uk-border-tertiary-70,.uk-dark.dark\:uk-border-tertiary-70 {
    border-color: var(--color-tertiary-70)!important
}

.uk-dark .dark\:uk-border-tertiary-80,.uk-dark.dark\:uk-border-tertiary-80 {
    border-color: var(--color-tertiary-80)!important
}

.uk-dark .dark\:uk-border-tertiary-90,.uk-dark.dark\:uk-border-tertiary-90 {
    border-color: var(--color-tertiary-90)!important
}

.uk-dark .dark\:uk-border-tertiary-100,.uk-dark.dark\:uk-border-tertiary-100 {
    border-color: var(--color-tertiary-100)!important
}

.uk-dark .dark\:hover\:uk-text-tertiary-10:hover,.uk-dark.dark\:hover\:uk-text-tertiary-10:hover {
    color: var(--color-tertiary-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-tertiary-20:hover,.uk-dark.dark\:hover\:uk-text-tertiary-20:hover {
    color: var(--color-tertiary-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-tertiary-30:hover,.uk-dark.dark\:hover\:uk-text-tertiary-30:hover {
    color: var(--color-tertiary-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-tertiary-40:hover,.uk-dark.dark\:hover\:uk-text-tertiary-40:hover {
    color: var(--color-tertiary-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-tertiary:hover,.uk-dark.dark\:hover\:uk-text-tertiary:hover {
    color: var(--color-tertiary)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-tertiary-60:hover,.uk-dark.dark\:hover\:uk-text-tertiary-60:hover {
    color: var(--color-tertiary-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-tertiary-70:hover,.uk-dark.dark\:hover\:uk-text-tertiary-70:hover {
    color: var(--color-tertiary-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-tertiary-80:hover,.uk-dark.dark\:hover\:uk-text-tertiary-80:hover {
    color: var(--color-tertiary-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-tertiary-90:hover,.uk-dark.dark\:hover\:uk-text-tertiary-90:hover {
    color: var(--color-tertiary-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-tertiary-100:hover,.uk-dark.dark\:hover\:uk-text-tertiary-100:hover {
    color: var(--color-tertiary-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-tertiary-10:hover,.uk-dark.dark\:hover\:uk-background-tertiary-10:hover {
    background-color: var(--color-tertiary-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-tertiary-20:hover,.uk-dark.dark\:hover\:uk-background-tertiary-20:hover {
    background-color: var(--color-tertiary-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-tertiary-30:hover,.uk-dark.dark\:hover\:uk-background-tertiary-30:hover {
    background-color: var(--color-tertiary-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-tertiary-40:hover,.uk-dark.dark\:hover\:uk-background-tertiary-40:hover {
    background-color: var(--color-tertiary-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-tertiary:hover,.uk-dark.dark\:hover\:uk-background-tertiary:hover {
    background-color: var(--color-tertiary)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-tertiary-60:hover,.uk-dark.dark\:hover\:uk-background-tertiary-60:hover {
    background-color: var(--color-tertiary-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-tertiary-70:hover,.uk-dark.dark\:hover\:uk-background-tertiary-70:hover {
    background-color: var(--color-tertiary-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-tertiary-80:hover,.uk-dark.dark\:hover\:uk-background-tertiary-80:hover {
    background-color: var(--color-tertiary-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-tertiary-90:hover,.uk-dark.dark\:hover\:uk-background-tertiary-90:hover {
    background-color: var(--color-tertiary-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-tertiary-100:hover,.uk-dark.dark\:hover\:uk-background-tertiary-100:hover {
    background-color: var(--color-tertiary-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-tertiary-10:hover,.uk-dark.dark\:hover\:uk-border-tertiary-10:hover {
    border-color: var(--color-tertiary-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-tertiary-20:hover,.uk-dark.dark\:hover\:uk-border-tertiary-20:hover {
    border-color: var(--color-tertiary-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-tertiary-30:hover,.uk-dark.dark\:hover\:uk-border-tertiary-30:hover {
    border-color: var(--color-tertiary-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-tertiary-40:hover,.uk-dark.dark\:hover\:uk-border-tertiary-40:hover {
    border-color: var(--color-tertiary-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-tertiary:hover,.uk-dark.dark\:hover\:uk-border-tertiary:hover {
    border-color: var(--color-tertiary)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-tertiary-60:hover,.uk-dark.dark\:hover\:uk-border-tertiary-60:hover {
    border-color: var(--color-tertiary-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-tertiary-70:hover,.uk-dark.dark\:hover\:uk-border-tertiary-70:hover {
    border-color: var(--color-tertiary-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-tertiary-80:hover,.uk-dark.dark\:hover\:uk-border-tertiary-80:hover {
    border-color: var(--color-tertiary-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-tertiary-90:hover,.uk-dark.dark\:hover\:uk-border-tertiary-90:hover {
    border-color: var(--color-tertiary-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-tertiary-100:hover,.uk-dark.dark\:hover\:uk-border-tertiary-100:hover {
    border-color: var(--color-tertiary-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:uk-text-quaternary-10,.uk-dark.dark\:uk-text-quaternary-10 {
    color: var(--color-quaternary-10)!important
}

.uk-dark .dark\:uk-text-quaternary-20,.uk-dark.dark\:uk-text-quaternary-20 {
    color: var(--color-quaternary-20)!important
}

.uk-dark .dark\:uk-text-quaternary-30,.uk-dark.dark\:uk-text-quaternary-30 {
    color: var(--color-quaternary-30)!important
}

.uk-dark .dark\:uk-text-quaternary-40,.uk-dark.dark\:uk-text-quaternary-40 {
    color: var(--color-quaternary-40)!important
}

.uk-dark .dark\:uk-text-quaternary,.uk-dark.dark\:uk-text-quaternary {
    color: var(--color-quaternary)!important
}

.uk-dark .dark\:uk-text-quaternary-60,.uk-dark.dark\:uk-text-quaternary-60 {
    color: var(--color-quaternary-60)!important
}

.uk-dark .dark\:uk-text-quaternary-70,.uk-dark.dark\:uk-text-quaternary-70 {
    color: var(--color-quaternary-70)!important
}

.uk-dark .dark\:uk-text-quaternary-80,.uk-dark.dark\:uk-text-quaternary-80 {
    color: var(--color-quaternary-80)!important
}

.uk-dark .dark\:uk-text-quaternary-90,.uk-dark.dark\:uk-text-quaternary-90 {
    color: var(--color-quaternary-90)!important
}

.uk-dark .dark\:uk-text-quaternary-100,.uk-dark.dark\:uk-text-quaternary-100 {
    color: var(--color-quaternary-100)!important
}

.uk-dark .dark\:uk-background-quaternary-10,.uk-dark.dark\:uk-background-quaternary-10 {
    background-color: var(--color-quaternary-10)!important
}

.uk-dark .dark\:uk-background-quaternary-20,.uk-dark.dark\:uk-background-quaternary-20 {
    background-color: var(--color-quaternary-20)!important
}

.uk-dark .dark\:uk-background-quaternary-30,.uk-dark.dark\:uk-background-quaternary-30 {
    background-color: var(--color-quaternary-30)!important
}

.uk-dark .dark\:uk-background-quaternary-40,.uk-dark.dark\:uk-background-quaternary-40 {
    background-color: var(--color-quaternary-40)!important
}

.uk-dark .dark\:uk-background-quaternary,.uk-dark.dark\:uk-background-quaternary {
    background-color: var(--color-quaternary)!important
}

.uk-dark .dark\:uk-background-quaternary-60,.uk-dark.dark\:uk-background-quaternary-60 {
    background-color: var(--color-quaternary-60)!important
}

.uk-dark .dark\:uk-background-quaternary-70,.uk-dark.dark\:uk-background-quaternary-70 {
    background-color: var(--color-quaternary-70)!important
}

.uk-dark .dark\:uk-background-quaternary-80,.uk-dark.dark\:uk-background-quaternary-80 {
    background-color: var(--color-quaternary-80)!important
}

.uk-dark .dark\:uk-background-quaternary-90,.uk-dark.dark\:uk-background-quaternary-90 {
    background-color: var(--color-quaternary-90)!important
}

.uk-dark .dark\:uk-background-quaternary-100,.uk-dark.dark\:uk-background-quaternary-100 {
    background-color: var(--color-quaternary-100)!important
}

.uk-dark .dark\:uk-border-quaternary-10,.uk-dark.dark\:uk-border-quaternary-10 {
    border-color: var(--color-quaternary-10)!important
}

.uk-dark .dark\:uk-border-quaternary-20,.uk-dark.dark\:uk-border-quaternary-20 {
    border-color: var(--color-quaternary-20)!important
}

.uk-dark .dark\:uk-border-quaternary-30,.uk-dark.dark\:uk-border-quaternary-30 {
    border-color: var(--color-quaternary-30)!important
}

.uk-dark .dark\:uk-border-quaternary-40,.uk-dark.dark\:uk-border-quaternary-40 {
    border-color: var(--color-quaternary-40)!important
}

.uk-dark .dark\:uk-border-quaternary,.uk-dark.dark\:uk-border-quaternary {
    border-color: var(--color-quaternary)!important
}

.uk-dark .dark\:uk-border-quaternary-60,.uk-dark.dark\:uk-border-quaternary-60 {
    border-color: var(--color-quaternary-60)!important
}

.uk-dark .dark\:uk-border-quaternary-70,.uk-dark.dark\:uk-border-quaternary-70 {
    border-color: var(--color-quaternary-70)!important
}

.uk-dark .dark\:uk-border-quaternary-80,.uk-dark.dark\:uk-border-quaternary-80 {
    border-color: var(--color-quaternary-80)!important
}

.uk-dark .dark\:uk-border-quaternary-90,.uk-dark.dark\:uk-border-quaternary-90 {
    border-color: var(--color-quaternary-90)!important
}

.uk-dark .dark\:uk-border-quaternary-100,.uk-dark.dark\:uk-border-quaternary-100 {
    border-color: var(--color-quaternary-100)!important
}

.uk-dark .dark\:hover\:uk-text-quaternary-10:hover,.uk-dark.dark\:hover\:uk-text-quaternary-10:hover {
    color: var(--color-quaternary-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-quaternary-20:hover,.uk-dark.dark\:hover\:uk-text-quaternary-20:hover {
    color: var(--color-quaternary-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-quaternary-30:hover,.uk-dark.dark\:hover\:uk-text-quaternary-30:hover {
    color: var(--color-quaternary-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-quaternary-40:hover,.uk-dark.dark\:hover\:uk-text-quaternary-40:hover {
    color: var(--color-quaternary-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-quaternary:hover,.uk-dark.dark\:hover\:uk-text-quaternary:hover {
    color: var(--color-quaternary)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-quaternary-60:hover,.uk-dark.dark\:hover\:uk-text-quaternary-60:hover {
    color: var(--color-quaternary-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-quaternary-70:hover,.uk-dark.dark\:hover\:uk-text-quaternary-70:hover {
    color: var(--color-quaternary-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-quaternary-80:hover,.uk-dark.dark\:hover\:uk-text-quaternary-80:hover {
    color: var(--color-quaternary-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-quaternary-90:hover,.uk-dark.dark\:hover\:uk-text-quaternary-90:hover {
    color: var(--color-quaternary-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-quaternary-100:hover,.uk-dark.dark\:hover\:uk-text-quaternary-100:hover {
    color: var(--color-quaternary-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-quaternary-10:hover,.uk-dark.dark\:hover\:uk-background-quaternary-10:hover {
    background-color: var(--color-quaternary-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-quaternary-20:hover,.uk-dark.dark\:hover\:uk-background-quaternary-20:hover {
    background-color: var(--color-quaternary-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-quaternary-30:hover,.uk-dark.dark\:hover\:uk-background-quaternary-30:hover {
    background-color: var(--color-quaternary-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-quaternary-40:hover,.uk-dark.dark\:hover\:uk-background-quaternary-40:hover {
    background-color: var(--color-quaternary-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-quaternary:hover,.uk-dark.dark\:hover\:uk-background-quaternary:hover {
    background-color: var(--color-quaternary)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-quaternary-60:hover,.uk-dark.dark\:hover\:uk-background-quaternary-60:hover {
    background-color: var(--color-quaternary-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-quaternary-70:hover,.uk-dark.dark\:hover\:uk-background-quaternary-70:hover {
    background-color: var(--color-quaternary-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-quaternary-80:hover,.uk-dark.dark\:hover\:uk-background-quaternary-80:hover {
    background-color: var(--color-quaternary-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-quaternary-90:hover,.uk-dark.dark\:hover\:uk-background-quaternary-90:hover {
    background-color: var(--color-quaternary-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-quaternary-100:hover,.uk-dark.dark\:hover\:uk-background-quaternary-100:hover {
    background-color: var(--color-quaternary-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-quaternary-10:hover,.uk-dark.dark\:hover\:uk-border-quaternary-10:hover {
    border-color: var(--color-quaternary-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-quaternary-20:hover,.uk-dark.dark\:hover\:uk-border-quaternary-20:hover {
    border-color: var(--color-quaternary-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-quaternary-30:hover,.uk-dark.dark\:hover\:uk-border-quaternary-30:hover {
    border-color: var(--color-quaternary-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-quaternary-40:hover,.uk-dark.dark\:hover\:uk-border-quaternary-40:hover {
    border-color: var(--color-quaternary-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-quaternary:hover,.uk-dark.dark\:hover\:uk-border-quaternary:hover {
    border-color: var(--color-quaternary)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-quaternary-60:hover,.uk-dark.dark\:hover\:uk-border-quaternary-60:hover {
    border-color: var(--color-quaternary-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-quaternary-70:hover,.uk-dark.dark\:hover\:uk-border-quaternary-70:hover {
    border-color: var(--color-quaternary-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-quaternary-80:hover,.uk-dark.dark\:hover\:uk-border-quaternary-80:hover {
    border-color: var(--color-quaternary-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-quaternary-90:hover,.uk-dark.dark\:hover\:uk-border-quaternary-90:hover {
    border-color: var(--color-quaternary-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-quaternary-100:hover,.uk-dark.dark\:hover\:uk-border-quaternary-100:hover {
    border-color: var(--color-quaternary-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:uk-text-info-10,.uk-dark.dark\:uk-text-info-10 {
    color: var(--color-info-10)!important
}

.uk-dark .dark\:uk-text-info-20,.uk-dark.dark\:uk-text-info-20 {
    color: var(--color-info-20)!important
}

.uk-dark .dark\:uk-text-info-30,.uk-dark.dark\:uk-text-info-30 {
    color: var(--color-info-30)!important
}

.uk-dark .dark\:uk-text-info-40,.uk-dark.dark\:uk-text-info-40 {
    color: var(--color-info-40)!important
}

.uk-dark .dark\:uk-text-info,.uk-dark.dark\:uk-text-info {
    color: var(--color-info)!important
}

.uk-dark .dark\:uk-text-info-60,.uk-dark.dark\:uk-text-info-60 {
    color: var(--color-info-60)!important
}

.uk-dark .dark\:uk-text-info-70,.uk-dark.dark\:uk-text-info-70 {
    color: var(--color-info-70)!important
}

.uk-dark .dark\:uk-text-info-80,.uk-dark.dark\:uk-text-info-80 {
    color: var(--color-info-80)!important
}

.uk-dark .dark\:uk-text-info-90,.uk-dark.dark\:uk-text-info-90 {
    color: var(--color-info-90)!important
}

.uk-dark .dark\:uk-text-info-100,.uk-dark.dark\:uk-text-info-100 {
    color: var(--color-info-100)!important
}

.uk-dark .dark\:uk-background-info-10,.uk-dark.dark\:uk-background-info-10 {
    background-color: var(--color-info-10)!important
}

.uk-dark .dark\:uk-background-info-20,.uk-dark.dark\:uk-background-info-20 {
    background-color: var(--color-info-20)!important
}

.uk-dark .dark\:uk-background-info-30,.uk-dark.dark\:uk-background-info-30 {
    background-color: var(--color-info-30)!important
}

.uk-dark .dark\:uk-background-info-40,.uk-dark.dark\:uk-background-info-40 {
    background-color: var(--color-info-40)!important
}

.uk-dark .dark\:uk-background-info,.uk-dark.dark\:uk-background-info {
    background-color: var(--color-info)!important
}

.uk-dark .dark\:uk-background-info-60,.uk-dark.dark\:uk-background-info-60 {
    background-color: var(--color-info-60)!important
}

.uk-dark .dark\:uk-background-info-70,.uk-dark.dark\:uk-background-info-70 {
    background-color: var(--color-info-70)!important
}

.uk-dark .dark\:uk-background-info-80,.uk-dark.dark\:uk-background-info-80 {
    background-color: var(--color-info-80)!important
}

.uk-dark .dark\:uk-background-info-90,.uk-dark.dark\:uk-background-info-90 {
    background-color: var(--color-info-90)!important
}

.uk-dark .dark\:uk-background-info-100,.uk-dark.dark\:uk-background-info-100 {
    background-color: var(--color-info-100)!important
}

.uk-dark .dark\:uk-border-info-10,.uk-dark.dark\:uk-border-info-10 {
    border-color: var(--color-info-10)!important
}

.uk-dark .dark\:uk-border-info-20,.uk-dark.dark\:uk-border-info-20 {
    border-color: var(--color-info-20)!important
}

.uk-dark .dark\:uk-border-info-30,.uk-dark.dark\:uk-border-info-30 {
    border-color: var(--color-info-30)!important
}

.uk-dark .dark\:uk-border-info-40,.uk-dark.dark\:uk-border-info-40 {
    border-color: var(--color-info-40)!important
}

.uk-dark .dark\:uk-border-info,.uk-dark.dark\:uk-border-info {
    border-color: var(--color-info)!important
}

.uk-dark .dark\:uk-border-info-60,.uk-dark.dark\:uk-border-info-60 {
    border-color: var(--color-info-60)!important
}

.uk-dark .dark\:uk-border-info-70,.uk-dark.dark\:uk-border-info-70 {
    border-color: var(--color-info-70)!important
}

.uk-dark .dark\:uk-border-info-80,.uk-dark.dark\:uk-border-info-80 {
    border-color: var(--color-info-80)!important
}

.uk-dark .dark\:uk-border-info-90,.uk-dark.dark\:uk-border-info-90 {
    border-color: var(--color-info-90)!important
}

.uk-dark .dark\:uk-border-info-100,.uk-dark.dark\:uk-border-info-100 {
    border-color: var(--color-info-100)!important
}

.uk-dark .dark\:hover\:uk-text-info-10:hover,.uk-dark.dark\:hover\:uk-text-info-10:hover {
    color: var(--color-info-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-info-20:hover,.uk-dark.dark\:hover\:uk-text-info-20:hover {
    color: var(--color-info-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-info-30:hover,.uk-dark.dark\:hover\:uk-text-info-30:hover {
    color: var(--color-info-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-info-40:hover,.uk-dark.dark\:hover\:uk-text-info-40:hover {
    color: var(--color-info-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-info:hover,.uk-dark.dark\:hover\:uk-text-info:hover {
    color: var(--color-info)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-info-60:hover,.uk-dark.dark\:hover\:uk-text-info-60:hover {
    color: var(--color-info-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-info-70:hover,.uk-dark.dark\:hover\:uk-text-info-70:hover {
    color: var(--color-info-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-info-80:hover,.uk-dark.dark\:hover\:uk-text-info-80:hover {
    color: var(--color-info-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-info-90:hover,.uk-dark.dark\:hover\:uk-text-info-90:hover {
    color: var(--color-info-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-info-100:hover,.uk-dark.dark\:hover\:uk-text-info-100:hover {
    color: var(--color-info-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-info-10:hover,.uk-dark.dark\:hover\:uk-background-info-10:hover {
    background-color: var(--color-info-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-info-20:hover,.uk-dark.dark\:hover\:uk-background-info-20:hover {
    background-color: var(--color-info-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-info-30:hover,.uk-dark.dark\:hover\:uk-background-info-30:hover {
    background-color: var(--color-info-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-info-40:hover,.uk-dark.dark\:hover\:uk-background-info-40:hover {
    background-color: var(--color-info-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-info:hover,.uk-dark.dark\:hover\:uk-background-info:hover {
    background-color: var(--color-info)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-info-60:hover,.uk-dark.dark\:hover\:uk-background-info-60:hover {
    background-color: var(--color-info-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-info-70:hover,.uk-dark.dark\:hover\:uk-background-info-70:hover {
    background-color: var(--color-info-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-info-80:hover,.uk-dark.dark\:hover\:uk-background-info-80:hover {
    background-color: var(--color-info-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-info-90:hover,.uk-dark.dark\:hover\:uk-background-info-90:hover {
    background-color: var(--color-info-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-info-100:hover,.uk-dark.dark\:hover\:uk-background-info-100:hover {
    background-color: var(--color-info-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-info-10:hover,.uk-dark.dark\:hover\:uk-border-info-10:hover {
    border-color: var(--color-info-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-info-20:hover,.uk-dark.dark\:hover\:uk-border-info-20:hover {
    border-color: var(--color-info-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-info-30:hover,.uk-dark.dark\:hover\:uk-border-info-30:hover {
    border-color: var(--color-info-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-info-40:hover,.uk-dark.dark\:hover\:uk-border-info-40:hover {
    border-color: var(--color-info-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-info:hover,.uk-dark.dark\:hover\:uk-border-info:hover {
    border-color: var(--color-info)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-info-60:hover,.uk-dark.dark\:hover\:uk-border-info-60:hover {
    border-color: var(--color-info-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-info-70:hover,.uk-dark.dark\:hover\:uk-border-info-70:hover {
    border-color: var(--color-info-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-info-80:hover,.uk-dark.dark\:hover\:uk-border-info-80:hover {
    border-color: var(--color-info-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-info-90:hover,.uk-dark.dark\:hover\:uk-border-info-90:hover {
    border-color: var(--color-info-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-info-100:hover,.uk-dark.dark\:hover\:uk-border-info-100:hover {
    border-color: var(--color-info-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:uk-text-success-10,.uk-dark.dark\:uk-text-success-10 {
    color: var(--color-success-10)!important
}

.uk-dark .dark\:uk-text-success-20,.uk-dark.dark\:uk-text-success-20 {
    color: var(--color-success-20)!important
}

.uk-dark .dark\:uk-text-success-30,.uk-dark.dark\:uk-text-success-30 {
    color: var(--color-success-30)!important
}

.uk-dark .dark\:uk-text-success-40,.uk-dark.dark\:uk-text-success-40 {
    color: var(--color-success-40)!important
}

.uk-dark .dark\:uk-text-success,.uk-dark.dark\:uk-text-success {
    color: var(--color-success)!important
}

.uk-dark .dark\:uk-text-success-60,.uk-dark.dark\:uk-text-success-60 {
    color: var(--color-success-60)!important
}

.uk-dark .dark\:uk-text-success-70,.uk-dark.dark\:uk-text-success-70 {
    color: var(--color-success-70)!important
}

.uk-dark .dark\:uk-text-success-80,.uk-dark.dark\:uk-text-success-80 {
    color: var(--color-success-80)!important
}

.uk-dark .dark\:uk-text-success-90,.uk-dark.dark\:uk-text-success-90 {
    color: var(--color-success-90)!important
}

.uk-dark .dark\:uk-text-success-100,.uk-dark.dark\:uk-text-success-100 {
    color: var(--color-success-100)!important
}

.uk-dark .dark\:uk-background-success-10,.uk-dark.dark\:uk-background-success-10 {
    background-color: var(--color-success-10)!important
}

.uk-dark .dark\:uk-background-success-20,.uk-dark.dark\:uk-background-success-20 {
    background-color: var(--color-success-20)!important
}

.uk-dark .dark\:uk-background-success-30,.uk-dark.dark\:uk-background-success-30 {
    background-color: var(--color-success-30)!important
}

.uk-dark .dark\:uk-background-success-40,.uk-dark.dark\:uk-background-success-40 {
    background-color: var(--color-success-40)!important
}

.uk-dark .dark\:uk-background-success,.uk-dark.dark\:uk-background-success {
    background-color: var(--color-success)!important
}

.uk-dark .dark\:uk-background-success-60,.uk-dark.dark\:uk-background-success-60 {
    background-color: var(--color-success-60)!important
}

.uk-dark .dark\:uk-background-success-70,.uk-dark.dark\:uk-background-success-70 {
    background-color: var(--color-success-70)!important
}

.uk-dark .dark\:uk-background-success-80,.uk-dark.dark\:uk-background-success-80 {
    background-color: var(--color-success-80)!important
}

.uk-dark .dark\:uk-background-success-90,.uk-dark.dark\:uk-background-success-90 {
    background-color: var(--color-success-90)!important
}

.uk-dark .dark\:uk-background-success-100,.uk-dark.dark\:uk-background-success-100 {
    background-color: var(--color-success-100)!important
}

.uk-dark .dark\:uk-border-success-10,.uk-dark.dark\:uk-border-success-10 {
    border-color: var(--color-success-10)!important
}

.uk-dark .dark\:uk-border-success-20,.uk-dark.dark\:uk-border-success-20 {
    border-color: var(--color-success-20)!important
}

.uk-dark .dark\:uk-border-success-30,.uk-dark.dark\:uk-border-success-30 {
    border-color: var(--color-success-30)!important
}

.uk-dark .dark\:uk-border-success-40,.uk-dark.dark\:uk-border-success-40 {
    border-color: var(--color-success-40)!important
}

.uk-dark .dark\:uk-border-success,.uk-dark.dark\:uk-border-success {
    border-color: var(--color-success)!important
}

.uk-dark .dark\:uk-border-success-60,.uk-dark.dark\:uk-border-success-60 {
    border-color: var(--color-success-60)!important
}

.uk-dark .dark\:uk-border-success-70,.uk-dark.dark\:uk-border-success-70 {
    border-color: var(--color-success-70)!important
}

.uk-dark .dark\:uk-border-success-80,.uk-dark.dark\:uk-border-success-80 {
    border-color: var(--color-success-80)!important
}

.uk-dark .dark\:uk-border-success-90,.uk-dark.dark\:uk-border-success-90 {
    border-color: var(--color-success-90)!important
}

.uk-dark .dark\:uk-border-success-100,.uk-dark.dark\:uk-border-success-100 {
    border-color: var(--color-success-100)!important
}

.uk-dark .dark\:hover\:uk-text-success-10:hover,.uk-dark.dark\:hover\:uk-text-success-10:hover {
    color: var(--color-success-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-success-20:hover,.uk-dark.dark\:hover\:uk-text-success-20:hover {
    color: var(--color-success-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-success-30:hover,.uk-dark.dark\:hover\:uk-text-success-30:hover {
    color: var(--color-success-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-success-40:hover,.uk-dark.dark\:hover\:uk-text-success-40:hover {
    color: var(--color-success-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-success:hover,.uk-dark.dark\:hover\:uk-text-success:hover {
    color: var(--color-success)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-success-60:hover,.uk-dark.dark\:hover\:uk-text-success-60:hover {
    color: var(--color-success-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-success-70:hover,.uk-dark.dark\:hover\:uk-text-success-70:hover {
    color: var(--color-success-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-success-80:hover,.uk-dark.dark\:hover\:uk-text-success-80:hover {
    color: var(--color-success-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-success-90:hover,.uk-dark.dark\:hover\:uk-text-success-90:hover {
    color: var(--color-success-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-success-100:hover,.uk-dark.dark\:hover\:uk-text-success-100:hover {
    color: var(--color-success-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-success-10:hover,.uk-dark.dark\:hover\:uk-background-success-10:hover {
    background-color: var(--color-success-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-success-20:hover,.uk-dark.dark\:hover\:uk-background-success-20:hover {
    background-color: var(--color-success-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-success-30:hover,.uk-dark.dark\:hover\:uk-background-success-30:hover {
    background-color: var(--color-success-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-success-40:hover,.uk-dark.dark\:hover\:uk-background-success-40:hover {
    background-color: var(--color-success-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-success:hover,.uk-dark.dark\:hover\:uk-background-success:hover {
    background-color: var(--color-success)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-success-60:hover,.uk-dark.dark\:hover\:uk-background-success-60:hover {
    background-color: var(--color-success-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-success-70:hover,.uk-dark.dark\:hover\:uk-background-success-70:hover {
    background-color: var(--color-success-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-success-80:hover,.uk-dark.dark\:hover\:uk-background-success-80:hover {
    background-color: var(--color-success-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-success-90:hover,.uk-dark.dark\:hover\:uk-background-success-90:hover {
    background-color: var(--color-success-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-success-100:hover,.uk-dark.dark\:hover\:uk-background-success-100:hover {
    background-color: var(--color-success-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-success-10:hover,.uk-dark.dark\:hover\:uk-border-success-10:hover {
    border-color: var(--color-success-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-success-20:hover,.uk-dark.dark\:hover\:uk-border-success-20:hover {
    border-color: var(--color-success-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-success-30:hover,.uk-dark.dark\:hover\:uk-border-success-30:hover {
    border-color: var(--color-success-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-success-40:hover,.uk-dark.dark\:hover\:uk-border-success-40:hover {
    border-color: var(--color-success-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-success:hover,.uk-dark.dark\:hover\:uk-border-success:hover {
    border-color: var(--color-success)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-success-60:hover,.uk-dark.dark\:hover\:uk-border-success-60:hover {
    border-color: var(--color-success-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-success-70:hover,.uk-dark.dark\:hover\:uk-border-success-70:hover {
    border-color: var(--color-success-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-success-80:hover,.uk-dark.dark\:hover\:uk-border-success-80:hover {
    border-color: var(--color-success-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-success-90:hover,.uk-dark.dark\:hover\:uk-border-success-90:hover {
    border-color: var(--color-success-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-success-100:hover,.uk-dark.dark\:hover\:uk-border-success-100:hover {
    border-color: var(--color-success-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:uk-text-warning-10,.uk-dark.dark\:uk-text-warning-10 {
    color: var(--color-warning-10)!important
}

.uk-dark .dark\:uk-text-warning-20,.uk-dark.dark\:uk-text-warning-20 {
    color: var(--color-warning-20)!important
}

.uk-dark .dark\:uk-text-warning-30,.uk-dark.dark\:uk-text-warning-30 {
    color: var(--color-warning-30)!important
}

.uk-dark .dark\:uk-text-warning-40,.uk-dark.dark\:uk-text-warning-40 {
    color: var(--color-warning-40)!important
}

.uk-dark .dark\:uk-text-warning,.uk-dark.dark\:uk-text-warning {
    color: var(--color-warning)!important
}

.uk-dark .dark\:uk-text-warning-60,.uk-dark.dark\:uk-text-warning-60 {
    color: var(--color-warning-60)!important
}

.uk-dark .dark\:uk-text-warning-70,.uk-dark.dark\:uk-text-warning-70 {
    color: var(--color-warning-70)!important
}

.uk-dark .dark\:uk-text-warning-80,.uk-dark.dark\:uk-text-warning-80 {
    color: var(--color-warning-80)!important
}

.uk-dark .dark\:uk-text-warning-90,.uk-dark.dark\:uk-text-warning-90 {
    color: var(--color-warning-90)!important
}

.uk-dark .dark\:uk-text-warning-100,.uk-dark.dark\:uk-text-warning-100 {
    color: var(--color-warning-100)!important
}

.uk-dark .dark\:uk-background-warning-10,.uk-dark.dark\:uk-background-warning-10 {
    background-color: var(--color-warning-10)!important
}

.uk-dark .dark\:uk-background-warning-20,.uk-dark.dark\:uk-background-warning-20 {
    background-color: var(--color-warning-20)!important
}

.uk-dark .dark\:uk-background-warning-30,.uk-dark.dark\:uk-background-warning-30 {
    background-color: var(--color-warning-30)!important
}

.uk-dark .dark\:uk-background-warning-40,.uk-dark.dark\:uk-background-warning-40 {
    background-color: var(--color-warning-40)!important
}

.uk-dark .dark\:uk-background-warning,.uk-dark.dark\:uk-background-warning {
    background-color: var(--color-warning)!important
}

.uk-dark .dark\:uk-background-warning-60,.uk-dark.dark\:uk-background-warning-60 {
    background-color: var(--color-warning-60)!important
}

.uk-dark .dark\:uk-background-warning-70,.uk-dark.dark\:uk-background-warning-70 {
    background-color: var(--color-warning-70)!important
}

.uk-dark .dark\:uk-background-warning-80,.uk-dark.dark\:uk-background-warning-80 {
    background-color: var(--color-warning-80)!important
}

.uk-dark .dark\:uk-background-warning-90,.uk-dark.dark\:uk-background-warning-90 {
    background-color: var(--color-warning-90)!important
}

.uk-dark .dark\:uk-background-warning-100,.uk-dark.dark\:uk-background-warning-100 {
    background-color: var(--color-warning-100)!important
}

.uk-dark .dark\:uk-border-warning-10,.uk-dark.dark\:uk-border-warning-10 {
    border-color: var(--color-warning-10)!important
}

.uk-dark .dark\:uk-border-warning-20,.uk-dark.dark\:uk-border-warning-20 {
    border-color: var(--color-warning-20)!important
}

.uk-dark .dark\:uk-border-warning-30,.uk-dark.dark\:uk-border-warning-30 {
    border-color: var(--color-warning-30)!important
}

.uk-dark .dark\:uk-border-warning-40,.uk-dark.dark\:uk-border-warning-40 {
    border-color: var(--color-warning-40)!important
}

.uk-dark .dark\:uk-border-warning,.uk-dark.dark\:uk-border-warning {
    border-color: var(--color-warning)!important
}

.uk-dark .dark\:uk-border-warning-60,.uk-dark.dark\:uk-border-warning-60 {
    border-color: var(--color-warning-60)!important
}

.uk-dark .dark\:uk-border-warning-70,.uk-dark.dark\:uk-border-warning-70 {
    border-color: var(--color-warning-70)!important
}

.uk-dark .dark\:uk-border-warning-80,.uk-dark.dark\:uk-border-warning-80 {
    border-color: var(--color-warning-80)!important
}

.uk-dark .dark\:uk-border-warning-90,.uk-dark.dark\:uk-border-warning-90 {
    border-color: var(--color-warning-90)!important
}

.uk-dark .dark\:uk-border-warning-100,.uk-dark.dark\:uk-border-warning-100 {
    border-color: var(--color-warning-100)!important
}

.uk-dark .dark\:hover\:uk-text-warning-10:hover,.uk-dark.dark\:hover\:uk-text-warning-10:hover {
    color: var(--color-warning-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-warning-20:hover,.uk-dark.dark\:hover\:uk-text-warning-20:hover {
    color: var(--color-warning-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-warning-30:hover,.uk-dark.dark\:hover\:uk-text-warning-30:hover {
    color: var(--color-warning-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-warning-40:hover,.uk-dark.dark\:hover\:uk-text-warning-40:hover {
    color: var(--color-warning-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-warning:hover,.uk-dark.dark\:hover\:uk-text-warning:hover {
    color: var(--color-warning)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-warning-60:hover,.uk-dark.dark\:hover\:uk-text-warning-60:hover {
    color: var(--color-warning-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-warning-70:hover,.uk-dark.dark\:hover\:uk-text-warning-70:hover {
    color: var(--color-warning-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-warning-80:hover,.uk-dark.dark\:hover\:uk-text-warning-80:hover {
    color: var(--color-warning-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-warning-90:hover,.uk-dark.dark\:hover\:uk-text-warning-90:hover {
    color: var(--color-warning-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-warning-100:hover,.uk-dark.dark\:hover\:uk-text-warning-100:hover {
    color: var(--color-warning-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-warning-10:hover,.uk-dark.dark\:hover\:uk-background-warning-10:hover {
    background-color: var(--color-warning-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-warning-20:hover,.uk-dark.dark\:hover\:uk-background-warning-20:hover {
    background-color: var(--color-warning-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-warning-30:hover,.uk-dark.dark\:hover\:uk-background-warning-30:hover {
    background-color: var(--color-warning-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-warning-40:hover,.uk-dark.dark\:hover\:uk-background-warning-40:hover {
    background-color: var(--color-warning-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-warning:hover,.uk-dark.dark\:hover\:uk-background-warning:hover {
    background-color: var(--color-warning)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-warning-60:hover,.uk-dark.dark\:hover\:uk-background-warning-60:hover {
    background-color: var(--color-warning-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-warning-70:hover,.uk-dark.dark\:hover\:uk-background-warning-70:hover {
    background-color: var(--color-warning-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-warning-80:hover,.uk-dark.dark\:hover\:uk-background-warning-80:hover {
    background-color: var(--color-warning-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-warning-90:hover,.uk-dark.dark\:hover\:uk-background-warning-90:hover {
    background-color: var(--color-warning-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-warning-100:hover,.uk-dark.dark\:hover\:uk-background-warning-100:hover {
    background-color: var(--color-warning-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-warning-10:hover,.uk-dark.dark\:hover\:uk-border-warning-10:hover {
    border-color: var(--color-warning-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-warning-20:hover,.uk-dark.dark\:hover\:uk-border-warning-20:hover {
    border-color: var(--color-warning-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-warning-30:hover,.uk-dark.dark\:hover\:uk-border-warning-30:hover {
    border-color: var(--color-warning-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-warning-40:hover,.uk-dark.dark\:hover\:uk-border-warning-40:hover {
    border-color: var(--color-warning-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-warning:hover,.uk-dark.dark\:hover\:uk-border-warning:hover {
    border-color: var(--color-warning)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-warning-60:hover,.uk-dark.dark\:hover\:uk-border-warning-60:hover {
    border-color: var(--color-warning-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-warning-70:hover,.uk-dark.dark\:hover\:uk-border-warning-70:hover {
    border-color: var(--color-warning-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-warning-80:hover,.uk-dark.dark\:hover\:uk-border-warning-80:hover {
    border-color: var(--color-warning-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-warning-90:hover,.uk-dark.dark\:hover\:uk-border-warning-90:hover {
    border-color: var(--color-warning-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-warning-100:hover,.uk-dark.dark\:hover\:uk-border-warning-100:hover {
    border-color: var(--color-warning-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:uk-text-danger-10,.uk-dark.dark\:uk-text-danger-10 {
    color: var(--color-danger-10)!important
}

.uk-dark .dark\:uk-text-danger-20,.uk-dark.dark\:uk-text-danger-20 {
    color: var(--color-danger-20)!important
}

.uk-dark .dark\:uk-text-danger-30,.uk-dark.dark\:uk-text-danger-30 {
    color: var(--color-danger-30)!important
}

.uk-dark .dark\:uk-text-danger-40,.uk-dark.dark\:uk-text-danger-40 {
    color: var(--color-danger-40)!important
}

.uk-dark .dark\:uk-text-danger,.uk-dark.dark\:uk-text-danger {
    color: var(--color-danger)!important
}

.uk-dark .dark\:uk-text-danger-60,.uk-dark.dark\:uk-text-danger-60 {
    color: var(--color-danger-60)!important
}

.uk-dark .dark\:uk-text-danger-70,.uk-dark.dark\:uk-text-danger-70 {
    color: var(--color-danger-70)!important
}

.uk-dark .dark\:uk-text-danger-80,.uk-dark.dark\:uk-text-danger-80 {
    color: var(--color-danger-80)!important
}

.uk-dark .dark\:uk-text-danger-90,.uk-dark.dark\:uk-text-danger-90 {
    color: var(--color-danger-90)!important
}

.uk-dark .dark\:uk-text-danger-100,.uk-dark.dark\:uk-text-danger-100 {
    color: var(--color-danger-100)!important
}

.uk-dark .dark\:uk-background-danger-10,.uk-dark.dark\:uk-background-danger-10 {
    background-color: var(--color-danger-10)!important
}

.uk-dark .dark\:uk-background-danger-20,.uk-dark.dark\:uk-background-danger-20 {
    background-color: var(--color-danger-20)!important
}

.uk-dark .dark\:uk-background-danger-30,.uk-dark.dark\:uk-background-danger-30 {
    background-color: var(--color-danger-30)!important
}

.uk-dark .dark\:uk-background-danger-40,.uk-dark.dark\:uk-background-danger-40 {
    background-color: var(--color-danger-40)!important
}

.uk-dark .dark\:uk-background-danger,.uk-dark.dark\:uk-background-danger {
    background-color: var(--color-danger)!important
}

.uk-dark .dark\:uk-background-danger-60,.uk-dark.dark\:uk-background-danger-60 {
    background-color: var(--color-danger-60)!important
}

.uk-dark .dark\:uk-background-danger-70,.uk-dark.dark\:uk-background-danger-70 {
    background-color: var(--color-danger-70)!important
}

.uk-dark .dark\:uk-background-danger-80,.uk-dark.dark\:uk-background-danger-80 {
    background-color: var(--color-danger-80)!important
}

.uk-dark .dark\:uk-background-danger-90,.uk-dark.dark\:uk-background-danger-90 {
    background-color: var(--color-danger-90)!important
}

.uk-dark .dark\:uk-background-danger-100,.uk-dark.dark\:uk-background-danger-100 {
    background-color: var(--color-danger-100)!important
}

.uk-dark .dark\:uk-border-danger-10,.uk-dark.dark\:uk-border-danger-10 {
    border-color: var(--color-danger-10)!important
}

.uk-dark .dark\:uk-border-danger-20,.uk-dark.dark\:uk-border-danger-20 {
    border-color: var(--color-danger-20)!important
}

.uk-dark .dark\:uk-border-danger-30,.uk-dark.dark\:uk-border-danger-30 {
    border-color: var(--color-danger-30)!important
}

.uk-dark .dark\:uk-border-danger-40,.uk-dark.dark\:uk-border-danger-40 {
    border-color: var(--color-danger-40)!important
}

.uk-dark .dark\:uk-border-danger,.uk-dark.dark\:uk-border-danger {
    border-color: var(--color-danger)!important
}

.uk-dark .dark\:uk-border-danger-60,.uk-dark.dark\:uk-border-danger-60 {
    border-color: var(--color-danger-60)!important
}

.uk-dark .dark\:uk-border-danger-70,.uk-dark.dark\:uk-border-danger-70 {
    border-color: var(--color-danger-70)!important
}

.uk-dark .dark\:uk-border-danger-80,.uk-dark.dark\:uk-border-danger-80 {
    border-color: var(--color-danger-80)!important
}

.uk-dark .dark\:uk-border-danger-90,.uk-dark.dark\:uk-border-danger-90 {
    border-color: var(--color-danger-90)!important
}

.uk-dark .dark\:uk-border-danger-100,.uk-dark.dark\:uk-border-danger-100 {
    border-color: var(--color-danger-100)!important
}

.uk-dark .dark\:hover\:uk-text-danger-10:hover,.uk-dark.dark\:hover\:uk-text-danger-10:hover {
    color: var(--color-danger-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-danger-20:hover,.uk-dark.dark\:hover\:uk-text-danger-20:hover {
    color: var(--color-danger-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-danger-30:hover,.uk-dark.dark\:hover\:uk-text-danger-30:hover {
    color: var(--color-danger-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-danger-40:hover,.uk-dark.dark\:hover\:uk-text-danger-40:hover {
    color: var(--color-danger-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-danger:hover,.uk-dark.dark\:hover\:uk-text-danger:hover {
    color: var(--color-danger)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-danger-60:hover,.uk-dark.dark\:hover\:uk-text-danger-60:hover {
    color: var(--color-danger-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-danger-70:hover,.uk-dark.dark\:hover\:uk-text-danger-70:hover {
    color: var(--color-danger-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-danger-80:hover,.uk-dark.dark\:hover\:uk-text-danger-80:hover {
    color: var(--color-danger-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-danger-90:hover,.uk-dark.dark\:hover\:uk-text-danger-90:hover {
    color: var(--color-danger-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-danger-100:hover,.uk-dark.dark\:hover\:uk-text-danger-100:hover {
    color: var(--color-danger-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-danger-10:hover,.uk-dark.dark\:hover\:uk-background-danger-10:hover {
    background-color: var(--color-danger-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-danger-20:hover,.uk-dark.dark\:hover\:uk-background-danger-20:hover {
    background-color: var(--color-danger-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-danger-30:hover,.uk-dark.dark\:hover\:uk-background-danger-30:hover {
    background-color: var(--color-danger-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-danger-40:hover,.uk-dark.dark\:hover\:uk-background-danger-40:hover {
    background-color: var(--color-danger-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-danger:hover,.uk-dark.dark\:hover\:uk-background-danger:hover {
    background-color: var(--color-danger)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-danger-60:hover,.uk-dark.dark\:hover\:uk-background-danger-60:hover {
    background-color: var(--color-danger-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-danger-70:hover,.uk-dark.dark\:hover\:uk-background-danger-70:hover {
    background-color: var(--color-danger-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-danger-80:hover,.uk-dark.dark\:hover\:uk-background-danger-80:hover {
    background-color: var(--color-danger-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-danger-90:hover,.uk-dark.dark\:hover\:uk-background-danger-90:hover {
    background-color: var(--color-danger-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-danger-100:hover,.uk-dark.dark\:hover\:uk-background-danger-100:hover {
    background-color: var(--color-danger-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-danger-10:hover,.uk-dark.dark\:hover\:uk-border-danger-10:hover {
    border-color: var(--color-danger-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-danger-20:hover,.uk-dark.dark\:hover\:uk-border-danger-20:hover {
    border-color: var(--color-danger-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-danger-30:hover,.uk-dark.dark\:hover\:uk-border-danger-30:hover {
    border-color: var(--color-danger-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-danger-40:hover,.uk-dark.dark\:hover\:uk-border-danger-40:hover {
    border-color: var(--color-danger-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-danger:hover,.uk-dark.dark\:hover\:uk-border-danger:hover {
    border-color: var(--color-danger)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-danger-60:hover,.uk-dark.dark\:hover\:uk-border-danger-60:hover {
    border-color: var(--color-danger-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-danger-70:hover,.uk-dark.dark\:hover\:uk-border-danger-70:hover {
    border-color: var(--color-danger-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-danger-80:hover,.uk-dark.dark\:hover\:uk-border-danger-80:hover {
    border-color: var(--color-danger-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-danger-90:hover,.uk-dark.dark\:hover\:uk-border-danger-90:hover {
    border-color: var(--color-danger-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-danger-100:hover,.uk-dark.dark\:hover\:uk-border-danger-100:hover {
    border-color: var(--color-danger-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:uk-text-gray-10,.uk-dark.dark\:uk-text-gray-10 {
    color: var(--color-gray-10)!important
}

.uk-dark .dark\:uk-text-gray-20,.uk-dark.dark\:uk-text-gray-20 {
    color: var(--color-gray-20)!important
}

.uk-dark .dark\:uk-text-gray-30,.uk-dark.dark\:uk-text-gray-30 {
    color: var(--color-gray-30)!important
}

.uk-dark .dark\:uk-text-gray-40,.uk-dark.dark\:uk-text-gray-40 {
    color: var(--color-gray-40)!important
}

.uk-dark .dark\:uk-text-gray-50,.uk-dark.dark\:uk-text-gray-50 {
    color: var(--color-gray-50)!important
}

.uk-dark .dark\:uk-text-gray-60,.uk-dark.dark\:uk-text-gray-60 {
    color: var(--color-gray-60)!important
}

.uk-dark .dark\:uk-text-gray-70,.uk-dark.dark\:uk-text-gray-70 {
    color: var(--color-gray-70)!important
}

.uk-dark .dark\:uk-text-gray-80,.uk-dark.dark\:uk-text-gray-80 {
    color: var(--color-gray-80)!important
}

.uk-dark .dark\:uk-text-gray-90,.uk-dark.dark\:uk-text-gray-90 {
    color: var(--color-gray-90)!important
}

.uk-dark .dark\:uk-text-gray-100,.uk-dark.dark\:uk-text-gray-100 {
    color: var(--color-gray-100)!important
}

.uk-dark .dark\:uk-background-gray-10,.uk-dark.dark\:uk-background-gray-10 {
    background-color: var(--color-gray-10)!important
}

.uk-dark .dark\:uk-background-gray-20,.uk-dark.dark\:uk-background-gray-20 {
    background-color: var(--color-gray-20)!important
}

.uk-dark .dark\:uk-background-gray-30,.uk-dark.dark\:uk-background-gray-30 {
    background-color: var(--color-gray-30)!important
}

.uk-dark .dark\:uk-background-gray-40,.uk-dark.dark\:uk-background-gray-40 {
    background-color: var(--color-gray-40)!important
}

.uk-dark .dark\:uk-background-gray-50,.uk-dark.dark\:uk-background-gray-50 {
    background-color: var(--color-gray-50)!important
}

.uk-dark .dark\:uk-background-gray-60,.uk-dark.dark\:uk-background-gray-60 {
    background-color: var(--color-gray-60)!important
}

.uk-dark .dark\:uk-background-gray-70,.uk-dark.dark\:uk-background-gray-70 {
    background-color: var(--color-gray-70)!important
}

.uk-dark .dark\:uk-background-gray-80,.uk-dark.dark\:uk-background-gray-80 {
    background-color: var(--color-gray-80)!important
}

.uk-dark .dark\:uk-background-gray-90,.uk-dark.dark\:uk-background-gray-90 {
    background-color: var(--color-gray-90)!important
}

.uk-dark .dark\:uk-background-gray-100,.uk-dark.dark\:uk-background-gray-100 {
    background-color: var(--color-gray-100)!important
}

.uk-dark .dark\:uk-border-gray-10,.uk-dark.dark\:uk-border-gray-10 {
    border-color: var(--color-gray-10)!important
}

.uk-dark .dark\:uk-border-gray-20,.uk-dark.dark\:uk-border-gray-20 {
    border-color: var(--color-gray-20)!important
}

.uk-dark .dark\:uk-border-gray-30,.uk-dark.dark\:uk-border-gray-30 {
    border-color: var(--color-gray-30)!important
}

.uk-dark .dark\:uk-border-gray-40,.uk-dark.dark\:uk-border-gray-40 {
    border-color: var(--color-gray-40)!important
}

.uk-dark .dark\:uk-border-gray-50,.uk-dark.dark\:uk-border-gray-50 {
    border-color: var(--color-gray-50)!important
}

.uk-dark .dark\:uk-border-gray-60,.uk-dark.dark\:uk-border-gray-60 {
    border-color: var(--color-gray-60)!important
}

.uk-dark .dark\:uk-border-gray-70,.uk-dark.dark\:uk-border-gray-70 {
    border-color: var(--color-gray-70)!important
}

.uk-dark .dark\:uk-border-gray-80,.uk-dark.dark\:uk-border-gray-80 {
    border-color: var(--color-gray-80)!important
}

.uk-dark .dark\:uk-border-gray-90,.uk-dark.dark\:uk-border-gray-90 {
    border-color: var(--color-gray-90)!important
}

.uk-dark .dark\:uk-border-gray-100,.uk-dark.dark\:uk-border-gray-100 {
    border-color: var(--color-gray-100)!important
}

.uk-dark .dark\:hover\:uk-text-gray-10:hover,.uk-dark.dark\:hover\:uk-text-gray-10:hover {
    color: var(--color-gray-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-gray-20:hover,.uk-dark.dark\:hover\:uk-text-gray-20:hover {
    color: var(--color-gray-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-gray-30:hover,.uk-dark.dark\:hover\:uk-text-gray-30:hover {
    color: var(--color-gray-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-gray-40:hover,.uk-dark.dark\:hover\:uk-text-gray-40:hover {
    color: var(--color-gray-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-gray-50:hover,.uk-dark.dark\:hover\:uk-text-gray-50:hover {
    color: var(--color-gray-50)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-gray-60:hover,.uk-dark.dark\:hover\:uk-text-gray-60:hover {
    color: var(--color-gray-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-gray-70:hover,.uk-dark.dark\:hover\:uk-text-gray-70:hover {
    color: var(--color-gray-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-gray-80:hover,.uk-dark.dark\:hover\:uk-text-gray-80:hover {
    color: var(--color-gray-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-gray-90:hover,.uk-dark.dark\:hover\:uk-text-gray-90:hover {
    color: var(--color-gray-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-gray-100:hover,.uk-dark.dark\:hover\:uk-text-gray-100:hover {
    color: var(--color-gray-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-gray-10:hover,.uk-dark.dark\:hover\:uk-background-gray-10:hover {
    background-color: var(--color-gray-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-gray-20:hover,.uk-dark.dark\:hover\:uk-background-gray-20:hover {
    background-color: var(--color-gray-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-gray-30:hover,.uk-dark.dark\:hover\:uk-background-gray-30:hover {
    background-color: var(--color-gray-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-gray-40:hover,.uk-dark.dark\:hover\:uk-background-gray-40:hover {
    background-color: var(--color-gray-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-gray-50:hover,.uk-dark.dark\:hover\:uk-background-gray-50:hover {
    background-color: var(--color-gray-50)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-gray-60:hover,.uk-dark.dark\:hover\:uk-background-gray-60:hover {
    background-color: var(--color-gray-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-gray-70:hover,.uk-dark.dark\:hover\:uk-background-gray-70:hover {
    background-color: var(--color-gray-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-gray-80:hover,.uk-dark.dark\:hover\:uk-background-gray-80:hover {
    background-color: var(--color-gray-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-gray-90:hover,.uk-dark.dark\:hover\:uk-background-gray-90:hover {
    background-color: var(--color-gray-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-gray-100:hover,.uk-dark.dark\:hover\:uk-background-gray-100:hover {
    background-color: var(--color-gray-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-gray-10:hover,.uk-dark.dark\:hover\:uk-border-gray-10:hover {
    border-color: var(--color-gray-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-gray-20:hover,.uk-dark.dark\:hover\:uk-border-gray-20:hover {
    border-color: var(--color-gray-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-gray-30:hover,.uk-dark.dark\:hover\:uk-border-gray-30:hover {
    border-color: var(--color-gray-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-gray-40:hover,.uk-dark.dark\:hover\:uk-border-gray-40:hover {
    border-color: var(--color-gray-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-gray-50:hover,.uk-dark.dark\:hover\:uk-border-gray-50:hover {
    border-color: var(--color-gray-50)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-gray-60:hover,.uk-dark.dark\:hover\:uk-border-gray-60:hover {
    border-color: var(--color-gray-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-gray-70:hover,.uk-dark.dark\:hover\:uk-border-gray-70:hover {
    border-color: var(--color-gray-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-gray-80:hover,.uk-dark.dark\:hover\:uk-border-gray-80:hover {
    border-color: var(--color-gray-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-gray-90:hover,.uk-dark.dark\:hover\:uk-border-gray-90:hover {
    border-color: var(--color-gray-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-gray-100:hover,.uk-dark.dark\:hover\:uk-border-gray-100:hover {
    border-color: var(--color-gray-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:uk-text-default-10,.uk-dark.dark\:uk-text-default-10 {
    color: var(--color-default-10)!important
}

.uk-dark .dark\:uk-text-default-20,.uk-dark.dark\:uk-text-default-20 {
    color: var(--color-default-20)!important
}

.uk-dark .dark\:uk-text-default-30,.uk-dark.dark\:uk-text-default-30 {
    color: var(--color-default-30)!important
}

.uk-dark .dark\:uk-text-default-40,.uk-dark.dark\:uk-text-default-40 {
    color: var(--color-default-40)!important
}

.uk-dark .dark\:uk-text-default,.uk-dark.dark\:uk-text-default {
    color: var(--color-default)!important
}

.uk-dark .dark\:uk-text-default-60,.uk-dark.dark\:uk-text-default-60 {
    color: var(--color-default-60)!important
}

.uk-dark .dark\:uk-text-default-70,.uk-dark.dark\:uk-text-default-70 {
    color: var(--color-default-70)!important
}

.uk-dark .dark\:uk-text-default-80,.uk-dark.dark\:uk-text-default-80 {
    color: var(--color-default-80)!important
}

.uk-dark .dark\:uk-text-default-90,.uk-dark.dark\:uk-text-default-90 {
    color: var(--color-default-90)!important
}

.uk-dark .dark\:uk-text-default-100,.uk-dark.dark\:uk-text-default-100 {
    color: var(--color-default-100)!important
}

.uk-dark .dark\:uk-background-default-10,.uk-dark.dark\:uk-background-default-10 {
    background-color: var(--color-default-10)!important
}

.uk-dark .dark\:uk-background-default-20,.uk-dark.dark\:uk-background-default-20 {
    background-color: var(--color-default-20)!important
}

.uk-dark .dark\:uk-background-default-30,.uk-dark.dark\:uk-background-default-30 {
    background-color: var(--color-default-30)!important
}

.uk-dark .dark\:uk-background-default-40,.uk-dark.dark\:uk-background-default-40 {
    background-color: var(--color-default-40)!important
}

.uk-dark .dark\:uk-background-default,.uk-dark.dark\:uk-background-default {
    background-color: var(--color-default)!important
}

.uk-dark .dark\:uk-background-default-60,.uk-dark.dark\:uk-background-default-60 {
    background-color: var(--color-default-60)!important
}

.uk-dark .dark\:uk-background-default-70,.uk-dark.dark\:uk-background-default-70 {
    background-color: var(--color-default-70)!important
}

.uk-dark .dark\:uk-background-default-80,.uk-dark.dark\:uk-background-default-80 {
    background-color: var(--color-default-80)!important
}

.uk-dark .dark\:uk-background-default-90,.uk-dark.dark\:uk-background-default-90 {
    background-color: var(--color-default-90)!important
}

.uk-dark .dark\:uk-background-default-100,.uk-dark.dark\:uk-background-default-100 {
    background-color: var(--color-default-100)!important
}

.uk-dark .dark\:uk-border-default-10,.uk-dark.dark\:uk-border-default-10 {
    border-color: var(--color-default-10)!important
}

.uk-dark .dark\:uk-border-default-20,.uk-dark.dark\:uk-border-default-20 {
    border-color: var(--color-default-20)!important
}

.uk-dark .dark\:uk-border-default-30,.uk-dark.dark\:uk-border-default-30 {
    border-color: var(--color-default-30)!important
}

.uk-dark .dark\:uk-border-default-40,.uk-dark.dark\:uk-border-default-40 {
    border-color: var(--color-default-40)!important
}

.uk-dark .dark\:uk-border-default,.uk-dark.dark\:uk-border-default {
    border-color: var(--color-default)!important
}

.uk-dark .dark\:uk-border-default-60,.uk-dark.dark\:uk-border-default-60 {
    border-color: var(--color-default-60)!important
}

.uk-dark .dark\:uk-border-default-70,.uk-dark.dark\:uk-border-default-70 {
    border-color: var(--color-default-70)!important
}

.uk-dark .dark\:uk-border-default-80,.uk-dark.dark\:uk-border-default-80 {
    border-color: var(--color-default-80)!important
}

.uk-dark .dark\:uk-border-default-90,.uk-dark.dark\:uk-border-default-90 {
    border-color: var(--color-default-90)!important
}

.uk-dark .dark\:uk-border-default-100,.uk-dark.dark\:uk-border-default-100 {
    border-color: var(--color-default-100)!important
}

.uk-dark .dark\:hover\:uk-text-default-10:hover,.uk-dark.dark\:hover\:uk-text-default-10:hover {
    color: var(--color-default-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-default-20:hover,.uk-dark.dark\:hover\:uk-text-default-20:hover {
    color: var(--color-default-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-default-30:hover,.uk-dark.dark\:hover\:uk-text-default-30:hover {
    color: var(--color-default-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-default-40:hover,.uk-dark.dark\:hover\:uk-text-default-40:hover {
    color: var(--color-default-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-default:hover,.uk-dark.dark\:hover\:uk-text-default:hover {
    color: var(--color-default)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-default-60:hover,.uk-dark.dark\:hover\:uk-text-default-60:hover {
    color: var(--color-default-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-default-70:hover,.uk-dark.dark\:hover\:uk-text-default-70:hover {
    color: var(--color-default-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-default-80:hover,.uk-dark.dark\:hover\:uk-text-default-80:hover {
    color: var(--color-default-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-default-90:hover,.uk-dark.dark\:hover\:uk-text-default-90:hover {
    color: var(--color-default-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-default-100:hover,.uk-dark.dark\:hover\:uk-text-default-100:hover {
    color: var(--color-default-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-default-10:hover,.uk-dark.dark\:hover\:uk-background-default-10:hover {
    background-color: var(--color-default-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-default-20:hover,.uk-dark.dark\:hover\:uk-background-default-20:hover {
    background-color: var(--color-default-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-default-30:hover,.uk-dark.dark\:hover\:uk-background-default-30:hover {
    background-color: var(--color-default-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-default-40:hover,.uk-dark.dark\:hover\:uk-background-default-40:hover {
    background-color: var(--color-default-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-default:hover,.uk-dark.dark\:hover\:uk-background-default:hover {
    background-color: var(--color-default)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-default-60:hover,.uk-dark.dark\:hover\:uk-background-default-60:hover {
    background-color: var(--color-default-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-default-70:hover,.uk-dark.dark\:hover\:uk-background-default-70:hover {
    background-color: var(--color-default-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-default-80:hover,.uk-dark.dark\:hover\:uk-background-default-80:hover {
    background-color: var(--color-default-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-default-90:hover,.uk-dark.dark\:hover\:uk-background-default-90:hover {
    background-color: var(--color-default-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-default-100:hover,.uk-dark.dark\:hover\:uk-background-default-100:hover {
    background-color: var(--color-default-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-default-10:hover,.uk-dark.dark\:hover\:uk-border-default-10:hover {
    border-color: var(--color-default-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-default-20:hover,.uk-dark.dark\:hover\:uk-border-default-20:hover {
    border-color: var(--color-default-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-default-30:hover,.uk-dark.dark\:hover\:uk-border-default-30:hover {
    border-color: var(--color-default-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-default-40:hover,.uk-dark.dark\:hover\:uk-border-default-40:hover {
    border-color: var(--color-default-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-default:hover,.uk-dark.dark\:hover\:uk-border-default:hover {
    border-color: var(--color-default)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-default-60:hover,.uk-dark.dark\:hover\:uk-border-default-60:hover {
    border-color: var(--color-default-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-default-70:hover,.uk-dark.dark\:hover\:uk-border-default-70:hover {
    border-color: var(--color-default-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-default-80:hover,.uk-dark.dark\:hover\:uk-border-default-80:hover {
    border-color: var(--color-default-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-default-90:hover,.uk-dark.dark\:hover\:uk-border-default-90:hover {
    border-color: var(--color-default-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-default-100:hover,.uk-dark.dark\:hover\:uk-border-default-100:hover {
    border-color: var(--color-default-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:uk-text-darkgrey-10,.uk-dark.dark\:uk-text-darkgrey-10 {
    color: var(--color-darkgrey-10)!important
}

.uk-dark .dark\:uk-text-darkgrey-20,.uk-dark.dark\:uk-text-darkgrey-20 {
    color: var(--color-darkgrey-20)!important
}

.uk-dark .dark\:uk-text-darkgrey-30,.uk-dark.dark\:uk-text-darkgrey-30 {
    color: var(--color-darkgrey-30)!important
}

.uk-dark .dark\:uk-text-darkgrey-40,.uk-dark.dark\:uk-text-darkgrey-40 {
    color: var(--color-darkgrey-40)!important
}

.uk-dark .dark\:uk-text-darkgrey,.uk-dark.dark\:uk-text-darkgrey {
    color: var(--color-darkgrey)!important
}

.uk-dark .dark\:uk-text-darkgrey-60,.uk-dark.dark\:uk-text-darkgrey-60 {
    color: var(--color-darkgrey-60)!important
}

.uk-dark .dark\:uk-text-darkgrey-70,.uk-dark.dark\:uk-text-darkgrey-70 {
    color: var(--color-darkgrey-70)!important
}

.uk-dark .dark\:uk-text-darkgrey-80,.uk-dark.dark\:uk-text-darkgrey-80 {
    color: var(--color-darkgrey-80)!important
}

.uk-dark .dark\:uk-text-darkgrey-90,.uk-dark.dark\:uk-text-darkgrey-90 {
    color: var(--color-darkgrey-90)!important
}

.uk-dark .dark\:uk-text-darkgrey-100,.uk-dark.dark\:uk-text-darkgrey-100 {
    color: var(--color-darkgrey-100)!important
}

.uk-dark .dark\:uk-background-darkgrey-10,.uk-dark.dark\:uk-background-darkgrey-10 {
    background-color: var(--color-darkgrey-10)!important
}

.uk-dark .dark\:uk-background-darkgrey-20,.uk-dark.dark\:uk-background-darkgrey-20 {
    background-color: var(--color-darkgrey-20)!important
}

.uk-dark .dark\:uk-background-darkgrey-30,.uk-dark.dark\:uk-background-darkgrey-30 {
    background-color: var(--color-darkgrey-30)!important
}

.uk-dark .dark\:uk-background-darkgrey-40,.uk-dark.dark\:uk-background-darkgrey-40 {
    background-color: var(--color-darkgrey-40)!important
}

.uk-dark .dark\:uk-background-darkgrey,.uk-dark.dark\:uk-background-darkgrey {
    background-color: var(--color-darkgrey)!important
}

.uk-dark .dark\:uk-background-darkgrey-60,.uk-dark.dark\:uk-background-darkgrey-60 {
    background-color: var(--color-darkgrey-60)!important
}

.uk-dark .dark\:uk-background-darkgrey-70,.uk-dark.dark\:uk-background-darkgrey-70 {
    background-color: var(--color-darkgrey-70)!important
}

.uk-dark .dark\:uk-background-darkgrey-80,.uk-dark.dark\:uk-background-darkgrey-80 {
    background-color: var(--color-darkgrey-80)!important
}

.uk-dark .dark\:uk-background-darkgrey-90,.uk-dark.dark\:uk-background-darkgrey-90 {
    background-color: var(--color-darkgrey-90)!important
}

.uk-dark .dark\:uk-background-darkgrey-100,.uk-dark.dark\:uk-background-darkgrey-100 {
    background-color: var(--color-darkgrey-100)!important
}

.uk-dark .dark\:uk-border-darkgrey-10,.uk-dark.dark\:uk-border-darkgrey-10 {
    border-color: var(--color-darkgrey-10)!important
}

.uk-dark .dark\:uk-border-darkgrey-20,.uk-dark.dark\:uk-border-darkgrey-20 {
    border-color: var(--color-darkgrey-20)!important
}

.uk-dark .dark\:uk-border-darkgrey-30,.uk-dark.dark\:uk-border-darkgrey-30 {
    border-color: var(--color-darkgrey-30)!important
}

.uk-dark .dark\:uk-border-darkgrey-40,.uk-dark.dark\:uk-border-darkgrey-40 {
    border-color: var(--color-darkgrey-40)!important
}

.uk-dark .dark\:uk-border-darkgrey,.uk-dark.dark\:uk-border-darkgrey {
    border-color: var(--color-darkgrey)!important
}

.uk-dark .dark\:uk-border-darkgrey-60,.uk-dark.dark\:uk-border-darkgrey-60 {
    border-color: var(--color-darkgrey-60)!important
}

.uk-dark .dark\:uk-border-darkgrey-70,.uk-dark.dark\:uk-border-darkgrey-70 {
    border-color: var(--color-darkgrey-70)!important
}

.uk-dark .dark\:uk-border-darkgrey-80,.uk-dark.dark\:uk-border-darkgrey-80 {
    border-color: var(--color-darkgrey-80)!important
}

.uk-dark .dark\:uk-border-darkgrey-90,.uk-dark.dark\:uk-border-darkgrey-90 {
    border-color: var(--color-darkgrey-90)!important
}

.uk-dark .dark\:uk-border-darkgrey-100,.uk-dark.dark\:uk-border-darkgrey-100 {
    border-color: var(--color-darkgrey-100)!important
}

.uk-dark .dark\:hover\:uk-text-darkgrey-10:hover,.uk-dark.dark\:hover\:uk-text-darkgrey-10:hover {
    color: var(--color-darkgrey-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-darkgrey-20:hover,.uk-dark.dark\:hover\:uk-text-darkgrey-20:hover {
    color: var(--color-darkgrey-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-darkgrey-30:hover,.uk-dark.dark\:hover\:uk-text-darkgrey-30:hover {
    color: var(--color-darkgrey-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-darkgrey-40:hover,.uk-dark.dark\:hover\:uk-text-darkgrey-40:hover {
    color: var(--color-darkgrey-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-darkgrey:hover,.uk-dark.dark\:hover\:uk-text-darkgrey:hover {
    color: var(--color-darkgrey)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-darkgrey-60:hover,.uk-dark.dark\:hover\:uk-text-darkgrey-60:hover {
    color: var(--color-darkgrey-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-darkgrey-70:hover,.uk-dark.dark\:hover\:uk-text-darkgrey-70:hover {
    color: var(--color-darkgrey-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-darkgrey-80:hover,.uk-dark.dark\:hover\:uk-text-darkgrey-80:hover {
    color: var(--color-darkgrey-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-darkgrey-90:hover,.uk-dark.dark\:hover\:uk-text-darkgrey-90:hover {
    color: var(--color-darkgrey-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-darkgrey-100:hover,.uk-dark.dark\:hover\:uk-text-darkgrey-100:hover {
    color: var(--color-darkgrey-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-darkgrey-10:hover,.uk-dark.dark\:hover\:uk-background-darkgrey-10:hover {
    background-color: var(--color-darkgrey-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-darkgrey-20:hover,.uk-dark.dark\:hover\:uk-background-darkgrey-20:hover {
    background-color: var(--color-darkgrey-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-darkgrey-30:hover,.uk-dark.dark\:hover\:uk-background-darkgrey-30:hover {
    background-color: var(--color-darkgrey-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-darkgrey-40:hover,.uk-dark.dark\:hover\:uk-background-darkgrey-40:hover {
    background-color: var(--color-darkgrey-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-darkgrey:hover,.uk-dark.dark\:hover\:uk-background-darkgrey:hover {
    background-color: var(--color-darkgrey)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-darkgrey-60:hover,.uk-dark.dark\:hover\:uk-background-darkgrey-60:hover {
    background-color: var(--color-darkgrey-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-darkgrey-70:hover,.uk-dark.dark\:hover\:uk-background-darkgrey-70:hover {
    background-color: var(--color-darkgrey-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-darkgrey-80:hover,.uk-dark.dark\:hover\:uk-background-darkgrey-80:hover {
    background-color: var(--color-darkgrey-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-darkgrey-90:hover,.uk-dark.dark\:hover\:uk-background-darkgrey-90:hover {
    background-color: var(--color-darkgrey-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-darkgrey-100:hover,.uk-dark.dark\:hover\:uk-background-darkgrey-100:hover {
    background-color: var(--color-darkgrey-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-darkgrey-10:hover,.uk-dark.dark\:hover\:uk-border-darkgrey-10:hover {
    border-color: var(--color-darkgrey-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-darkgrey-20:hover,.uk-dark.dark\:hover\:uk-border-darkgrey-20:hover {
    border-color: var(--color-darkgrey-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-darkgrey-30:hover,.uk-dark.dark\:hover\:uk-border-darkgrey-30:hover {
    border-color: var(--color-darkgrey-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-darkgrey-40:hover,.uk-dark.dark\:hover\:uk-border-darkgrey-40:hover {
    border-color: var(--color-darkgrey-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-darkgrey:hover,.uk-dark.dark\:hover\:uk-border-darkgrey:hover {
    border-color: var(--color-darkgrey)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-darkgrey-60:hover,.uk-dark.dark\:hover\:uk-border-darkgrey-60:hover {
    border-color: var(--color-darkgrey-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-darkgrey-70:hover,.uk-dark.dark\:hover\:uk-border-darkgrey-70:hover {
    border-color: var(--color-darkgrey-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-darkgrey-80:hover,.uk-dark.dark\:hover\:uk-border-darkgrey-80:hover {
    border-color: var(--color-darkgrey-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-darkgrey-90:hover,.uk-dark.dark\:hover\:uk-border-darkgrey-90:hover {
    border-color: var(--color-darkgrey-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-darkgrey-100:hover,.uk-dark.dark\:hover\:uk-border-darkgrey-100:hover {
    border-color: var(--color-darkgrey-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:uk-text-light-10,.uk-dark.dark\:uk-text-light-10 {
    color: var(--color-light-10)!important
}

.uk-dark .dark\:uk-text-light-20,.uk-dark.dark\:uk-text-light-20 {
    color: var(--color-light-20)!important
}

.uk-dark .dark\:uk-text-light-30,.uk-dark.dark\:uk-text-light-30 {
    color: var(--color-light-30)!important
}

.uk-dark .dark\:uk-text-light-40,.uk-dark.dark\:uk-text-light-40 {
    color: var(--color-light-40)!important
}

.uk-dark .dark\:uk-text-light-50,.uk-dark.dark\:uk-text-light-50 {
    color: var(--color-light-50)!important
}

.uk-dark .dark\:uk-text-light-60,.uk-dark.dark\:uk-text-light-60 {
    color: var(--color-light-60)!important
}

.uk-dark .dark\:uk-text-light-70,.uk-dark.dark\:uk-text-light-70 {
    color: var(--color-light-70)!important
}

.uk-dark .dark\:uk-text-light-80,.uk-dark.dark\:uk-text-light-80 {
    color: var(--color-light-80)!important
}

.uk-dark .dark\:uk-text-light-90,.uk-dark.dark\:uk-text-light-90 {
    color: var(--color-light-90)!important
}

.uk-dark .dark\:uk-text-light-100,.uk-dark.dark\:uk-text-light-100 {
    color: var(--color-light-100)!important
}

.uk-dark .dark\:uk-background-light-10,.uk-dark.dark\:uk-background-light-10 {
    background-color: var(--color-light-10)!important
}

.uk-dark .dark\:uk-background-light-20,.uk-dark.dark\:uk-background-light-20 {
    background-color: var(--color-light-20)!important
}

.uk-dark .dark\:uk-background-light-30,.uk-dark.dark\:uk-background-light-30 {
    background-color: var(--color-light-30)!important
}

.uk-dark .dark\:uk-background-light-40,.uk-dark.dark\:uk-background-light-40 {
    background-color: var(--color-light-40)!important
}

.uk-dark .dark\:uk-background-light-50,.uk-dark.dark\:uk-background-light-50 {
    background-color: var(--color-light-50)!important
}

.uk-dark .dark\:uk-background-light-60,.uk-dark.dark\:uk-background-light-60 {
    background-color: var(--color-light-60)!important
}

.uk-dark .dark\:uk-background-light-70,.uk-dark.dark\:uk-background-light-70 {
    background-color: var(--color-light-70)!important
}

.uk-dark .dark\:uk-background-light-80,.uk-dark.dark\:uk-background-light-80 {
    background-color: var(--color-light-80)!important
}

.uk-dark .dark\:uk-background-light-90,.uk-dark.dark\:uk-background-light-90 {
    background-color: var(--color-light-90)!important
}

.uk-dark .dark\:uk-background-light-100,.uk-dark.dark\:uk-background-light-100 {
    background-color: var(--color-light-100)!important
}

.uk-dark .dark\:uk-border-light-10,.uk-dark.dark\:uk-border-light-10 {
    border-color: var(--color-light-10)!important
}

.uk-dark .dark\:uk-border-light-20,.uk-dark.dark\:uk-border-light-20 {
    border-color: var(--color-light-20)!important
}

.uk-dark .dark\:uk-border-light-30,.uk-dark.dark\:uk-border-light-30 {
    border-color: var(--color-light-30)!important
}

.uk-dark .dark\:uk-border-light-40,.uk-dark.dark\:uk-border-light-40 {
    border-color: var(--color-light-40)!important
}

.uk-dark .dark\:uk-border-light-50,.uk-dark.dark\:uk-border-light-50 {
    border-color: var(--color-light-50)!important
}

.uk-dark .dark\:uk-border-light-60,.uk-dark.dark\:uk-border-light-60 {
    border-color: var(--color-light-60)!important
}

.uk-dark .dark\:uk-border-light-70,.uk-dark.dark\:uk-border-light-70 {
    border-color: var(--color-light-70)!important
}

.uk-dark .dark\:uk-border-light-80,.uk-dark.dark\:uk-border-light-80 {
    border-color: var(--color-light-80)!important
}

.uk-dark .dark\:uk-border-light-90,.uk-dark.dark\:uk-border-light-90 {
    border-color: var(--color-light-90)!important
}

.uk-dark .dark\:uk-border-light-100,.uk-dark.dark\:uk-border-light-100 {
    border-color: var(--color-light-100)!important
}

.uk-dark .dark\:hover\:uk-text-light-10:hover,.uk-dark.dark\:hover\:uk-text-light-10:hover {
    color: var(--color-light-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-light-20:hover,.uk-dark.dark\:hover\:uk-text-light-20:hover {
    color: var(--color-light-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-light-30:hover,.uk-dark.dark\:hover\:uk-text-light-30:hover {
    color: var(--color-light-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-light-40:hover,.uk-dark.dark\:hover\:uk-text-light-40:hover {
    color: var(--color-light-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-light-50:hover,.uk-dark.dark\:hover\:uk-text-light-50:hover {
    color: var(--color-light-50)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-light-60:hover,.uk-dark.dark\:hover\:uk-text-light-60:hover {
    color: var(--color-light-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-light-70:hover,.uk-dark.dark\:hover\:uk-text-light-70:hover {
    color: var(--color-light-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-light-80:hover,.uk-dark.dark\:hover\:uk-text-light-80:hover {
    color: var(--color-light-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-light-90:hover,.uk-dark.dark\:hover\:uk-text-light-90:hover {
    color: var(--color-light-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-light-100:hover,.uk-dark.dark\:hover\:uk-text-light-100:hover {
    color: var(--color-light-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-light-10:hover,.uk-dark.dark\:hover\:uk-background-light-10:hover {
    background-color: var(--color-light-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-light-20:hover,.uk-dark.dark\:hover\:uk-background-light-20:hover {
    background-color: var(--color-light-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-light-30:hover,.uk-dark.dark\:hover\:uk-background-light-30:hover {
    background-color: var(--color-light-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-light-40:hover,.uk-dark.dark\:hover\:uk-background-light-40:hover {
    background-color: var(--color-light-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-light-50:hover,.uk-dark.dark\:hover\:uk-background-light-50:hover {
    background-color: var(--color-light-50)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-light-60:hover,.uk-dark.dark\:hover\:uk-background-light-60:hover {
    background-color: var(--color-light-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-light-70:hover,.uk-dark.dark\:hover\:uk-background-light-70:hover {
    background-color: var(--color-light-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-light-80:hover,.uk-dark.dark\:hover\:uk-background-light-80:hover {
    background-color: var(--color-light-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-light-90:hover,.uk-dark.dark\:hover\:uk-background-light-90:hover {
    background-color: var(--color-light-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-light-100:hover,.uk-dark.dark\:hover\:uk-background-light-100:hover {
    background-color: var(--color-light-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-light-10:hover,.uk-dark.dark\:hover\:uk-border-light-10:hover {
    border-color: var(--color-light-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-light-20:hover,.uk-dark.dark\:hover\:uk-border-light-20:hover {
    border-color: var(--color-light-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-light-30:hover,.uk-dark.dark\:hover\:uk-border-light-30:hover {
    border-color: var(--color-light-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-light-40:hover,.uk-dark.dark\:hover\:uk-border-light-40:hover {
    border-color: var(--color-light-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-light-50:hover,.uk-dark.dark\:hover\:uk-border-light-50:hover {
    border-color: var(--color-light-50)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-light-60:hover,.uk-dark.dark\:hover\:uk-border-light-60:hover {
    border-color: var(--color-light-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-light-70:hover,.uk-dark.dark\:hover\:uk-border-light-70:hover {
    border-color: var(--color-light-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-light-80:hover,.uk-dark.dark\:hover\:uk-border-light-80:hover {
    border-color: var(--color-light-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-light-90:hover,.uk-dark.dark\:hover\:uk-border-light-90:hover {
    border-color: var(--color-light-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-light-100:hover,.uk-dark.dark\:hover\:uk-border-light-100:hover {
    border-color: var(--color-light-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:uk-text-muted-10,.uk-dark.dark\:uk-text-muted-10 {
    color: var(--color-muted-10)!important
}

.uk-dark .dark\:uk-text-muted-20,.uk-dark.dark\:uk-text-muted-20 {
    color: var(--color-muted-20)!important
}

.uk-dark .dark\:uk-text-muted-30,.uk-dark.dark\:uk-text-muted-30 {
    color: var(--color-muted-30)!important
}

.uk-dark .dark\:uk-text-muted-40,.uk-dark.dark\:uk-text-muted-40 {
    color: var(--color-muted-40)!important
}

.uk-dark .dark\:uk-text-muted,.uk-dark.dark\:uk-text-muted {
    color: var(--color-muted)!important
}

.uk-dark .dark\:uk-text-muted-60,.uk-dark.dark\:uk-text-muted-60 {
    color: var(--color-muted-60)!important
}

.uk-dark .dark\:uk-text-muted-70,.uk-dark.dark\:uk-text-muted-70 {
    color: var(--color-muted-70)!important
}

.uk-dark .dark\:uk-text-muted-80,.uk-dark.dark\:uk-text-muted-80 {
    color: var(--color-muted-80)!important
}

.uk-dark .dark\:uk-text-muted-90,.uk-dark.dark\:uk-text-muted-90 {
    color: var(--color-muted-90)!important
}

.uk-dark .dark\:uk-text-muted-100,.uk-dark.dark\:uk-text-muted-100 {
    color: var(--color-muted-100)!important
}

.uk-dark .dark\:uk-background-muted-10,.uk-dark.dark\:uk-background-muted-10 {
    background-color: var(--color-muted-10)!important
}

.uk-dark .dark\:uk-background-muted-20,.uk-dark.dark\:uk-background-muted-20 {
    background-color: var(--color-muted-20)!important
}

.uk-dark .dark\:uk-background-muted-30,.uk-dark.dark\:uk-background-muted-30 {
    background-color: var(--color-muted-30)!important
}

.uk-dark .dark\:uk-background-muted-40,.uk-dark.dark\:uk-background-muted-40 {
    background-color: var(--color-muted-40)!important
}

.uk-dark .dark\:uk-background-muted,.uk-dark.dark\:uk-background-muted {
    background-color: var(--color-muted)!important
}

.uk-dark .dark\:uk-background-muted-60,.uk-dark.dark\:uk-background-muted-60 {
    background-color: var(--color-muted-60)!important
}

.uk-dark .dark\:uk-background-muted-70,.uk-dark.dark\:uk-background-muted-70 {
    background-color: var(--color-muted-70)!important
}

.uk-dark .dark\:uk-background-muted-80,.uk-dark.dark\:uk-background-muted-80 {
    background-color: var(--color-muted-80)!important
}

.uk-dark .dark\:uk-background-muted-90,.uk-dark.dark\:uk-background-muted-90 {
    background-color: var(--color-muted-90)!important
}

.uk-dark .dark\:uk-background-muted-100,.uk-dark.dark\:uk-background-muted-100 {
    background-color: var(--color-muted-100)!important
}

.uk-dark .dark\:uk-border-muted-10,.uk-dark.dark\:uk-border-muted-10 {
    border-color: var(--color-muted-10)!important
}

.uk-dark .dark\:uk-border-muted-20,.uk-dark.dark\:uk-border-muted-20 {
    border-color: var(--color-muted-20)!important
}

.uk-dark .dark\:uk-border-muted-30,.uk-dark.dark\:uk-border-muted-30 {
    border-color: var(--color-muted-30)!important
}

.uk-dark .dark\:uk-border-muted-40,.uk-dark.dark\:uk-border-muted-40 {
    border-color: var(--color-muted-40)!important
}

.uk-dark .dark\:uk-border-muted,.uk-dark.dark\:uk-border-muted {
    border-color: var(--color-muted)!important
}

.uk-dark .dark\:uk-border-muted-60,.uk-dark.dark\:uk-border-muted-60 {
    border-color: var(--color-muted-60)!important
}

.uk-dark .dark\:uk-border-muted-70,.uk-dark.dark\:uk-border-muted-70 {
    border-color: var(--color-muted-70)!important
}

.uk-dark .dark\:uk-border-muted-80,.uk-dark.dark\:uk-border-muted-80 {
    border-color: var(--color-muted-80)!important
}

.uk-dark .dark\:uk-border-muted-90,.uk-dark.dark\:uk-border-muted-90 {
    border-color: var(--color-muted-90)!important
}

.uk-dark .dark\:uk-border-muted-100,.uk-dark.dark\:uk-border-muted-100 {
    border-color: var(--color-muted-100)!important
}

.uk-dark .dark\:hover\:uk-text-muted-10:hover,.uk-dark.dark\:hover\:uk-text-muted-10:hover {
    color: var(--color-muted-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-muted-20:hover,.uk-dark.dark\:hover\:uk-text-muted-20:hover {
    color: var(--color-muted-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-muted-30:hover,.uk-dark.dark\:hover\:uk-text-muted-30:hover {
    color: var(--color-muted-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-muted-40:hover,.uk-dark.dark\:hover\:uk-text-muted-40:hover {
    color: var(--color-muted-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-muted:hover,.uk-dark.dark\:hover\:uk-text-muted:hover {
    color: var(--color-muted)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-muted-60:hover,.uk-dark.dark\:hover\:uk-text-muted-60:hover {
    color: var(--color-muted-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-muted-70:hover,.uk-dark.dark\:hover\:uk-text-muted-70:hover {
    color: var(--color-muted-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-muted-80:hover,.uk-dark.dark\:hover\:uk-text-muted-80:hover {
    color: var(--color-muted-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-muted-90:hover,.uk-dark.dark\:hover\:uk-text-muted-90:hover {
    color: var(--color-muted-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-text-muted-100:hover,.uk-dark.dark\:hover\:uk-text-muted-100:hover {
    color: var(--color-muted-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-muted-10:hover,.uk-dark.dark\:hover\:uk-background-muted-10:hover {
    background-color: var(--color-muted-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-muted-20:hover,.uk-dark.dark\:hover\:uk-background-muted-20:hover {
    background-color: var(--color-muted-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-muted-30:hover,.uk-dark.dark\:hover\:uk-background-muted-30:hover {
    background-color: var(--color-muted-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-muted-40:hover,.uk-dark.dark\:hover\:uk-background-muted-40:hover {
    background-color: var(--color-muted-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-muted:hover,.uk-dark.dark\:hover\:uk-background-muted:hover {
    background-color: var(--color-muted)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-muted-60:hover,.uk-dark.dark\:hover\:uk-background-muted-60:hover {
    background-color: var(--color-muted-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-muted-70:hover,.uk-dark.dark\:hover\:uk-background-muted-70:hover {
    background-color: var(--color-muted-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-muted-80:hover,.uk-dark.dark\:hover\:uk-background-muted-80:hover {
    background-color: var(--color-muted-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-muted-90:hover,.uk-dark.dark\:hover\:uk-background-muted-90:hover {
    background-color: var(--color-muted-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-background-muted-100:hover,.uk-dark.dark\:hover\:uk-background-muted-100:hover {
    background-color: var(--color-muted-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-muted-10:hover,.uk-dark.dark\:hover\:uk-border-muted-10:hover {
    border-color: var(--color-muted-10)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-muted-20:hover,.uk-dark.dark\:hover\:uk-border-muted-20:hover {
    border-color: var(--color-muted-20)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-muted-30:hover,.uk-dark.dark\:hover\:uk-border-muted-30:hover {
    border-color: var(--color-muted-30)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-muted-40:hover,.uk-dark.dark\:hover\:uk-border-muted-40:hover {
    border-color: var(--color-muted-40)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-muted:hover,.uk-dark.dark\:hover\:uk-border-muted:hover {
    border-color: var(--color-muted)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-muted-60:hover,.uk-dark.dark\:hover\:uk-border-muted-60:hover {
    border-color: var(--color-muted-60)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-muted-70:hover,.uk-dark.dark\:hover\:uk-border-muted-70:hover {
    border-color: var(--color-muted-70)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-muted-80:hover,.uk-dark.dark\:hover\:uk-border-muted-80:hover {
    border-color: var(--color-muted-80)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-muted-90:hover,.uk-dark.dark\:hover\:uk-border-muted-90:hover {
    border-color: var(--color-muted-90)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:hover\:uk-border-muted-100:hover,.uk-dark.dark\:hover\:uk-border-muted-100:hover {
    border-color: var(--color-muted-100)!important;
    transition: .1s ease-in-out;
    transition-property: color,background-color,border-color
}

.uk-dark .dark\:uk-text-white-5,.uk-dark.dark\:uk-text-white-5,.uk-text-white-5 {
    color: rgba(255,255,255,.05)!important
}

.uk-dark .dark\:uk-text-white-10,.uk-dark.dark\:uk-text-white-10,.uk-text-white-10 {
    color: rgba(255,255,255,.1)!important
}

.uk-dark .dark\:uk-text-white-15,.uk-dark.dark\:uk-text-white-15,.uk-text-white-15 {
    color: rgba(255,255,255,.15)!important
}

.uk-dark .dark\:uk-text-white-20,.uk-dark.dark\:uk-text-white-20,.uk-text-white-20 {
    color: rgba(255,255,255,.2)!important
}

.uk-dark .dark\:uk-text-white-25,.uk-dark.dark\:uk-text-white-25,.uk-text-white-25 {
    color: rgba(255,255,255,.25)!important
}

.uk-dark .dark\:uk-text-white-30,.uk-dark.dark\:uk-text-white-30,.uk-text-white-30 {
    color: rgba(255,255,255,.3)!important
}

.uk-dark .dark\:uk-text-white-35,.uk-dark.dark\:uk-text-white-35,.uk-text-white-35 {
    color: rgba(255,255,255,.35)!important
}

.uk-dark .dark\:uk-text-white-40,.uk-dark.dark\:uk-text-white-40,.uk-text-white-40 {
    color: rgba(255,255,255,.4)!important
}

.uk-dark .dark\:uk-text-white-45,.uk-dark.dark\:uk-text-white-45,.uk-text-white-45 {
    color: rgba(255,255,255,.45)!important
}

.uk-dark .dark\:uk-text-white-50,.uk-dark.dark\:uk-text-white-50,.uk-text-white-50 {
    color: rgba(255,255,255,.5)!important
}

.uk-dark .dark\:uk-text-white-55,.uk-dark.dark\:uk-text-white-55,.uk-text-white-55 {
    color: rgba(255,255,255,.55)!important
}

.uk-dark .dark\:uk-text-white-60,.uk-dark.dark\:uk-text-white-60,.uk-text-white-60 {
    color: rgba(255,255,255,.6)!important
}

.uk-dark .dark\:uk-text-white-65,.uk-dark.dark\:uk-text-white-65,.uk-text-white-65 {
    color: rgba(255,255,255,.65)!important
}

.uk-dark .dark\:uk-text-white-70,.uk-dark.dark\:uk-text-white-70,.uk-text-white-70 {
    color: rgba(255,255,255,.7)!important
}

.uk-dark .dark\:uk-text-white-75,.uk-dark.dark\:uk-text-white-75,.uk-text-white-75 {
    color: rgba(255,255,255,.75)!important
}

.uk-dark .dark\:uk-text-white-80,.uk-dark.dark\:uk-text-white-80,.uk-text-white-80 {
    color: rgba(255,255,255,.8)!important
}

.uk-dark .dark\:uk-text-white-85,.uk-dark.dark\:uk-text-white-85,.uk-text-white-85 {
    color: rgba(255,255,255,.85)!important
}

.uk-dark .dark\:uk-text-white-90,.uk-dark.dark\:uk-text-white-90,.uk-text-white-90 {
    color: rgba(255,255,255,.9)!important
}

.uk-dark .dark\:uk-text-white-95,.uk-dark.dark\:uk-text-white-95,.uk-text-white-95 {
    color: rgba(255,255,255,.95)!important
}

.uk-dark .dark\:uk-text-white,.uk-dark.dark\:uk-text-white,.uk-text-white {
    color: #fff!important
}

.uk-background-white-5,.uk-dark .dark\:uk-background-white-5,.uk-dark.dark\:uk-background-white-5 {
    background-color: rgba(255,255,255,.05)!important
}

.uk-background-white-10,.uk-dark .dark\:uk-background-white-10,.uk-dark.dark\:uk-background-white-10 {
    background-color: rgba(255,255,255,.1)!important
}

.uk-background-white-15,.uk-dark .dark\:uk-background-white-15,.uk-dark.dark\:uk-background-white-15 {
    background-color: rgba(255,255,255,.15)!important
}

.uk-background-white-20,.uk-dark .dark\:uk-background-white-20,.uk-dark.dark\:uk-background-white-20 {
    background-color: rgba(255,255,255,.2)!important
}

.uk-background-white-25,.uk-dark .dark\:uk-background-white-25,.uk-dark.dark\:uk-background-white-25 {
    background-color: rgba(255,255,255,.25)!important
}

.uk-background-white-30,.uk-dark .dark\:uk-background-white-30,.uk-dark.dark\:uk-background-white-30 {
    background-color: rgba(255,255,255,.3)!important
}

.uk-background-white-35,.uk-dark .dark\:uk-background-white-35,.uk-dark.dark\:uk-background-white-35 {
    background-color: rgba(255,255,255,.35)!important
}

.uk-background-white-40,.uk-dark .dark\:uk-background-white-40,.uk-dark.dark\:uk-background-white-40 {
    background-color: rgba(255,255,255,.4)!important
}

.uk-background-white-45,.uk-dark .dark\:uk-background-white-45,.uk-dark.dark\:uk-background-white-45 {
    background-color: rgba(255,255,255,.45)!important
}

.uk-background-white-50,.uk-dark .dark\:uk-background-white-50,.uk-dark.dark\:uk-background-white-50 {
    background-color: rgba(255,255,255,.5)!important
}

.uk-background-white-55,.uk-dark .dark\:uk-background-white-55,.uk-dark.dark\:uk-background-white-55 {
    background-color: rgba(255,255,255,.55)!important
}

.uk-background-white-60,.uk-dark .dark\:uk-background-white-60,.uk-dark.dark\:uk-background-white-60 {
    background-color: rgba(255,255,255,.6)!important
}

.uk-background-white-65,.uk-dark .dark\:uk-background-white-65,.uk-dark.dark\:uk-background-white-65 {
    background-color: rgba(255,255,255,.65)!important
}

.uk-background-white-70,.uk-dark .dark\:uk-background-white-70,.uk-dark.dark\:uk-background-white-70 {
    background-color: rgba(255,255,255,.7)!important
}

.uk-background-white-75,.uk-dark .dark\:uk-background-white-75,.uk-dark.dark\:uk-background-white-75 {
    background-color: rgba(255,255,255,.75)!important
}

.uk-background-white-80,.uk-dark .dark\:uk-background-white-80,.uk-dark.dark\:uk-background-white-80 {
    background-color: rgba(255,255,255,.8)!important
}

.uk-background-white-85,.uk-dark .dark\:uk-background-white-85,.uk-dark.dark\:uk-background-white-85 {
    background-color: rgba(255,255,255,.85)!important
}

.uk-background-white-90,.uk-dark .dark\:uk-background-white-90,.uk-dark.dark\:uk-background-white-90 {
    background-color: rgba(255,255,255,.9)!important
}

.uk-background-white-95,.uk-dark .dark\:uk-background-white-95,.uk-dark.dark\:uk-background-white-95 {
    background-color: rgba(255,255,255,.95)!important
}

.uk-background-white,.uk-dark .dark\:uk-background-white,.uk-dark.dark\:uk-background-white {
    background-color: #fff!important
}

.uk-border-white-5,.uk-dark .dark\:uk-border-white-5,.uk-dark.dark\:uk-border-white-5 {
    border-color: rgba(255,255,255,.05)!important
}

.uk-border-white-10,.uk-dark .dark\:uk-border-white-10,.uk-dark.dark\:uk-border-white-10 {
    border-color: rgba(255,255,255,.1)!important
}

.uk-border-white-15,.uk-dark .dark\:uk-border-white-15,.uk-dark.dark\:uk-border-white-15 {
    border-color: rgba(255,255,255,.15)!important
}

.uk-border-white-20,.uk-dark .dark\:uk-border-white-20,.uk-dark.dark\:uk-border-white-20 {
    border-color: rgba(255,255,255,.2)!important
}

.uk-border-white-25,.uk-dark .dark\:uk-border-white-25,.uk-dark.dark\:uk-border-white-25 {
    border-color: rgba(255,255,255,.25)!important
}

.uk-border-white-30,.uk-dark .dark\:uk-border-white-30,.uk-dark.dark\:uk-border-white-30 {
    border-color: rgba(255,255,255,.3)!important
}

.uk-border-white-35,.uk-dark .dark\:uk-border-white-35,.uk-dark.dark\:uk-border-white-35 {
    border-color: rgba(255,255,255,.35)!important
}

.uk-border-white-40,.uk-dark .dark\:uk-border-white-40,.uk-dark.dark\:uk-border-white-40 {
    border-color: rgba(255,255,255,.4)!important
}

.uk-border-white-45,.uk-dark .dark\:uk-border-white-45,.uk-dark.dark\:uk-border-white-45 {
    border-color: rgba(255,255,255,.45)!important
}

.uk-border-white-50,.uk-dark .dark\:uk-border-white-50,.uk-dark.dark\:uk-border-white-50 {
    border-color: rgba(255,255,255,.5)!important
}

.uk-border-white-55,.uk-dark .dark\:uk-border-white-55,.uk-dark.dark\:uk-border-white-55 {
    border-color: rgba(255,255,255,.55)!important
}

.uk-border-white-60,.uk-dark .dark\:uk-border-white-60,.uk-dark.dark\:uk-border-white-60 {
    border-color: rgba(255,255,255,.6)!important
}

.uk-border-white-65,.uk-dark .dark\:uk-border-white-65,.uk-dark.dark\:uk-border-white-65 {
    border-color: rgba(255,255,255,.65)!important
}

.uk-border-white-70,.uk-dark .dark\:uk-border-white-70,.uk-dark.dark\:uk-border-white-70 {
    border-color: rgba(255,255,255,.7)!important
}

.uk-border-white-75,.uk-dark .dark\:uk-border-white-75,.uk-dark.dark\:uk-border-white-75 {
    border-color: rgba(255,255,255,.75)!important
}

.uk-border-white-80,.uk-dark .dark\:uk-border-white-80,.uk-dark.dark\:uk-border-white-80 {
    border-color: rgba(255,255,255,.8)!important
}

.uk-border-white-85,.uk-dark .dark\:uk-border-white-85,.uk-dark.dark\:uk-border-white-85 {
    border-color: rgba(255,255,255,.85)!important
}

.uk-border-white-90,.uk-dark .dark\:uk-border-white-90,.uk-dark.dark\:uk-border-white-90 {
    border-color: rgba(255,255,255,.9)!important
}

.uk-border-white-95,.uk-dark .dark\:uk-border-white-95,.uk-dark.dark\:uk-border-white-95 {
    border-color: rgba(255,255,255,.95)!important
}

.uk-border-white,.uk-dark .dark\:uk-border-white,.uk-dark.dark\:uk-border-white {
    border-color: #fff!important
}

.uk-dark .dark\:uk-text-black-5,.uk-dark.dark\:uk-text-black-5,.uk-text-black-5 {
    color: rgba(0,0,0,.05)!important
}

.uk-dark .dark\:uk-text-black-10,.uk-dark.dark\:uk-text-black-10,.uk-text-black-10 {
    color: rgba(0,0,0,.1)!important
}

.uk-dark .dark\:uk-text-black-15,.uk-dark.dark\:uk-text-black-15,.uk-text-black-15 {
    color: rgba(0,0,0,.15)!important
}

.uk-dark .dark\:uk-text-black-20,.uk-dark.dark\:uk-text-black-20,.uk-text-black-20 {
    color: rgba(0,0,0,.2)!important
}

.uk-dark .dark\:uk-text-black-25,.uk-dark.dark\:uk-text-black-25,.uk-text-black-25 {
    color: rgba(0,0,0,.25)!important
}

.uk-dark .dark\:uk-text-black-30,.uk-dark.dark\:uk-text-black-30,.uk-text-black-30 {
    color: rgba(0,0,0,.3)!important
}

.uk-dark .dark\:uk-text-black-35,.uk-dark.dark\:uk-text-black-35,.uk-text-black-35 {
    color: rgba(0,0,0,.35)!important
}

.uk-dark .dark\:uk-text-black-40,.uk-dark.dark\:uk-text-black-40,.uk-text-black-40 {
    color: rgba(0,0,0,.4)!important
}

.uk-dark .dark\:uk-text-black-45,.uk-dark.dark\:uk-text-black-45,.uk-text-black-45 {
    color: rgba(0,0,0,.45)!important
}

.uk-dark .dark\:uk-text-black-50,.uk-dark.dark\:uk-text-black-50,.uk-text-black-50 {
    color: rgba(0,0,0,.5)!important
}

.uk-dark .dark\:uk-text-black-55,.uk-dark.dark\:uk-text-black-55,.uk-text-black-55 {
    color: rgba(0,0,0,.55)!important
}

.uk-dark .dark\:uk-text-black-60,.uk-dark.dark\:uk-text-black-60,.uk-text-black-60 {
    color: rgba(0,0,0,.6)!important
}

.uk-dark .dark\:uk-text-black-65,.uk-dark.dark\:uk-text-black-65,.uk-text-black-65 {
    color: rgba(0,0,0,.65)!important
}

.uk-dark .dark\:uk-text-black-70,.uk-dark.dark\:uk-text-black-70,.uk-text-black-70 {
    color: rgba(0,0,0,.7)!important
}

.uk-dark .dark\:uk-text-black-75,.uk-dark.dark\:uk-text-black-75,.uk-text-black-75 {
    color: rgba(0,0,0,.75)!important
}

.uk-dark .dark\:uk-text-black-80,.uk-dark.dark\:uk-text-black-80,.uk-text-black-80 {
    color: rgba(0,0,0,.8)!important
}

.uk-dark .dark\:uk-text-black-85,.uk-dark.dark\:uk-text-black-85,.uk-text-black-85 {
    color: rgba(0,0,0,.85)!important
}

.uk-dark .dark\:uk-text-black-90,.uk-dark.dark\:uk-text-black-90,.uk-text-black-90 {
    color: rgba(0,0,0,.9)!important
}

.uk-dark .dark\:uk-text-black-95,.uk-dark.dark\:uk-text-black-95,.uk-text-black-95 {
    color: rgba(0,0,0,.95)!important
}

.uk-dark .dark\:uk-text-black,.uk-dark.dark\:uk-text-black,.uk-text-black {
    color: #000!important
}

.uk-background-black-5,.uk-dark .dark\:uk-background-black-5,.uk-dark.dark\:uk-background-black-5 {
    background-color: rgba(0,0,0,.05)!important
}

.uk-background-black-10,.uk-dark .dark\:uk-background-black-10,.uk-dark.dark\:uk-background-black-10 {
    background-color: rgba(0,0,0,.1)!important
}

.uk-background-black-15,.uk-dark .dark\:uk-background-black-15,.uk-dark.dark\:uk-background-black-15 {
    background-color: rgba(0,0,0,.15)!important
}

.uk-background-black-20,.uk-dark .dark\:uk-background-black-20,.uk-dark.dark\:uk-background-black-20 {
    background-color: rgba(0,0,0,.2)!important
}

.uk-background-black-25,.uk-dark .dark\:uk-background-black-25,.uk-dark.dark\:uk-background-black-25 {
    background-color: rgba(0,0,0,.25)!important
}

.uk-background-black-30,.uk-dark .dark\:uk-background-black-30,.uk-dark.dark\:uk-background-black-30 {
    background-color: rgba(0,0,0,.3)!important
}

.uk-background-black-35,.uk-dark .dark\:uk-background-black-35,.uk-dark.dark\:uk-background-black-35 {
    background-color: rgba(0,0,0,.35)!important
}

.uk-background-black-40,.uk-dark .dark\:uk-background-black-40,.uk-dark.dark\:uk-background-black-40 {
    background-color: rgba(0,0,0,.4)!important
}

.uk-background-black-45,.uk-dark .dark\:uk-background-black-45,.uk-dark.dark\:uk-background-black-45 {
    background-color: rgba(0,0,0,.45)!important
}

.uk-background-black-50,.uk-dark .dark\:uk-background-black-50,.uk-dark.dark\:uk-background-black-50 {
    background-color: rgba(0,0,0,.5)!important
}

.uk-background-black-55,.uk-dark .dark\:uk-background-black-55,.uk-dark.dark\:uk-background-black-55 {
    background-color: rgba(0,0,0,.55)!important
}

.uk-background-black-60,.uk-dark .dark\:uk-background-black-60,.uk-dark.dark\:uk-background-black-60 {
    background-color: rgba(0,0,0,.6)!important
}

.uk-background-black-65,.uk-dark .dark\:uk-background-black-65,.uk-dark.dark\:uk-background-black-65 {
    background-color: rgba(0,0,0,.65)!important
}

.uk-background-black-70,.uk-dark .dark\:uk-background-black-70,.uk-dark.dark\:uk-background-black-70 {
    background-color: rgba(0,0,0,.7)!important
}

.uk-background-black-75,.uk-dark .dark\:uk-background-black-75,.uk-dark.dark\:uk-background-black-75 {
    background-color: rgba(0,0,0,.75)!important
}

.uk-background-black-80,.uk-dark .dark\:uk-background-black-80,.uk-dark.dark\:uk-background-black-80 {
    background-color: rgba(0,0,0,.8)!important
}

.uk-background-black-85,.uk-dark .dark\:uk-background-black-85,.uk-dark.dark\:uk-background-black-85 {
    background-color: rgba(0,0,0,.85)!important
}

.uk-background-black-90,.uk-dark .dark\:uk-background-black-90,.uk-dark.dark\:uk-background-black-90 {
    background-color: rgba(0,0,0,.9)!important
}

.uk-background-black-95,.uk-dark .dark\:uk-background-black-95,.uk-dark.dark\:uk-background-black-95 {
    background-color: rgba(0,0,0,.95)!important
}

.uk-background-black,.uk-dark .dark\:uk-background-black,.uk-dark.dark\:uk-background-black {
    background-color: #000!important
}

.uk-border-black-5,.uk-dark .dark\:uk-border-black-5,.uk-dark.dark\:uk-border-black-5 {
    border-color: rgba(0,0,0,.05)!important
}

.uk-border-black-10,.uk-dark .dark\:uk-border-black-10,.uk-dark.dark\:uk-border-black-10 {
    border-color: rgba(0,0,0,.1)!important
}

.uk-border-black-15,.uk-dark .dark\:uk-border-black-15,.uk-dark.dark\:uk-border-black-15 {
    border-color: rgba(0,0,0,.15)!important
}

.uk-border-black-20,.uk-dark .dark\:uk-border-black-20,.uk-dark.dark\:uk-border-black-20 {
    border-color: rgba(0,0,0,.2)!important
}

.uk-border-black-25,.uk-dark .dark\:uk-border-black-25,.uk-dark.dark\:uk-border-black-25 {
    border-color: rgba(0,0,0,.25)!important
}

.uk-border-black-30,.uk-dark .dark\:uk-border-black-30,.uk-dark.dark\:uk-border-black-30 {
    border-color: rgba(0,0,0,.3)!important
}

.uk-border-black-35,.uk-dark .dark\:uk-border-black-35,.uk-dark.dark\:uk-border-black-35 {
    border-color: rgba(0,0,0,.35)!important
}

.uk-border-black-40,.uk-dark .dark\:uk-border-black-40,.uk-dark.dark\:uk-border-black-40 {
    border-color: rgba(0,0,0,.4)!important
}

.uk-border-black-45,.uk-dark .dark\:uk-border-black-45,.uk-dark.dark\:uk-border-black-45 {
    border-color: rgba(0,0,0,.45)!important
}

.uk-border-black-50,.uk-dark .dark\:uk-border-black-50,.uk-dark.dark\:uk-border-black-50 {
    border-color: rgba(0,0,0,.5)!important
}

.uk-border-black-55,.uk-dark .dark\:uk-border-black-55,.uk-dark.dark\:uk-border-black-55 {
    border-color: rgba(0,0,0,.55)!important
}

.uk-border-black-60,.uk-dark .dark\:uk-border-black-60,.uk-dark.dark\:uk-border-black-60 {
    border-color: rgba(0,0,0,.6)!important
}

.uk-border-black-65,.uk-dark .dark\:uk-border-black-65,.uk-dark.dark\:uk-border-black-65 {
    border-color: rgba(0,0,0,.65)!important
}

.uk-border-black-70,.uk-dark .dark\:uk-border-black-70,.uk-dark.dark\:uk-border-black-70 {
    border-color: rgba(0,0,0,.7)!important
}

.uk-border-black-75,.uk-dark .dark\:uk-border-black-75,.uk-dark.dark\:uk-border-black-75 {
    border-color: rgba(0,0,0,.75)!important
}

.uk-border-black-80,.uk-dark .dark\:uk-border-black-80,.uk-dark.dark\:uk-border-black-80 {
    border-color: rgba(0,0,0,.8)!important
}

.uk-border-black-85,.uk-dark .dark\:uk-border-black-85,.uk-dark.dark\:uk-border-black-85 {
    border-color: rgba(0,0,0,.85)!important
}

.uk-border-black-90,.uk-dark .dark\:uk-border-black-90,.uk-dark.dark\:uk-border-black-90 {
    border-color: rgba(0,0,0,.9)!important
}

.uk-border-black-95,.uk-dark .dark\:uk-border-black-95,.uk-dark.dark\:uk-border-black-95 {
    border-color: rgba(0,0,0,.95)!important
}

.uk-border-black,.uk-dark .dark\:uk-border-black,.uk-dark.dark\:uk-border-black {
    border-color: #000!important
}

.uk-text-inherit {
    color: inherit
}

.uk-text-underline {
    text-decoration: underline
}

.uk-text-gradient {
    background-color: var(--gradient-first);
    background-image: linear-gradient(var(--gradient-angle),var(--gradient-first),var(--gradient-second));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent
}

.uk-text-meta,.uk-text-muted {
    color: var(--color-gray-60)!important
}

.uk-dark .uk-text-meta,.uk-dark .uk-text-muted,.uk-text-meta.uk-dark,.uk-text-muted.uk-dark {
    color: var(--color-gray-40)!important
}

.uk-text-lead {
    color: #000!important
}

.uk-dark .uk-text-lead,.uk-text-lead.uk-dark {
    color: #fff!important
}

.uk-text-vertical {
    writing-mode: vertical-lr;
    transform: rotate(180deg)
}

.uk-text-spacing {
    letter-spacing: 1px
}

@supports (-webkit-text-stroke:2px var(--color-primary)) {
    .uk-text-stroke {
        -webkit-text-stroke: 2px var(--color-primary)
    }

    .uk-dark .uk-text-stroke,.uk-text-stroke.uk-dark {
        -webkit-text-stroke: 2px var(--color-secondary)
    }

    .uk-text-stroke {
        -webkit-text-fill-color: #fff
    }

    .uk-dark .uk-text-stroke,.uk-text-stroke.uk-dark {
        -webkit-text-fill-color: var(--color-gray-100)
    }
}

.uk-text-primary {
    color: var(--colors-text-primary)!important
}

.uk-text-secondary {
    color: var(--colors-text-secondary)!important
}

.uk-text-success {
    color: var(--colors-text-success)!important
}

.uk-text-warning {
    color: var(--colors-text-warning)!important
}

.uk-text-danger {
    color: var(--colors-text-danger)!important
}

.uk-section-muted {
    background-color: var(--color-light-50)
}

.uk-section {
    padding-top: var(--sizes-section);
    padding-bottom: var(--sizes-section)
}

.uk-section-2xsmall {
    padding-top: var(--sizes-section-2xsmall);
    padding-bottom: var(--sizes-section-2xsmall)
}

.uk-section-xsmall {
    padding-top: var(--sizes-section-xsmall);
    padding-bottom: var(--sizes-section-xsmall)
}

.uk-section-small {
    padding-top: var(--sizes-section-small);
    padding-bottom: var(--sizes-section-small)
}

.uk-section-medium {
    padding-top: var(--sizes-section-medium);
    padding-bottom: var(--sizes-section-medium)
}

.uk-section-large {
    padding-top: var(--sizes-section-large);
    padding-bottom: var(--sizes-section-large)
}

.uk-section-xlarge {
    padding-top: var(--sizes-section-xlarge);
    padding-bottom: var(--sizes-section-xlarge)
}

.uk-section-2xlarge {
    padding-top: var(--sizes-section-2xlarge);
    padding-bottom: var(--sizes-section-2xlarge)
}

.uk-section-collapse {
    padding-top: var(--sizes-section-collapse);
    padding-bottom: var(--sizes-section-collapse)
}

html.bp-xs .uk-section\@xs {
    padding-top: var(--sizes-section);
    padding-bottom: var(--sizes-section)
}

html.bp-xs .uk-section-2xsmall\@xs {
    padding-top: var(--sizes-section-2xsmall);
    padding-bottom: var(--sizes-section-2xsmall)
}

html.bp-xs .uk-section-xsmall\@xs {
    padding-top: var(--sizes-section-xsmall);
    padding-bottom: var(--sizes-section-xsmall)
}

html.bp-xs .uk-section-small\@xs {
    padding-top: var(--sizes-section-small);
    padding-bottom: var(--sizes-section-small)
}

html.bp-xs .uk-section-medium\@xs {
    padding-top: var(--sizes-section-medium);
    padding-bottom: var(--sizes-section-medium)
}

html.bp-xs .uk-section-large\@xs {
    padding-top: var(--sizes-section-large);
    padding-bottom: var(--sizes-section-large)
}

html.bp-xs .uk-section-xlarge\@xs {
    padding-top: var(--sizes-section-xlarge);
    padding-bottom: var(--sizes-section-xlarge)
}

html.bp-xs .uk-section-2xlarge\@xs {
    padding-top: var(--sizes-section-2xlarge);
    padding-bottom: var(--sizes-section-2xlarge)
}

html.bp-xs .uk-section-collapse\@xs {
    padding-top: var(--sizes-section-collapse);
    padding-bottom: var(--sizes-section-collapse)
}

html.bp-s .uk-section\@s {
    padding-top: var(--sizes-section);
    padding-bottom: var(--sizes-section)
}

html.bp-s .uk-section-2xsmall\@s {
    padding-top: var(--sizes-section-2xsmall);
    padding-bottom: var(--sizes-section-2xsmall)
}

html.bp-s .uk-section-xsmall\@s {
    padding-top: var(--sizes-section-xsmall);
    padding-bottom: var(--sizes-section-xsmall)
}

html.bp-s .uk-section-small\@s {
    padding-top: var(--sizes-section-small);
    padding-bottom: var(--sizes-section-small)
}

html.bp-s .uk-section-medium\@s {
    padding-top: var(--sizes-section-medium);
    padding-bottom: var(--sizes-section-medium)
}

html.bp-s .uk-section-large\@s {
    padding-top: var(--sizes-section-large);
    padding-bottom: var(--sizes-section-large)
}

html.bp-s .uk-section-xlarge\@s {
    padding-top: var(--sizes-section-xlarge);
    padding-bottom: var(--sizes-section-xlarge)
}

html.bp-s .uk-section-2xlarge\@s {
    padding-top: var(--sizes-section-2xlarge);
    padding-bottom: var(--sizes-section-2xlarge)
}

html.bp-s .uk-section-collapse\@s {
    padding-top: var(--sizes-section-collapse);
    padding-bottom: var(--sizes-section-collapse)
}

html.bp-m .uk-section\@m {
    padding-top: var(--sizes-section);
    padding-bottom: var(--sizes-section)
}

html.bp-m .uk-section-2xsmall\@m {
    padding-top: var(--sizes-section-2xsmall);
    padding-bottom: var(--sizes-section-2xsmall)
}

html.bp-m .uk-section-xsmall\@m {
    padding-top: var(--sizes-section-xsmall);
    padding-bottom: var(--sizes-section-xsmall)
}

html.bp-m .uk-section-small\@m {
    padding-top: var(--sizes-section-small);
    padding-bottom: var(--sizes-section-small)
}

html.bp-m .uk-section-medium\@m {
    padding-top: var(--sizes-section-medium);
    padding-bottom: var(--sizes-section-medium)
}

html.bp-m .uk-section-large\@m {
    padding-top: var(--sizes-section-large);
    padding-bottom: var(--sizes-section-large)
}

html.bp-m .uk-section-xlarge\@m {
    padding-top: var(--sizes-section-xlarge);
    padding-bottom: var(--sizes-section-xlarge)
}

html.bp-m .uk-section-2xlarge\@m {
    padding-top: var(--sizes-section-2xlarge);
    padding-bottom: var(--sizes-section-2xlarge)
}

html.bp-m .uk-section-collapse\@m {
    padding-top: var(--sizes-section-collapse);
    padding-bottom: var(--sizes-section-collapse)
}

html.bp-l .uk-section\@l {
    padding-top: var(--sizes-section);
    padding-bottom: var(--sizes-section)
}

html.bp-l .uk-section-2xsmall\@l {
    padding-top: var(--sizes-section-2xsmall);
    padding-bottom: var(--sizes-section-2xsmall)
}

html.bp-l .uk-section-xsmall\@l {
    padding-top: var(--sizes-section-xsmall);
    padding-bottom: var(--sizes-section-xsmall)
}

html.bp-l .uk-section-small\@l {
    padding-top: var(--sizes-section-small);
    padding-bottom: var(--sizes-section-small)
}

html.bp-l .uk-section-medium\@l {
    padding-top: var(--sizes-section-medium);
    padding-bottom: var(--sizes-section-medium)
}

html.bp-l .uk-section-large\@l {
    padding-top: var(--sizes-section-large);
    padding-bottom: var(--sizes-section-large)
}

html.bp-l .uk-section-xlarge\@l {
    padding-top: var(--sizes-section-xlarge);
    padding-bottom: var(--sizes-section-xlarge)
}

html.bp-l .uk-section-2xlarge\@l {
    padding-top: var(--sizes-section-2xlarge);
    padding-bottom: var(--sizes-section-2xlarge)
}

html.bp-l .uk-section-collapse\@l {
    padding-top: var(--sizes-section-collapse);
    padding-bottom: var(--sizes-section-collapse)
}

html.bp-xl .uk-section\@xl {
    padding-top: var(--sizes-section);
    padding-bottom: var(--sizes-section)
}

html.bp-xl .uk-section-2xsmall\@xl {
    padding-top: var(--sizes-section-2xsmall);
    padding-bottom: var(--sizes-section-2xsmall)
}

html.bp-xl .uk-section-xsmall\@xl {
    padding-top: var(--sizes-section-xsmall);
    padding-bottom: var(--sizes-section-xsmall)
}

html.bp-xl .uk-section-small\@xl {
    padding-top: var(--sizes-section-small);
    padding-bottom: var(--sizes-section-small)
}

html.bp-xl .uk-section-medium\@xl {
    padding-top: var(--sizes-section-medium);
    padding-bottom: var(--sizes-section-medium)
}

html.bp-xl .uk-section-large\@xl {
    padding-top: var(--sizes-section-large);
    padding-bottom: var(--sizes-section-large)
}

html.bp-xl .uk-section-xlarge\@xl {
    padding-top: var(--sizes-section-xlarge);
    padding-bottom: var(--sizes-section-xlarge)
}

html.bp-xl .uk-section-2xlarge\@xl {
    padding-top: var(--sizes-section-2xlarge);
    padding-bottom: var(--sizes-section-2xlarge)
}

html.bp-xl .uk-section-collapse\@xl {
    padding-top: var(--sizes-section-collapse);
    padding-bottom: var(--sizes-section-collapse)
}

.uk-container {
    height: 100%;
    max-width: var(--sizes-container)
}

.uk-container-expand {
    max-width: none
}

.uk-container-xsmall {
    max-width: var(--sizes-container-xsmall)
}

.uk-container-small {
    max-width: var(--sizes-container-small)
}

.uk-container-large {
    max-width: var(--sizes-container-large)
}

.uk-container-xlarge {
    max-width: var(--sizes-container-xlarge)
}

.uk-container>:last-child {
    margin-bottom: 0!important
}

.uk-container-full,html.bp-l-max .uk-container-full\@l,html.bp-m-max .uk-container-full\@m,html.bp-s-max .uk-container-full\@s,html.bp-xl-max .uk-container-full\@xl,html.bp-xs-max .uk-container-full\@xs {
    max-width: 100%!important;
    padding: 0!important
}

.uk-card-primary {
    background-color: var(--color-gray-10);
    background-color: var(--colors-card-primary);
    color: #fff
}

.uk-card-primary * {
    color: #fff
}

.uk-card-primary .uk-card-header {
    border-bottom: 1px solid rgba(255,255,255,.25)
}

.uk-card-primary .uk-card-footer {
    border-top: 1px solid rgba(255,255,255,.25)
}

.uk-card-primary .uk-card-header {
    border-bottom: 1px solid rgba(0,0,0,.1)
}

.uk-card-primary .uk-card-footer {
    border-top: 1px solid rgba(0,0,0,.1)
}

.uk-card-secondary {
    background-color: var(--color-gray-10);
    background-color: var(--colors-card-secondary);
    color: #fff
}

.uk-card-secondary * {
    color: #fff
}

.uk-card-secondary .uk-card-header {
    border-bottom: 1px solid rgba(255,255,255,.25)
}

.uk-card-secondary .uk-card-footer {
    border-top: 1px solid rgba(255,255,255,.25)
}

.uk-card-secondary .uk-card-header {
    border-bottom: 1px solid rgba(0,0,0,.1)
}

.uk-card-secondary .uk-card-footer {
    border-top: 1px solid rgba(0,0,0,.1)
}

.uk-card-success {
    background-color: var(--color-gray-10);
    background-color: var(--colors-card-success);
    color: #fff
}

.uk-card-success * {
    color: #fff
}

.uk-card-success .uk-card-header {
    border-bottom: 1px solid rgba(255,255,255,.25)
}

.uk-card-success .uk-card-footer {
    border-top: 1px solid rgba(255,255,255,.25)
}

.uk-card-success .uk-card-header {
    border-bottom: 1px solid rgba(0,0,0,.1)
}

.uk-card-success .uk-card-footer {
    border-top: 1px solid rgba(0,0,0,.1)
}

.uk-card-warning {
    background-color: var(--color-gray-10);
    background-color: var(--colors-card-warning);
    color: #fff
}

.uk-card-warning * {
    color: #fff
}

.uk-card-warning .uk-card-header {
    border-bottom: 1px solid rgba(255,255,255,.25)
}

.uk-card-warning .uk-card-footer {
    border-top: 1px solid rgba(255,255,255,.25)
}

.uk-card-warning .uk-card-header {
    border-bottom: 1px solid rgba(0,0,0,.1)
}

.uk-card-warning .uk-card-footer {
    border-top: 1px solid rgba(0,0,0,.1)
}

.uk-card-danger {
    background-color: var(--color-gray-10);
    background-color: var(--colors-card-danger);
    color: #fff
}

.uk-card-danger * {
    color: #fff
}

.uk-card-danger .uk-card-header {
    border-bottom: 1px solid rgba(255,255,255,.25)
}

.uk-card-danger .uk-card-footer {
    border-top: 1px solid rgba(255,255,255,.25)
}

.uk-card-danger .uk-card-header {
    border-bottom: 1px solid rgba(0,0,0,.1)
}

.uk-card-danger .uk-card-footer {
    border-top: 1px solid rgba(0,0,0,.1)
}

.uk-card-muted {
    background-color: var(--color-gray-10)
}

.uk-card-muted .uk-card-header {
    border-bottom: 1px solid rgba(0,0,0,.1)
}

.uk-card-muted .uk-card-footer {
    border-top: 1px solid rgba(0,0,0,.1)
}

.uk-card-body {
    padding: var(--sizes-card)!important
}

.uk-card-collapse,html.bp-l .uk-card-collapse\@l,html.bp-m .uk-card-collapse\@m,html.bp-s .uk-card-collapse\@s,html.bp-xl .uk-card-collapse\@xl,html.bp-xs .uk-card-collapse\@xs {
    padding: var(--sizes-card-collapse)
}

.uk-card-2xsmall,html.bp-l .uk-card-2xsmall\@l,html.bp-m .uk-card-2xsmall\@m,html.bp-s .uk-card-2xsmall\@s,html.bp-xl .uk-card-2xsmall\@xl,html.bp-xs .uk-card-2xsmall\@xs {
    padding: var(--sizes-card-2xsmall)
}

.uk-card-xsmall,html.bp-l .uk-card-xsmall\@l,html.bp-m .uk-card-xsmall\@m,html.bp-s .uk-card-xsmall\@s,html.bp-xl .uk-card-xsmall\@xl,html.bp-xs .uk-card-xsmall\@xs {
    padding: var(--sizes-card-xsmall)
}

.uk-card-small,html.bp-l .uk-card-small\@l,html.bp-m .uk-card-small\@m,html.bp-s .uk-card-small\@s,html.bp-xl .uk-card-small\@xl,html.bp-xs .uk-card-small\@xs {
    padding: var(--sizes-card-small)
}

.uk-card-medium,html.bp-l .uk-card-medium\@l,html.bp-m .uk-card-medium\@m,html.bp-s .uk-card-medium\@s,html.bp-xl .uk-card-medium\@xl,html.bp-xs .uk-card-medium\@xs {
    padding: var(--sizes-card-medium)
}

.uk-card-large,html.bp-l .uk-card-large\@l,html.bp-m .uk-card-large\@m,html.bp-s .uk-card-large\@s,html.bp-xl .uk-card-large\@xl,html.bp-xs .uk-card-large\@xs {
    padding: var(--sizes-card-large)
}

.uk-card-xlarge,html.bp-l .uk-card-xlarge\@l,html.bp-m .uk-card-xlarge\@m,html.bp-s .uk-card-xlarge\@s,html.bp-xl .uk-card-xlarge\@xl,html.bp-xs .uk-card-xlarge\@xs {
    padding: var(--sizes-card-xlarge)
}

.uk-card-2xlarge,html.bp-l .uk-card-2xlarge\@l,html.bp-m .uk-card-2xlarge\@m,html.bp-s .uk-card-2xlarge\@s,html.bp-xl .uk-card-2xlarge\@xl,html.bp-xs .uk-card-2xlarge\@xs {
    padding: var(--sizes-card-2xlarge)
}

.uk-card-3xlarge,html.bp-l .uk-card-3xlarge\@l,html.bp-m .uk-card-3xlarge\@m,html.bp-s .uk-card-3xlarge\@s,html.bp-xl .uk-card-3xlarge\@xl,html.bp-xs .uk-card-3xlarge\@xs {
    padding: var(--sizes-card-3xlarge)
}

.uk-card-border,html.bp-l .uk-card-border\@l,html.bp-m .uk-card-border\@m,html.bp-s .uk-card-border\@s,html.bp-xl .uk-card-border\@xl,html.bp-xs .uk-card-border\@xs {
    border: 1px solid var(--border-color)
}

.uk-nav-scrollspy>li>a {
    opacity: .4
}

.uk-nav-scrollspy>li.uk-active>a,.uk-nav-scrollspy>li:hover>a {
    opacity: 1
}

.uk-nav-default>li>a,.uk-nav-default>li>a:hover {
    color: inherit
}

.uk-nav-default>li.uk-active>a {
    color: var(--color-gray-100)
}

.uk-nav-default>li.uk-active .uk-nav-order {
    visibility: visible
}

.uk-nav-default .uk-nav-sub a {
    color: inherit;
    opacity: .6
}

.uk-nav-order {
    transform: translateY(-100%)!important;
    margin-right: 30px;
    visibility: hidden
}

.uk-dark .uk-nav>li>a,.uk-dark.uk-nav>li>a {
    color: var(--color-gray-10)!important
}

.uk-dark .uk-nav-divider,.uk-dark.uk-nav-divider {
    border-color: rgba(255,255,255,.1)
}

.uk-dark .uk-nav-header,.uk-dark.uk-nav-header {
    color: var(--color-gray-60)!important
}

.uk-navbar {
    flex-direction: column;
    justify-content: center;
    min-height: 48px;
    padding: 16px 0;
    position: relative
}

.uk-navbar-item,.uk-navbar-nav,.uk-navbar-toggle {
    min-height: initial;
    font-family: inherit;
    font-size: inherit;
    font-weight: 400;
    letter-spacing: normal;
    text-transform: initial;
    color: inherit
}

.uk-navbar-divider {
    height: 24px;
    border-left: 1px solid var(--border-color);
    margin-left: var(--header-navbar-row-spacing);
    margin-right: var(--header-navbar-row-spacing)
}

.uk-navbar-center:not(:only-child) {
    position: relative;
    top: unset;
    left: unset;
    transform: unset;
    z-index: auto
}

.uk-navbar>div {
    display: flex;
    align-items: center
}

.uk-navbar-bottom {
    padding-top: 15px
}

.uk-navbar-bottom .uk-navbar-nav {
    overflow: auto;
    white-space: nowrap
}

.uk-navbar-bottom .uk-navbar-nav::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;
    scrollbar-width: none
}

.uk-navbar-divider-column>.uk-navbar-bottom {
    position: relative;
    margin-top: 15px
}

.uk-navbar-divider-column>.uk-navbar-bottom::before {
    content: "";
    display: flex!important;
    border-top: 1px solid rgba(0,0,0,.05);
    position: absolute;
    top: 0;
    left: 7.5px;
    right: 7.5px
}

.uk-navbar-nav>li {
    position: relative
}

.uk-navbar-nav>li ul {
    position: absolute;
    top: 100%;
    min-width: 200px;
    padding: 20px 0;
    margin: 0;
    list-style: none;
    z-index: 1;
    visibility: hidden;
    opacity: 0;
    transition: .2s ease;
    box-shadow: 0 1px 2px rgba(0,0,0,.05)
}

.uk-navbar-nav>li ul {
    background-color: #fff
}

.uk-dark .uk-navbar-nav>li ul,.uk-navbar-nav>li ul.uk-dark {
    background-color: var(--color-gray-90)
}

.uk-navbar-nav>li ul::after,.uk-navbar-nav>li ul::before {
    content: "";
    position: absolute;
    top: 0;
    height: 100%;
    background-color: transparent;
    width: 2px
}

.uk-navbar-nav>li ul::before {
    right: 100%
}

.uk-navbar-nav>li ul::after {
    left: 100%
}

.uk-navbar-nav>li ul li {
    position: relative;
    padding: 0 20px
}

.uk-navbar-nav>li ul li a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 85%;
    color: inherit;
    opacity: .5;
    text-decoration: none;
    line-height: 2rem
}

.uk-navbar-nav>li ul li a {
    color: #000
}

.uk-dark .uk-navbar-nav>li ul li a,.uk-navbar-nav>li ul li a.uk-dark {
    color: #fff!important
}

.uk-navbar-nav>li ul li a:not(:last-child):after {
    content: var(--header-navbar-icon-submenu);
    font-size: var(--header-navbar-icon-submenu-size);
    font-family: "Material Icons"
}

.uk-navbar-nav>li ul li:hover>a {
    opacity: 1
}

.uk-navbar-nav>li ul li:hover>ul {
    visibility: visible;
    opacity: 1
}

.uk-navbar-nav>li>a {
    min-height: initial;
    font-family: inherit;
    font-size: inherit;
    font-weight: 400;
    letter-spacing: normal;
    text-transform: initial;
    color: inherit;
    padding: 0;
    line-height: var(--header-navbar-height)
}

.uk-navbar-nav>li>a:not(:last-child):after {
    content: var(--header-navbar-icon);
    font-size: var(--header-navbar-icon-size);
    font-family: "Material Icons";
    font-weight: 400;
    margin-top: 2px;
    transform: rotate(var(--header-navbar-icon-rotate))
}

.uk-navbar-nav>li>ul.reverse-submenu-open {
    right: 0
}

.uk-navbar-nav>li>ul * ul {
    top: -20px;
    left: calc(100% + 4px)
}

.uk-navbar-nav>li>ul * ul.reverse-submenu-open {
    left: auto;
    right: calc(100% + 4px)
}

.uk-navbar-nav>li:hover>ul {
    visibility: visible;
    opacity: 1
}

.uk-navbar-nav-large>li+li {
    margin-left: 30px
}

html.bp-s .uk-navbar-divider-column>.uk-navbar-bottom::before {
    left: 15px;
    right: 15px
}

.uk-subnav {
    line-height: 1;
    margin: calc(var(--sizes-subnav)/ 2 * -1) calc(var(--sizes-subnav) * -1)!important
}

.uk-subnav>* {
    display: inline-flex;
    align-items: center;
    color: inherit;
    padding: calc(var(--sizes-subnav)/ 2) var(--sizes-subnav)!important;
    margin: 0!important
}

.uk-subnav>*>:first-child {
    font-size: var(--subnav-font-size,inherit);
    font-weight: var(--subnav-font-weight,inherit);
    text-transform: var(--subnav-font-transform,inherit);
    color: inherit
}

.uk-subnav-dot>li+li {
    position: relative
}

.uk-subnav-dot>li+li::before {
    content: ".";
    position: absolute;
    left: 0;
    transform: translateX(-50%)
}

.uk-subnav-pill>*>a {
    background: 0 0!important;
    font-weight: 500!important;
    border-radius: var(--radius);
    color: var(--color-gray-70)!important
}

.uk-subnav-pill>:hover>a {
    color: var(--color-gray-100)!important
}

.uk-subnav-pill>.uk-active>a {
    background-color: var(--color-primary)!important;
    color: #fff!important
}

.uk-subnav-divider>::before {
    margin-right: calc(var(--sizes-subnav)/ 2)
}

.uk-subnav-2xsmall {
    margin: calc(var(--sizes-subnav-2xsmall)/ 2 * -1) calc(var(--sizes-subnav-2xsmall) * -1)!important
}

.uk-subnav-2xsmall>* {
    padding: calc(var(--sizes-subnav-2xsmall)/ 2) var(--sizes-subnav-2xsmall)!important
}

.uk-subnav-xsmall {
    margin: calc(var(--sizes-subnav-xsmall)/ 2 * -1) calc(var(--sizes-subnav-xsmall) * -1)!important
}

.uk-subnav-xsmall>* {
    padding: calc(var(--sizes-subnav-xsmall)/ 2) var(--sizes-subnav-xsmall)!important
}

.uk-subnav-small {
    margin: calc(var(--sizes-subnav-small)/ 2 * -1) calc(var(--sizes-subnav-small) * -1)!important
}

.uk-subnav-small>* {
    padding: calc(var(--sizes-subnav-small)/ 2) var(--sizes-subnav-small)!important
}

.uk-subnav-medium {
    margin: calc(var(--sizes-subnav-medium)/ 2 * -1) calc(var(--sizes-subnav-medium) * -1)!important
}

.uk-subnav-medium>* {
    padding: calc(var(--sizes-subnav-medium)/ 2) var(--sizes-subnav-medium)!important
}

.uk-subnav-large {
    margin: calc(var(--sizes-subnav-large)/ 2 * -1) calc(var(--sizes-subnav-large) * -1)!important
}

.uk-subnav-large>* {
    padding: calc(var(--sizes-subnav-large)/ 2) var(--sizes-subnav-large)!important
}

.uk-subnav-xlarge {
    margin: calc(var(--sizes-subnav-xlarge)/ 2 * -1) calc(var(--sizes-subnav-xlarge) * -1)!important
}

.uk-subnav-xlarge>* {
    padding: calc(var(--sizes-subnav-xlarge)/ 2) var(--sizes-subnav-xlarge)!important
}

.uk-subnav-2xlarge {
    margin: calc(var(--sizes-subnav-2xlarge)/ 2 * -1) calc(var(--sizes-subnav-2xlarge) * -1)!important
}

.uk-subnav-2xlarge>* {
    padding: calc(var(--sizes-subnav-2xlarge)/ 2) var(--sizes-subnav-2xlarge)!important
}

.uk-subnav-collapse {
    margin: calc(var(--sizes-subnav-collapse)/ 2 * -1) calc(var(--sizes-subnav-collapse) * -1)!important
}

.uk-subnav-collapse>* {
    padding: calc(var(--sizes-subnav-collapse)/ 2) var(--sizes-subnav-collapse)!important
}

html.bp-xs .uk-subnav-2xsmall\@xs {
    margin: calc(var(--sizes-subnav-2xsmall)/ 2 * -1) calc(var(--sizes-subnav-2xsmall) * -1)!important
}

html.bp-xs .uk-subnav-2xsmall\@xs>* {
    padding: calc(var(--sizes-subnav-2xsmall)/ 2) var(--sizes-subnav-2xsmall)!important
}

html.bp-xs .uk-subnav-xsmall\@xs {
    margin: calc(var(--sizes-subnav-xsmall)/ 2 * -1) calc(var(--sizes-subnav-xsmall) * -1)!important
}

html.bp-xs .uk-subnav-xsmall\@xs>* {
    padding: calc(var(--sizes-subnav-xsmall)/ 2) var(--sizes-subnav-xsmall)!important
}

html.bp-xs .uk-subnav-small\@xs {
    margin: calc(var(--sizes-subnav-small)/ 2 * -1) calc(var(--sizes-subnav-small) * -1)!important
}

html.bp-xs .uk-subnav-small\@xs>* {
    padding: calc(var(--sizes-subnav-small)/ 2) var(--sizes-subnav-small)!important
}

html.bp-xs .uk-subnav-medium\@xs {
    margin: calc(var(--sizes-subnav-medium)/ 2 * -1) calc(var(--sizes-subnav-medium) * -1)!important
}

html.bp-xs .uk-subnav-medium\@xs>* {
    padding: calc(var(--sizes-subnav-medium)/ 2) var(--sizes-subnav-medium)!important
}

html.bp-xs .uk-subnav-large\@xs {
    margin: calc(var(--sizes-subnav-large)/ 2 * -1) calc(var(--sizes-subnav-large) * -1)!important
}

html.bp-xs .uk-subnav-large\@xs>* {
    padding: calc(var(--sizes-subnav-large)/ 2) var(--sizes-subnav-large)!important
}

html.bp-xs .uk-subnav-xlarge\@xs {
    margin: calc(var(--sizes-subnav-xlarge)/ 2 * -1) calc(var(--sizes-subnav-xlarge) * -1)!important
}

html.bp-xs .uk-subnav-xlarge\@xs>* {
    padding: calc(var(--sizes-subnav-xlarge)/ 2) var(--sizes-subnav-xlarge)!important
}

html.bp-xs .uk-subnav-2xlarge\@xs {
    margin: calc(var(--sizes-subnav-2xlarge)/ 2 * -1) calc(var(--sizes-subnav-2xlarge) * -1)!important
}

html.bp-xs .uk-subnav-2xlarge\@xs>* {
    padding: calc(var(--sizes-subnav-2xlarge)/ 2) var(--sizes-subnav-2xlarge)!important
}

html.bp-xs .uk-subnav-collapse\@xs {
    margin: calc(var(--sizes-subnav-collapse)/ 2 * -1) calc(var(--sizes-subnav-collapse) * -1)!important
}

html.bp-xs .uk-subnav-collapse\@xs>* {
    padding: calc(var(--sizes-subnav-collapse)/ 2) var(--sizes-subnav-collapse)!important
}

html.bp-s .uk-subnav-2xsmall\@s {
    margin: calc(var(--sizes-subnav-2xsmall)/ 2 * -1) calc(var(--sizes-subnav-2xsmall) * -1)!important
}

html.bp-s .uk-subnav-2xsmall\@s>* {
    padding: calc(var(--sizes-subnav-2xsmall)/ 2) var(--sizes-subnav-2xsmall)!important
}

html.bp-s .uk-subnav-xsmall\@s {
    margin: calc(var(--sizes-subnav-xsmall)/ 2 * -1) calc(var(--sizes-subnav-xsmall) * -1)!important
}

html.bp-s .uk-subnav-xsmall\@s>* {
    padding: calc(var(--sizes-subnav-xsmall)/ 2) var(--sizes-subnav-xsmall)!important
}

html.bp-s .uk-subnav-small\@s {
    margin: calc(var(--sizes-subnav-small)/ 2 * -1) calc(var(--sizes-subnav-small) * -1)!important
}

html.bp-s .uk-subnav-small\@s>* {
    padding: calc(var(--sizes-subnav-small)/ 2) var(--sizes-subnav-small)!important
}

html.bp-s .uk-subnav-medium\@s {
    margin: calc(var(--sizes-subnav-medium)/ 2 * -1) calc(var(--sizes-subnav-medium) * -1)!important
}

html.bp-s .uk-subnav-medium\@s>* {
    padding: calc(var(--sizes-subnav-medium)/ 2) var(--sizes-subnav-medium)!important
}

html.bp-s .uk-subnav-large\@s {
    margin: calc(var(--sizes-subnav-large)/ 2 * -1) calc(var(--sizes-subnav-large) * -1)!important
}

html.bp-s .uk-subnav-large\@s>* {
    padding: calc(var(--sizes-subnav-large)/ 2) var(--sizes-subnav-large)!important
}

html.bp-s .uk-subnav-xlarge\@s {
    margin: calc(var(--sizes-subnav-xlarge)/ 2 * -1) calc(var(--sizes-subnav-xlarge) * -1)!important
}

html.bp-s .uk-subnav-xlarge\@s>* {
    padding: calc(var(--sizes-subnav-xlarge)/ 2) var(--sizes-subnav-xlarge)!important
}

html.bp-s .uk-subnav-2xlarge\@s {
    margin: calc(var(--sizes-subnav-2xlarge)/ 2 * -1) calc(var(--sizes-subnav-2xlarge) * -1)!important
}

html.bp-s .uk-subnav-2xlarge\@s>* {
    padding: calc(var(--sizes-subnav-2xlarge)/ 2) var(--sizes-subnav-2xlarge)!important
}

html.bp-s .uk-subnav-collapse\@s {
    margin: calc(var(--sizes-subnav-collapse)/ 2 * -1) calc(var(--sizes-subnav-collapse) * -1)!important
}

html.bp-s .uk-subnav-collapse\@s>* {
    padding: calc(var(--sizes-subnav-collapse)/ 2) var(--sizes-subnav-collapse)!important
}

html.bp-m .uk-subnav-2xsmall\@m {
    margin: calc(var(--sizes-subnav-2xsmall)/ 2 * -1) calc(var(--sizes-subnav-2xsmall) * -1)!important
}

html.bp-m .uk-subnav-2xsmall\@m>* {
    padding: calc(var(--sizes-subnav-2xsmall)/ 2) var(--sizes-subnav-2xsmall)!important
}

html.bp-m .uk-subnav-xsmall\@m {
    margin: calc(var(--sizes-subnav-xsmall)/ 2 * -1) calc(var(--sizes-subnav-xsmall) * -1)!important
}

html.bp-m .uk-subnav-xsmall\@m>* {
    padding: calc(var(--sizes-subnav-xsmall)/ 2) var(--sizes-subnav-xsmall)!important
}

html.bp-m .uk-subnav-small\@m {
    margin: calc(var(--sizes-subnav-small)/ 2 * -1) calc(var(--sizes-subnav-small) * -1)!important
}

html.bp-m .uk-subnav-small\@m>* {
    padding: calc(var(--sizes-subnav-small)/ 2) var(--sizes-subnav-small)!important
}

html.bp-m .uk-subnav-medium\@m {
    margin: calc(var(--sizes-subnav-medium)/ 2 * -1) calc(var(--sizes-subnav-medium) * -1)!important
}

html.bp-m .uk-subnav-medium\@m>* {
    padding: calc(var(--sizes-subnav-medium)/ 2) var(--sizes-subnav-medium)!important
}

html.bp-m .uk-subnav-large\@m {
    margin: calc(var(--sizes-subnav-large)/ 2 * -1) calc(var(--sizes-subnav-large) * -1)!important
}

html.bp-m .uk-subnav-large\@m>* {
    padding: calc(var(--sizes-subnav-large)/ 2) var(--sizes-subnav-large)!important
}

html.bp-m .uk-subnav-xlarge\@m {
    margin: calc(var(--sizes-subnav-xlarge)/ 2 * -1) calc(var(--sizes-subnav-xlarge) * -1)!important
}

html.bp-m .uk-subnav-xlarge\@m>* {
    padding: calc(var(--sizes-subnav-xlarge)/ 2) var(--sizes-subnav-xlarge)!important
}

html.bp-m .uk-subnav-2xlarge\@m {
    margin: calc(var(--sizes-subnav-2xlarge)/ 2 * -1) calc(var(--sizes-subnav-2xlarge) * -1)!important
}

html.bp-m .uk-subnav-2xlarge\@m>* {
    padding: calc(var(--sizes-subnav-2xlarge)/ 2) var(--sizes-subnav-2xlarge)!important
}

html.bp-m .uk-subnav-collapse\@m {
    margin: calc(var(--sizes-subnav-collapse)/ 2 * -1) calc(var(--sizes-subnav-collapse) * -1)!important
}

html.bp-m .uk-subnav-collapse\@m>* {
    padding: calc(var(--sizes-subnav-collapse)/ 2) var(--sizes-subnav-collapse)!important
}

html.bp-l .uk-subnav-2xsmall\@l {
    margin: calc(var(--sizes-subnav-2xsmall)/ 2 * -1) calc(var(--sizes-subnav-2xsmall) * -1)!important
}

html.bp-l .uk-subnav-2xsmall\@l>* {
    padding: calc(var(--sizes-subnav-2xsmall)/ 2) var(--sizes-subnav-2xsmall)!important
}

html.bp-l .uk-subnav-xsmall\@l {
    margin: calc(var(--sizes-subnav-xsmall)/ 2 * -1) calc(var(--sizes-subnav-xsmall) * -1)!important
}

html.bp-l .uk-subnav-xsmall\@l>* {
    padding: calc(var(--sizes-subnav-xsmall)/ 2) var(--sizes-subnav-xsmall)!important
}

html.bp-l .uk-subnav-small\@l {
    margin: calc(var(--sizes-subnav-small)/ 2 * -1) calc(var(--sizes-subnav-small) * -1)!important
}

html.bp-l .uk-subnav-small\@l>* {
    padding: calc(var(--sizes-subnav-small)/ 2) var(--sizes-subnav-small)!important
}

html.bp-l .uk-subnav-medium\@l {
    margin: calc(var(--sizes-subnav-medium)/ 2 * -1) calc(var(--sizes-subnav-medium) * -1)!important
}

html.bp-l .uk-subnav-medium\@l>* {
    padding: calc(var(--sizes-subnav-medium)/ 2) var(--sizes-subnav-medium)!important
}

html.bp-l .uk-subnav-large\@l {
    margin: calc(var(--sizes-subnav-large)/ 2 * -1) calc(var(--sizes-subnav-large) * -1)!important
}

html.bp-l .uk-subnav-large\@l>* {
    padding: calc(var(--sizes-subnav-large)/ 2) var(--sizes-subnav-large)!important
}

html.bp-l .uk-subnav-xlarge\@l {
    margin: calc(var(--sizes-subnav-xlarge)/ 2 * -1) calc(var(--sizes-subnav-xlarge) * -1)!important
}

html.bp-l .uk-subnav-xlarge\@l>* {
    padding: calc(var(--sizes-subnav-xlarge)/ 2) var(--sizes-subnav-xlarge)!important
}

html.bp-l .uk-subnav-2xlarge\@l {
    margin: calc(var(--sizes-subnav-2xlarge)/ 2 * -1) calc(var(--sizes-subnav-2xlarge) * -1)!important
}

html.bp-l .uk-subnav-2xlarge\@l>* {
    padding: calc(var(--sizes-subnav-2xlarge)/ 2) var(--sizes-subnav-2xlarge)!important
}

html.bp-l .uk-subnav-collapse\@l {
    margin: calc(var(--sizes-subnav-collapse)/ 2 * -1) calc(var(--sizes-subnav-collapse) * -1)!important
}

html.bp-l .uk-subnav-collapse\@l>* {
    padding: calc(var(--sizes-subnav-collapse)/ 2) var(--sizes-subnav-collapse)!important
}

html.bp-xl .uk-subnav-2xsmall\@xl {
    margin: calc(var(--sizes-subnav-2xsmall)/ 2 * -1) calc(var(--sizes-subnav-2xsmall) * -1)!important
}

html.bp-xl .uk-subnav-2xsmall\@xl>* {
    padding: calc(var(--sizes-subnav-2xsmall)/ 2) var(--sizes-subnav-2xsmall)!important
}

html.bp-xl .uk-subnav-xsmall\@xl {
    margin: calc(var(--sizes-subnav-xsmall)/ 2 * -1) calc(var(--sizes-subnav-xsmall) * -1)!important
}

html.bp-xl .uk-subnav-xsmall\@xl>* {
    padding: calc(var(--sizes-subnav-xsmall)/ 2) var(--sizes-subnav-xsmall)!important
}

html.bp-xl .uk-subnav-small\@xl {
    margin: calc(var(--sizes-subnav-small)/ 2 * -1) calc(var(--sizes-subnav-small) * -1)!important
}

html.bp-xl .uk-subnav-small\@xl>* {
    padding: calc(var(--sizes-subnav-small)/ 2) var(--sizes-subnav-small)!important
}

html.bp-xl .uk-subnav-medium\@xl {
    margin: calc(var(--sizes-subnav-medium)/ 2 * -1) calc(var(--sizes-subnav-medium) * -1)!important
}

html.bp-xl .uk-subnav-medium\@xl>* {
    padding: calc(var(--sizes-subnav-medium)/ 2) var(--sizes-subnav-medium)!important
}

html.bp-xl .uk-subnav-large\@xl {
    margin: calc(var(--sizes-subnav-large)/ 2 * -1) calc(var(--sizes-subnav-large) * -1)!important
}

html.bp-xl .uk-subnav-large\@xl>* {
    padding: calc(var(--sizes-subnav-large)/ 2) var(--sizes-subnav-large)!important
}

html.bp-xl .uk-subnav-xlarge\@xl {
    margin: calc(var(--sizes-subnav-xlarge)/ 2 * -1) calc(var(--sizes-subnav-xlarge) * -1)!important
}

html.bp-xl .uk-subnav-xlarge\@xl>* {
    padding: calc(var(--sizes-subnav-xlarge)/ 2) var(--sizes-subnav-xlarge)!important
}

html.bp-xl .uk-subnav-2xlarge\@xl {
    margin: calc(var(--sizes-subnav-2xlarge)/ 2 * -1) calc(var(--sizes-subnav-2xlarge) * -1)!important
}

html.bp-xl .uk-subnav-2xlarge\@xl>* {
    padding: calc(var(--sizes-subnav-2xlarge)/ 2) var(--sizes-subnav-2xlarge)!important
}

html.bp-xl .uk-subnav-collapse\@xl {
    margin: calc(var(--sizes-subnav-collapse)/ 2 * -1) calc(var(--sizes-subnav-collapse) * -1)!important
}

html.bp-xl .uk-subnav-collapse\@xl>* {
    padding: calc(var(--sizes-subnav-collapse)/ 2) var(--sizes-subnav-collapse)!important
}

.uk-dark .uk-subnav>*>a:hover,.uk-dark .uk-subnav>.uk-active>a {
    color: var(--color-gray-10)
}

.uk-breadcrumb>*>* {
    color: inherit
}

.uk-breadcrumb>:nth-child(n+2):not(.uk-first-column)::before {
    margin: 0 16px
}

.uk-breadcrumb>*>:last-child>a:not([href]),.uk-breadcrumb>*>:last-child>span,.uk-breadcrumb>:nth-child(n+2):not(.uk-first-column)::before {
    color: var(--color-gray-60)
}

.uk-breadcrumb>*>:last-child>a:not([href]).uk-dark,.uk-breadcrumb>*>:last-child>span.uk-dark,.uk-breadcrumb>:nth-child(n+2):not(.uk-first-column)::before.uk-dark,.uk-dark .uk-breadcrumb>*>:last-child>a:not([href]),.uk-dark .uk-breadcrumb>*>:last-child>span,.uk-dark .uk-breadcrumb>:nth-child(n+2):not(.uk-first-column)::before {
    color: var(--color-gray-40)
}

.uk-pagination>*>* {
    width: 32px;
    height: 32px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0
}

.uk-pagination>.uk-active>* {
    background-color: var(--color-primary);
    color: #fff;
    border-radius: 50%
}

.uk-pagination>*+* {
    margin-left: 4px
}

.uk-alert {
    font-size: var(--alert-font-size,1rem);
    font-weight: var(--alert-font-weight,400);
    font-style: var(--alert-font-style,normal);
    letter-spacing: var(--alert-font-spacing,normal);
    text-transform: var(--alert-font-transform,initial);
    background-color: var(--alert-color-background);
    color: var(--alert-color-text);
    padding: var(--alert-padding);
    padding-right: calc(var(--alert-padding) * 2);
    border-left: var(--alert-border-width) solid;
    border-radius: var(--alert-border-radius)
}

.uk-alert-primary {
    background-color: var(--color-primary-10);
    color: var(--color-primary-60)
}

.uk-alert-secondary {
    background-color: var(--color-secondary-10);
    color: var(--color-secondary-60)
}

.uk-alert-tertiary {
    background-color: var(--color-tertiary-10);
    color: var(--color-tertiary-60)
}

.uk-alert-quaternary {
    background-color: var(--color-quaternary-10);
    color: var(--color-quaternary-60)
}

.uk-alert-info {
    background-color: var(--color-info-10);
    color: var(--color-info-60)
}

.uk-alert-success {
    background-color: var(--color-success-10);
    color: var(--color-success-60)
}

.uk-alert-warning {
    background-color: var(--color-warning-10);
    color: var(--color-warning-60)
}

.uk-alert-danger {
    background-color: var(--color-danger-10);
    color: var(--color-danger-60)
}

.uk-alert-gray {
    background-color: var(--color-gray-10);
    color: var(--color-gray-60)
}

.uk-alert-default {
    background-color: var(--color-default-10);
    color: var(--color-default-60)
}

.uk-alert-darkgrey {
    background-color: var(--color-darkgrey-10);
    color: var(--color-darkgrey-60)
}

.uk-alert-light {
    background-color: var(--color-light-10);
    color: var(--color-light-60)
}

.uk-alert-muted {
    background-color: var(--color-muted-10);
    color: var(--color-muted-60)
}

.uk-alert-close {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 8px;
    bottom: 0;
    margin: auto;
    opacity: 1
}

.uk-label {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: .75rem;
    font-weight: 400;
    line-height: 1;
    text-transform: unset;
    padding: 4px 8px;
    min-height: 16px;
    border-radius: var(--radius)
}

.uk-label-gradient {
    background-color: var(--gradient-first);
    background-image: linear-gradient(var(--gradient-angle),var(--gradient-first),var(--gradient-second));
    color: #fff!important
}

.uk-label-primary {
    background-color: var(--color-primary)
}

.uk-label-secondary {
    background-color: var(--color-secondary)
}

.uk-label-tertiary {
    background-color: var(--color-tertiary)
}

.uk-label-quaternary {
    background-color: var(--color-quaternary)
}

.uk-label-info {
    background-color: var(--color-info)
}

.uk-label-success {
    background-color: var(--color-success)
}

.uk-label-warning {
    background-color: var(--color-warning)
}

.uk-label-danger {
    background-color: var(--color-danger)
}

.uk-label-gray {
    background-color: var(--color-gray)
}

.uk-label-default {
    background-color: var(--color-default)
}

.uk-label-default {
    color: var(--color-gray-80)!important;
    background-color: #fff!important
}

.uk-dark .uk-label-default,.uk-label-default.uk-dark {
    color: #fff!important;
    background-color: var(--color-gray-90)!important
}

.uk-label-darkgrey {
    background-color: var(--color-darkgrey)
}

.uk-label-light {
    background-color: var(--color-light)
}

.uk-label-muted {
    background-color: var(--color-muted)
}

.uk-accordion-title {
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    font-size: var(--accordion-font-size,1rem);
    font-weight: var(--accordion-font-weight,700);
    text-transform: var(--accordion-font-transform,initial);
    color: var(--accordion-color-text);
    border: 0
}

.uk-accordion>li+li {
    margin-top: var(--accordion-margin);
    padding-top: var(--accordion-padding);
    border-top: var(--accordion-border-width) solid var(--accordion-border-color)
}

.uk-accordion>li.uk-open .uk-accordion-title {
    color: var(--accordion-color-text-active)
}

.uk-accordion-divider {
    padding-bottom: 30px!important;
    border-bottom: 1px solid rgba(190,190,190,.4)
}

.uk-accordion-divider>li+li {
    margin-top: 30px!important;
    padding-top: 30px!important;
    border-top: 1px solid rgba(190,190,190,.4)
}

[class*=uk-modal-close-] {
    background: 0 0;
    border: 0;
    outline: 0;
    padding: 0;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center
}

[class*=uk-modal-close-]>i {
    transition: transform .7s cubic-bezier(.17,.67,0,1.01)
}

[class*=uk-modal-close-]>svg {
    stroke-width: 1.5px
}

[class*=uk-modal-close-]:hover>* {
    transform: rotate(90deg)
}

.uk-modal {
    z-index: 9999
}

.uk-modal-video {
    z-index: 2000
}

.uk-dark .uk-modal-dialog,.uk-dark.uk-modal-dialog {
    background-color: var(--color-gray-90)
}

.swiper-hide-wrap .swiper-slide .swiper-hide {
    visibility: visible;
    opacity: 1;
    transition: visibility .3s,opacity .3s
}

.swiper-hide-wrap .swiper-slide:not(.swiper-slide-active) .swiper-hide {
    visibility: hidden;
    opacity: 0
}

.swiper-opacity .swiper-slide {
    opacity: .4
}

.swiper-opacity .swiper-slide.swiper-slide-thumb-active {
    opacity: 1
}

.swiper-triangle .swiper-slide.swiper-slide-thumb-active::before {
    content: "";
    position: absolute;
    top: 0;
    width: 0;
    height: 0;
    border-width: 10px 12px 0 12px;
    border-style: solid;
    border-color: var(--color-gray-10) transparent transparent transparent;
    transform: translateX(-50%)
}

.swiper-wrapper {
    will-change: transform
}

.swiper-nav-hide {
    opacity: .2;
    cursor: default!important
}

.uk-disable {
    opacity: .25!important;
    cursor: default;
    color: inherit!important
}

.swiper.swiper-match .swiper-slide {
    height: auto!important
}

.swiper-thumbs .swiper-slide {
    cursor: pointer
}

.swiper .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background-color: var(--color-gray-100);
    opacity: .1
}

.swiper .swiper-pagination-bullet+.swiper-pagination-bullet {
    margin-left: 15px!important
}

.swiper .swiper-pagination-bullet-active {
    background-color: var(--color-gray-100);
    opacity: 1
}

.swiper .swiper-slide-thumb-active {
    color: var(--color-gray-100)
}

.swiper.swiper-brands-three .swiper-slide {
    transition: scale .2s ease
}

.swiper.swiper-brands-three .swiper-slide.swiper-slide-thumb-active>* {
    transform: scale(1.65)
}

.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction {
    bottom: 0!important
}

.swiper-progress-bar {
    position: relative;
    width: 100%;
    display: block;
    z-index: 1;
    height: 3px
}

.swiper-progress-bar .slide_progress-bar {
    position: absolute;
    height: 3px;
    background: var(--color-gray-20);
    width: auto;
    clear: both;
    opacity: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 5px
}

.swiper-progress-bar .slide_progress-bar:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: var(--color-primary);
    width: 0;
    height: 100%;
    border-radius: 5px
}

.swiper-progress-bar.active .slide_progress-bar {
    opacity: 1
}

.swiper-progress-bar.animate .slide_progress-bar:after {
    width: 100%;
    transition: width linear;
    transition-delay: unset;
    transition-duration: 5s
}

.uk-dark .swiper .swiper-pagination-bullet {
    background-color: var(--color-gray-10);
    opacity: .1
}

.uk-dark .swiper .swiper-pagination-bullet-active {
    background-color: var(--color-gray-10);
    opacity: 1
}

.uk-dark .swiper .swiper-slide-thumb-active {
    color: var(--color-gray-10);
    border-top-color: var(--color-gray-10)
}

.uk-dark .swiper::before {
    border-bottom-color: rgba(255,255,255,.05)
}

.uk-dark .swiper.swiper-triangle .swiper-slide.swiper-slide-thumb-active::before {
    border-top-color: rgba(255,255,255,.05)
}

.uk-dark .swiper .slide_progress-bar {
    background-color: rgba(255,255,255,.05)
}

.uk-dark .swiper .slide_progress-bar:after {
    background-color: #fff
}

.uk-offcanvas {
    --offcanvas-width: 100%;
    --offcanvas-desktop-width: 370px
}

.uk-offcanvas-close {
    top: inherit;
    right: inherit;
    padding: 0;
    cursor: pointer
}

.uk-offcanvas-close:hover {
    opacity: .6
}

.uk-offcanvas-bar-panel {
    position: absolute;
    top: 0;
    bottom: 0;
    left: calc(var(--offcanvas-width) * -1);
    box-sizing: border-box;
    width: var(--offcanvas-width);
    padding: 0;
    background: #fff;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch
}

.uk-offcanvas-bar-animation {
    transition: left .3s ease-out
}

@media (min-width: 960px) {
    .uk-offcanvas-bar-panel {
        left:calc(var(--offcanvas-desktop-width) * -1);
        width: var(--offcanvas-desktop-width);
        padding: 0
    }
}

.uk-offcanvas-flip .uk-offcanvas-bar-panel {
    left: auto;
    right: calc(var(--offcanvas-width) * -1)
}

.uk-offcanvas-flip .uk-offcanvas-bar-animation {
    transition-property: right
}

.uk-offcanvas-flip .uk-open>.uk-offcanvas-bar-panel {
    left: auto;
    right: 0
}

@media (min-width: 960px) {
    .uk-offcanvas-flip .uk-offcanvas-bar-panel {
        right:calc(var(--offcanvas-desktop-width) * -1)
    }

    .uk-offcanvas-flip.uk-offcanvas-container-animation {
        left: calc(var(--offcanvas-desktop-width) * -1)
    }
}

.uk-offcanvas-flip .uk-offcanvas-reveal .uk-offcanvas-bar-panel {
    left: auto;
    right: 0
}

.uk-offcanvas-reveal .uk-offcanvas-bar-panel {
    left: 0
}

.uk-open>.uk-offcanvas-bar-panel {
    left: 0
}

.uk-open>.uk-offcanvas-reveal {
    width: var(--offcanvas-width)
}

@media (min-width: 960px) {
    .uk-open>.uk-offcanvas-reveal {
        width:var(--offcanvas-desktop-width)
    }
}

.uk-tab {
    flex-wrap: nowrap;
    overflow-x: auto;
    white-space: nowrap
}

.uk-tab::before {
    border-color: rgba(0,0,0,.15)
}

.uk-tab::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;
    scrollbar-width: none
}

.uk-tab>li>a {
    position: relative;
    font-size: var(--tab-font-size,1rem);
    font-weight: var(--tab-font-weight,700);
    text-transform: var(--tab-font-transform,initial);
    color: var(--tab-color-text);
    border-bottom-width: var(--tab-border-width)
}

.uk-tab>li.uk-active>a {
    border-color: var(--tab-border-color)
}

.uk-tab-left>*>a {
    border-right-width: var(--tab-border-width)
}

.uk-tab-right>*>a {
    border-left-width: var(--tab-border-width)
}

.uk-tab-bottom>*>a {
    border-top-width: var(--tab-border-width)
}

.uk-tab-minimal::before {
    display: none
}

.uk-tab-minimal>*>a {
    padding: var(--tab-padding);
    padding-bottom: calc(var(--tab-padding) + var(--tab-border-width));
    border: 0
}

.uk-tab-minimal>*>a::after {
    content: "";
    width: 100%;
    height: var(--tab-border-width);
    background-color: transparent;
    left: 0;
    bottom: 0;
    position: absolute;
    border-radius: var(--tab-border-radius)
}

.uk-tab-minimal>.uk-active>a {
    color: var(--tab-color-text-active)
}

.uk-tab-minimal>.uk-active>a::after {
    background-color: var(--tab-border-color)
}

.uk-tab-features>*>a>* {
    border: 1px solid transparent
}

.uk-tab-features>.uk-active>a>* {
    background-color: #fff;
    border-color: rgba(0,0,0,.08);
    box-shadow: 0 5px 10px rgba(0,0,0,.05);
    transition: none!important
}

.uk-tab-switch {
    display: inline-flex;
    padding: 0;
    margin: 0
}

.uk-tab-switch>li {
    padding: 0;
    margin: 0
}

.uk-tab-switch>li>a {
    min-width: 120px;
    padding: 10px 0;
    border: 0;
    color: var(--color-gray-90);
    border-radius: var(--radius)
}

.uk-tab-switch>li.uk-active>a {
    background-color: var(--color-primary);
    color: #fff
}

.uk-tab-switch::before {
    display: none
}

.uk-tab-swiper {
    position: relative;
    top: -1px
}

.uk-tab-swiper::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    border-bottom: 1px solid var(--color-gray-20)
}

.uk-tab-swiper .swiper-slide {
    border-top: 1px solid transparent
}

.uk-tab-swiper .swiper-slide-thumb-active {
    border-color: var(--color-primary)
}

.uk-dark .uk-tab::before,.uk-dark.uk-tab::before {
    border-color: rgba(255,255,255,.15)
}

.uk-dark .uk-tab>li>a,.uk-dark .uk-tab>li>a:hover,.uk-dark.uk-tab>li>a,.uk-dark.uk-tab>li>a:hover {
    color: var(--color-gray-10)
}

.uk-dark .uk-tab>li.uk-active>a,.uk-dark.uk-tab>li.uk-active>a {
    color: var(--color-gray-10)
}

.uk-droplist {
    display: flex;
    align-items: center;
    min-width: 200px;
    font-size: 1rem;
    font-weight: 500;
    position: relative;
    z-index: 3;
    cursor: pointer;
    user-select: none;
    box-shadow: 0 0 0 1px var(--border-color)
}

.uk-droplist>div {
    position: relative;
    display: flex;
    flex-basis: 100%;
    flex: 1;
    padding: 8px;
    z-index: 4
}

.uk-droplist-dropdown {
    display: none;
    background: #fff;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin-top: 0;
    opacity: 0;
    padding-left: 0;
    z-index: 2;
    box-shadow: 0 1px 5px 0 rgba(150,150,150,.2);
    pointer-events: none;
    user-select: none;
    list-style: none
}

.uk-droplist-dropdown li a {
    display: block;
    padding: 8px 12px;
    text-decoration: none;
    color: var(--color-gray-70)
}

.uk-droplist-dropdown li.uk-active {
    background-color: var(--color-gray-20);
    color: var(--color-gray-100)
}

.uk-droplist-dropdown li:hover a {
    color: var(--color-gray-100)
}

.uk-droplist.uk-active .uk-droplist-dropdown {
    display: block;
    opacity: 1;
    pointer-events: auto
}

.uk-droplist.uk-active::after {
    transform: rotate(90deg)
}

.uk-dark .uk-droplist-dropdown {
    background-color: var(--color-gray-80)
}

.uk-dark .uk-droplist-dropdown li a {
    color: var(--color-gray-40)
}

.uk-dark .uk-droplist-dropdown li.uk-active {
    background-color: var(--color-gray-70);
    color: var(--color-gray-10)
}

.uk-dark .uk-droplist-dropdown li:hover a {
    color: var(--color-gray-10)
}

.uk-dark .uk-droplist>div {
    background-color: var(--color-gray-80)
}

.uk-width-2xsmall {
    width: var(--sizes-width-2xsmall)!important
}

.uk-width-xsmall {
    width: var(--sizes-width-xsmall)!important
}

.uk-width-small {
    width: var(--sizes-width-small)!important
}

.uk-width-medium {
    width: var(--sizes-width-medium)!important
}

.uk-width-large {
    width: var(--sizes-width-large)!important
}

.uk-width-xlarge {
    width: var(--sizes-width-xlarge)!important
}

.uk-width-2xlarge {
    width: var(--sizes-width-2xlarge)!important
}

.uk-width-3xlarge {
    width: var(--sizes-width-3xlarge)!important
}

html.bp-xs .uk-width-2xsmall\@xs {
    width: var(--sizes-width-2xsmall)!important
}

html.bp-xs .uk-width-xsmall\@xs {
    width: var(--sizes-width-xsmall)!important
}

html.bp-xs .uk-width-small\@xs {
    width: var(--sizes-width-small)!important
}

html.bp-xs .uk-width-medium\@xs {
    width: var(--sizes-width-medium)!important
}

html.bp-xs .uk-width-large\@xs {
    width: var(--sizes-width-large)!important
}

html.bp-xs .uk-width-xlarge\@xs {
    width: var(--sizes-width-xlarge)!important
}

html.bp-xs .uk-width-2xlarge\@xs {
    width: var(--sizes-width-2xlarge)!important
}

html.bp-xs .uk-width-3xlarge\@xs {
    width: var(--sizes-width-3xlarge)!important
}

html.bp-s .uk-width-2xsmall\@s {
    width: var(--sizes-width-2xsmall)!important
}

html.bp-s .uk-width-xsmall\@s {
    width: var(--sizes-width-xsmall)!important
}

html.bp-s .uk-width-small\@s {
    width: var(--sizes-width-small)!important
}

html.bp-s .uk-width-medium\@s {
    width: var(--sizes-width-medium)!important
}

html.bp-s .uk-width-large\@s {
    width: var(--sizes-width-large)!important
}

html.bp-s .uk-width-xlarge\@s {
    width: var(--sizes-width-xlarge)!important
}

html.bp-s .uk-width-2xlarge\@s {
    width: var(--sizes-width-2xlarge)!important
}

html.bp-s .uk-width-3xlarge\@s {
    width: var(--sizes-width-3xlarge)!important
}

html.bp-m .uk-width-2xsmall\@m {
    width: var(--sizes-width-2xsmall)!important
}

html.bp-m .uk-width-xsmall\@m {
    width: var(--sizes-width-xsmall)!important
}

html.bp-m .uk-width-small\@m {
    width: var(--sizes-width-small)!important
}

html.bp-m .uk-width-medium\@m {
    width: var(--sizes-width-medium)!important
}

html.bp-m .uk-width-large\@m {
    width: var(--sizes-width-large)!important
}

html.bp-m .uk-width-xlarge\@m {
    width: var(--sizes-width-xlarge)!important
}

html.bp-m .uk-width-2xlarge\@m {
    width: var(--sizes-width-2xlarge)!important
}

html.bp-m .uk-width-3xlarge\@m {
    width: var(--sizes-width-3xlarge)!important
}

html.bp-l .uk-width-2xsmall\@l {
    width: var(--sizes-width-2xsmall)!important
}

html.bp-l .uk-width-xsmall\@l {
    width: var(--sizes-width-xsmall)!important
}

html.bp-l .uk-width-small\@l {
    width: var(--sizes-width-small)!important
}

html.bp-l .uk-width-medium\@l {
    width: var(--sizes-width-medium)!important
}

html.bp-l .uk-width-large\@l {
    width: var(--sizes-width-large)!important
}

html.bp-l .uk-width-xlarge\@l {
    width: var(--sizes-width-xlarge)!important
}

html.bp-l .uk-width-2xlarge\@l {
    width: var(--sizes-width-2xlarge)!important
}

html.bp-l .uk-width-3xlarge\@l {
    width: var(--sizes-width-3xlarge)!important
}

html.bp-xl .uk-width-2xsmall\@xl {
    width: var(--sizes-width-2xsmall)!important
}

html.bp-xl .uk-width-xsmall\@xl {
    width: var(--sizes-width-xsmall)!important
}

html.bp-xl .uk-width-small\@xl {
    width: var(--sizes-width-small)!important
}

html.bp-xl .uk-width-medium\@xl {
    width: var(--sizes-width-medium)!important
}

html.bp-xl .uk-width-large\@xl {
    width: var(--sizes-width-large)!important
}

html.bp-xl .uk-width-xlarge\@xl {
    width: var(--sizes-width-xlarge)!important
}

html.bp-xl .uk-width-2xlarge\@xl {
    width: var(--sizes-width-2xlarge)!important
}

html.bp-xl .uk-width-3xlarge\@xl {
    width: var(--sizes-width-3xlarge)!important
}

.uk-height-2xsmall {
    height: var(--sizes-height-2xsmall)!important
}

.uk-height-xsmall {
    height: var(--sizes-height-xsmall)!important
}

.uk-height-small {
    height: var(--sizes-height-small)!important
}

.uk-height-medium {
    height: var(--sizes-height-medium)!important
}

.uk-height-large {
    height: var(--sizes-height-large)!important
}

.uk-height-xlarge {
    height: var(--sizes-height-xlarge)!important
}

.uk-height-2xlarge {
    height: var(--sizes-height-2xlarge)!important
}

.uk-height-3xlarge {
    height: var(--sizes-height-3xlarge)!important
}

.uk-height-4xlarge {
    height: var(--sizes-height-4xlarge)!important
}

html.bp-xs .uk-height-2xsmall\@xs {
    height: var(--sizes-height-2xsmall)!important
}

html.bp-xs .uk-height-xsmall\@xs {
    height: var(--sizes-height-xsmall)!important
}

html.bp-xs .uk-height-small\@xs {
    height: var(--sizes-height-small)!important
}

html.bp-xs .uk-height-medium\@xs {
    height: var(--sizes-height-medium)!important
}

html.bp-xs .uk-height-large\@xs {
    height: var(--sizes-height-large)!important
}

html.bp-xs .uk-height-xlarge\@xs {
    height: var(--sizes-height-xlarge)!important
}

html.bp-xs .uk-height-2xlarge\@xs {
    height: var(--sizes-height-2xlarge)!important
}

html.bp-xs .uk-height-3xlarge\@xs {
    height: var(--sizes-height-3xlarge)!important
}

html.bp-xs .uk-height-4xlarge\@xs {
    height: var(--sizes-height-4xlarge)!important
}

html.bp-s .uk-height-2xsmall\@s {
    height: var(--sizes-height-2xsmall)!important
}

html.bp-s .uk-height-xsmall\@s {
    height: var(--sizes-height-xsmall)!important
}

html.bp-s .uk-height-small\@s {
    height: var(--sizes-height-small)!important
}

html.bp-s .uk-height-medium\@s {
    height: var(--sizes-height-medium)!important
}

html.bp-s .uk-height-large\@s {
    height: var(--sizes-height-large)!important
}

html.bp-s .uk-height-xlarge\@s {
    height: var(--sizes-height-xlarge)!important
}

html.bp-s .uk-height-2xlarge\@s {
    height: var(--sizes-height-2xlarge)!important
}

html.bp-s .uk-height-3xlarge\@s {
    height: var(--sizes-height-3xlarge)!important
}

html.bp-s .uk-height-4xlarge\@s {
    height: var(--sizes-height-4xlarge)!important
}

html.bp-m .uk-height-2xsmall\@m {
    height: var(--sizes-height-2xsmall)!important
}

html.bp-m .uk-height-xsmall\@m {
    height: var(--sizes-height-xsmall)!important
}

html.bp-m .uk-height-small\@m {
    height: var(--sizes-height-small)!important
}

html.bp-m .uk-height-medium\@m {
    height: var(--sizes-height-medium)!important
}

html.bp-m .uk-height-large\@m {
    height: var(--sizes-height-large)!important
}

html.bp-m .uk-height-xlarge\@m {
    height: var(--sizes-height-xlarge)!important
}

html.bp-m .uk-height-2xlarge\@m {
    height: var(--sizes-height-2xlarge)!important
}

html.bp-m .uk-height-3xlarge\@m {
    height: var(--sizes-height-3xlarge)!important
}

html.bp-m .uk-height-4xlarge\@m {
    height: var(--sizes-height-4xlarge)!important
}

html.bp-l .uk-height-2xsmall\@l {
    height: var(--sizes-height-2xsmall)!important
}

html.bp-l .uk-height-xsmall\@l {
    height: var(--sizes-height-xsmall)!important
}

html.bp-l .uk-height-small\@l {
    height: var(--sizes-height-small)!important
}

html.bp-l .uk-height-medium\@l {
    height: var(--sizes-height-medium)!important
}

html.bp-l .uk-height-large\@l {
    height: var(--sizes-height-large)!important
}

html.bp-l .uk-height-xlarge\@l {
    height: var(--sizes-height-xlarge)!important
}

html.bp-l .uk-height-2xlarge\@l {
    height: var(--sizes-height-2xlarge)!important
}

html.bp-l .uk-height-3xlarge\@l {
    height: var(--sizes-height-3xlarge)!important
}

html.bp-l .uk-height-4xlarge\@l {
    height: var(--sizes-height-4xlarge)!important
}

html.bp-xl .uk-height-2xsmall\@xl {
    height: var(--sizes-height-2xsmall)!important
}

html.bp-xl .uk-height-xsmall\@xl {
    height: var(--sizes-height-xsmall)!important
}

html.bp-xl .uk-height-small\@xl {
    height: var(--sizes-height-small)!important
}

html.bp-xl .uk-height-medium\@xl {
    height: var(--sizes-height-medium)!important
}

html.bp-xl .uk-height-large\@xl {
    height: var(--sizes-height-large)!important
}

html.bp-xl .uk-height-xlarge\@xl {
    height: var(--sizes-height-xlarge)!important
}

html.bp-xl .uk-height-2xlarge\@xl {
    height: var(--sizes-height-2xlarge)!important
}

html.bp-xl .uk-height-3xlarge\@xl {
    height: var(--sizes-height-3xlarge)!important
}

html.bp-xl .uk-height-4xlarge\@xl {
    height: var(--sizes-height-4xlarge)!important
}

.uk-background-gradient {
    background-color: var(--gradient-first);
    background-image: linear-gradient(var(--gradient-angle),var(--gradient-first),var(--gradient-second))
}

.uk-background-primary {
    background-color: var(--color-primary)
}

.uk-background-secondary {
    background-color: var(--color-secondary)
}

.uk-background-tertiary {
    background-color: var(--color-tertiary)
}

.uk-background-quaternary {
    background-color: var(--color-quaternary)
}

.uk-background-info {
    background-color: var(--color-info)
}

.uk-background-success {
    background-color: var(--color-success)
}

.uk-background-warning {
    background-color: var(--color-warning)
}

.uk-background-danger {
    background-color: var(--color-danger)
}

.uk-background-gray {
    background-color: var(--color-gray)
}

.uk-background-default {
    background-color: var(--color-default)
}

.uk-background-darkgrey {
    background-color: var(--color-darkgrey)
}

.uk-background-light {
    background-color: var(--color-light)
}

.uk-background-muted {
    background-color: var(--color-gray-10)
}

html.bp-s .uk-flex\@s {
    display: flex
}

html.bp-s .uk-flex-inline\@s {
    display: inline-flex
}

html.bp-s .uk-flex-top\@s {
    align-items: flex-start
}

html.bp-s .uk-flex-middle\@s {
    align-items: center
}

html.bp-s .uk-flex-bottom\@s {
    align-items: flex-end
}

html.bp-s .uk-flex-stretch\@s {
    align-items: stretch
}

html.bp-s .uk-flex-left\@s {
    justify-content: flex-start
}

html.bp-s .uk-flex-right\@s {
    justify-content: flex-end
}

html.bp-s .uk-flex-row\@s {
    flex-direction: row
}

html.bp-s .uk-flex-row-reverse\@s {
    flex-direction: row-reverse
}

html.bp-s .uk-flex-column\@s {
    flex-direction: column
}

html.bp-s .uk-flex-column-reverse\@s {
    flex-direction: column-reverse
}

html.bp-s .uk-flex-1\@s {
    flex: 1
}

html.bp-s .uk-flex-none\@s {
    flex: 0
}

html.bp-s .uk-flex-auto\@s {
    flex: auto
}

html.bp-m .uk-flex\@m {
    display: flex
}

html.bp-m .uk-flex-inline\@m {
    display: inline-flex
}

html.bp-m .uk-flex-top\@m {
    align-items: flex-start
}

html.bp-m .uk-flex-middle\@m {
    align-items: center
}

html.bp-m .uk-flex-bottom\@m {
    align-items: flex-end
}

html.bp-m .uk-flex-stretch\@m {
    align-items: stretch
}

html.bp-m .uk-flex-left\@m {
    justify-content: flex-start
}

html.bp-m .uk-flex-right\@m {
    justify-content: flex-end
}

html.bp-m .uk-flex-row\@m {
    flex-direction: row
}

html.bp-m .uk-flex-row-reverse\@m {
    flex-direction: row-reverse
}

html.bp-m .uk-flex-column\@m {
    flex-direction: column
}

html.bp-m .uk-flex-column-reverse\@m {
    flex-direction: column-reverse
}

html.bp-m .uk-flex-1\@m {
    flex: 1
}

html.bp-m .uk-flex-none\@m {
    flex: 0
}

html.bp-m .uk-flex-auto\@m {
    flex: auto
}

html.bp-l .uk-flex\@l {
    display: flex
}

html.bp-l .uk-flex-inline\@l {
    display: inline-flex
}

html.bp-l .uk-flex-top\@l {
    align-items: flex-start
}

html.bp-l .uk-flex-middle\@l {
    align-items: center
}

html.bp-l .uk-flex-bottom\@l {
    align-items: flex-end
}

html.bp-l .uk-flex-stretch\@l {
    align-items: stretch
}

html.bp-l .uk-flex-left\@l {
    justify-content: flex-start
}

html.bp-l .uk-flex-right\@l {
    justify-content: flex-end
}

html.bp-l .uk-flex-row\@l {
    flex-direction: row
}

html.bp-l .uk-flex-row-reverse\@l {
    flex-direction: row-reverse
}

html.bp-l .uk-flex-column\@l {
    flex-direction: column
}

html.bp-l .uk-flex-column-reverse\@l {
    flex-direction: column-reverse
}

html.bp-l .uk-flex-1\@l {
    flex: 1
}

html.bp-l .uk-flex-none\@l {
    flex: 0
}

html.bp-l .uk-flex-auto\@l {
    flex: auto
}

html.bp-xl .uk-flex\@xl {
    display: flex
}

html.bp-xl .uk-flex-inline\@xl {
    display: inline-flex
}

html.bp-xl .uk-flex-top\@xl {
    align-items: flex-start
}

html.bp-xl .uk-flex-middle\@xl {
    align-items: center
}

html.bp-xl .uk-flex-bottom\@xl {
    align-items: flex-end
}

html.bp-xl .uk-flex-stretch\@xl {
    align-items: stretch
}

html.bp-xl .uk-flex-left\@xl {
    justify-content: flex-start
}

html.bp-xl .uk-flex-right\@xl {
    justify-content: flex-end
}

html.bp-xl .uk-flex-row\@xl {
    flex-direction: row
}

html.bp-xl .uk-flex-row-reverse\@xl {
    flex-direction: row-reverse
}

html.bp-xl .uk-flex-column\@xl {
    flex-direction: column
}

html.bp-xl .uk-flex-column-reverse\@xl {
    flex-direction: column-reverse
}

html.bp-xl .uk-flex-1\@xl {
    flex: 1
}

html.bp-xl .uk-flex-none\@xl {
    flex: 0
}

html.bp-xl .uk-flex-auto\@xl {
    flex: auto
}

.uk-flex-left {
    justify-content: flex-start
}

.uk-flex-right {
    justify-content: flex-end
}

.uk-flex-between {
    justify-content: space-between
}

[class*=uk-flex] {
    display: flex
}

.uk-margin,html.bp-l .uk-margin\@l,html.bp-m .uk-margin\@m,html.bp-s .uk-margin\@s,html.bp-xl .uk-margin\@xl,html.bp-xs .uk-margin\@xs {
    margin-bottom: var(--sizes-spacing)!important
}

.uk-margin-top,html.bp-l .uk-margin-top\@l,html.bp-m .uk-margin-top\@m,html.bp-s .uk-margin-top\@s,html.bp-xl .uk-margin-top\@xl,html.bp-xs .uk-margin-top\@xs {
    margin-top: var(--sizes-spacing)!important
}

.uk-margin-right,html.bp-l .uk-margin-right\@l,html.bp-m .uk-margin-right\@m,html.bp-s .uk-margin-right\@s,html.bp-xl .uk-margin-right\@xl,html.bp-xs .uk-margin-right\@xs {
    margin-right: var(--sizes-spacing)!important
}

.uk-margin-left,html.bp-l .uk-margin-left\@l,html.bp-m .uk-margin-left\@m,html.bp-s .uk-margin-left\@s,html.bp-xl .uk-margin-left\@xl,html.bp-xs .uk-margin-left\@xs {
    margin-left: var(--sizes-spacing)!important
}

.uk-margin-bottom,html.bp-l .uk-margin-bottom\@l,html.bp-m .uk-margin-bottom\@m,html.bp-s .uk-margin-bottom\@s,html.bp-xl .uk-margin-bottom\@xl,html.bp-xs .uk-margin-bottom\@xs {
    margin-bottom: var(--sizes-spacing)!important
}

.uk-padding,html.bp-l .uk-padding\@l,html.bp-m .uk-padding\@m,html.bp-s .uk-padding\@s,html.bp-xl .uk-padding\@xl,html.bp-xs .uk-padding\@xs {
    padding: var(--sizes-spacing)!important
}

.uk-padding-top,html.bp-l .uk-padding-top\@l,html.bp-m .uk-padding-top\@m,html.bp-s .uk-padding-top\@s,html.bp-xl .uk-padding-top\@xl,html.bp-xs .uk-padding-top\@xs {
    padding-top: var(--sizes-spacing)!important
}

.uk-padding-right,html.bp-l .uk-padding-right\@l,html.bp-m .uk-padding-right\@m,html.bp-s .uk-padding-right\@s,html.bp-xl .uk-padding-right\@xl,html.bp-xs .uk-padding-right\@xs {
    padding-right: var(--sizes-spacing)!important
}

.uk-padding-left,html.bp-l .uk-padding-left\@l,html.bp-m .uk-padding-left\@m,html.bp-s .uk-padding-left\@s,html.bp-xl .uk-padding-left\@xl,html.bp-xs .uk-padding-left\@xs {
    padding-left: var(--sizes-spacing)!important
}

.uk-padding-bottom,html.bp-l .uk-padding-bottom\@l,html.bp-m .uk-padding-bottom\@m,html.bp-s .uk-padding-bottom\@s,html.bp-xl .uk-padding-bottom\@xl,html.bp-xs .uk-padding-bottom\@xs {
    padding-bottom: var(--sizes-spacing)!important
}

*+.uk-margin,html.bp-l *+.uk-margin\@l,html.bp-m *+.uk-margin\@m,html.bp-s *+.uk-margin\@s,html.bp-xl *+.uk-margin\@xl,html.bp-xs *+.uk-margin\@xs {
    margin-top: var(--sizes-spacing)!important
}

.uk-margin-3xsmall,html.bp-l .uk-margin-3xsmall\@l,html.bp-m .uk-margin-3xsmall\@m,html.bp-s .uk-margin-3xsmall\@s,html.bp-xl .uk-margin-3xsmall\@xl,html.bp-xs .uk-margin-3xsmall\@xs {
    margin-bottom: var(--sizes-spacing-3xsmall)!important
}

.uk-margin-3xsmall-top,html.bp-l .uk-margin-3xsmall-top\@l,html.bp-m .uk-margin-3xsmall-top\@m,html.bp-s .uk-margin-3xsmall-top\@s,html.bp-xl .uk-margin-3xsmall-top\@xl,html.bp-xs .uk-margin-3xsmall-top\@xs {
    margin-top: var(--sizes-spacing-3xsmall)!important
}

.uk-margin-3xsmall-right,html.bp-l .uk-margin-3xsmall-right\@l,html.bp-m .uk-margin-3xsmall-right\@m,html.bp-s .uk-margin-3xsmall-right\@s,html.bp-xl .uk-margin-3xsmall-right\@xl,html.bp-xs .uk-margin-3xsmall-right\@xs {
    margin-right: var(--sizes-spacing-3xsmall)!important
}

.uk-margin-3xsmall-left,html.bp-l .uk-margin-3xsmall-left\@l,html.bp-m .uk-margin-3xsmall-left\@m,html.bp-s .uk-margin-3xsmall-left\@s,html.bp-xl .uk-margin-3xsmall-left\@xl,html.bp-xs .uk-margin-3xsmall-left\@xs {
    margin-left: var(--sizes-spacing-3xsmall)!important
}

.uk-margin-3xsmall-bottom,html.bp-l .uk-margin-3xsmall-bottom\@l,html.bp-m .uk-margin-3xsmall-bottom\@m,html.bp-s .uk-margin-3xsmall-bottom\@s,html.bp-xl .uk-margin-3xsmall-bottom\@xl,html.bp-xs .uk-margin-3xsmall-bottom\@xs {
    margin-bottom: var(--sizes-spacing-3xsmall)!important
}

.uk-margin-3xsmall-horizontal,html.bp-l-max .uk-margin-3xsmall-horizontal\@l,html.bp-m-max .uk-margin-3xsmall-horizontal\@m,html.bp-s-max .uk-margin-3xsmall-horizontal\@s,html.bp-xl-max .uk-margin-3xsmall-horizontal\@xl,html.bp-xs-max .uk-margin-3xsmall-horizontal\@xs {
    margin-top: var(--sizes-spacing-3xsmall)!important;
    margin-bottom: var(--sizes-spacing-3xsmall)!important
}

.uk-margin-3xsmall-vertical,html.bp-l-max .uk-margin-3xsmall-vertical\@l,html.bp-m-max .uk-margin-3xsmall-vertical\@m,html.bp-s-max .uk-margin-3xsmall-vertical\@s,html.bp-xl-max .uk-margin-3xsmall-vertical\@xl,html.bp-xs-max .uk-margin-3xsmall-vertical\@xs {
    margin-left: var(--sizes-spacing-3xsmall)!important;
    margin-right: var(--sizes-spacing-3xsmall)!important
}

.uk-padding-3xsmall,html.bp-l .uk-padding-3xsmall\@l,html.bp-m .uk-padding-3xsmall\@m,html.bp-s .uk-padding-3xsmall\@s,html.bp-xl .uk-padding-3xsmall\@xl,html.bp-xs .uk-padding-3xsmall\@xs {
    padding: var(--sizes-spacing-3xsmall)!important
}

.uk-padding-3xsmall-top,html.bp-l .uk-padding-3xsmall-top\@l,html.bp-m .uk-padding-3xsmall-top\@m,html.bp-s .uk-padding-3xsmall-top\@s,html.bp-xl .uk-padding-3xsmall-top\@xl,html.bp-xs .uk-padding-3xsmall-top\@xs {
    padding-top: var(--sizes-spacing-3xsmall)!important
}

.uk-padding-3xsmall-right,html.bp-l .uk-padding-3xsmall-right\@l,html.bp-m .uk-padding-3xsmall-right\@m,html.bp-s .uk-padding-3xsmall-right\@s,html.bp-xl .uk-padding-3xsmall-right\@xl,html.bp-xs .uk-padding-3xsmall-right\@xs {
    padding-right: var(--sizes-spacing-3xsmall)!important
}

.uk-padding-3xsmall-left,html.bp-l .uk-padding-3xsmall-left\@l,html.bp-m .uk-padding-3xsmall-left\@m,html.bp-s .uk-padding-3xsmall-left\@s,html.bp-xl .uk-padding-3xsmall-left\@xl,html.bp-xs .uk-padding-3xsmall-left\@xs {
    padding-left: var(--sizes-spacing-3xsmall)!important
}

.uk-padding-3xsmall-bottom,html.bp-l .uk-padding-3xsmall-bottom\@l,html.bp-m .uk-padding-3xsmall-bottom\@m,html.bp-s .uk-padding-3xsmall-bottom\@s,html.bp-xl .uk-padding-3xsmall-bottom\@xl,html.bp-xs .uk-padding-3xsmall-bottom\@xs {
    padding-bottom: var(--sizes-spacing-3xsmall)!important
}

.uk-padding-3xsmall-horizontal,html.bp-l-max .uk-padding-3xsmall-horizontal\@l,html.bp-m-max .uk-padding-3xsmall-horizontal\@m,html.bp-s-max .uk-padding-3xsmall-horizontal\@s,html.bp-xl-max .uk-padding-3xsmall-horizontal\@xl,html.bp-xs-max .uk-padding-3xsmall-horizontal\@xs {
    padding-top: var(--sizes-spacing-3xsmall)!important;
    padding-bottom: var(--sizes-spacing-3xsmall)!important
}

.uk-padding-3xsmall-vertical,html.bp-l-max .uk-padding-3xsmall-vertical\@l,html.bp-m-max .uk-padding-3xsmall-vertical\@m,html.bp-s-max .uk-padding-3xsmall-vertical\@s,html.bp-xl-max .uk-padding-3xsmall-vertical\@xl,html.bp-xs-max .uk-padding-3xsmall-vertical\@xs {
    padding-left: var(--sizes-spacing-3xsmall)!important;
    padding-right: var(--sizes-spacing-3xsmall)!important
}

*+.uk-margin-3xsmall,html.bp-l *+.uk-margin-3xsmall\@l,html.bp-m *+.uk-margin-3xsmall\@m,html.bp-s *+.uk-margin-3xsmall\@s,html.bp-xl *+.uk-margin-3xsmall\@xl,html.bp-xs *+.uk-margin-3xsmall\@xs {
    margin-top: var(--sizes-spacing-3xsmall)!important
}

.uk-margin-2xsmall,html.bp-l .uk-margin-2xsmall\@l,html.bp-m .uk-margin-2xsmall\@m,html.bp-s .uk-margin-2xsmall\@s,html.bp-xl .uk-margin-2xsmall\@xl,html.bp-xs .uk-margin-2xsmall\@xs {
    margin-bottom: var(--sizes-spacing-2xsmall)!important
}

.uk-margin-2xsmall-top,html.bp-l .uk-margin-2xsmall-top\@l,html.bp-m .uk-margin-2xsmall-top\@m,html.bp-s .uk-margin-2xsmall-top\@s,html.bp-xl .uk-margin-2xsmall-top\@xl,html.bp-xs .uk-margin-2xsmall-top\@xs {
    margin-top: var(--sizes-spacing-2xsmall)!important
}

.uk-margin-2xsmall-right,html.bp-l .uk-margin-2xsmall-right\@l,html.bp-m .uk-margin-2xsmall-right\@m,html.bp-s .uk-margin-2xsmall-right\@s,html.bp-xl .uk-margin-2xsmall-right\@xl,html.bp-xs .uk-margin-2xsmall-right\@xs {
    margin-right: var(--sizes-spacing-2xsmall)!important
}

.uk-margin-2xsmall-left,html.bp-l .uk-margin-2xsmall-left\@l,html.bp-m .uk-margin-2xsmall-left\@m,html.bp-s .uk-margin-2xsmall-left\@s,html.bp-xl .uk-margin-2xsmall-left\@xl,html.bp-xs .uk-margin-2xsmall-left\@xs {
    margin-left: var(--sizes-spacing-2xsmall)!important
}

.uk-margin-2xsmall-bottom,html.bp-l .uk-margin-2xsmall-bottom\@l,html.bp-m .uk-margin-2xsmall-bottom\@m,html.bp-s .uk-margin-2xsmall-bottom\@s,html.bp-xl .uk-margin-2xsmall-bottom\@xl,html.bp-xs .uk-margin-2xsmall-bottom\@xs {
    margin-bottom: var(--sizes-spacing-2xsmall)!important
}

.uk-margin-2xsmall-horizontal,html.bp-l-max .uk-margin-2xsmall-horizontal\@l,html.bp-m-max .uk-margin-2xsmall-horizontal\@m,html.bp-s-max .uk-margin-2xsmall-horizontal\@s,html.bp-xl-max .uk-margin-2xsmall-horizontal\@xl,html.bp-xs-max .uk-margin-2xsmall-horizontal\@xs {
    margin-top: var(--sizes-spacing-2xsmall)!important;
    margin-bottom: var(--sizes-spacing-2xsmall)!important
}

.uk-margin-2xsmall-vertical,html.bp-l-max .uk-margin-2xsmall-vertical\@l,html.bp-m-max .uk-margin-2xsmall-vertical\@m,html.bp-s-max .uk-margin-2xsmall-vertical\@s,html.bp-xl-max .uk-margin-2xsmall-vertical\@xl,html.bp-xs-max .uk-margin-2xsmall-vertical\@xs {
    margin-left: var(--sizes-spacing-2xsmall)!important;
    margin-right: var(--sizes-spacing-2xsmall)!important
}

.uk-padding-2xsmall,html.bp-l .uk-padding-2xsmall\@l,html.bp-m .uk-padding-2xsmall\@m,html.bp-s .uk-padding-2xsmall\@s,html.bp-xl .uk-padding-2xsmall\@xl,html.bp-xs .uk-padding-2xsmall\@xs {
    padding: var(--sizes-spacing-2xsmall)!important
}

.uk-padding-2xsmall-top,html.bp-l .uk-padding-2xsmall-top\@l,html.bp-m .uk-padding-2xsmall-top\@m,html.bp-s .uk-padding-2xsmall-top\@s,html.bp-xl .uk-padding-2xsmall-top\@xl,html.bp-xs .uk-padding-2xsmall-top\@xs {
    padding-top: var(--sizes-spacing-2xsmall)!important
}

.uk-padding-2xsmall-right,html.bp-l .uk-padding-2xsmall-right\@l,html.bp-m .uk-padding-2xsmall-right\@m,html.bp-s .uk-padding-2xsmall-right\@s,html.bp-xl .uk-padding-2xsmall-right\@xl,html.bp-xs .uk-padding-2xsmall-right\@xs {
    padding-right: var(--sizes-spacing-2xsmall)!important
}

.uk-padding-2xsmall-left,html.bp-l .uk-padding-2xsmall-left\@l,html.bp-m .uk-padding-2xsmall-left\@m,html.bp-s .uk-padding-2xsmall-left\@s,html.bp-xl .uk-padding-2xsmall-left\@xl,html.bp-xs .uk-padding-2xsmall-left\@xs {
    padding-left: var(--sizes-spacing-2xsmall)!important
}

.uk-padding-2xsmall-bottom,html.bp-l .uk-padding-2xsmall-bottom\@l,html.bp-m .uk-padding-2xsmall-bottom\@m,html.bp-s .uk-padding-2xsmall-bottom\@s,html.bp-xl .uk-padding-2xsmall-bottom\@xl,html.bp-xs .uk-padding-2xsmall-bottom\@xs {
    padding-bottom: var(--sizes-spacing-2xsmall)!important
}

.uk-padding-2xsmall-horizontal,html.bp-l-max .uk-padding-2xsmall-horizontal\@l,html.bp-m-max .uk-padding-2xsmall-horizontal\@m,html.bp-s-max .uk-padding-2xsmall-horizontal\@s,html.bp-xl-max .uk-padding-2xsmall-horizontal\@xl,html.bp-xs-max .uk-padding-2xsmall-horizontal\@xs {
    padding-top: var(--sizes-spacing-2xsmall)!important;
    padding-bottom: var(--sizes-spacing-2xsmall)!important
}

.uk-padding-2xsmall-vertical,html.bp-l-max .uk-padding-2xsmall-vertical\@l,html.bp-m-max .uk-padding-2xsmall-vertical\@m,html.bp-s-max .uk-padding-2xsmall-vertical\@s,html.bp-xl-max .uk-padding-2xsmall-vertical\@xl,html.bp-xs-max .uk-padding-2xsmall-vertical\@xs {
    padding-left: var(--sizes-spacing-2xsmall)!important;
    padding-right: var(--sizes-spacing-2xsmall)!important
}

*+.uk-margin-2xsmall,html.bp-l *+.uk-margin-2xsmall\@l,html.bp-m *+.uk-margin-2xsmall\@m,html.bp-s *+.uk-margin-2xsmall\@s,html.bp-xl *+.uk-margin-2xsmall\@xl,html.bp-xs *+.uk-margin-2xsmall\@xs {
    margin-top: var(--sizes-spacing-2xsmall)!important
}

.uk-margin-xsmall,html.bp-l .uk-margin-xsmall\@l,html.bp-m .uk-margin-xsmall\@m,html.bp-s .uk-margin-xsmall\@s,html.bp-xl .uk-margin-xsmall\@xl,html.bp-xs .uk-margin-xsmall\@xs {
    margin-bottom: var(--sizes-spacing-xsmall)!important
}

.uk-margin-xsmall-top,html.bp-l .uk-margin-xsmall-top\@l,html.bp-m .uk-margin-xsmall-top\@m,html.bp-s .uk-margin-xsmall-top\@s,html.bp-xl .uk-margin-xsmall-top\@xl,html.bp-xs .uk-margin-xsmall-top\@xs {
    margin-top: var(--sizes-spacing-xsmall)!important
}

.uk-margin-xsmall-right,html.bp-l .uk-margin-xsmall-right\@l,html.bp-m .uk-margin-xsmall-right\@m,html.bp-s .uk-margin-xsmall-right\@s,html.bp-xl .uk-margin-xsmall-right\@xl,html.bp-xs .uk-margin-xsmall-right\@xs {
    margin-right: var(--sizes-spacing-xsmall)!important
}

.uk-margin-xsmall-left,html.bp-l .uk-margin-xsmall-left\@l,html.bp-m .uk-margin-xsmall-left\@m,html.bp-s .uk-margin-xsmall-left\@s,html.bp-xl .uk-margin-xsmall-left\@xl,html.bp-xs .uk-margin-xsmall-left\@xs {
    margin-left: var(--sizes-spacing-xsmall)!important
}

.uk-margin-xsmall-bottom,html.bp-l .uk-margin-xsmall-bottom\@l,html.bp-m .uk-margin-xsmall-bottom\@m,html.bp-s .uk-margin-xsmall-bottom\@s,html.bp-xl .uk-margin-xsmall-bottom\@xl,html.bp-xs .uk-margin-xsmall-bottom\@xs {
    margin-bottom: var(--sizes-spacing-xsmall)!important
}

.uk-margin-xsmall-horizontal,html.bp-l-max .uk-margin-xsmall-horizontal\@l,html.bp-m-max .uk-margin-xsmall-horizontal\@m,html.bp-s-max .uk-margin-xsmall-horizontal\@s,html.bp-xl-max .uk-margin-xsmall-horizontal\@xl,html.bp-xs-max .uk-margin-xsmall-horizontal\@xs {
    margin-top: var(--sizes-spacing-xsmall)!important;
    margin-bottom: var(--sizes-spacing-xsmall)!important
}

.uk-margin-xsmall-vertical,html.bp-l-max .uk-margin-xsmall-vertical\@l,html.bp-m-max .uk-margin-xsmall-vertical\@m,html.bp-s-max .uk-margin-xsmall-vertical\@s,html.bp-xl-max .uk-margin-xsmall-vertical\@xl,html.bp-xs-max .uk-margin-xsmall-vertical\@xs {
    margin-left: var(--sizes-spacing-xsmall)!important;
    margin-right: var(--sizes-spacing-xsmall)!important
}

.uk-padding-xsmall,html.bp-l .uk-padding-xsmall\@l,html.bp-m .uk-padding-xsmall\@m,html.bp-s .uk-padding-xsmall\@s,html.bp-xl .uk-padding-xsmall\@xl,html.bp-xs .uk-padding-xsmall\@xs {
    padding: var(--sizes-spacing-xsmall)!important
}

.uk-padding-xsmall-top,html.bp-l .uk-padding-xsmall-top\@l,html.bp-m .uk-padding-xsmall-top\@m,html.bp-s .uk-padding-xsmall-top\@s,html.bp-xl .uk-padding-xsmall-top\@xl,html.bp-xs .uk-padding-xsmall-top\@xs {
    padding-top: var(--sizes-spacing-xsmall)!important
}

.uk-padding-xsmall-right,html.bp-l .uk-padding-xsmall-right\@l,html.bp-m .uk-padding-xsmall-right\@m,html.bp-s .uk-padding-xsmall-right\@s,html.bp-xl .uk-padding-xsmall-right\@xl,html.bp-xs .uk-padding-xsmall-right\@xs {
    padding-right: var(--sizes-spacing-xsmall)!important
}

.uk-padding-xsmall-left,html.bp-l .uk-padding-xsmall-left\@l,html.bp-m .uk-padding-xsmall-left\@m,html.bp-s .uk-padding-xsmall-left\@s,html.bp-xl .uk-padding-xsmall-left\@xl,html.bp-xs .uk-padding-xsmall-left\@xs {
    padding-left: var(--sizes-spacing-xsmall)!important
}

.uk-padding-xsmall-bottom,html.bp-l .uk-padding-xsmall-bottom\@l,html.bp-m .uk-padding-xsmall-bottom\@m,html.bp-s .uk-padding-xsmall-bottom\@s,html.bp-xl .uk-padding-xsmall-bottom\@xl,html.bp-xs .uk-padding-xsmall-bottom\@xs {
    padding-bottom: var(--sizes-spacing-xsmall)!important
}

.uk-padding-xsmall-horizontal,html.bp-l-max .uk-padding-xsmall-horizontal\@l,html.bp-m-max .uk-padding-xsmall-horizontal\@m,html.bp-s-max .uk-padding-xsmall-horizontal\@s,html.bp-xl-max .uk-padding-xsmall-horizontal\@xl,html.bp-xs-max .uk-padding-xsmall-horizontal\@xs {
    padding-top: var(--sizes-spacing-xsmall)!important;
    padding-bottom: var(--sizes-spacing-xsmall)!important
}

.uk-padding-xsmall-vertical,html.bp-l-max .uk-padding-xsmall-vertical\@l,html.bp-m-max .uk-padding-xsmall-vertical\@m,html.bp-s-max .uk-padding-xsmall-vertical\@s,html.bp-xl-max .uk-padding-xsmall-vertical\@xl,html.bp-xs-max .uk-padding-xsmall-vertical\@xs {
    padding-left: var(--sizes-spacing-xsmall)!important;
    padding-right: var(--sizes-spacing-xsmall)!important
}

*+.uk-margin-xsmall,html.bp-l *+.uk-margin-xsmall\@l,html.bp-m *+.uk-margin-xsmall\@m,html.bp-s *+.uk-margin-xsmall\@s,html.bp-xl *+.uk-margin-xsmall\@xl,html.bp-xs *+.uk-margin-xsmall\@xs {
    margin-top: var(--sizes-spacing-xsmall)!important
}

.uk-margin-small,html.bp-l .uk-margin-small\@l,html.bp-m .uk-margin-small\@m,html.bp-s .uk-margin-small\@s,html.bp-xl .uk-margin-small\@xl,html.bp-xs .uk-margin-small\@xs {
    margin-bottom: var(--sizes-spacing-small)!important
}

.uk-margin-small-top,html.bp-l .uk-margin-small-top\@l,html.bp-m .uk-margin-small-top\@m,html.bp-s .uk-margin-small-top\@s,html.bp-xl .uk-margin-small-top\@xl,html.bp-xs .uk-margin-small-top\@xs {
    margin-top: var(--sizes-spacing-small)!important
}

.uk-margin-small-right,html.bp-l .uk-margin-small-right\@l,html.bp-m .uk-margin-small-right\@m,html.bp-s .uk-margin-small-right\@s,html.bp-xl .uk-margin-small-right\@xl,html.bp-xs .uk-margin-small-right\@xs {
    margin-right: var(--sizes-spacing-small)!important
}

.uk-margin-small-left,html.bp-l .uk-margin-small-left\@l,html.bp-m .uk-margin-small-left\@m,html.bp-s .uk-margin-small-left\@s,html.bp-xl .uk-margin-small-left\@xl,html.bp-xs .uk-margin-small-left\@xs {
    margin-left: var(--sizes-spacing-small)!important
}

.uk-margin-small-bottom,html.bp-l .uk-margin-small-bottom\@l,html.bp-m .uk-margin-small-bottom\@m,html.bp-s .uk-margin-small-bottom\@s,html.bp-xl .uk-margin-small-bottom\@xl,html.bp-xs .uk-margin-small-bottom\@xs {
    margin-bottom: var(--sizes-spacing-small)!important
}

.uk-margin-small-horizontal,html.bp-l-max .uk-margin-small-horizontal\@l,html.bp-m-max .uk-margin-small-horizontal\@m,html.bp-s-max .uk-margin-small-horizontal\@s,html.bp-xl-max .uk-margin-small-horizontal\@xl,html.bp-xs-max .uk-margin-small-horizontal\@xs {
    margin-top: var(--sizes-spacing-small)!important;
    margin-bottom: var(--sizes-spacing-small)!important
}

.uk-margin-small-vertical,html.bp-l-max .uk-margin-small-vertical\@l,html.bp-m-max .uk-margin-small-vertical\@m,html.bp-s-max .uk-margin-small-vertical\@s,html.bp-xl-max .uk-margin-small-vertical\@xl,html.bp-xs-max .uk-margin-small-vertical\@xs {
    margin-left: var(--sizes-spacing-small)!important;
    margin-right: var(--sizes-spacing-small)!important
}

.uk-padding-small,html.bp-l .uk-padding-small\@l,html.bp-m .uk-padding-small\@m,html.bp-s .uk-padding-small\@s,html.bp-xl .uk-padding-small\@xl,html.bp-xs .uk-padding-small\@xs {
    padding: var(--sizes-spacing-small)!important
}

.uk-padding-small-top,html.bp-l .uk-padding-small-top\@l,html.bp-m .uk-padding-small-top\@m,html.bp-s .uk-padding-small-top\@s,html.bp-xl .uk-padding-small-top\@xl,html.bp-xs .uk-padding-small-top\@xs {
    padding-top: var(--sizes-spacing-small)!important
}

.uk-padding-small-right,html.bp-l .uk-padding-small-right\@l,html.bp-m .uk-padding-small-right\@m,html.bp-s .uk-padding-small-right\@s,html.bp-xl .uk-padding-small-right\@xl,html.bp-xs .uk-padding-small-right\@xs {
    padding-right: var(--sizes-spacing-small)!important
}

.uk-padding-small-left,html.bp-l .uk-padding-small-left\@l,html.bp-m .uk-padding-small-left\@m,html.bp-s .uk-padding-small-left\@s,html.bp-xl .uk-padding-small-left\@xl,html.bp-xs .uk-padding-small-left\@xs {
    padding-left: var(--sizes-spacing-small)!important
}

.uk-padding-small-bottom,html.bp-l .uk-padding-small-bottom\@l,html.bp-m .uk-padding-small-bottom\@m,html.bp-s .uk-padding-small-bottom\@s,html.bp-xl .uk-padding-small-bottom\@xl,html.bp-xs .uk-padding-small-bottom\@xs {
    padding-bottom: var(--sizes-spacing-small)!important
}

.uk-padding-small-horizontal,html.bp-l-max .uk-padding-small-horizontal\@l,html.bp-m-max .uk-padding-small-horizontal\@m,html.bp-s-max .uk-padding-small-horizontal\@s,html.bp-xl-max .uk-padding-small-horizontal\@xl,html.bp-xs-max .uk-padding-small-horizontal\@xs {
    padding-top: var(--sizes-spacing-small)!important;
    padding-bottom: var(--sizes-spacing-small)!important
}

.uk-padding-small-vertical,html.bp-l-max .uk-padding-small-vertical\@l,html.bp-m-max .uk-padding-small-vertical\@m,html.bp-s-max .uk-padding-small-vertical\@s,html.bp-xl-max .uk-padding-small-vertical\@xl,html.bp-xs-max .uk-padding-small-vertical\@xs {
    padding-left: var(--sizes-spacing-small)!important;
    padding-right: var(--sizes-spacing-small)!important
}

*+.uk-margin-small,html.bp-l *+.uk-margin-small\@l,html.bp-m *+.uk-margin-small\@m,html.bp-s *+.uk-margin-small\@s,html.bp-xl *+.uk-margin-small\@xl,html.bp-xs *+.uk-margin-small\@xs {
    margin-top: var(--sizes-spacing-small)!important
}

.uk-margin-medium,html.bp-l .uk-margin-medium\@l,html.bp-m .uk-margin-medium\@m,html.bp-s .uk-margin-medium\@s,html.bp-xl .uk-margin-medium\@xl,html.bp-xs .uk-margin-medium\@xs {
    margin-bottom: var(--sizes-spacing-medium)!important
}

.uk-margin-medium-top,html.bp-l .uk-margin-medium-top\@l,html.bp-m .uk-margin-medium-top\@m,html.bp-s .uk-margin-medium-top\@s,html.bp-xl .uk-margin-medium-top\@xl,html.bp-xs .uk-margin-medium-top\@xs {
    margin-top: var(--sizes-spacing-medium)!important
}

.uk-margin-medium-right,html.bp-l .uk-margin-medium-right\@l,html.bp-m .uk-margin-medium-right\@m,html.bp-s .uk-margin-medium-right\@s,html.bp-xl .uk-margin-medium-right\@xl,html.bp-xs .uk-margin-medium-right\@xs {
    margin-right: var(--sizes-spacing-medium)!important
}

.uk-margin-medium-left,html.bp-l .uk-margin-medium-left\@l,html.bp-m .uk-margin-medium-left\@m,html.bp-s .uk-margin-medium-left\@s,html.bp-xl .uk-margin-medium-left\@xl,html.bp-xs .uk-margin-medium-left\@xs {
    margin-left: var(--sizes-spacing-medium)!important
}

.uk-margin-medium-bottom,html.bp-l .uk-margin-medium-bottom\@l,html.bp-m .uk-margin-medium-bottom\@m,html.bp-s .uk-margin-medium-bottom\@s,html.bp-xl .uk-margin-medium-bottom\@xl,html.bp-xs .uk-margin-medium-bottom\@xs {
    margin-bottom: var(--sizes-spacing-medium)!important
}

.uk-margin-medium-horizontal,html.bp-l-max .uk-margin-medium-horizontal\@l,html.bp-m-max .uk-margin-medium-horizontal\@m,html.bp-s-max .uk-margin-medium-horizontal\@s,html.bp-xl-max .uk-margin-medium-horizontal\@xl,html.bp-xs-max .uk-margin-medium-horizontal\@xs {
    margin-top: var(--sizes-spacing-medium)!important;
    margin-bottom: var(--sizes-spacing-medium)!important
}

.uk-margin-medium-vertical,html.bp-l-max .uk-margin-medium-vertical\@l,html.bp-m-max .uk-margin-medium-vertical\@m,html.bp-s-max .uk-margin-medium-vertical\@s,html.bp-xl-max .uk-margin-medium-vertical\@xl,html.bp-xs-max .uk-margin-medium-vertical\@xs {
    margin-left: var(--sizes-spacing-medium)!important;
    margin-right: var(--sizes-spacing-medium)!important
}

.uk-padding-medium,html.bp-l .uk-padding-medium\@l,html.bp-m .uk-padding-medium\@m,html.bp-s .uk-padding-medium\@s,html.bp-xl .uk-padding-medium\@xl,html.bp-xs .uk-padding-medium\@xs {
    padding: var(--sizes-spacing-medium)!important
}

.uk-padding-medium-top,html.bp-l .uk-padding-medium-top\@l,html.bp-m .uk-padding-medium-top\@m,html.bp-s .uk-padding-medium-top\@s,html.bp-xl .uk-padding-medium-top\@xl,html.bp-xs .uk-padding-medium-top\@xs {
    padding-top: var(--sizes-spacing-medium)!important
}

.uk-padding-medium-right,html.bp-l .uk-padding-medium-right\@l,html.bp-m .uk-padding-medium-right\@m,html.bp-s .uk-padding-medium-right\@s,html.bp-xl .uk-padding-medium-right\@xl,html.bp-xs .uk-padding-medium-right\@xs {
    padding-right: var(--sizes-spacing-medium)!important
}

.uk-padding-medium-left,html.bp-l .uk-padding-medium-left\@l,html.bp-m .uk-padding-medium-left\@m,html.bp-s .uk-padding-medium-left\@s,html.bp-xl .uk-padding-medium-left\@xl,html.bp-xs .uk-padding-medium-left\@xs {
    padding-left: var(--sizes-spacing-medium)!important
}

.uk-padding-medium-bottom,html.bp-l .uk-padding-medium-bottom\@l,html.bp-m .uk-padding-medium-bottom\@m,html.bp-s .uk-padding-medium-bottom\@s,html.bp-xl .uk-padding-medium-bottom\@xl,html.bp-xs .uk-padding-medium-bottom\@xs {
    padding-bottom: var(--sizes-spacing-medium)!important
}

.uk-padding-medium-horizontal,html.bp-l-max .uk-padding-medium-horizontal\@l,html.bp-m-max .uk-padding-medium-horizontal\@m,html.bp-s-max .uk-padding-medium-horizontal\@s,html.bp-xl-max .uk-padding-medium-horizontal\@xl,html.bp-xs-max .uk-padding-medium-horizontal\@xs {
    padding-top: var(--sizes-spacing-medium)!important;
    padding-bottom: var(--sizes-spacing-medium)!important
}

.uk-padding-medium-vertical,html.bp-l-max .uk-padding-medium-vertical\@l,html.bp-m-max .uk-padding-medium-vertical\@m,html.bp-s-max .uk-padding-medium-vertical\@s,html.bp-xl-max .uk-padding-medium-vertical\@xl,html.bp-xs-max .uk-padding-medium-vertical\@xs {
    padding-left: var(--sizes-spacing-medium)!important;
    padding-right: var(--sizes-spacing-medium)!important
}

*+.uk-margin-medium,html.bp-l *+.uk-margin-medium\@l,html.bp-m *+.uk-margin-medium\@m,html.bp-s *+.uk-margin-medium\@s,html.bp-xl *+.uk-margin-medium\@xl,html.bp-xs *+.uk-margin-medium\@xs {
    margin-top: var(--sizes-spacing-medium)!important
}

.uk-margin-large,html.bp-l .uk-margin-large\@l,html.bp-m .uk-margin-large\@m,html.bp-s .uk-margin-large\@s,html.bp-xl .uk-margin-large\@xl,html.bp-xs .uk-margin-large\@xs {
    margin-bottom: var(--sizes-spacing-large)!important
}

.uk-margin-large-top,html.bp-l .uk-margin-large-top\@l,html.bp-m .uk-margin-large-top\@m,html.bp-s .uk-margin-large-top\@s,html.bp-xl .uk-margin-large-top\@xl,html.bp-xs .uk-margin-large-top\@xs {
    margin-top: var(--sizes-spacing-large)!important
}

.uk-margin-large-right,html.bp-l .uk-margin-large-right\@l,html.bp-m .uk-margin-large-right\@m,html.bp-s .uk-margin-large-right\@s,html.bp-xl .uk-margin-large-right\@xl,html.bp-xs .uk-margin-large-right\@xs {
    margin-right: var(--sizes-spacing-large)!important
}

.uk-margin-large-left,html.bp-l .uk-margin-large-left\@l,html.bp-m .uk-margin-large-left\@m,html.bp-s .uk-margin-large-left\@s,html.bp-xl .uk-margin-large-left\@xl,html.bp-xs .uk-margin-large-left\@xs {
    margin-left: var(--sizes-spacing-large)!important
}

.uk-margin-large-bottom,html.bp-l .uk-margin-large-bottom\@l,html.bp-m .uk-margin-large-bottom\@m,html.bp-s .uk-margin-large-bottom\@s,html.bp-xl .uk-margin-large-bottom\@xl,html.bp-xs .uk-margin-large-bottom\@xs {
    margin-bottom: var(--sizes-spacing-large)!important
}

.uk-margin-large-horizontal,html.bp-l-max .uk-margin-large-horizontal\@l,html.bp-m-max .uk-margin-large-horizontal\@m,html.bp-s-max .uk-margin-large-horizontal\@s,html.bp-xl-max .uk-margin-large-horizontal\@xl,html.bp-xs-max .uk-margin-large-horizontal\@xs {
    margin-top: var(--sizes-spacing-large)!important;
    margin-bottom: var(--sizes-spacing-large)!important
}

.uk-margin-large-vertical,html.bp-l-max .uk-margin-large-vertical\@l,html.bp-m-max .uk-margin-large-vertical\@m,html.bp-s-max .uk-margin-large-vertical\@s,html.bp-xl-max .uk-margin-large-vertical\@xl,html.bp-xs-max .uk-margin-large-vertical\@xs {
    margin-left: var(--sizes-spacing-large)!important;
    margin-right: var(--sizes-spacing-large)!important
}

.uk-padding-large,html.bp-l .uk-padding-large\@l,html.bp-m .uk-padding-large\@m,html.bp-s .uk-padding-large\@s,html.bp-xl .uk-padding-large\@xl,html.bp-xs .uk-padding-large\@xs {
    padding: var(--sizes-spacing-large)!important
}

.uk-padding-large-top,html.bp-l .uk-padding-large-top\@l,html.bp-m .uk-padding-large-top\@m,html.bp-s .uk-padding-large-top\@s,html.bp-xl .uk-padding-large-top\@xl,html.bp-xs .uk-padding-large-top\@xs {
    padding-top: var(--sizes-spacing-large)!important
}

.uk-padding-large-right,html.bp-l .uk-padding-large-right\@l,html.bp-m .uk-padding-large-right\@m,html.bp-s .uk-padding-large-right\@s,html.bp-xl .uk-padding-large-right\@xl,html.bp-xs .uk-padding-large-right\@xs {
    padding-right: var(--sizes-spacing-large)!important
}

.uk-padding-large-left,html.bp-l .uk-padding-large-left\@l,html.bp-m .uk-padding-large-left\@m,html.bp-s .uk-padding-large-left\@s,html.bp-xl .uk-padding-large-left\@xl,html.bp-xs .uk-padding-large-left\@xs {
    padding-left: var(--sizes-spacing-large)!important
}

.uk-padding-large-bottom,html.bp-l .uk-padding-large-bottom\@l,html.bp-m .uk-padding-large-bottom\@m,html.bp-s .uk-padding-large-bottom\@s,html.bp-xl .uk-padding-large-bottom\@xl,html.bp-xs .uk-padding-large-bottom\@xs {
    padding-bottom: var(--sizes-spacing-large)!important
}

.uk-padding-large-horizontal,html.bp-l-max .uk-padding-large-horizontal\@l,html.bp-m-max .uk-padding-large-horizontal\@m,html.bp-s-max .uk-padding-large-horizontal\@s,html.bp-xl-max .uk-padding-large-horizontal\@xl,html.bp-xs-max .uk-padding-large-horizontal\@xs {
    padding-top: var(--sizes-spacing-large)!important;
    padding-bottom: var(--sizes-spacing-large)!important
}

.uk-padding-large-vertical,html.bp-l-max .uk-padding-large-vertical\@l,html.bp-m-max .uk-padding-large-vertical\@m,html.bp-s-max .uk-padding-large-vertical\@s,html.bp-xl-max .uk-padding-large-vertical\@xl,html.bp-xs-max .uk-padding-large-vertical\@xs {
    padding-left: var(--sizes-spacing-large)!important;
    padding-right: var(--sizes-spacing-large)!important
}

*+.uk-margin-large,html.bp-l *+.uk-margin-large\@l,html.bp-m *+.uk-margin-large\@m,html.bp-s *+.uk-margin-large\@s,html.bp-xl *+.uk-margin-large\@xl,html.bp-xs *+.uk-margin-large\@xs {
    margin-top: var(--sizes-spacing-large)!important
}

.uk-margin-xlarge,html.bp-l .uk-margin-xlarge\@l,html.bp-m .uk-margin-xlarge\@m,html.bp-s .uk-margin-xlarge\@s,html.bp-xl .uk-margin-xlarge\@xl,html.bp-xs .uk-margin-xlarge\@xs {
    margin-bottom: var(--sizes-spacing-xlarge)!important
}

.uk-margin-xlarge-top,html.bp-l .uk-margin-xlarge-top\@l,html.bp-m .uk-margin-xlarge-top\@m,html.bp-s .uk-margin-xlarge-top\@s,html.bp-xl .uk-margin-xlarge-top\@xl,html.bp-xs .uk-margin-xlarge-top\@xs {
    margin-top: var(--sizes-spacing-xlarge)!important
}

.uk-margin-xlarge-right,html.bp-l .uk-margin-xlarge-right\@l,html.bp-m .uk-margin-xlarge-right\@m,html.bp-s .uk-margin-xlarge-right\@s,html.bp-xl .uk-margin-xlarge-right\@xl,html.bp-xs .uk-margin-xlarge-right\@xs {
    margin-right: var(--sizes-spacing-xlarge)!important
}

.uk-margin-xlarge-left,html.bp-l .uk-margin-xlarge-left\@l,html.bp-m .uk-margin-xlarge-left\@m,html.bp-s .uk-margin-xlarge-left\@s,html.bp-xl .uk-margin-xlarge-left\@xl,html.bp-xs .uk-margin-xlarge-left\@xs {
    margin-left: var(--sizes-spacing-xlarge)!important
}

.uk-margin-xlarge-bottom,html.bp-l .uk-margin-xlarge-bottom\@l,html.bp-m .uk-margin-xlarge-bottom\@m,html.bp-s .uk-margin-xlarge-bottom\@s,html.bp-xl .uk-margin-xlarge-bottom\@xl,html.bp-xs .uk-margin-xlarge-bottom\@xs {
    margin-bottom: var(--sizes-spacing-xlarge)!important
}

.uk-margin-xlarge-horizontal,html.bp-l-max .uk-margin-xlarge-horizontal\@l,html.bp-m-max .uk-margin-xlarge-horizontal\@m,html.bp-s-max .uk-margin-xlarge-horizontal\@s,html.bp-xl-max .uk-margin-xlarge-horizontal\@xl,html.bp-xs-max .uk-margin-xlarge-horizontal\@xs {
    margin-top: var(--sizes-spacing-xlarge)!important;
    margin-bottom: var(--sizes-spacing-xlarge)!important
}

.uk-margin-xlarge-vertical,html.bp-l-max .uk-margin-xlarge-vertical\@l,html.bp-m-max .uk-margin-xlarge-vertical\@m,html.bp-s-max .uk-margin-xlarge-vertical\@s,html.bp-xl-max .uk-margin-xlarge-vertical\@xl,html.bp-xs-max .uk-margin-xlarge-vertical\@xs {
    margin-left: var(--sizes-spacing-xlarge)!important;
    margin-right: var(--sizes-spacing-xlarge)!important
}

.uk-padding-xlarge,html.bp-l .uk-padding-xlarge\@l,html.bp-m .uk-padding-xlarge\@m,html.bp-s .uk-padding-xlarge\@s,html.bp-xl .uk-padding-xlarge\@xl,html.bp-xs .uk-padding-xlarge\@xs {
    padding: var(--sizes-spacing-xlarge)!important
}

.uk-padding-xlarge-top,html.bp-l .uk-padding-xlarge-top\@l,html.bp-m .uk-padding-xlarge-top\@m,html.bp-s .uk-padding-xlarge-top\@s,html.bp-xl .uk-padding-xlarge-top\@xl,html.bp-xs .uk-padding-xlarge-top\@xs {
    padding-top: var(--sizes-spacing-xlarge)!important
}

.uk-padding-xlarge-right,html.bp-l .uk-padding-xlarge-right\@l,html.bp-m .uk-padding-xlarge-right\@m,html.bp-s .uk-padding-xlarge-right\@s,html.bp-xl .uk-padding-xlarge-right\@xl,html.bp-xs .uk-padding-xlarge-right\@xs {
    padding-right: var(--sizes-spacing-xlarge)!important
}

.uk-padding-xlarge-left,html.bp-l .uk-padding-xlarge-left\@l,html.bp-m .uk-padding-xlarge-left\@m,html.bp-s .uk-padding-xlarge-left\@s,html.bp-xl .uk-padding-xlarge-left\@xl,html.bp-xs .uk-padding-xlarge-left\@xs {
    padding-left: var(--sizes-spacing-xlarge)!important
}

.uk-padding-xlarge-bottom,html.bp-l .uk-padding-xlarge-bottom\@l,html.bp-m .uk-padding-xlarge-bottom\@m,html.bp-s .uk-padding-xlarge-bottom\@s,html.bp-xl .uk-padding-xlarge-bottom\@xl,html.bp-xs .uk-padding-xlarge-bottom\@xs {
    padding-bottom: var(--sizes-spacing-xlarge)!important
}

.uk-padding-xlarge-horizontal,html.bp-l-max .uk-padding-xlarge-horizontal\@l,html.bp-m-max .uk-padding-xlarge-horizontal\@m,html.bp-s-max .uk-padding-xlarge-horizontal\@s,html.bp-xl-max .uk-padding-xlarge-horizontal\@xl,html.bp-xs-max .uk-padding-xlarge-horizontal\@xs {
    padding-top: var(--sizes-spacing-xlarge)!important;
    padding-bottom: var(--sizes-spacing-xlarge)!important
}

.uk-padding-xlarge-vertical,html.bp-l-max .uk-padding-xlarge-vertical\@l,html.bp-m-max .uk-padding-xlarge-vertical\@m,html.bp-s-max .uk-padding-xlarge-vertical\@s,html.bp-xl-max .uk-padding-xlarge-vertical\@xl,html.bp-xs-max .uk-padding-xlarge-vertical\@xs {
    padding-left: var(--sizes-spacing-xlarge)!important;
    padding-right: var(--sizes-spacing-xlarge)!important
}

*+.uk-margin-xlarge,html.bp-l *+.uk-margin-xlarge\@l,html.bp-m *+.uk-margin-xlarge\@m,html.bp-s *+.uk-margin-xlarge\@s,html.bp-xl *+.uk-margin-xlarge\@xl,html.bp-xs *+.uk-margin-xlarge\@xs {
    margin-top: var(--sizes-spacing-xlarge)!important
}

.uk-margin-2xlarge,html.bp-l .uk-margin-2xlarge\@l,html.bp-m .uk-margin-2xlarge\@m,html.bp-s .uk-margin-2xlarge\@s,html.bp-xl .uk-margin-2xlarge\@xl,html.bp-xs .uk-margin-2xlarge\@xs {
    margin-bottom: var(--sizes-spacing-2xlarge)!important
}

.uk-margin-2xlarge-top,html.bp-l .uk-margin-2xlarge-top\@l,html.bp-m .uk-margin-2xlarge-top\@m,html.bp-s .uk-margin-2xlarge-top\@s,html.bp-xl .uk-margin-2xlarge-top\@xl,html.bp-xs .uk-margin-2xlarge-top\@xs {
    margin-top: var(--sizes-spacing-2xlarge)!important
}

.uk-margin-2xlarge-right,html.bp-l .uk-margin-2xlarge-right\@l,html.bp-m .uk-margin-2xlarge-right\@m,html.bp-s .uk-margin-2xlarge-right\@s,html.bp-xl .uk-margin-2xlarge-right\@xl,html.bp-xs .uk-margin-2xlarge-right\@xs {
    margin-right: var(--sizes-spacing-2xlarge)!important
}

.uk-margin-2xlarge-left,html.bp-l .uk-margin-2xlarge-left\@l,html.bp-m .uk-margin-2xlarge-left\@m,html.bp-s .uk-margin-2xlarge-left\@s,html.bp-xl .uk-margin-2xlarge-left\@xl,html.bp-xs .uk-margin-2xlarge-left\@xs {
    margin-left: var(--sizes-spacing-2xlarge)!important
}

.uk-margin-2xlarge-bottom,html.bp-l .uk-margin-2xlarge-bottom\@l,html.bp-m .uk-margin-2xlarge-bottom\@m,html.bp-s .uk-margin-2xlarge-bottom\@s,html.bp-xl .uk-margin-2xlarge-bottom\@xl,html.bp-xs .uk-margin-2xlarge-bottom\@xs {
    margin-bottom: var(--sizes-spacing-2xlarge)!important
}

.uk-margin-2xlarge-horizontal,html.bp-l-max .uk-margin-2xlarge-horizontal\@l,html.bp-m-max .uk-margin-2xlarge-horizontal\@m,html.bp-s-max .uk-margin-2xlarge-horizontal\@s,html.bp-xl-max .uk-margin-2xlarge-horizontal\@xl,html.bp-xs-max .uk-margin-2xlarge-horizontal\@xs {
    margin-top: var(--sizes-spacing-2xlarge)!important;
    margin-bottom: var(--sizes-spacing-2xlarge)!important
}

.uk-margin-2xlarge-vertical,html.bp-l-max .uk-margin-2xlarge-vertical\@l,html.bp-m-max .uk-margin-2xlarge-vertical\@m,html.bp-s-max .uk-margin-2xlarge-vertical\@s,html.bp-xl-max .uk-margin-2xlarge-vertical\@xl,html.bp-xs-max .uk-margin-2xlarge-vertical\@xs {
    margin-left: var(--sizes-spacing-2xlarge)!important;
    margin-right: var(--sizes-spacing-2xlarge)!important
}

.uk-padding-2xlarge,html.bp-l .uk-padding-2xlarge\@l,html.bp-m .uk-padding-2xlarge\@m,html.bp-s .uk-padding-2xlarge\@s,html.bp-xl .uk-padding-2xlarge\@xl,html.bp-xs .uk-padding-2xlarge\@xs {
    padding: var(--sizes-spacing-2xlarge)!important
}

.uk-padding-2xlarge-top,html.bp-l .uk-padding-2xlarge-top\@l,html.bp-m .uk-padding-2xlarge-top\@m,html.bp-s .uk-padding-2xlarge-top\@s,html.bp-xl .uk-padding-2xlarge-top\@xl,html.bp-xs .uk-padding-2xlarge-top\@xs {
    padding-top: var(--sizes-spacing-2xlarge)!important
}

.uk-padding-2xlarge-right,html.bp-l .uk-padding-2xlarge-right\@l,html.bp-m .uk-padding-2xlarge-right\@m,html.bp-s .uk-padding-2xlarge-right\@s,html.bp-xl .uk-padding-2xlarge-right\@xl,html.bp-xs .uk-padding-2xlarge-right\@xs {
    padding-right: var(--sizes-spacing-2xlarge)!important
}

.uk-padding-2xlarge-left,html.bp-l .uk-padding-2xlarge-left\@l,html.bp-m .uk-padding-2xlarge-left\@m,html.bp-s .uk-padding-2xlarge-left\@s,html.bp-xl .uk-padding-2xlarge-left\@xl,html.bp-xs .uk-padding-2xlarge-left\@xs {
    padding-left: var(--sizes-spacing-2xlarge)!important
}

.uk-padding-2xlarge-bottom,html.bp-l .uk-padding-2xlarge-bottom\@l,html.bp-m .uk-padding-2xlarge-bottom\@m,html.bp-s .uk-padding-2xlarge-bottom\@s,html.bp-xl .uk-padding-2xlarge-bottom\@xl,html.bp-xs .uk-padding-2xlarge-bottom\@xs {
    padding-bottom: var(--sizes-spacing-2xlarge)!important
}

.uk-padding-2xlarge-horizontal,html.bp-l-max .uk-padding-2xlarge-horizontal\@l,html.bp-m-max .uk-padding-2xlarge-horizontal\@m,html.bp-s-max .uk-padding-2xlarge-horizontal\@s,html.bp-xl-max .uk-padding-2xlarge-horizontal\@xl,html.bp-xs-max .uk-padding-2xlarge-horizontal\@xs {
    padding-top: var(--sizes-spacing-2xlarge)!important;
    padding-bottom: var(--sizes-spacing-2xlarge)!important
}

.uk-padding-2xlarge-vertical,html.bp-l-max .uk-padding-2xlarge-vertical\@l,html.bp-m-max .uk-padding-2xlarge-vertical\@m,html.bp-s-max .uk-padding-2xlarge-vertical\@s,html.bp-xl-max .uk-padding-2xlarge-vertical\@xl,html.bp-xs-max .uk-padding-2xlarge-vertical\@xs {
    padding-left: var(--sizes-spacing-2xlarge)!important;
    padding-right: var(--sizes-spacing-2xlarge)!important
}

*+.uk-margin-2xlarge,html.bp-l *+.uk-margin-2xlarge\@l,html.bp-m *+.uk-margin-2xlarge\@m,html.bp-s *+.uk-margin-2xlarge\@s,html.bp-xl *+.uk-margin-2xlarge\@xl,html.bp-xs *+.uk-margin-2xlarge\@xs {
    margin-top: var(--sizes-spacing-2xlarge)!important
}

.uk-margin-3xlarge,html.bp-l .uk-margin-3xlarge\@l,html.bp-m .uk-margin-3xlarge\@m,html.bp-s .uk-margin-3xlarge\@s,html.bp-xl .uk-margin-3xlarge\@xl,html.bp-xs .uk-margin-3xlarge\@xs {
    margin-bottom: var(--sizes-spacing-3xlarge)!important
}

.uk-margin-3xlarge-top,html.bp-l .uk-margin-3xlarge-top\@l,html.bp-m .uk-margin-3xlarge-top\@m,html.bp-s .uk-margin-3xlarge-top\@s,html.bp-xl .uk-margin-3xlarge-top\@xl,html.bp-xs .uk-margin-3xlarge-top\@xs {
    margin-top: var(--sizes-spacing-3xlarge)!important
}

.uk-margin-3xlarge-right,html.bp-l .uk-margin-3xlarge-right\@l,html.bp-m .uk-margin-3xlarge-right\@m,html.bp-s .uk-margin-3xlarge-right\@s,html.bp-xl .uk-margin-3xlarge-right\@xl,html.bp-xs .uk-margin-3xlarge-right\@xs {
    margin-right: var(--sizes-spacing-3xlarge)!important
}

.uk-margin-3xlarge-left,html.bp-l .uk-margin-3xlarge-left\@l,html.bp-m .uk-margin-3xlarge-left\@m,html.bp-s .uk-margin-3xlarge-left\@s,html.bp-xl .uk-margin-3xlarge-left\@xl,html.bp-xs .uk-margin-3xlarge-left\@xs {
    margin-left: var(--sizes-spacing-3xlarge)!important
}

.uk-margin-3xlarge-bottom,html.bp-l .uk-margin-3xlarge-bottom\@l,html.bp-m .uk-margin-3xlarge-bottom\@m,html.bp-s .uk-margin-3xlarge-bottom\@s,html.bp-xl .uk-margin-3xlarge-bottom\@xl,html.bp-xs .uk-margin-3xlarge-bottom\@xs {
    margin-bottom: var(--sizes-spacing-3xlarge)!important
}

.uk-margin-3xlarge-horizontal,html.bp-l-max .uk-margin-3xlarge-horizontal\@l,html.bp-m-max .uk-margin-3xlarge-horizontal\@m,html.bp-s-max .uk-margin-3xlarge-horizontal\@s,html.bp-xl-max .uk-margin-3xlarge-horizontal\@xl,html.bp-xs-max .uk-margin-3xlarge-horizontal\@xs {
    margin-top: var(--sizes-spacing-3xlarge)!important;
    margin-bottom: var(--sizes-spacing-3xlarge)!important
}

.uk-margin-3xlarge-vertical,html.bp-l-max .uk-margin-3xlarge-vertical\@l,html.bp-m-max .uk-margin-3xlarge-vertical\@m,html.bp-s-max .uk-margin-3xlarge-vertical\@s,html.bp-xl-max .uk-margin-3xlarge-vertical\@xl,html.bp-xs-max .uk-margin-3xlarge-vertical\@xs {
    margin-left: var(--sizes-spacing-3xlarge)!important;
    margin-right: var(--sizes-spacing-3xlarge)!important
}

.uk-padding-3xlarge,html.bp-l .uk-padding-3xlarge\@l,html.bp-m .uk-padding-3xlarge\@m,html.bp-s .uk-padding-3xlarge\@s,html.bp-xl .uk-padding-3xlarge\@xl,html.bp-xs .uk-padding-3xlarge\@xs {
    padding: var(--sizes-spacing-3xlarge)!important
}

.uk-padding-3xlarge-top,html.bp-l .uk-padding-3xlarge-top\@l,html.bp-m .uk-padding-3xlarge-top\@m,html.bp-s .uk-padding-3xlarge-top\@s,html.bp-xl .uk-padding-3xlarge-top\@xl,html.bp-xs .uk-padding-3xlarge-top\@xs {
    padding-top: var(--sizes-spacing-3xlarge)!important
}

.uk-padding-3xlarge-right,html.bp-l .uk-padding-3xlarge-right\@l,html.bp-m .uk-padding-3xlarge-right\@m,html.bp-s .uk-padding-3xlarge-right\@s,html.bp-xl .uk-padding-3xlarge-right\@xl,html.bp-xs .uk-padding-3xlarge-right\@xs {
    padding-right: var(--sizes-spacing-3xlarge)!important
}

.uk-padding-3xlarge-left,html.bp-l .uk-padding-3xlarge-left\@l,html.bp-m .uk-padding-3xlarge-left\@m,html.bp-s .uk-padding-3xlarge-left\@s,html.bp-xl .uk-padding-3xlarge-left\@xl,html.bp-xs .uk-padding-3xlarge-left\@xs {
    padding-left: var(--sizes-spacing-3xlarge)!important
}

.uk-padding-3xlarge-bottom,html.bp-l .uk-padding-3xlarge-bottom\@l,html.bp-m .uk-padding-3xlarge-bottom\@m,html.bp-s .uk-padding-3xlarge-bottom\@s,html.bp-xl .uk-padding-3xlarge-bottom\@xl,html.bp-xs .uk-padding-3xlarge-bottom\@xs {
    padding-bottom: var(--sizes-spacing-3xlarge)!important
}

.uk-padding-3xlarge-horizontal,html.bp-l-max .uk-padding-3xlarge-horizontal\@l,html.bp-m-max .uk-padding-3xlarge-horizontal\@m,html.bp-s-max .uk-padding-3xlarge-horizontal\@s,html.bp-xl-max .uk-padding-3xlarge-horizontal\@xl,html.bp-xs-max .uk-padding-3xlarge-horizontal\@xs {
    padding-top: var(--sizes-spacing-3xlarge)!important;
    padding-bottom: var(--sizes-spacing-3xlarge)!important
}

.uk-padding-3xlarge-vertical,html.bp-l-max .uk-padding-3xlarge-vertical\@l,html.bp-m-max .uk-padding-3xlarge-vertical\@m,html.bp-s-max .uk-padding-3xlarge-vertical\@s,html.bp-xl-max .uk-padding-3xlarge-vertical\@xl,html.bp-xs-max .uk-padding-3xlarge-vertical\@xs {
    padding-left: var(--sizes-spacing-3xlarge)!important;
    padding-right: var(--sizes-spacing-3xlarge)!important
}

*+.uk-margin-3xlarge,html.bp-l *+.uk-margin-3xlarge\@l,html.bp-m *+.uk-margin-3xlarge\@m,html.bp-s *+.uk-margin-3xlarge\@s,html.bp-xl *+.uk-margin-3xlarge\@xl,html.bp-xs *+.uk-margin-3xlarge\@xs {
    margin-top: var(--sizes-spacing-3xlarge)!important
}

.uk-margin-remove,html.bp-l .uk-margin-remove\@l,html.bp-m .uk-margin-remove\@m,html.bp-s .uk-margin-remove\@s,html.bp-xl .uk-margin-remove\@xl,html.bp-xs .uk-margin-remove\@xs {
    margin-bottom: var(--sizes-spacing-remove)!important
}

.uk-margin-remove-top,html.bp-l .uk-margin-remove-top\@l,html.bp-m .uk-margin-remove-top\@m,html.bp-s .uk-margin-remove-top\@s,html.bp-xl .uk-margin-remove-top\@xl,html.bp-xs .uk-margin-remove-top\@xs {
    margin-top: var(--sizes-spacing-remove)!important
}

.uk-margin-remove-right,html.bp-l .uk-margin-remove-right\@l,html.bp-m .uk-margin-remove-right\@m,html.bp-s .uk-margin-remove-right\@s,html.bp-xl .uk-margin-remove-right\@xl,html.bp-xs .uk-margin-remove-right\@xs {
    margin-right: var(--sizes-spacing-remove)!important
}

.uk-margin-remove-left,html.bp-l .uk-margin-remove-left\@l,html.bp-m .uk-margin-remove-left\@m,html.bp-s .uk-margin-remove-left\@s,html.bp-xl .uk-margin-remove-left\@xl,html.bp-xs .uk-margin-remove-left\@xs {
    margin-left: var(--sizes-spacing-remove)!important
}

.uk-margin-remove-bottom,html.bp-l .uk-margin-remove-bottom\@l,html.bp-m .uk-margin-remove-bottom\@m,html.bp-s .uk-margin-remove-bottom\@s,html.bp-xl .uk-margin-remove-bottom\@xl,html.bp-xs .uk-margin-remove-bottom\@xs {
    margin-bottom: var(--sizes-spacing-remove)!important
}

.uk-padding-remove,html.bp-l .uk-padding-remove\@l,html.bp-m .uk-padding-remove\@m,html.bp-s .uk-padding-remove\@s,html.bp-xl .uk-padding-remove\@xl,html.bp-xs .uk-padding-remove\@xs {
    padding: var(--sizes-spacing-remove)!important
}

.uk-padding-remove-top,html.bp-l .uk-padding-remove-top\@l,html.bp-m .uk-padding-remove-top\@m,html.bp-s .uk-padding-remove-top\@s,html.bp-xl .uk-padding-remove-top\@xl,html.bp-xs .uk-padding-remove-top\@xs {
    padding-top: var(--sizes-spacing-remove)!important
}

.uk-padding-remove-right,html.bp-l .uk-padding-remove-right\@l,html.bp-m .uk-padding-remove-right\@m,html.bp-s .uk-padding-remove-right\@s,html.bp-xl .uk-padding-remove-right\@xl,html.bp-xs .uk-padding-remove-right\@xs {
    padding-right: var(--sizes-spacing-remove)!important
}

.uk-padding-remove-left,html.bp-l .uk-padding-remove-left\@l,html.bp-m .uk-padding-remove-left\@m,html.bp-s .uk-padding-remove-left\@s,html.bp-xl .uk-padding-remove-left\@xl,html.bp-xs .uk-padding-remove-left\@xs {
    padding-left: var(--sizes-spacing-remove)!important
}

.uk-padding-remove-bottom,html.bp-l .uk-padding-remove-bottom\@l,html.bp-m .uk-padding-remove-bottom\@m,html.bp-s .uk-padding-remove-bottom\@s,html.bp-xl .uk-padding-remove-bottom\@xl,html.bp-xs .uk-padding-remove-bottom\@xs {
    padding-bottom: var(--sizes-spacing-remove)!important
}

*+.uk-margin-remove,html.bp-l *+.uk-margin-remove\@l,html.bp-m *+.uk-margin-remove\@m,html.bp-s *+.uk-margin-remove\@s,html.bp-xl *+.uk-margin-remove\@xl,html.bp-xs *+.uk-margin-remove\@xs {
    margin-top: var(--sizes-spacing-remove)!important
}

.uk-padding-remove-horizontal,html.bp-l-max .uk-padding-remove-horizontal\@l,html.bp-m-max .uk-padding-remove-horizontal\@m,html.bp-s-max .uk-padding-remove-horizontal\@s,html.bp-xl-max .uk-padding-remove-horizontal\@xl,html.bp-xs-max .uk-padding-remove-horizontal\@xs {
    padding-left: 0!important;
    padding-right: 0!important
}

.uk-padding-remove-vertical,html.bp-l-max .uk-padding-remove-vertical\@l,html.bp-m-max .uk-padding-remove-vertical\@m,html.bp-s-max .uk-padding-remove-vertical\@s,html.bp-xl-max .uk-padding-remove-vertical\@xl,html.bp-xs-max .uk-padding-remove-vertical\@xs {
    padding-top: 0!important;
    padding-bottom: 0!important
}

.uk-offset,html.bp-l-max .uk-offset\@l,html.bp-m-max .uk-offset\@m,html.bp-s-max .uk-offset\@s,html.bp-xl-max .uk-offset\@xl,html.bp-xs-max .uk-offset\@xs {
    margin-left: var(--sizes-offset)!important;
    margin-right: var(--sizes-offset)!important
}

.uk-offset-left,html.bp-l-max .uk-offset-left\@l,html.bp-m-max .uk-offset-left\@m,html.bp-s-max .uk-offset-left\@s,html.bp-xl-max .uk-offset-left\@xl,html.bp-xs-max .uk-offset-left\@xs {
    margin-left: var(--sizes-offset)!important
}

.uk-offset-right,html.bp-l-max .uk-offset-right\@l,html.bp-m-max .uk-offset-right\@m,html.bp-s-max .uk-offset-right\@s,html.bp-xl-max .uk-offset-right\@xl,html.bp-xs-max .uk-offset-right\@xs {
    margin-right: var(--sizes-offset)!important
}

.uk-offset-collapse,html.bp-l-max .uk-offset-collapse\@l,html.bp-m-max .uk-offset-collapse\@m,html.bp-s-max .uk-offset-collapse\@s,html.bp-xl-max .uk-offset-collapse\@xl,html.bp-xs-max .uk-offset-collapse\@xs {
    margin-left: var(--sizes-offset-collapse)!important;
    margin-right: var(--sizes-offset-collapse)!important
}

.uk-offset-collapse-left,html.bp-l-max .uk-offset-collapse-left\@l,html.bp-m-max .uk-offset-collapse-left\@m,html.bp-s-max .uk-offset-collapse-left\@s,html.bp-xl-max .uk-offset-collapse-left\@xl,html.bp-xs-max .uk-offset-collapse-left\@xs {
    margin-left: var(--sizes-offset-collapse)!important
}

.uk-offset-collapse-right,html.bp-l-max .uk-offset-collapse-right\@l,html.bp-m-max .uk-offset-collapse-right\@m,html.bp-s-max .uk-offset-collapse-right\@s,html.bp-xl-max .uk-offset-collapse-right\@xl,html.bp-xs-max .uk-offset-collapse-right\@xs {
    margin-right: var(--sizes-offset-collapse)!important
}

.uk-offset-2xsmall,html.bp-l-max .uk-offset-2xsmall\@l,html.bp-m-max .uk-offset-2xsmall\@m,html.bp-s-max .uk-offset-2xsmall\@s,html.bp-xl-max .uk-offset-2xsmall\@xl,html.bp-xs-max .uk-offset-2xsmall\@xs {
    margin-left: var(--sizes-offset-2xsmall)!important;
    margin-right: var(--sizes-offset-2xsmall)!important
}

.uk-offset-2xsmall-left,html.bp-l-max .uk-offset-2xsmall-left\@l,html.bp-m-max .uk-offset-2xsmall-left\@m,html.bp-s-max .uk-offset-2xsmall-left\@s,html.bp-xl-max .uk-offset-2xsmall-left\@xl,html.bp-xs-max .uk-offset-2xsmall-left\@xs {
    margin-left: var(--sizes-offset-2xsmall)!important
}

.uk-offset-2xsmall-right,html.bp-l-max .uk-offset-2xsmall-right\@l,html.bp-m-max .uk-offset-2xsmall-right\@m,html.bp-s-max .uk-offset-2xsmall-right\@s,html.bp-xl-max .uk-offset-2xsmall-right\@xl,html.bp-xs-max .uk-offset-2xsmall-right\@xs {
    margin-right: var(--sizes-offset-2xsmall)!important
}

.uk-offset-xsmall,html.bp-l-max .uk-offset-xsmall\@l,html.bp-m-max .uk-offset-xsmall\@m,html.bp-s-max .uk-offset-xsmall\@s,html.bp-xl-max .uk-offset-xsmall\@xl,html.bp-xs-max .uk-offset-xsmall\@xs {
    margin-left: var(--sizes-offset-xsmall)!important;
    margin-right: var(--sizes-offset-xsmall)!important
}

.uk-offset-xsmall-left,html.bp-l-max .uk-offset-xsmall-left\@l,html.bp-m-max .uk-offset-xsmall-left\@m,html.bp-s-max .uk-offset-xsmall-left\@s,html.bp-xl-max .uk-offset-xsmall-left\@xl,html.bp-xs-max .uk-offset-xsmall-left\@xs {
    margin-left: var(--sizes-offset-xsmall)!important
}

.uk-offset-xsmall-right,html.bp-l-max .uk-offset-xsmall-right\@l,html.bp-m-max .uk-offset-xsmall-right\@m,html.bp-s-max .uk-offset-xsmall-right\@s,html.bp-xl-max .uk-offset-xsmall-right\@xl,html.bp-xs-max .uk-offset-xsmall-right\@xs {
    margin-right: var(--sizes-offset-xsmall)!important
}

.uk-offset-small,html.bp-l-max .uk-offset-small\@l,html.bp-m-max .uk-offset-small\@m,html.bp-s-max .uk-offset-small\@s,html.bp-xl-max .uk-offset-small\@xl,html.bp-xs-max .uk-offset-small\@xs {
    margin-left: var(--sizes-offset-small)!important;
    margin-right: var(--sizes-offset-small)!important
}

.uk-offset-small-left,html.bp-l-max .uk-offset-small-left\@l,html.bp-m-max .uk-offset-small-left\@m,html.bp-s-max .uk-offset-small-left\@s,html.bp-xl-max .uk-offset-small-left\@xl,html.bp-xs-max .uk-offset-small-left\@xs {
    margin-left: var(--sizes-offset-small)!important
}

.uk-offset-small-right,html.bp-l-max .uk-offset-small-right\@l,html.bp-m-max .uk-offset-small-right\@m,html.bp-s-max .uk-offset-small-right\@s,html.bp-xl-max .uk-offset-small-right\@xl,html.bp-xs-max .uk-offset-small-right\@xs {
    margin-right: var(--sizes-offset-small)!important
}

.uk-offset-medium,html.bp-l-max .uk-offset-medium\@l,html.bp-m-max .uk-offset-medium\@m,html.bp-s-max .uk-offset-medium\@s,html.bp-xl-max .uk-offset-medium\@xl,html.bp-xs-max .uk-offset-medium\@xs {
    margin-left: var(--sizes-offset-medium)!important;
    margin-right: var(--sizes-offset-medium)!important
}

.uk-offset-medium-left,html.bp-l-max .uk-offset-medium-left\@l,html.bp-m-max .uk-offset-medium-left\@m,html.bp-s-max .uk-offset-medium-left\@s,html.bp-xl-max .uk-offset-medium-left\@xl,html.bp-xs-max .uk-offset-medium-left\@xs {
    margin-left: var(--sizes-offset-medium)!important
}

.uk-offset-medium-right,html.bp-l-max .uk-offset-medium-right\@l,html.bp-m-max .uk-offset-medium-right\@m,html.bp-s-max .uk-offset-medium-right\@s,html.bp-xl-max .uk-offset-medium-right\@xl,html.bp-xs-max .uk-offset-medium-right\@xs {
    margin-right: var(--sizes-offset-medium)!important
}

.uk-offset-large,html.bp-l-max .uk-offset-large\@l,html.bp-m-max .uk-offset-large\@m,html.bp-s-max .uk-offset-large\@s,html.bp-xl-max .uk-offset-large\@xl,html.bp-xs-max .uk-offset-large\@xs {
    margin-left: var(--sizes-offset-large)!important;
    margin-right: var(--sizes-offset-large)!important
}

.uk-offset-large-left,html.bp-l-max .uk-offset-large-left\@l,html.bp-m-max .uk-offset-large-left\@m,html.bp-s-max .uk-offset-large-left\@s,html.bp-xl-max .uk-offset-large-left\@xl,html.bp-xs-max .uk-offset-large-left\@xs {
    margin-left: var(--sizes-offset-large)!important
}

.uk-offset-large-right,html.bp-l-max .uk-offset-large-right\@l,html.bp-m-max .uk-offset-large-right\@m,html.bp-s-max .uk-offset-large-right\@s,html.bp-xl-max .uk-offset-large-right\@xl,html.bp-xs-max .uk-offset-large-right\@xs {
    margin-right: var(--sizes-offset-large)!important
}

.uk-offset-xlarge,html.bp-l-max .uk-offset-xlarge\@l,html.bp-m-max .uk-offset-xlarge\@m,html.bp-s-max .uk-offset-xlarge\@s,html.bp-xl-max .uk-offset-xlarge\@xl,html.bp-xs-max .uk-offset-xlarge\@xs {
    margin-left: var(--sizes-offset-xlarge)!important;
    margin-right: var(--sizes-offset-xlarge)!important
}

.uk-offset-xlarge-left,html.bp-l-max .uk-offset-xlarge-left\@l,html.bp-m-max .uk-offset-xlarge-left\@m,html.bp-s-max .uk-offset-xlarge-left\@s,html.bp-xl-max .uk-offset-xlarge-left\@xl,html.bp-xs-max .uk-offset-xlarge-left\@xs {
    margin-left: var(--sizes-offset-xlarge)!important
}

.uk-offset-xlarge-right,html.bp-l-max .uk-offset-xlarge-right\@l,html.bp-m-max .uk-offset-xlarge-right\@m,html.bp-s-max .uk-offset-xlarge-right\@s,html.bp-xl-max .uk-offset-xlarge-right\@xl,html.bp-xs-max .uk-offset-xlarge-right\@xs {
    margin-right: var(--sizes-offset-xlarge)!important
}

.uk-offset-2xlarge,html.bp-l-max .uk-offset-2xlarge\@l,html.bp-m-max .uk-offset-2xlarge\@m,html.bp-s-max .uk-offset-2xlarge\@s,html.bp-xl-max .uk-offset-2xlarge\@xl,html.bp-xs-max .uk-offset-2xlarge\@xs {
    margin-left: var(--sizes-offset-2xlarge)!important;
    margin-right: var(--sizes-offset-2xlarge)!important
}

.uk-offset-2xlarge-left,html.bp-l-max .uk-offset-2xlarge-left\@l,html.bp-m-max .uk-offset-2xlarge-left\@m,html.bp-s-max .uk-offset-2xlarge-left\@s,html.bp-xl-max .uk-offset-2xlarge-left\@xl,html.bp-xs-max .uk-offset-2xlarge-left\@xs {
    margin-left: var(--sizes-offset-2xlarge)!important
}

.uk-offset-2xlarge-right,html.bp-l-max .uk-offset-2xlarge-right\@l,html.bp-m-max .uk-offset-2xlarge-right\@m,html.bp-s-max .uk-offset-2xlarge-right\@s,html.bp-xl-max .uk-offset-2xlarge-right\@xl,html.bp-xs-max .uk-offset-2xlarge-right\@xs {
    margin-right: var(--sizes-offset-2xlarge)!important
}

.uk-offset-3xlarge,html.bp-l-max .uk-offset-3xlarge\@l,html.bp-m-max .uk-offset-3xlarge\@m,html.bp-s-max .uk-offset-3xlarge\@s,html.bp-xl-max .uk-offset-3xlarge\@xl,html.bp-xs-max .uk-offset-3xlarge\@xs {
    margin-left: var(--sizes-offset-3xlarge)!important;
    margin-right: var(--sizes-offset-3xlarge)!important
}

.uk-offset-3xlarge-left,html.bp-l-max .uk-offset-3xlarge-left\@l,html.bp-m-max .uk-offset-3xlarge-left\@m,html.bp-s-max .uk-offset-3xlarge-left\@s,html.bp-xl-max .uk-offset-3xlarge-left\@xl,html.bp-xs-max .uk-offset-3xlarge-left\@xs {
    margin-left: var(--sizes-offset-3xlarge)!important
}

.uk-offset-3xlarge-right,html.bp-l-max .uk-offset-3xlarge-right\@l,html.bp-m-max .uk-offset-3xlarge-right\@m,html.bp-s-max .uk-offset-3xlarge-right\@s,html.bp-xl-max .uk-offset-3xlarge-right\@xl,html.bp-xs-max .uk-offset-3xlarge-right\@xs {
    margin-right: var(--sizes-offset-3xlarge)!important
}

.uk-offset-remove,html.bp-l-max .uk-offset-remove\@l,html.bp-m-max .uk-offset-remove\@m,html.bp-s-max .uk-offset-remove\@s,html.bp-xl-max .uk-offset-remove\@xl,html.bp-xs-max .uk-offset-remove\@xs {
    margin-left: var(--sizes-offset-remove)!important;
    margin-right: var(--sizes-offset-remove)!important
}

.uk-offset-remove-left,html.bp-l-max .uk-offset-remove-left\@l,html.bp-m-max .uk-offset-remove-left\@m,html.bp-s-max .uk-offset-remove-left\@s,html.bp-xl-max .uk-offset-remove-left\@xl,html.bp-xs-max .uk-offset-remove-left\@xs {
    margin-left: var(--sizes-offset-remove)!important
}

.uk-offset-remove-right,html.bp-l-max .uk-offset-remove-right\@l,html.bp-m-max .uk-offset-remove-right\@m,html.bp-s-max .uk-offset-remove-right\@s,html.bp-xl-max .uk-offset-remove-right\@xl,html.bp-xs-max .uk-offset-remove-right\@xs {
    margin-right: var(--sizes-offset-remove)!important
}

.uk-blur-small {
    filter: blur(8px)
}

.uk-blur-medium {
    filter: blur(40px)
}

.uk-blur-large {
    filter: blur(80px)
}

.uni-header {
    --topbar-height: calc(var(--header-topbar-height) - (var(--header-topbar-vertical-spacing) * 2));
    --topbar-mobile-spacing: calc(var(--header-topbar-row-spacing) / 2);
    --navbar-mobile-height: calc(var(--header-navbar-mobile-height) - (var(--header-navbar-vertical-spacing) * 2));
    --navbar-mobile-spacing: calc(var(--header-navbar-row-spacing) / 2);
    --bottombar-height: calc(var(--header-bottombar-height) - (var(--header-bottombar-vertical-spacing) * 2));
    --bottombar-mobile-spacing: calc(var(--header-bottombar-row-spacing) / 2);
    z-index: 99
}

.uni-header-navbar .uk-navbar {
    min-height: var(--navbar-mobile-height);
    padding: 0
}

.uni-header-navbar .uk-navbar-bottom,.uni-header-navbar .uk-navbar-top {
    margin-left: calc(var(--header-navbar-row-spacing)/ 2 * -1);
    margin-right: calc(var(--header-navbar-row-spacing)/ 2 * -1)
}

.uni-header-navbar .uk-navbar-item,.uni-header-navbar .uk-navbar-nav,.uni-header-navbar .uk-navbar-toggle {
    font-family: var(--header-navbar-font-typeface);
    font-size: var(--header-navbar-font-size);
    font-weight: var(--header-navbar-font-weight);
    letter-spacing: var(--header-navbar-font-spacing);
    text-transform: var(--header-navbar-font-transform);
    color: var(--header-navbar-color-text);
    padding-left: var(--navbar-mobile-spacing);
    padding-right: var(--navbar-mobile-spacing)
}

.uni-header-navbar .uk-navbar-bottom {
    padding-top: var(--header-navbar-row-spacing)
}

.uni-header-navbar .uk-navbar-divider-column>.uk-navbar-bottom {
    margin-top: var(--header-navbar-row-spacing)
}

.uni-header-navbar .uk-navbar-divider-column>.uk-navbar-bottom::before {
    border-color: var(--border-color);
    left: var(--navbar-mobile-spacing);
    right: var(--navbar-mobile-spacing)
}

.uni-header-navbar .uk-navbar .uk-logo {
    font-family: var(--header-logo-font-typeface);
    font-size: var(--header-logo-font-size);
    font-weight: var(--header-logo-font-weight);
    letter-spacing: var(--header-logo-font-spacing);
    text-transform: var(--header-logo-font-transform);
    line-height: 1;
    color: var(--header-logo-color-text);
    margin: 0!important
}

.uni-header-navbar .uk-navbar .uk-logo>img {
    width: var(--header-logo-width)
}

.uni-header-navbar .uk-navbar-nav {
    gap: var(--header-nav-row-spacing)
}

.uni-header-navbar .uk-navbar-nav>li>a {
    font-family: var(--header-nav-font-typeface);
    font-size: var(--header-nav-font-size);
    font-weight: var(--header-nav-font-weight);
    letter-spacing: var(--header-nav-font-spacing);
    text-transform: var(--header-nav-font-transform);
    color: var(--header-nav-color-text)!important
}

.uni-header-navbar .uk-navbar-nav>li>a:hover {
    color: var(--header-nav-color-text-hover)
}

.uni-header-navbar .uk-navbar-nav-large>li+li {
    margin-left: calc(var(--header-nav-row-spacing) * 2)
}

html.bp-m .uni-header-navbar .uk-navbar {
    min-height: var(--header-navbar-height)
}

html.bp-m .uni-header-navbar .uk-navbar-bottom,html.bp-m .uni-header-navbar .uk-navbar-top {
    margin-left: calc(var(--header-navbar-row-spacing) * -1);
    margin-right: calc(var(--header-navbar-row-spacing) * -1)
}

html.bp-m .uni-header-navbar .uk-navbar-item,html.bp-m .uni-header-navbar .uk-navbar-nav,html.bp-m .uni-header-navbar .uk-navbar-toggle {
    padding-left: var(--header-navbar-row-spacing);
    padding-right: var(--header-navbar-row-spacing)
}

html.bp-m .uni-header-navbar .uk-navbar-divider-column>.uk-navbar-bottom::before {
    left: var(--header-navbar-row-spacing);
    right: var(--header-navbar-row-spacing)
}

.uni-header-navbar.uk-sticky.uk-active {
    z-index: 999;
    left: 0;
    right: 0;
    color: var(--header-navbar-sticky-color-text);
    box-shadow: var(--header-navbar-sticky-shadow)
}

.uni-header-navbar.uk-sticky.uk-active .uk-navbar {
    min-height: var(--header-navbar-sticky-height)
}

.uni-header-navbar.uk-sticky.uk-active .uk-navbar-nav>li>a {
    line-height: var(--header-navbar-sticky-height)
}

.uni-header-navbar.uk-sticky.uk-active:not(.uni-mobile-header) .uk-logo>img {
    width: var(--header-logo-sticky-width)
}

.uni-header-navbar.uk-sticky.uk-active:not(.uk-sticky-transparent) {
    box-shadow: none!important
}

.uni-header-navbar.uk-sticky.uk-active:not(.uk-sticky-transparent) {
    background-color: #fff!important;
    background: #fff!important;
    color: #000!important
}

.uk-dark .uni-header-navbar.uk-sticky.uk-active:not(.uk-sticky-transparent),.uni-header-navbar.uk-sticky.uk-active:not(.uk-sticky-transparent).uk-dark {
    background-color: var(--color-gray-100)!important;
    background: linear-gradient(to bottom,var(--color-gray-100),transparent)!important;
    color: #fff!important
}

.uni-header-topbar .uk-navbar {
    min-height: var(--topbar-height);
    padding: var(--header-topbar-vertical-spacing) 0
}

.uni-header-topbar .uk-navbar-container {
    margin-left: calc(var(--topbar-mobile-spacing) * -1);
    margin-right: calc(var(--topbar-mobile-spacing) * -1)
}

.uni-header-topbar .uk-navbar-item,.uni-header-topbar .uk-navbar-nav,.uni-header-topbar .uk-navbar-toggle {
    font-family: var(--header-topbar-font-typeface);
    font-size: var(--header-topbar-font-size);
    font-weight: var(--header-topbar-font-weight);
    letter-spacing: var(--header-topbar-font-spacing);
    text-transform: var(--header-topbar-font-transform);
    color: var(--header-topbar-color-text);
    padding-left: var(--topbar-mobile-spacing);
    padding-right: var(--topbar-mobile-spacing)
}

.uni-header-topbar .uk-navbar-nav>li+li {
    margin-left: var(--header-topbar-row-spacing)
}

.uni-header-topbar .uk-navbar-nav-large>li+li {
    margin-left: calc(var(--header-nav-row-spacing) * 2)
}

.uni-header-bottombar .uk-navbar {
    min-height: var(--bottombar-height);
    padding: var(--header-bottombar-vertical-spacing) 0
}

.uni-header-bottombar .uk-navbar-container {
    margin-left: calc(var(--bottombar-mobile-spacing) * -1);
    margin-right: calc(var(--bottombar-mobile-spacing) * -1)
}

.uni-header-bottombar .uk-navbar-item,.uni-header-bottombar .uk-navbar-nav,.uni-header-bottombar .uk-navbar-toggle {
    font-family: var(--header-bottombar-font-typeface);
    font-size: var(--header-bottombar-font-size);
    font-weight: var(--header-bottombar-font-weight);
    letter-spacing: var(--header-bottombar-font-spacing);
    text-transform: var(--header-bottombar-font-transform);
    color: var(--header-bottombar-color-text);
    padding-left: var(--bottombar-mobile-spacing);
    padding-right: var(--bottombar-mobile-spacing)
}

.uni-header-bottombar .uk-navbar-nav>li+li {
    margin-left: var(--header-bottombar-row-spacing)
}

.uni-header-bottombar .uk-navbar-nav-large>li+li {
    margin-left: calc(var(--header-nav-row-spacing) * 2)
}

.uni-header-rainbow {
    padding-bottom: 4px;
    background-image: linear-gradient(to left,var(--color-primary),var(--color-secondary),var(--color-tertiary),var(--color-info))
}

.uk-dark .dark\:uk-visible,.uk-dark.dark\:uk-visible {
    display: block!important
}

.uk-dark .dark\:uk-hidden,.uk-dark.dark\:uk-hidden {
    display: none!important
}

.uk-dark .dark .uk-heading-line>::after,.uk-dark .dark .uk-heading-line>::before,.uk-dark .dark.uk-heading-line>::after,.uk-dark .dark.uk-heading-line>::before,.uk-dark.dark .uk-heading-line>::after,.uk-dark.dark .uk-heading-line>::before,.uk-dark.dark.uk-heading-line>::after,.uk-dark.dark.uk-heading-line>::before {
    border-color: var(--color-gray-80)!important
}

.uk-dark a,.uk-dark a:link {
    color: var(--color-gray-10)
}

.uk-dark a:hover,.uk-dark a:link:hover {
    color: var(--color-gray-30)
}

.uk-dark .uk-h1,.uk-dark .uk-h2,.uk-dark .uk-h3,.uk-dark .uk-h4,.uk-dark .uk-h5,.uk-dark .uk-h6,.uk-dark .uk-heading-2xlarge,.uk-dark .uk-heading-d1,.uk-dark .uk-heading-d2,.uk-dark .uk-heading-d3,.uk-dark .uk-heading-large,.uk-dark .uk-heading-medium,.uk-dark .uk-heading-small,.uk-dark .uk-heading-xlarge,.uk-dark h1,.uk-dark h2,.uk-dark h3,.uk-dark h4,.uk-dark h5,.uk-dark h6 {
    color: var(--color-gray-10)
}

html:not(.bp-l) .uni-header-navbar.uk-active {
    background-color: #fff
}

html:not(.bp-l) .uk-dark .uni-header-navbar.uk-active,html:not(.bp-l) .uni-header.uk-dark .uni-header-navbar.uk-active,html:not(.bp-l).uk-dark .uni-header-navbar.uk-active {
    background-color: var(--color-gray-100)!important
}

.uk-dark .uk-logo,.uk-dark.uk-logo {
    color: var(--color-gray-10)!important
}

.uk-dark .uk-droplist,.uk-dark.uk-droplist {
    box-shadow: 0 0 0 1px var(--color-gray-100)
}

.uni-header {
    z-index: 999
}

.uni-header .uk-logo {
    transition: color .2s ease-in
}

.uni-header .uk-navbar-nav>li ul {
    min-width: 224px;
    padding: 12px;
    border-radius: var(--radius);
    border: 1px solid;
    box-shadow: 0 8px 32px -8px rgba(0,0,0,.25);
    z-index: 99
}

.uni-header .uk-navbar-nav>li ul {
    border-color: transparent
}

.uk-dark .uni-header .uk-navbar-nav>li ul,.uni-header .uk-navbar-nav>li ul.uk-dark {
    border-color: rgba(255,255,255,.08)
}

.uni-header .uk-navbar-nav>li ul li {
    padding: 0
}

.uni-header .uk-navbar-nav>li ul li>a {
    border-radius: calc(var(--radius)/ 2);
    padding: 2px 12px
}

.uni-header .uk-navbar-nav>li ul li:hover>a {
    background-color: rgba(0,0,0,.05)
}

.uk-dark .uni-header .uk-navbar-nav>li ul li:hover>a,.uni-header .uk-navbar-nav>li ul li:hover>a.uk-dark {
    background-color: rgba(255,255,255,.05)
}

.uni-header .uk-navbar-nav>li>ul * ul {
    top: -13px;
    left: calc(100% + 16px)
}

.uni-header .uk-navbar-nav>li>ul * ul.reverse-submenu-open {
    left: auto;
    right: calc(100% + 16px)
}

.uni-header .uk-navbar-nav>li>a {
    position: relative
}

.uni-header .uk-navbar-nav>li:hover>a {
    color: inherit;
    opacity: .7
}

.uni-header .uk-navbar-nav>li.uk-active>a::after {
    opacity: 1;
    transform: translateY(0)
}

.uni-header .uk-scrollnav-header.uk-active {
    background-color: rgba(255,255,255,.95)
}

.uni-mobile-menu-content::before {
    content: "";
    display: block;
    height: 4px;
    background-color: var(--gradient-first);
    background-image: linear-gradient(var(--gradient-angle),var(--gradient-first),var(--gradient-second))
}

.uni-mobile-menu .uk-nav>li {
    position: relative;
    font-weight: 700
}

.uni-mobile-menu .uk-nav>li>a {
    font-size: 1rem;
    font-weight: 400;
    padding: 0;
    line-height: 1
}

.uni-mobile-menu .uk-nav>li>a>.icon {
    opacity: .5;
    margin-right: 8px
}

.uni-mobile-menu .uk-nav>li+* {
    margin-top: 16px
}

.uni-mobile-menu .uk-nav-divider {
    border-color: rgba(0,0,0,.1)
}

.uk-dark .uni-mobile-menu .uk-nav-divider,.uni-mobile-menu .uk-nav-divider.uk-dark {
    border-color: rgba(255,255,255,.15)
}

.uni-mobile-menu .uk-nav-header {
    padding: 0
}

.uni-mobile-menu .uk-nav-header {
    color: var(--color-gray-70)
}

.uk-dark .uni-mobile-menu .uk-nav-header,.uni-mobile-menu .uk-nav-header.uk-dark {
    color: var(--color-gray-70)!important
}

.uni-mobile-menu .uk-nav-header:not(:first-child) {
    padding-top: 16px;
    margin-top: 24px
}

.uni-mobile-menu .uk-nav-header:not(:first-child):before {
    content: "";
    position: absolute;
    top: 0;
    display: block;
    width: 100%;
    border-top: 1px solid
}

.uni-mobile-menu .uk-nav-header:not(:first-child):before {
    border-color: rgba(0,0,0,.1)
}

.uk-dark .uni-mobile-menu .uk-nav-header:not(:first-child):before,.uni-mobile-menu .uk-nav-header:not(:first-child).uk-dark:before {
    border-color: rgba(255,255,255,.15)
}

:root {
    --color-gray-100: #0F051D;
    --color-gray-90: #1B1128;
    --color-gray-80: #332A3F;
    --color-gray-70: #4B4356;
    --color-gray-60: #7B7583;
    --color-gray-50: #9F9BA5;
    --color-gray-40: #B7B4BB;
    --color-gray-30: #CFCDD2;
    --color-gray-20: #E7E6E8;
    --color-gray-10: #F3F2F4;
    overflow-anchor: none
}

html {
    font-variant-numeric: lining-nums
}

.uk-font-heading {
    font-family: var(--font-family-heading)
}

.uk-navbar-bottom .uk-navbar-nav::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;
    scrollbar-width: none
}

.uk-overlay-primary {
    background: rgba(227,72,255,.25)
}

.uk-modal-center {
    background: rgba(155,155,155,.2)
}

.uk-modal-center>div {
    transform: unset;
    box-shadow: 0 0 40px 0 rgba(0,0,0,.1)
}

.uk-subnav.uk-subnav-opacity>*>* {
    opacity: .4
}

.uk-subnav.uk-subnav-opacity>.uk-active>* {
    opacity: 1
}

.uk-input-number {
    position: relative
}

.uk-input-number>button {
    position: absolute;
    background: 0 0;
    border: 0;
    width: 33%;
    height: 100%;
    vertical-align: middle;
    padding: 8%;
    opacity: .5
}

.uk-input-number>button:hover {
    opacity: 1
}

.uk-input-number>button.input-number-up {
    right: 0
}

input[data-uk-input-number] {
    text-align: center;
    -moz-appearance: textfield
}

input[data-uk-input-number]::-webkit-inner-spin-button,input[data-uk-input-number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0
}

.uk-dark .uk-input-number>button {
    color: #fff
}

.swiper-pagination.numbered-pagination {
    font-size: 1rem;
    counter-reset: number
}

.swiper-pagination.numbered-pagination>* {
    background: 0 0!important;
    color: var(--color-gray-60);
    opacity: 1
}

.swiper-pagination.numbered-pagination>.swiper-pagination-bullet-active {
    color: var(--color-gray-100)
}

.swiper-pagination.numbered-pagination>::before {
    counter-increment: number;
    content: counter(number) "."
}

.uk-dark .swiper-pagination.numbered-pagination>* {
    color: var(--color-gray-10);
    opacity: .3
}

.uk-dark .swiper-pagination.numbered-pagination>.swiper-pagination-bullet-active {
    opacity: 1
}

.uni-nav-swiper:hover {
    opacity: .5
}

.uni-sticky-menu>div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 120px;
    position: relative;
    z-index: 9999;
    transition: all .2s ease-in;
    visibility: hidden;
    opacity: 0
}

.uni-sticky-menu>div.uk-active {
    visibility: visible;
    opacity: 1
}

.uni-menu-trigger {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    cursor: pointer;
    z-index: 9999
}

.uni-menu-trigger::after,.uni-menu-trigger::before {
    content: "";
    width: calc(100% - 4px);
    height: 1px;
    background-color: var(--color-gray-100);
    margin: 4px 0;
    transition: transform .2s ease-in,background-color .2s ease-in
}

.uni-menu-trigger[aria-expanded=true]::before {
    transform: translate(0,5px) rotate(45deg)
}

.uni-menu-trigger[aria-expanded=true]::after {
    transform: translate(0,-5px) rotate(-45deg)
}

.uni-icon-wave {
    animation: wave 2.5s cubic-bezier(.87,0,.13,1) .2s infinite
}

@keyframes wave {
    0% {
        transform: translateY(-10px)
    }

    50% {
        transform: translateY(10px)
    }

    100% {
        transform: translateY(-10px)
    }
}

img {
    font-size: 11px
}

img.image-hover-revealer {
    --move-x: 0px;
    --move-y: 0px;
    position: absolute;
    width: 200px;
    height: 200px;
    object-fit: cover;
    transform: translateX(var(--move-x)) translateY(var(--move-y));
    top: 0;
    left: 0;
    z-index: 10;
    pointer-events: none;
    will-change: clip-path,transform;
    visibility: hidden;
    opacity: 0;
    transition: visibility .4s cubic-bezier(.87,0,.13,1),opacity .4s cubic-bezier(.87,0,.13,1),clip-path .4s cubic-bezier(.87,0,.13,1);
    clip-path: inset(0 0 0 100%)
}

img.image-hover-revealer.uk-active {
    clip-path: inset(0 0 0 0);
    opacity: 1;
    visibility: visible
}

[data-image-hover-revealer] {
    z-index: 1;
    position: relative
}

[data-darkmode-toggle] {
    transform: scale(.9);
    opacity: .5;
    transition: .2s ease;
    z-index: 1000
}

[data-darkmode-toggle] .switch {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px
}

[data-darkmode-toggle] .switch>.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0
}

[data-darkmode-toggle] .switch>.slider:before {
    content: "dark_mode";
    font-family: "Material Icons";
    position: absolute;
    left: 0;
    bottom: 0;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: 40px;
    height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 40px;
    line-height: 1.2;
    -webkit-transition: .3s;
    transition: .3s;
    z-index: 1;
    background-color: var(--color-gray-90);
    color: #fff
}

[data-darkmode-toggle] .switch>input {
    opacity: 0;
    width: 0;
    height: 0
}

[data-darkmode-toggle] .switch>input:checked+.slider:before {
    content: "light_mode";
    background-color: #fff;
    color: #000
}

[data-darkmode-toggle]:hover {
    transform: scale(1.1);
    opacity: 1
}

.uk-image-middle {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%
}

.uk-image-middle>img {
    height: auto;
    max-height: 100%;
    max-width: 100%
}

.uk-switcher-overflow {
    display: flex;
    overflow-x: auto;
    margin-left: -15px;
    margin-right: -15px;
    padding-left: 15px;
    padding-right: 15px
}

.uk-countdown-animate>i {
    animation-name: timer;
    animation-iteration-count: infinite;
    animation-duration: 3s
}

@keyframes timer {
    0% {
        transform: rotate(0)
    }

    25% {
        transform: rotate(180deg)
    }

    50% {
        transform: rotate(360deg)
    }

    75% {
        transform: rotate(360deg)
    }

    100% {
        transform: rotate(360deg)
    }
}

.uk-countdown-days,.uk-countdown-hours,.uk-countdown-minutes,.uk-countdown-seconds {
    display: inline-flex
}

.uk-countdown-days>span,.uk-countdown-hours>span,.uk-countdown-minutes>span,.uk-countdown-seconds>span {
    width: 1ch;
    display: inline-block
}

.uk-dark .uni-artist-group>*>img {
    background-color: var(--color-gray-90);
    border-color: var(--color-gray-100)
}

[data-toggle-active].active .not-active,[data-toggle-active]:not(.active) .active {
    display: none
}

[data-toggle-loading].loading .not-loading,[data-toggle-loading].no-more-loading .not-loading,[data-toggle-loading]:not(.loading) .loading,[data-toggle-loading]:not(.no-more-loading) .no-more-loading {
    display: none
}

body.uni-is-login .uni-logout-visible,body:not(.uni-is-login) .uni-login-visible {
    display: none
}

.uni-collection-content {
    margin-top: -18px
}

html.bp-m .uni-collection-content {
    margin-top: -32px
}

.uni-artist-content {
    margin-top: -18px
}

html.bp-m .uni-artist-content {
    margin-top: -32px
}

.uni-features-listing {
    counter-reset: feature
}

.uni-features .uni-feature-icon {
    font-size: 1.25rem;
    width: 80px;
    height: 80px;
    display: inline-flex;
    align-items: center;
    justify-content: center
}

.uni-features .uni-feature-icon {
    color: var(--color-gray-100)
}

.uk-dark .uni-features .uni-feature-icon,.uni-features .uni-feature-icon.uk-dark {
    color: #fff
}

.uni-features .uni-feature:not(.two) .uni-feature-icon .icon {
    display: none
}

.swiper {
    padding: 16px;
    margin: -16px
}

.swiper-prev {
    background-color: #fff!important;
    transform: translate(-50%,-50%)
}

.swiper-next {
    background-color: #fff!important;
    transform: translate(50%,-50%)
}

.uni-circle-blur {
    display: block;
    position: absolute;
    width: 600px;
    height: 600px;
    background: linear-gradient(to right,#7f7fd5,#86a8e7,#e691ea);
    border-radius: 100%;
    filter: blur(200px);
    transform: translate(-50%,-50%);
    z-index: -1
}

.uni-circle-blur {
    mix-blend-mode: normal
}

.uk-dark .uni-circle-blur,.uni-circle-blur.uk-dark {
    mix-blend-mode: soft-light
}

.uni-circle-blur {
    opacity: .5
}

.uk-dark .uni-circle-blur,.uni-circle-blur.uk-dark {
    opacity: 1
}

.uni-circle-blur.uk-position-center-right {
    transform: translate(50%,-50%)
}

.uni-hero-blend {
    mix-blend-mode: normal
}

.uk-dark .uni-hero-blend,.uni-hero-blend.uk-dark {
    mix-blend-mode: color
}

.uni-circles-blureds {
    overflow: hidden;
    z-index: -1
}

.uni-circles-blureds>div {
    width: 1000px;
    height: 1000px;
    display: block;
    position: absolute;
    border-radius: 100%;
    filter: blur(80px)
}

.uni-circles-blureds>div:first-child {
    left: -50%;
    top: -50%;
    background: linear-gradient(-45deg,var(--color-primary),var(--color-secondary))
}

.uni-circles-blureds>div:last-child {
    right: -50%;
    bottom: -75%;
    background: linear-gradient(45deg,var(--color-primary),var(--color-secondary))
}

.uni-circle-text {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-50%,-50%);
    border-radius: 100%
}

.uni-circle-text-path {
    fill: currentColor;
    height: auto;
    max-width: 132px;
    right: 10%;
    transform-origin: center;
    text-transform: uppercase
}

.uni-circle-text::before {
    content: "";
    display: block;
    width: 78px;
    height: 78px;
    border: 1px solid rgba(131,131,131,.175);
    position: absolute;
    transform: scale(.5);
    left: 0;
    top: 0;
    transform: translate(20px,20px);
    border-radius: 100%
}

.uni-animation-spin {
    display: inline-flex;
    animation: spin 10s linear 0s infinite
}

.uni-animation-bounce {
    display: inline-flex;
    animation: bounce 3s linear 0s infinite
}

.uni-animation-fade {
    display: inline-flex;
    animation: fade 2s linear 0s infinite
}

.uni-animation-delay-small {
    animation-delay: .2s
}

.uni-animation-delay-large {
    animation-delay: .4s
}

@keyframes spin {
    0% {
        transform: rotate(0)
    }

    50% {
        transform: rotate(180deg)
    }

    100% {
        transform: rotate(360deg)
    }
}

@keyframes bounce {
    0% {
        transform: translateY(0)
    }

    50% {
        transform: translateY(16px)
    }

    100% {
        transform: translateY(0)
    }
}

@keyframes fade {
    0% {
        opacity: 0
    }

    50% {
        opacity: 1
    }

    100% {
        opacity: 0
    }
}

.uk-button .uk-button-text-unset {
    color: initial!important
}

.uk-text-space {
    letter-spacing: 1rem!important
}

.uk-heading-divider {
    text-align: center;
    border: 0;
    padding-bottom: 24px
}

.uk-heading-divider::after {
    content: "";
    width: 80px;
    height: 2px;
    background-color: var(--gradient-first);
    background: linear-gradient(var(--gradient-angle),var(--gradient-first),var(--gradient-second));
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    align-self: center;
    transform: translateX(-50%);
    left: 50%;
    bottom: 0;
    position: absolute
}

.uni-phase-progress {
    width: 48px;
    height: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 2px;
    line-height: 1;
    border-radius: 100%;
    transform: rotate(16deg)
}

.uni-phase-progress>span {
    display: block;
    font-size: 150%
}

.uni-phase::after {
    content: "";
    width: 12px;
    height: 12px;
    border-radius: 100%;
    background-color: var(--color-primary);
    background-color: var(--gradient-first);
    background-image: linear-gradient(var(--gradient-angle),var(--gradient-first),var(--gradient-second));
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(calc(100% + 16px),-50%);
    z-index: 2;
    border: 6px solid;
    box-shadow: 0 0 0 2px rgba(151,151,151,.2)
}

.uni-phase::after {
    border-color: #fff
}

.uk-dark .uni-phase::after,.uni-phase.uk-dark::after {
    border-color: var(--color-gray-100)
}

.uni-phase-even::after {
    right: auto;
    left: 0;
    transform: translate(calc(-100% - 16px),-50%)
}

.swiper-dotnav.swiper-pagination-progressbar {
    height: 8px;
    width: 32vh;
    margin: 0 auto;
    left: 50%;
    top: auto;
    bottom: 0;
    background-color: rgba(156,156,156,.15);
    transform: translate(-50%,48px);
    border-radius: 8px;
    overflow: hidden
}

.swiper-dotnav.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
    background-color: var(--gradient-first);
    background-image: linear-gradient(var(--gradient-angle),var(--gradient-first),var(--gradient-second))
}

.uni-community-members {
    margin: 0!important;
    padding-left: 20px!important
}

.uni-community-members>* {
    padding: 0!important;
    margin-left: -20px!important
}

.uni-community-members>* div {
    box-shadow: 0 0 0 3px #fff
}

.uk-dark .uni-community-members>* div,.uni-community-members>* div.uk-dark {
    box-shadow: 0 0 0 3px var(--color-gray-100)
}

.marquee-horizontal {
    position: relative;
    z-index: 200;
    display: flex;
    width: 100%;
    height: 144px;
    -webkit-box-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    align-items: center;
    overflow: hidden
}

.marquee-horizontal .track-horizontal {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    white-space: nowrap;
    will-change: transform;
    animation: marquee-horizontal 40s linear infinite
}

.marquee-horizontal .track-horizontal .marquee-text {
    display: flex;
    font-style: italic;
    margin-right: 8vw;
    -webkit-box-flex: 0;
    flex: 0 0 auto
}

.marquee-horizontal .track-horizontal .marquee-text::before {
    content: "★";
    display: flex;
    align-items: center;
    font-size: .5em;
    margin-right: 8vw
}

@keyframes marquee-horizontal {
    from {
        transform: translateX(0)
    }

    to {
        transform: translateX(-50%)
    }
}

.uk-dropdown {
    min-width: 224px;
    padding: 12px;
    border-radius: var(--radius);
    border: 1px solid;
    box-shadow: 0 8px 32px -8px rgba(0,0,0,.25)
}

.uk-dropdown {
    background-color: #fff!important;
    border-color: transparent!important
}

.uk-dark .uk-dropdown,.uk-dropdown.uk-dark {
    background-color: var(--color-gray-90)!important;
    border-color: rgba(255,255,255,.08)!important
}

.uk-dropdown-nav>li {
    font-size: .875rem;
    position: relative;
    padding: 8px 12px;
    border-radius: calc(var(--radius)/ 2);
    line-height: 1
}

.uk-dropdown-nav>li>a {
    color: inherit
}

.uk-dropdown-nav>li.uk-active,.uk-dropdown-nav>li:hover {
    background-color: rgba(0,0,0,.05)!important;
    color: #000!important
}

.uk-dark .uk-dropdown-nav>li.uk-active,.uk-dark .uk-dropdown-nav>li:hover,.uk-dropdown-nav>li.uk-active.uk-dark,.uk-dropdown-nav>li:hover.uk-dark {
    background-color: rgba(255,255,255,.05)!important;
    color: #fff!important
}

.uk-dropdown-nav>li.uk-active>a,.uk-dropdown-nav>li:hover>a {
    color: inherit
}

.uk-dropdown-nav>li.uk-nav-divider {
    padding: 0!important;
    margin: 8px 0;
    margin-left: -12px;
    margin-right: -12px
}

.uk-dropdown-minimal {
    min-width: 144px;
    padding: 8px
}

.uk-dropdown-minimal .uk-dropdown-nav>li {
    padding: 4px 8px
}

.uk-dropdown-minimal .uk-dropdown-nav>li.uk-nav-divider {
    margin-left: -8px;
    margin-right: -8px
}

.uk-form-blank:focus,.uk-form-blank:focus-visible {
    border-style: dashed;
    outline: 0
}

.uk-form-blank:focus,.uk-form-blank:focus-visible {
    border-color: rgba(0,0,0,.08)
}

.uk-dark .uk-form-blank:focus,.uk-dark .uk-form-blank:focus-visible,.uk-form-blank:focus-visible.uk-dark,.uk-form-blank:focus.uk-dark {
    border-color: rgba(255,255,255,.08)
}

.uk-form-blank:focus,.uk-form-blank:focus-visible {
    color: #000
}

.uk-dark .uk-form-blank:focus,.uk-dark .uk-form-blank:focus-visible,.uk-form-blank:focus-visible.uk-dark,.uk-form-blank:focus.uk-dark {
    color: #fff
}

input[type=range] {
    --slider-thumb-color: var(--color-primary);
    outline: 0;
    border: 0;
    border-radius: var(--radius);
    transition: box-shadow .2s ease-in-out
}

input[type=range] {
    --slider-thumb-border: white
}

.uk-dark input[type=range],input[type=range].uk-dark {
    --slider-thumb-border: var(--color-gray-100)
}

input[type=range] {
    --range-track: rgba(0, 0, 0, 0.08)
}

.uk-dark input[type=range],input[type=range].uk-dark {
    --range-track: rgba(255, 255, 255, 0.08)
}

@media screen and (-webkit-min-device-pixel-ratio: 0) {
    input[type=range] {
        -webkit-appearance:none;
        height: 4px
    }

    input[type=range]::-webkit-slider-runnable-track {
        -webkit-appearance: none;
        height: 4px;
        color: #444;
        background-color: var(--range-track)
    }

    input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        top: 1px;
        width: 16px;
        height: 16px;
        background: var(--slider-thumb-color);
        border-radius: 50%;
        box-shadow: 0 0 0 2px var(--slider-thumb-border);
        position: relative;
        border: 0;
        transition: transform .2s ease-in-out
    }

    input[type=range]:active::-webkit-slider-thumb {
        background: var(--slider-thumb-color);
        transform: scale(1.2)
    }
}

input[type=range]::-moz-range-progress {
    background-color: #43e5f7
}

input[type=range]::-moz-range-track {
    background-color: #9a905d
}

input[type=range]::-ms-fill-lower {
    background-color: #43e5f7
}

input[type=range]::-ms-fill-upper {
    background-color: #9a905d
}

.uk-form-custom input[type=file],.uk-form-custom select {
    padding: 0 20px;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit
}

option {
    padding: 0 11px;
    background-color: #fff;
    color: #000
}

.uk-dark option {
    background-color: #131313;
    color: #fff
}
