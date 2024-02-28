import{a5 as t}from"./app-MTw14Bk2.js";var a={provider:"Waline",dark:'html[data-theme="dark"]',serverURL:"https://blog-comment-fmnzwatk0-b2-4ac-1234s-projects.vercel.app/"};const n=async()=>{try{const{pageviewCount:e}=await t(()=>import("./app-MTw14Bk2.js").then(r=>r.a6),__vite__mapDeps([]));return e({serverURL:a.serverURL})}catch{console.error("@waline/client is not installed!");return}};export{n as updatePageview};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
