(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{51:function(e,t,a){e.exports=a(79)},60:function(e,t,a){e.exports=a.p+"static/media/bg2.5529be61.svg"},79:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),o=a.n(r),c=a(25),s=a(18),l=a(31),u=a(26),d=a(30),h=a(45),m=a(14),p=a(113),y=a(80);function f(e){var t=v(),a=e.low,n=e.high,r=e.day,o=e.selectDay,c=e.showOneDay;return i.a.createElement("div",{className:t.day,onClick:function(){return function(e){o(e),c(e)}(r)}},i.a.createElement(p.a,null,r),i.a.createElement("i",{style:{fontSize:"5vw",color:"#fcdd74"},className:"fa fa-circle"}),i.a.createElement(p.a,null,"".concat(a,"\xb0 ").concat(n,"\xb0")))}var v=Object(y.a)({day:{width:"18vw",height:"9em",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",padding:"10px",color:"#a8a7a7"}}),g=a(115),w=a(117),b=a(116),D=a(120);function x(e){var t=E(),a=e.city,n=e.currentTemp,r=e.forecast,o=e.selectedDay,c=e.selectDay,s=e.showOneDay,l=e.selectedDayWeather,u=e.cardSize;return i.a.createElement(g.a,{className:t.parentCard},i.a.createElement("div",{className:u},i.a.createElement(b.a,null,i.a.createElement(p.a,{variant:"h5",color:"textSecondary"},a),i.a.createElement(p.a,{variant:"subtitle1",color:"textSecondary"},o),i.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},i.a.createElement("div",{style:{display:"flex"}},i.a.createElement("i",{style:{marginRight:"0.2em",fontSize:"5vw",color:"#d4d2d2"},className:"fa fa-cloud"}),i.a.createElement(p.a,{className:t.currentTemp},n,i.a.createElement("span",{className:t.degree},"\xb0F"))),i.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},i.a.createElement(p.a,null,"Precipitation:"),i.a.createElement(p.a,null,l.humidity?"Humidity: ".concat(l.humidity):"Humidity: 0%"),i.a.createElement(p.a,null,l.wind?"Wind: ".concat(l.wind):"Wind: 0 mph"))))),i.a.createElement(w.a,null,i.a.createElement(D.a,{size:"small"},"More Weather Info")),i.a.createElement("div",{className:t.week},r.map(function(e,t){return i.a.createElement(f,{selectDay:c,showOneDay:s,key:t,day:e.day,low:e.temp[0],high:e.temp[15]})})))}var E=Object(y.a)({parentCard:{height:"65vh",width:"95vw",display:"flex",flexDirection:"column",justifyContent:"space-around",padding:"1vh",marginTop:"1vh",marginBottom:"1vh"},currentTemp:{fontSize:"4vw"},week:{display:"flex",justifyContent:"center",flexDirection:"row",marginBottom:"3vh"},degree:{fontSize:"2.5vh",opacity:.8},cardSize:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}),k=a(119),S=(a(60),a(61)),T="4148d0b11b41a97bed2190dbb20dd27d",O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={text:"",city:"San Francisco",currentTemp:"",selectedDay:"Mon",selectedDayWeather:{day:"Mon",temp:[],humidity:"",wind:"",rain:""},forecast:[{day:"",temp:[],humidity:"",wind:"",rain:"",skies:{main:"",description:""}},{day:"",temp:[],humidity:"",wind:"",rain:"",skies:{main:"",description:""}},{day:"",temp:[],humidity:"",wind:"",rain:"",skies:{main:"",description:""}},{day:"",temp:[],humidity:"",wind:"",rain:"",skies:{main:"",description:""}},{day:"",temp:[],humidity:"",wind:"",rain:"",skies:{main:"",description:""}}]},a.handleChange=a.handleChange.bind(Object(m.a)(a)),a.getData=a.getData.bind(Object(m.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a.selectDay=a.selectDay.bind(Object(m.a)(a)),a.showOneDay=a.showOneDay.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"getData",value:function(e){var t=this,a="https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&units=imperial&APPID=").concat(T);return S.get(a).then(function(a){var n=a.data.main.temp;t.setState({city:e,currentTemp:n})}).catch(function(e){return console.log("There was an error: ",e)})}},{key:"getFiveDay",value:function(e){var t=this,a="http://api.openweathermap.org/data/2.5/forecast?q=".concat(e,"&units=imperial&APPID=").concat(T);return S.get(a).then(function(a){var n=a.data.list;console.log("data",n);var i=[],r=[],o=[],c=[],s=[];n.map(function(e){return o.push(e.main.temp_min),o.push(e.main.temp_max),o}),n.map(function(e){return r.push(e.main.humidity),r}),n.map(function(e){return c.push(e.wind.speed),c}),n.map(function(e){return s.push(e.rain)});for(var l=Date().slice(0,3),u=[{day:(i="Sun"===l?["Sat","Sun","Mon","Tue","Wed"]:"Mon"===l?["Mon","Tue","Wed","Thu","Fri"]:"Tue"===l?["Mon","Tue","Wed","Thu","Fri"]:"Wed"===l?["Mon","Tue","Wed","Thu","Fri"]:"Thu"===l?["Mon","Tue","Wed","Thu","Fri"]:"Fri"===l?["Mon","Tue","Wed","Thu","Fri"]:["Sat","Sun","Mon","Tue","Wed"])[0],temp:[],humidity:""},{day:i[1],temp:[],humidity:""},{day:i[2],temp:[],humidity:""},{day:i[3],temp:[],humidity:""},{day:i[4],temp:[],humidity:""}],d=0;d<16;d++)u[0].temp.push(Math.round(o[d])),u[0].temp.sort();for(var h=16;h<32;h++)u[1].temp.push(Math.round(o[h])),u[1].temp.sort();for(var m=32;m<48;m++)u[2].temp.push(Math.round(o[m])),u[2].temp.sort();for(var p=48;p<64;p++)u[3].temp.push(Math.round(o[p])),u[3].temp.sort();for(var y=64;y<80;y++)u[4].temp.push(Math.round(o[y])),u[4].temp.sort();for(var f=[],v=[],g=[],w=[],b=[],D=function(e){return Math.round(e.reduce(function(e,t){return e+t})/e.length)},x=0;x<8;x++)f.push(r[x]);u[0].humidity=D(f);for(var E=8;E<16;E++)v.push(r[E]);u[1].humidity=D(v);for(var k=16;k<24;k++)g.push(r[k]);u[2].humidity=D(g);for(var S=24;S<32;S++)w.push(r[S]);u[3].humidity=D(w);for(var T=32;T<40;T++)b.push(r[T]);u[4].humidity=D(b);for(var O=[],W=[],j=[],C=[],M=[],F=0;F<8;F++)O.push(c[F]);u[0].wind=D(O);for(var N=8;N<16;N++)W.push(c[N]);u[1].wind=D(W);for(var z=16;z<24;z++)j.push(c[z]);u[2].wind=D(j);for(var A=24;A<32;A++)C.push(c[A]);u[3].wind=D(C);for(var P=32;P<40;P++)M.push(c[P]);u[4].wind=D(M);t.setState({city:e,forecast:u})}).catch(function(e){return console.log("There was an error: ",e)})}},{key:"componentDidMount",value:function(){this.getData(this.state.city),this.getFiveDay(this.state.city)}},{key:"handleChange",value:function(e){this.setState(Object(h.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.getData(this.state.text),this.getFiveDay(this.state.text),this.setState({text:""})}},{key:"selectDay",value:function(e){this.setState({selectedDay:e})}},{key:"showOneDay",value:function(e){var t=this,a=this.state.forecast.filter(function(e){return e.day===t.state.selectedDay});console.log(a),this.setState({selectedDayWeather:a[0]})}},{key:"render",value:function(){console.log("state",this.state);W.input;var e=W.title;return i.a.createElement("div",{style:W.container},i.a.createElement("h1",{style:e},"Weather App"),i.a.createElement("form",{style:W.formContainer,onSubmit:this.handleSubmit},i.a.createElement(k.a,{style:{width:"40vw",marginBottom:"2vh"},autoComplete:"off",id:"my-input","aria-describedby":"my-helper-text",type:"text",name:"text",placeholder:"Enter a City",onChange:this.handleChange,value:this.state.text}),i.a.createElement(D.a,{onClick:this.handleSubmit,className:"button",color:"primary",variant:"contained",style:{height:"5vh"}},"Check Weather")),i.a.createElement(x,{city:this.state.city,currentTemp:this.state.currentTemp,forecast:this.state.forecast,selectedDay:this.state.selectedDay,selectDay:this.selectDay,selectedDayWeather:this.state.selectedDayWeather,showOneDay:this.showOneDay}))}}]),t}(n.Component),W={container:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",fontFamily:"Roboto, sans-serif",backgroundColor:"#e1e3e6",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",overflow:"scroll"},button:{marginLeft:"10px"},buttons:{marginTop:"30px",marginBottom:"10px"},formContainer:{display:"flex",flexDirection:"column",marginBottom:"1vh",width:"40vw"},input:{marginTop:"1em",marginRight:"1em",width:"300px"},title:{fontSize:"5vh",letterSpacing:"8px",margin:"2vh"}},j=a(118),C=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(j.a,null),i.a.createElement(O,null))}}]),t}(n.Component),M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function F(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(i.a.createElement(C,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Weather",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/Weather","/service-worker.js");M?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):F(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):F(t,e)})}}()}},[[51,1,2]]]);
//# sourceMappingURL=main.2d0752a3.chunk.js.map