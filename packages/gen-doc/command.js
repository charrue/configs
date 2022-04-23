const fs = require("fs");
const path = require("path");
const JsDocApi = require("jsdoc-api");

const CWD = process.cwd();
const SOURCE_PATH = path.join(CWD, "./src");
const packageName = path.basename(CWD);

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const camelizeRE = /-(\w)/g;
const camelize = (str) => str.replace(camelizeRE, (_, c) => (c ? ` ${c.toUpperCase()}` : ""));

let fileNames = fs.readdirSync(SOURCE_PATH, { encoding: "utf8" });
if (Array.isArray(fileNames)) {
  fileNames = fileNames.filter((name) => name !== "index.js");
}

// 最终结果
let ruleContent = "";

fileNames.forEach((filename) => {
  const ruleType = filename.split(".")[0];
  const filePath = path.join(SOURCE_PATH, filename);
  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
  const jsdocOutput = JsDocApi.explainSync({
    source: fileContent,
  });

  // 将文件名作为三级标题，表格表头为 规则名 + 规则描述
  let ruleItemContent = `### ${capitalize(camelize(ruleType))}\n\n` + "| 规则名称 | 规则描述 |\n|---|---|\n";
  jsdocOutput
    .filter((item) => item.kind === "member")
    .filter((t) => t.comment)
    .map((t) => {
      return {
        // 键名
        name: t.name.replace(/"/g, ""),
        // 注释
        description: t.description.replace(/\r/g, "<br/>"),
      };
    })
    .forEach((item) => {
      ruleItemContent += `| ${item.name} | ${item.description} |\n`;
    });

  ruleContent += `${ruleItemContent}<br/>\n`;
});

const packageInfoContent = fs.readFileSync(path.join(__dirname, `./docs/${packageName}.md`));

fs.writeFileSync(
  path.resolve(CWD, "README.md"),
  packageInfoContent + ruleContent,
  { encoding: "utf8" },
);
