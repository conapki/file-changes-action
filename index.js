//470
//470:function(e,t,r){"use strict";var i=this&&this.__awaiter||function(e,t,r,i){function adopt(e){return e instanceof r?e:new r(function(t){t(e)})}return new(r||(r=Promise))(function(r,n){function fulfilled(e){try{step(i.next(e))}catch(e){n(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){n(e)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)if(Object.hasOwnProperty.call(e,r))t[r]=e[r];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const s=r(431);const o=n(r(87));const a=n(r(622));var u;(function(e){e[e["Success"]=0]="Success";e[e["Failure"]=1]="Failure"})(u=t.ExitCode||(t.ExitCode={}));function exportVariable(e,t){process.env[e]=t;s.issueCommand("set-env",{name:e},t)}t.exportVariable=exportVariable;function setSecret(e){s.issueCommand("add-mask",{},e)}t.setSecret=setSecret;function addPath(e){s.issueCommand("add-path",{},e);process.env["PATH"]=`${e}${a.delimiter}${process.env["PATH"]}`}t.addPath=addPath;function getInput(e,t){const r=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!r){throw new Error(`Input required and not supplied: ${e}`)}return r.trim()}t.getInput=getInput;function setOutput(e,t){s.issueCommand("set-output",{name:e},t)}t.setOutput=setOutput;function setFailed(e){process.exitCode=u.Failure;error(e)}t.setFailed=setFailed;function isDebug(){return process.env["RUNNER_DEBUG"]==="1"}t.isDebug=isDebug;function debug(e){s.issueCommand("debug",{},e)}t.debug=debug;function error(e){s.issue("error",e)}t.error=error;function warning(e){s.issue("warning",e)}t.warning=warning;function info(e){process.stdout.write(e+o.EOL)}t.info=info;function startGroup(e){s.issue("group",e)}t.startGroup=startGroup;function endGroup(){s.issue("endgroup")}t.endGroup=endGroup;function group(e,t){return i(this,void 0,void 0,function*(){startGroup(e);let r;try{r=yield t()}finally{endGroup()}return r})}t.group=group;function saveState(e,t){s.issueCommand("save-state",{name:e},t)}t.saveState=saveState;function getState(e){return process.env[`STATE_${e}`]||""}t.getState=getState}

