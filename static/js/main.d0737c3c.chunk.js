(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(e,t,a){e.exports=a.p+"static/media/bg2.5529be61.svg"},52:function(e,t,a){e.exports=a(79)},79:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),o=a.n(r),c=a(41),s=a(42),l=a(23),u=a(47),d=a(43),m=a(14),h=a(46),p=a(111),y=a(113);function f(e){var t=v(),a=e.low,n=e.high,r=e.day,o=e.selectDay,c=e.showOneDay;return i.a.createElement("div",{className:t.day,onClick:function(){return function(e){o(e),c(e)}(r)}},i.a.createElement(p.a,null,r),i.a.createElement("i",{style:{fontSize:"60px",color:"#fcdd74"},className:"fa fa-circle"}),i.a.createElement(p.a,null,"".concat(a,"\xb0 ").concat(n,"\xb0")))}var v=Object(y.a)({day:{width:"7em",height:"9em",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",padding:"10px",color:"#a8a7a7"}}),g=a(114),b=a(116),D=a(115),w=a(118);function x(e){var t=E(),a=e.city,n=e.currentTemp,r=e.forecast,o=e.selectedDay,c=e.selectDay,s=e.showOneDay,l=e.selectedDayWeather;return i.a.createElement(g.a,{className:t.parentCard},i.a.createElement(D.a,null,i.a.createElement(p.a,{variant:"h5",color:"textSecondary"},a),i.a.createElement(p.a,{variant:"subtitle1",color:"textSecondary"},o),i.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},i.a.createElement("div",{style:{display:"flex"}},i.a.createElement("i",{style:{margin:"10px",fontSize:"60px",color:"#d4d2d2"},className:"fa fa-cloud"}),i.a.createElement(p.a,{className:t.currentTemp},n,i.a.createElement("span",{className:t.degree},"\xb0F"))),i.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},i.a.createElement(p.a,null,"Precipitation:"),i.a.createElement(p.a,null,l.humidity?"Humidity: ".concat(l.humidity):"Humidity: 0%"),i.a.createElement(p.a,null,l.wind?"Wind: ".concat(l.wind):"Wind: 0 mph")))),i.a.createElement(b.a,null,i.a.createElement(w.a,{size:"small"},"More Weather Info")),i.a.createElement("div",{className:t.week},r.map(function(e,t){return i.a.createElement(f,{selectDay:c,showOneDay:s,key:t,day:e.day,low:e.temp[0],high:e.temp[15]})})))}var E=Object(y.a)({parentCard:{height:"60%",display:"flex",flexDirection:"column",justifyContent:"space-around"},currentTemp:{fontSize:50},week:{display:"flex",flexDirection:"row"},degree:{fontSize:"20px",opacity:.8}}),k=a(117),S=a(45),T=a.n(S),O=a(61),C="4148d0b11b41a97bed2190dbb20dd27d",M=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={text:"",city:"San Francisco",currentTemp:"",selectedDay:"Mon",selectedDayWeather:{day:"Mon",temp:[],humidity:"",wind:"",rain:""},forecast:[{day:"",temp:[],humidity:"",wind:"",rain:"",skies:{main:"",description:""}},{day:"",temp:[],humidity:"",wind:"",rain:"",skies:{main:"",description:""}},{day:"",temp:[],humidity:"",wind:"",rain:"",skies:{main:"",description:""}},{day:"",temp:[],humidity:"",wind:"",rain:"",skies:{main:"",description:""}},{day:"",temp:[],humidity:"",wind:"",rain:"",skies:{main:"",description:""}}]},a.handleChange=a.handleChange.bind(Object(m.a)(a)),a.getData=a.getData.bind(Object(m.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a.selectDay=a.selectDay.bind(Object(m.a)(a)),a.showOneDay=a.showOneDay.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"getData",value:function(e){var t=this,a="http://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&units=imperial&APPID=").concat(C);return O.get(a).then(function(a){var n=a.data.main.temp;t.setState({city:e,currentTemp:n})}).catch(function(e){return console.log("There was an error: ",e)})}},{key:"getFiveDay",value:function(e){var t=this,a="http://api.openweathermap.org/data/2.5/forecast?q=".concat(e,"&units=imperial&APPID=").concat(C);return O.get(a).then(function(a){var n=a.data.list;console.log("data",n);var i=[],r=[],o=[],c=[],s=[];n.map(function(e){return o.push(e.main.temp_min),o.push(e.main.temp_max),o}),n.map(function(e){return r.push(e.main.humidity),r}),n.map(function(e){return c.push(e.wind.speed),c}),n.map(function(e){return s.push(e.rain)});for(var l=Date().slice(0,3),u=[{day:(i="Sun"===l?["Sat","Sun","Mon","Tue","Wed"]:"Mon"===l?["Mon","Tue","Wed","Thu","Fri"]:"Tue"===l?["Mon","Tue","Wed","Thu","Fri"]:"Wed"===l?["Mon","Tue","Wed","Thu","Fri"]:"Thu"===l?["Mon","Tue","Wed","Thu","Fri"]:"Fri"===l?["Mon","Tue","Wed","Thu","Fri"]:["Sat","Sun","Mon","Tue","Wed"])[0],temp:[],humidity:""},{day:i[1],temp:[],humidity:""},{day:i[2],temp:[],humidity:""},{day:i[3],temp:[],humidity:""},{day:i[4],temp:[],humidity:""}],d=0;d<16;d++)u[0].temp.push(Math.round(o[d])),u[0].temp.sort();for(var m=16;m<32;m++)u[1].temp.push(Math.round(o[m])),u[1].temp.sort();for(var h=32;h<48;h++)u[2].temp.push(Math.round(o[h])),u[2].temp.sort();for(var p=48;p<64;p++)u[3].temp.push(Math.round(o[p])),u[3].temp.sort();for(var y=64;y<80;y++)u[4].temp.push(Math.round(o[y])),u[4].temp.sort();for(var f=[],v=[],g=[],b=[],D=[],w=function(e){return Math.round(e.reduce(function(e,t){return e+t})/e.length)},x=0;x<8;x++)f.push(r[x]);u[0].humidity=w(f);for(var E=8;E<16;E++)v.push(r[E]);u[1].humidity=w(v);for(var k=16;k<24;k++)g.push(r[k]);u[2].humidity=w(g);for(var S=24;S<32;S++)b.push(r[S]);u[3].humidity=w(b);for(var T=32;T<40;T++)D.push(r[T]);u[4].humidity=w(D);for(var O=[],C=[],M=[],W=[],j=[],F=0;F<8;F++)O.push(c[F]);u[0].wind=w(O);for(var N=8;N<16;N++)C.push(c[N]);u[1].wind=w(C);for(var I=16;I<24;I++)M.push(c[I]);u[2].wind=w(M);for(var z=24;z<32;z++)W.push(c[z]);u[3].wind=w(W);for(var P=32;P<40;P++)j.push(c[P]);u[4].wind=w(j);t.setState({city:e,forecast:u})}).catch(function(e){return console.log("There was an error: ",e)})}},{key:"componentDidMount",value:function(){this.getData(this.state.city),this.getFiveDay(this.state.city)}},{key:"handleChange",value:function(e){this.setState(Object(c.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.getData(this.state.text),this.getFiveDay(this.state.text),this.setState({text:""})}},{key:"selectDay",value:function(e){this.setState({selectedDay:e})}},{key:"showOneDay",value:function(e){var t=this,a=this.state.forecast.filter(function(e){return e.day===t.state.selectedDay});console.log(a),this.setState({selectedDayWeather:a[0]})}},{key:"render",value:function(){return console.log("state",this.state),i.a.createElement("div",{style:W.container},i.a.createElement("h1",null,"Weather App"),i.a.createElement("form",{style:W.formContainer,onSubmit:this.handleSubmit},i.a.createElement(k.a,{style:{width:"400px"},autoComplete:"off",id:"my-input","aria-describedby":"my-helper-text",type:"text",name:"text",placeholder:"Enter a City",onChange:this.handleChange,value:this.state.text}),i.a.createElement(w.a,{className:"button",color:"primary",variant:"contained"},"Check Weather")),i.a.createElement(x,{city:this.state.city,currentTemp:this.state.currentTemp,forecast:this.state.forecast,selectedDay:this.state.selectedDay,selectDay:this.selectDay,selectedDayWeather:this.state.selectedDayWeather,showOneDay:this.showOneDay}))}}]),t}(n.Component),W={container:{width:"100%",height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",fontFamily:"Roboto, sans-serif",backgroundColor:"#1baa13",backgroundImage:"url(".concat(T.a,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",overflow:"scroll"},button:{marginLeft:"10px"},buttons:{marginTop:"30px",marginBottom:"10px"},formContainer:{display:"flex",flexDirection:"row",marginBottom:"20px"}};o.a.render(i.a.createElement(M,null),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.d0737c3c.chunk.js.map