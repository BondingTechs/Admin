import{n as a,l as o}from"./index-3566ab55.js";function e(a){if(!a)return"";const o=1024;return a<o?a+"B":a<Math.pow(o,2)?(a/o).toFixed(2)+"K":a<Math.pow(o,3)?(a/Math.pow(o,2)).toFixed(2)+"M":a<Math.pow(o,4)?(a/Math.pow(o,3)).toFixed(2)+"G":(a/Math.pow(o,4)).toFixed(2)+"T"}function t(o){return a(o.substring(o.indexOf("_")+1))}function r(a){return[{label:"",value:"image",format:["bmp","jpg","jpeg","png","tif","gif","svg","webp"],color:"#67C23A"},{label:"视频",value:"video",format:["avi","wmv","mpg","mpeg","mov","rm","ram","swf","flv","mp4"],color:"#409EFF"},{label:"音频",value:"audio",format:["mp3","wav","wma","mp2","flac","midi","ra","ape","aac","cda"],color:"#E6A23C"}].find((e=>e.format.find((e=>e==o(a).toLocaleLowerCase()))))||{label:"文件",value:"file",color:"#909399"}}export{t as a,e as b,r as f};
