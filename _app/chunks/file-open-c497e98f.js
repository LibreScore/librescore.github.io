// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const e=async e=>{const t=await e.getFile();return t.handle=e,t};var t=async(t=[{}])=>{Array.isArray(t)||(t=[t]);const a=[];t.forEach(((e,t)=>{a[t]={description:e.description||"",accept:{}},e.mimeTypes?e.mimeTypes.map((i=>{a[t].accept[i]=e.extensions||[]})):a[t].accept["/*/"]=e.extensions||[]}));const i=await window.showOpenFilePicker({id:t[0].id,startIn:t[0].startIn,types:a,multiple:t[0].multiple||!1}),s=await Promise.all(i.map(e));return t[0].multiple?s:s[0]};export{t as default};