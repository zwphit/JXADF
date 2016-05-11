Flotr.Date={set:function(t,e,o,n){o=o||"UTC",e="set"+("UTC"===o?"UTC":"")+e,t[e](n)},get:function(t,e,o){return o=o||"UTC",e="get"+("UTC"===o?"UTC":"")+e,t[e]()},format:function(t,e,o){function n(t){return t+="",1==t.length?"0"+t:t}if(t){for(var i,r=this.get,a={h:r(t,"Hours",o).toString(),H:n(r(t,"Hours",o)),M:n(r(t,"Minutes",o)),S:n(r(t,"Seconds",o)),s:r(t,"Milliseconds",o),d:r(t,"Date",o).toString(),m:(r(t,"Month",o)+1).toString(),y:r(t,"FullYear",o).toString(),b:Flotr.Date.monthNames[r(t,"Month",o)]},s=[],m=!1,c=0;c<e.length;++c)i=e.charAt(c),m?(s.push(a[i]||i),m=!1):"%"==i?m=!0:s.push(i);return s.join("")}},getFormat:function(t,e){var o=Flotr.Date.timeUnits;return t<o.second?"%h:%M:%S.%s":t<o.minute?"%h:%M:%S":t<o.day?e<2*o.day?"%h:%M":"%b %d %h:%M":t<o.month?"%b %d":t<o.year?e<o.year?"%b":"%b %y":"%y"},formatter:function(t,e){var o=e.options,n=Flotr.Date.timeUnits[o.timeUnit],i=new Date(t*n);if(e.options.timeFormat)return Flotr.Date.format(i,o.timeFormat,o.timeMode);var r=(e.max-e.min)*n,a=e.tickSize*Flotr.Date.timeUnits[e.tickUnit];return Flotr.Date.format(i,Flotr.Date.getFormat(a,r),o.timeMode)},generator:function(t){function e(t){r(y,t,u,Flotr.floorInBase(a(y,t,u),f))}var o,n,i,r=this.set,a=this.get,s=this.timeUnits,m=this.spec,c=t.options,u=c.timeMode,l=s[c.timeUnit],h=t.min*l,d=t.max*l,M=(d-h)/c.noTicks,F=[],f=t.tickSize;for(n=c.tickFormatter===Flotr.defaultTickFormatter?this.formatter:c.tickFormatter,i=0;i<m.length-1;++i){var y=m[i][0]*s[m[i][1]];if(M<(y+m[i+1][0]*s[m[i+1][1]])/2&&y>=f)break}f=m[i][0],o=m[i][1],"year"==o&&(f=Flotr.getTickSize(c.noTicks*s.year,h,d,0),.5==f&&(o="month",f=6)),t.tickUnit=o,t.tickSize=f;var g=f*s[o];switch(y=new Date(h),o){case"millisecond":e("Milliseconds");break;case"second":e("Seconds");break;case"minute":e("Minutes");break;case"hour":e("Hours");break;case"month":e("Month");break;case"year":e("FullYear")}g>=s.second&&r(y,"Milliseconds",u,0),g>=s.minute&&r(y,"Seconds",u,0),g>=s.hour&&r(y,"Minutes",u,0),g>=s.day&&r(y,"Hours",u,0),g>=4*s.day&&r(y,"Date",u,1),g>=s.year&&r(y,"Month",u,0);var k,S=0,T=0/0;do if(k=T,T=y.getTime(),F.push({v:T/l,label:n(T/l,t)}),"month"==o)if(1>f){r(y,"Date",u,1);var U=y.getTime();r(y,"Month",u,a(y,"Month",u)+1);var D=y.getTime();y.setTime(T+S*s.hour+(D-U)*f),S=a(y,"Hours",u),r(y,"Hours",u,0)}else r(y,"Month",u,a(y,"Month",u)+f);else"year"==o?r(y,"FullYear",u,a(y,"FullYear",u)+f):y.setTime(T+g);while(d>T&&T!=k);return F},timeUnits:{millisecond:1,second:1e3,minute:6e4,hour:36e5,day:864e5,month:2592e6,year:31556952e3},spec:[[1,"millisecond"],[20,"millisecond"],[50,"millisecond"],[100,"millisecond"],[200,"millisecond"],[500,"millisecond"],[1,"second"],[2,"second"],[5,"second"],[10,"second"],[30,"second"],[1,"minute"],[2,"minute"],[5,"minute"],[10,"minute"],[30,"minute"],[1,"hour"],[2,"hour"],[4,"hour"],[8,"hour"],[12,"hour"],[1,"day"],[2,"day"],[3,"day"],[.25,"month"],[.5,"month"],[1,"month"],[2,"month"],[3,"month"],[6,"month"],[1,"year"]],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]};