import {
  flowRendererV2,
  flowStyles
} from "./chunk-VMFEZVOR.js";
import "./chunk-M6EOJVMA.js";
import {
  flowDb,
  parser$1
} from "./chunk-EHBCE7DQ.js";
import "./chunk-FTFZJIMA.js";
import "./chunk-QRGXY4JU.js";
import "./chunk-5YUYDIGY.js";
import "./chunk-A3PSLO7P.js";
import "./chunk-5YGKYHED.js";
import "./chunk-KLPYN7ZJ.js";
import "./chunk-YF2GJ2P4.js";
import {
  setConfig
} from "./chunk-46LI4SST.js";
import "./chunk-UXIASGQL.js";

// node_modules/.pnpm/registry.npmmirror.com+mermaid@10.3.0/node_modules/mermaid/dist/flowDiagram-v2-65161881.js
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-65161881-OD7GF2SE.js.map
