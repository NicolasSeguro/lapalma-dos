import {computed, createApp, defineComponent, onMounted, reactive, ref, watch} from "https://cdn.jsdelivr.net/npm/vue@3.2.31/dist/vue.esm-browser.js";
import Color from "https://cdn.jsdelivr.net/npm/color@4.2.1/index.js/+esm";
import Picker from "https://cdn.jsdelivr.net/npm/vanilla-picker@2.12.1/dist/vanilla-picker.mjs";
console.log("Editor.js"),
Object.assign(window, {
    Color: Color
});
const editorStyle = document.createElement("style")
  , editorStyleText = document.createTextNode("");
editorStyle.append(editorStyleText),
document.head.append(editorStyle),
editorStyleText.data = '\n.uni-editor {\n    position: fixed;\n    width: 250px;\n    background-color: rgb(255 255 255 / 50%);\n    z-index: 10000000000;\n    padding: 10px;\n    max-height: 100%;\n    max-width: 100%;\n    overflow: auto;\n    box-sizing: border-box;\n    box-shadow: 0 0 5px rgb(0 0 0 / 25%);\n    backdrop-filter: blur(5px);\n}\n.uni-editor.uni-editor-position-top-right {\n    right: 0;\n    top: 0;\n}\n.uni-editor.uni-editor-position-top-left {\n    left: 0;\n    top: 0;\n}\n.uni-editor.uni-editor-position-bottom-right {\n    right: 0;\n    bottom: 0;\n}\n.uni-editor.uni-editor-position-bottom-left {\n    left: 0;\n    bottom: 0;\n}\n.uni-editor h3 {\n    margin: 0;\n    font-size: 18px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-wrap: wrap;\n}\n.uni-editor h3 select {\n    border: solid 1px #999;\n    border-radius: 3px;\n    padding: 3px;\n    font-size: 10px;\n    font-family: inherit;\n}\n.uni-editor * + h3 {\n    border-top: solid 1px #bdbdbd;\n    margin-top: 10px;\n    padding-top: 10px;\n}\n.uni-editor .pick-colors > div {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 5px;\n}\n.uni-editor .pick-colors > div > div {\n    display: flex;\n    border: solid 1px #bdbdbd;\n    border-radius: 3px;\n}\n.uni-editor .pick-colors input[type="text"] {\n    width: 55px;\n    height: 20px;\n    padding: 0 7px;\n    font-family: monospace;\n    border: 0;\n    font-size: 13px;\n}\n.uni-editor .pick-colors .picker_sample {\n    width: 20px;\n    height: 20px;\n    border-radius: 0 3px 3px 0;\n    font-size: 10px;\n    height: auto;\n}\n.uni-editor .pick-colors .picker_sample .popup.popup_left {\n    right: -1px;\n    margin: 0;\n    top: 100%;\n    width: 230px;\n    border: 0;\n    margin-top: 9px;\n}\n.uni-editor .pick-colors .picker_sample .popup.popup_left .picker_arrow {\n    display: none;\n}\n.uni-editor .nice-color-palettes {\n    --gap: 5px;\n    --cols: 4;\n    display: flex;\n    flex-wrap: wrap;\n    gap: var(--gap);\n    margin-top: 10px;\n}\n\n.uni-editor .nice-color-palettes > div {\n    display: flex;\n    width: calc((100% - (var(--cols) - 1) * var(--gap)) / var(--cols));\n    cursor: pointer;\n    transition: transform 0.2s, opacity 0.2s;\n}\n\n.uni-editor .nice-color-palettes > div > span {\n    background-color: var(--color);\n    aspect-ratio: 1 / 1;\n    flex: 1;\n}\n\n.uni-editor .nice-color-palettes > div:hover {\n    transform: scale(1.25);\n}\n\n.uni-editor textarea {\n    display: block;\n    width: 100%;\n    box-sizing: border-box;\n    border: 0;\n    padding: 5px;\n    border: solid 1px #9e9e9e;\n    border-radius: 3px;\n    font-size: 10px;\n    color: #212121;\n    resize: none;\n    background-color: rgb(255 255 255 / 50%);\n}\n';
const style = document.createElement("style")
  , styleText = document.createTextNode("")
  , colorsLevels = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  , createColorConfig = (e,o)=>colorsLevels.map((t=>{
    let n = t + "";
    "gray" !== o && "light" !== o && 50 === t && (n = "");
    let r = 0
      , i = t < 50 ? "#ffffff" : "#000000";
    r = t < 50 ? 90 * (1 - (t - 10) / 40) : (t - 50) / 50 * 90;
    try {
        return [n, Color(i).mix(Color(e), 1 - r / 100).hex()]
    } catch (e) {
        return [n, "#000000"]
    }
}
))
  , colors = reactive({
    primary: "#3f51b5",
    secondary: "#ff5722",
    tertiary: "#7e57c2",
    darkgrey: "#616161",
    gray: "#9e9e9e"
})
  , generatedCSS = ref("")
  , generatedSASS = ref("")
  , update = ()=>{
    const e = {};
    for (const o in colors)
        for (const [t,n] of createColorConfig(colors[o], o))
            e["--color-" + o + (t ? "-" + t : "")] = n;
    let o = ":root {\n";
    for (const [t,n] of Object.entries(e))
        o += `    ${t}: ${n};\n`;
    o += "}",
    generatedCSS.value = o;
    let t = "$user-config: (\n";
    t += "    'color': (\n";
    for (const [e,o] of Object.entries(colors))
        t += `        '${e}': ${o},\n`;
    t += "    ),\n",
    t += ");",
    generatedSASS.value = t,
    styleText.data = o
}
  , colorPalettes = ref([]);
