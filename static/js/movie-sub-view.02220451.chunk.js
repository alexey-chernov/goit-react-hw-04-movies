(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[5],{65:function(e,t,a){e.exports={movies:"MovieDetailsPage_movies__1FrVE",about:"MovieDetailsPage_about__323jL",overview:"MovieDetailsPage_overview__2XEaf",description:"MovieDetailsPage_description__2XI5s",genres:"MovieDetailsPage_genres__2TnoP",genresName:"MovieDetailsPage_genresName__10DZ9",navigation:"MovieDetailsPage_navigation__1Zmi2",information:"MovieDetailsPage_information__1ZSIy",link:"MovieDetailsPage_link__bjx_3",activeLink:"MovieDetailsPage_activeLink__2Dj_x MovieDetailsPage_link__bjx_3",button:"MovieDetailsPage_button__2yIpR",title:"MovieDetailsPage_title__VrDbs",genre:"MovieDetailsPage_genre__3pSpl"}},72:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var i=a(55),n=a(0),s=a(3),c=a(10),o=a(56),l=a(57),r=a(17),j=a(65),v=a.n(j),b=a(1),_=Object(n.lazy)((function(){return a.e(2).then(a.bind(null,70))})),m=Object(n.lazy)((function(){return a.e(8).then(a.bind(null,69))}));function d(){var e=Object(s.i)(),t=e.url,a=e.path,j=Object(s.h)().moviesId,d=Object(s.g)(),h=Object(s.f)(),u=Object(n.useState)(null),g=Object(i.a)(u,2),O=g[0],p=g[1],x=Object(n.useState)(null),f=Object(i.a)(x,2),D=f[0],w=f[1];Object(n.useEffect)((function(){o.b(j).then((function(e){p(e)})).catch((function(e){console.log(e),w("Something went wrong. Try again.")}))}),[j,D]);return Object(b.jsx)(b.Fragment,{children:O&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("button",{type:"button",className:v.a.button,onClick:function(){var e,t,a;h.push(null!==(e=null===d||void 0===d||null===(t=d.state)||void 0===t||null===(a=t.from)||void 0===a?void 0:a.location)&&void 0!==e?e:"/movies")},children:"Go back"}),Object(b.jsxs)("div",{className:v.a.movies,children:[Object(b.jsx)("img",{src:O.poster_path?"https://image.tmdb.org/t/p/w500/".concat(O.poster_path):l.a,alt:O.title,width:"250"}),Object(b.jsxs)("div",{className:v.a.about,children:[Object(b.jsxs)("h1",{className:v.a.title,children:[O.title," "]}),Object(b.jsxs)("p",{children:["User Score: ",10*O.vote_average,"%"]}),Object(b.jsxs)("p",{className:v.a.overview,children:["Overview",Object(b.jsx)("span",{className:v.a.description,children:O.overview})]}),O.genres&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h3",{className:v.a.title,children:"Genres"}),Object(b.jsx)("ul",{className:v.a.genre,children:O.genres.map((function(e){return Object(b.jsx)("li",{children:e.name},e.id)}))})]})]})]}),Object(b.jsxs)("nav",{className:v.a.navigation,children:[Object(b.jsx)("p",{className:v.a.information,children:"Additional information"}),Object(b.jsx)(c.c,{to:{pathname:"".concat(t,"/cast"),state:{from:{location:d}}},className:v.a.link,activeClassName:v.a.activeLink,children:"Cast"}),Object(b.jsx)(c.c,{to:{pathname:"".concat(t,"/reviews"),state:{from:{location:d}}},className:v.a.link,activeClassName:v.a.activeLink,children:"Reviews"})]}),Object(b.jsx)(n.Suspense,{fallback:Object(b.jsx)(r.a,{}),children:Object(b.jsxs)(s.c,{children:[Object(b.jsx)(s.a,{path:"".concat(a,":moviesId/cast"),children:Object(b.jsx)(_,{moviesId:j})}),Object(b.jsx)(s.a,{path:"".concat(a,":moviesId/reviews"),children:Object(b.jsx)(m,{moviesId:j})})]})})]})})}}}]);
//# sourceMappingURL=movie-sub-view.02220451.chunk.js.map