function getInputs(){try{const e=core.getInput("githubToken")||process.env.GITHUB_TOKEN||false;if(!e)throw new Error(s.getErrorString("getInputs Error",500,getInputs.name,"Received no token, a token is a requirement."));let t;if(typeof n.context.issue.number!=="undefined"){if(+core.getInput("prNumber")!==n.context.issue.number&&core.getInput("prNumber")){t=+core.getInput("prNumber")}else{t=n.context.issue.number}}else{t=+core.getInput("prNumber")||NaN}return{githubRepo:core.getInput("githubRepo")||`${n.context.repo.owner}/${n.context.repo.repo}`,githubToken:e,pushBefore:core.getInput("pushBefore")||(n.context.payload.before===undefined?false:n.context.payload.before),pushAfter:core.getInput("pushAfter")||(n.context.payload.after===undefined?false:n.context.payload.after),prNumber:t,output:core.getInput("output")||" ",fileOutput:core.getInput("fileOutput")||" ",event:n.context.eventName}}catch(e){const t=`Received an issue getting action inputs.`;const r=Object.fromEntries(Object.entries(process.env).filter(e=>e[0].includes("GITHUB")||e[0].includes("INPUT_")||e[0]==="HOME"));throw new Error(s.getErrorString("getInputs Error",500,getInputs.name,t,r))}}t.getInputs=getInputs;function inferInput(e,t,r){const o=n.context.eventName;const a=`Received event from ${o}, but also received a before(${e}) or after(${t}) value.\n I am assuming you want to use a Push event but forgot something, so I'm giving you a message.`;const u=`Received event from ${o}, but received a before(${e}), after(${t}), and PR(${r}).\n I am assuming you want to use one or the other but I am giving you Push.`;if(o==="pull_request"){if(e&&t&&(e!==n.context.payload.before||t!==n.context.payload.after))return{before:e,after:t};if(e||t)i.warning(a);return{pr:r}}if(o==="push"){if(r)return{pr:r};return{before:e,after:t}}if(r){if(e&&t){i.warning(u);if(o==="issue_comment")return{before:e,after:t};return{pr:r}}if(e||t)i.warning(a);return{pr:r}}if(e||t){if(!(e&&t)){const r=`Received event from ${o}, but only received a before(${e}) or after(${t}).\n I need both of these if you want to use a Push event.`;throw new Error(s.getErrorString("inferInput Error",500,inferInput.name,r))}return{before:e,after:t}}const p=`Received event from ${o}, but received no inputs. {event_name:${o}, pr: ${+r}, before:${e}, after:${t}}`;throw new Error(s.getErrorString("inferInput Error",500,inferInput.name,p))}t.inferInput=inferInput
//function(e,t,r){"use strict";var i=this&&this.__awaiter||function(e,t,r,i){function adopt(e){return e instanceof r?e:new r(function(t){t(e)})}return new(r||(r=Promise))(function(r,n){function fulfilled(e){try{step(i.next(e))}catch(e){n(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){n(e)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)if(Object.hasOwnProperty.call(e,r))t[r]=e[r];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const s=r(431);const o=n(r(87));const a=n(r(622));var u;(function(e){e[e["Success"]=0]="Success";e[e["Failure"]=1]="Failure"})(u=t.ExitCode||(t.ExitCode={}));function exportVariable(e,t){process.env[e]=t;s.issueCommand("set-env",{name:e},t)}t.exportVariable=exportVariable;function setSecret(e){s.issueCommand("add-mask",{},e)}t.setSecret=setSecret;function addPath(e){s.issueCommand("add-path",{},e);process.env["PATH"]=`${e}${a.delimiter}${process.env["PATH"]}`}t.addPath=addPath;function getInput(e,t){const r=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!r){throw new Error(`Input required and not supplied: ${e}`)}return r.trim()}t.getInput=getInput;function setOutput(e,t){s.issueCommand("set-output",{name:e},t)}t.setOutput=setOutput;function setFailed(e){process.exitCode=u.Failure;error(e)}t.setFailed=setFailed;function isDebug(){return process.env["RUNNER_DEBUG"]==="1"}t.isDebug=isDebug;function debug(e){s.issueCommand("debug",{},e)}t.debug=debug;function error(e){s.issue("error",e)}t.error=error;function warning(e){s.issue("warning",e)}t.warning=warning;function info(e){process.stdout.write(e+o.EOL)}t.info=info;function startGroup(e){s.issue("group",e)}t.startGroup=startGroup;function endGroup(){s.issue("endgroup")}t.endGroup=endGroup;function group(e,t){return i(this,void 0,void 0,function*(){startGroup(e);let r;try{r=yield t()}finally{endGroup()}return r})}t.group=group;function saveState(e,t){s.issueCommand("save-state",{name:e},t)}t.saveState=saveState;function getState(e){return process.env[`STATE_${e}`]||""}t.getState=getState}
function getErrorString(e,t=500,r,n,s=""){try{const o=JSON.stringify({error:`${t}/${e}`,from:r,message:n,payload:s},null,2);return o}catch(e){i.setFailed(`Error throwing error.\n ${JSON.stringify(e.message)}`);throw new Error(JSON.stringify({name:"500/undefined",message:"Error throwing error."}))}}t.getErrorString=getErrorString;function errorMessage(e,t){const r=JSON.stringify(t,null,2);let i;if(e.includes("getInputs"))i=`There was an getting action inputs.`;if(e.includes("inferInput"))i=`There was an issue inferring inputs to the action.`;if(e.includes("initClient"))i=`There was an issue initilizing the github client.`;if(e.includes("getChangedFiles"))i=`There was an issue getting changed files from Github.`;if(e.includes("sortChangedFiles"))i=`There was an issue sorting changed files from Github.`;if(e.includes("writeFiles"))i=`There was an issue writing output files.`;if(e.includes("writeOutput"))i=`There was an issue writing output variables.`;return`${i}\nException: ${r}`}t.errorMessage=errorMessage
//function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});const i=r(3030);const n=r(795);function initClient(e){try{return new i.GitHub(e)}catch(e){const t=`There was an error creating github client. Please check your token.`;throw new Error(n.getErrorString(e.name,e.status,initClient.name,t,e))}}t.initClient=initClient;async function getChangedPRFiles(e,t,r,i){try{const s=e.pulls.listFiles.endpoint.merge({owner:r,repo:t,pull_number:i});const o=await e.paginate(s,e=>e.data);return o}catch(e){const s=`There was an error getting change files for repo:${t} owner:${r} pr:${i}`;let o;if(e.name==="HttpError"&&+e.status===404)o=n.getErrorString(e.name,e.status,getChangedPRFiles.name,s,e);else o=n.getErrorString(`Unknown Error:${e.name||""}`,e.status,getChangedPRFiles.name,s,e.message);throw new Error(o)}}t.getChangedPRFiles=getChangedPRFiles;async function getChangedPushFiles(e,t,r,i,s){try{const o=e.repos.compareCommits.endpoint.merge({owner:r,repo:t,base:i,head:s});const a=await e.paginate(o,e=>e.data.files);return a}catch(e){const o=`There was an error getting change files for repo:${t} owner:${r} base:${i} head:${s}`;let a;if(e.name==="HttpError"&&+e.status===404)a=n.getErrorString(e.name,e.status,getChangedPushFiles.name,o,e);else a=n.getErrorString(`Unknown Error:${e.name||""}`,e.status,getChangedPushFiles.name,o,e.message);throw new Error(a)}}t.getChangedPushFiles=getChangedPushFiles;async function getChangedFiles(e,t,{before:r,after:i,pr:s=NaN}){try{if(t.split("/").length>2){throw new Error(n.getErrorString(`Bad-Repo`,500,"self",`Repo input of ${t} has more than 2 length after splitting.`))}const o=t.split("/")[0];const a=t.split("/")[1];let u=[];if(Number.isNaN(s))u=await getChangedPushFiles(e,a,o,r||"",i||"");else u=await getChangedPRFiles(e,a,o,s);return u}catch(e){const t=JSON.parse(e.message);if(t.from.includes("getChanged"))throw new Error(JSON.stringify({...t,...{from:`${e.status}/${e.name}`}},null,2));const o=`There was an error getting change files outputs pr: ${s} before: ${r} after: ${i}`;const a=n.getErrorString(`Unknown Error:${e.name}`,e.status,getChangedFiles.name,o,e.message);throw new Error(a)}}t.getChangedFiles=getChangedFiles}
function initClient(e){try{return new i.GitHub(e)}catch(e){const t=`There was an error creating github client. Please check your token.`;throw new Error(n.getErrorString(e.name,e.status,initClient.name,t,e))}}t.initClient=initClient;async function getChangedPRFiles(e,t,r,i){try{const s=e.pulls.listFiles.endpoint.merge({owner:r,repo:t,pull_number:i});const o=await e.paginate(s,e=>e.data);return o}catch(e){const s=`There was an error getting change files for repo:${t} owner:${r} pr:${i}`;let o;if(e.name==="HttpError"&&+e.status===404)o=n.getErrorString(e.name,e.status,getChangedPRFiles.name,s,e);else o=n.getErrorString(`Unknown Error:${e.name||""}`,e.status,getChangedPRFiles.name,s,e.message);throw new Error(o)}}t.getChangedPRFiles=getChangedPRFiles;async function getChangedPushFiles(e,t,r,i,s){try{const o=e.repos.compareCommits.endpoint.merge({owner:r,repo:t,base:i,head:s});const a=await e.paginate(o,e=>e.data.files);return a}catch(e){const o=`There was an error getting change files for repo:${t} owner:${r} base:${i} head:${s}`;let a;if(e.name==="HttpError"&&+e.status===404)a=n.getErrorString(e.name,e.status,getChangedPushFiles.name,o,e);else a=n.getErrorString(`Unknown Error:${e.name||""}`,e.status,getChangedPushFiles.name,o,e.message);throw new Error(a)}}t.getChangedPushFiles=getChangedPushFiles;async function getChangedFiles(e,t,{before:r,after:i,pr:s=NaN}){try{if(t.split("/").length>2){throw new Error(n.getErrorString(`Bad-Repo`,500,"self",`Repo input of ${t} has more than 2 length after splitting.`))}const o=t.split("/")[0];const a=t.split("/")[1];let u=[];if(Number.isNaN(s))u=await getChangedPushFiles(e,a,o,r||"",i||"");else u=await getChangedPRFiles(e,a,o,s);return u}catch(e){const t=JSON.parse(e.message);if(t.from.includes("getChanged"))throw new Error(JSON.stringify({...t,...{from:`${e.status}/${e.name}`}},null,2));const o=`There was an error getting change files outputs pr: ${s} before: ${r} after: ${i}`;const a=n.getErrorString(`Unknown Error:${e.name}`,e.status,getChangedFiles.name,o,e.message);throw new Error(a)}}t.getChangedFiles=getChangedFiles
async function getChangedPRFiles(e,t,r,i){try{const s=e.pulls.listFiles.endpoint.merge({owner:r,repo:t,pull_number:i});const o=await e.paginate(s,e=>e.data);return o}catch(e){const s=`There was an error getting change files for repo:${t} owner:${r} pr:${i}`;let o;if(e.name==="HttpError"&&+e.status===404)o=n.getErrorString(e.name,e.status,getChangedPRFiles.name,s,e);else o=n.getErrorString(`Unknown Error:${e.name||""}`,e.status,getChangedPRFiles.name,s,e.message);throw new Error(o)}}t.getChangedPRFiles=getChangedPRFiles;async function getChangedPushFiles(e,t,r,i,s){try{const o=e.repos.compareCommits.endpoint.merge({owner:r,repo:t,base:i,head:s});const a=await e.paginate(o,e=>e.data.files);return a}catch(e){const o=`There was an error getting change files for repo:${t} owner:${r} base:${i} head:${s}`;let a;if(e.name==="HttpError"&&+e.status===404)a=n.getErrorString(e.name,e.status,getChangedPushFiles.name,o,e);else a=n.getErrorString(`Unknown Error:${e.name||""}`,e.status,getChangedPushFiles.name,o,e.message);throw new Error(a)}}t.getChangedPushFiles=getChangedPushFiles;async function getChangedFiles(e,t,{before:r,after:i,pr:s=NaN}){try{if(t.split("/").length>2){throw new Error(n.getErrorString(`Bad-Repo`,500,"self",`Repo input of ${t} has more than 2 length after splitting.`))}const o=t.split("/")[0];const a=t.split("/")[1];let u=[];if(Number.isNaN(s))u=await getChangedPushFiles(e,a,o,r||"",i||"");else u=await getChangedPRFiles(e,a,o,s);return u}catch(e){const t=JSON.parse(e.message);if(t.from.includes("getChanged"))throw new Error(JSON.stringify({...t,...{from:`${e.status}/${e.name}`}},null,2));const o=`There was an error getting change files outputs pr: ${s} before: ${r} after: ${i}`;const a=n.getErrorString(`Unknown Error:${e.name}`,e.status,getChangedFiles.name,o,e.message);throw new Error(a)}}t.getChangedFiles=getChangedFiles
//function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});const i=r(470);const n=r(384);const s=r(920);const o=r(757);const a=r(795);
const i=r(470);const n=r(384);const s=r(920);const o=r(757);
async function run(){try{const e=getInputs();const t=n.inferInput(e.pushBefore,e.pushAfter,e.prNumber);const r=o.initClient(e.githubToken);const u=await o.getChangedFiles(r,e.githubRepo,t);const p=s.sortChangedFiles(u);Object.keys(p).forEach(t=>{s.writeFiles(e.fileOutput,t,p[t]);s.writeOutput(e.output,t,p[t])})}catch(e){const t=JSON.parse(e.message);i.setFailed(a.errorMessage(t.from,t));throw new Error(JSON.stringify(t))}}t.run=run;if(!(process.env.INPUT_MOCK==="true"))run()


const core = require("@actions/core");
import 'dist/index.js';