fetch("https://cdn.jsdelivr.net/npm/nice-color-palettes@3.0.0/200.json").then((e=>e.json())).then((e=>{
    const o = [...e].map((e=>{
        const o = [...e].map((e=>Color(e)))
          , t = o.reduce(((e,o)=>e + o.hsl().array()[2]), 0);
        return {
            palette: o,
            totalSaturation: t
        }
    }
    ));
    o.sort(((e,o)=>e.totalSaturation - o.totalSaturation));
    for (let {palette: e} of o) {
        e = e.sort(((e,o)=>Color(o).hsl().array()[1] - Color(e).hsl().array()[1]));
        const o = e.find((e=>e.contrast(Color("white")) > 4.5 && e.contrast(Color("black")) > 3 && e.hsl().saturationv() > 50 && e.hsl().l() > 40));
        if (!o)
            continue;
        const t = e.find((e=>e !== o && e.contrast(Color("white")) > 2 && e.hsl().l() > 40));
        if (!t)
            continue;
        const n = e.find((e=>e !== o && e !== t && e.contrast(Color("white")) > 2 && e.hsl().l() > 40));
        n && (e = [o, t, n],
        colorPalettes.value.push(e.map((e=>e.hex()))))
    }
}
));
const InputColor = defineComponent({
    template: '\n        <input type="text" v-model="value">\n        <div class="picker_sample" ref="pickerContainer"></div>\n    ',
    props: {
        modelValue: {
            type: String
        }
    },
    setup(e, {emit: o}) {
        const t = ref()
          , n = ref(e.modelValue);
        let r;
        return watch((()=>e.modelValue), (e=>{
            n.value = e
        }
        )),
        watch(n, (e=>{
            o("update:modelValue", e)
        }
        )),
        onMounted((()=>{
            r = new Picker({
                parent: t.value,
                popup: "left",
                color: n.value,
                onChange(e) {
                    n.value = e.hex,
                    t.value.style.color = e.hex
                }
            })
        }
        )),
        {
            pickerContainer: t,
            value: n
        }
    }
})
  , App = defineComponent({
    components: {
        InputColor: InputColor
    },
    template: '\n    <div class="uni-editor" :class="{ [\'uni-editor-position-\' + position]: true }">\n        <h3>\n            Position:\n            <select v-model="position">\n                <option value="top-right">Top Right</option>\n                <option value="top-left">Top Left</option>\n                <option value="bottom-right">Bottom Right</option>\n                <option value="bottom-left">Bottom Left</option>\n            </select>\n        </h3>\n        <h3>Colors:</h3>\n        <div class="pick-colors">\n            <div v-for="(color, name) of colors" :key="name">\n                {{ name }}:\n                <div>\n                    <InputColor v-model="colors[name]"></InputColor>\n                </div>\n            </div>\n        </div>\n        <h3>Nice Color Palettes:</h3>\n        <div class="nice-color-palettes">\n            <div v-for="palette of colorPalettes" v-on:click="applyColorPalette(palette)">\n                <span v-for="color of palette" :style="{ \'--color\': color }" :title="Color(color).hsl().toString()"></span>\n            </div>\n        </div>\n        <h3>Generated CSS:</h3>\n        <textarea readonly :value="generatedCSS" :rows="Math.min(generatedCSSRows, 7)"></textarea>\n        <h3>Generated SASS:</h3>\n        <textarea readonly :value="generatedSASS" :rows="Math.min(generatedSASSRows, 7)"></textarea>\n    </div>\n    ',
    setup() {
        const e = ref("top-right")
          , o = computed((()=>generatedCSS.value.split("\n").length))
          , t = computed((()=>generatedSASS.value.split("\n").length));
        return {
            position: e,
            colors: colors,
            colorPalettes: colorPalettes,
            applyColorPalette: e=>{
                colors.primary = e[0],
                colors.secondary = e[1],
                colors.tertiary = e[2]
            }
            ,
            Color: Color,
            generatedCSS: generatedCSS,
            generatedSASS: generatedSASS,
            generatedCSSRows: o,
            generatedSASSRows: t
        }
    }
});
window.addEventListener("load", (()=>{
    const e = getComputedStyle(document.documentElement);
    Object.entries(colors).forEach((([o,t])=>{
        colors[o] = e.getPropertyValue("--color-" + o).trim() || colors[o]
    }
    )),
    colorPalettes.value.unshift([colors.primary, colors.secondary, colors.tertiary]),
    update(),
    watch(colors, update);
    const o = createApp(App)
      , t = document.createElement("div");
    o.mount(t),
    document.documentElement.appendChild(t)
}
)),
style.append(styleText),
document.head.append(style);

