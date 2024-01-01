const L={defaultLocale:"cs",locales:{en:"en",cs:"cs"},redirectDefaultLocale:308,BASE_URL:"/website-concept/3/",trailingSlash:"always",build:{format:"directory"}};var W=Object.defineProperty,p=(e,a)=>W(e,"name",{value:a,configurable:!0}),g=L.BASE_URL,r=L.defaultLocale,u=Object.keys(L.locales);function U(e){return!!(typeof e=="object"&&e!==null&&"slug"in e&&typeof e.slug=="string"&&e.slug.startsWith(r+"/"))}p(U,"filterCollectionByDefaultLocale");function N(e){return e.reduce((a,n)=>(typeof n=="object"&&n!==null&&"slug"in n&&typeof n.slug=="string"&&a.push({params:{slug:n.slug.replace(r+"/","")}}),a),[])}p(N,"getCollectionParamsSlug");function o(e){let a=typeof e=="string"?e:e.pathname;return a.at(-1)!=="/"&&(a=a+"/"),a}p(o,"resolveTrailingSlash");function m(e){return e.at(-1)==="/"?e.slice(0,-1):e}p(m,"removeTrailingSlash");function f(e){return e.endsWith(".html")?e.slice(0,-5):e}p(f,"removeHtmlExtension");function S(e){let a=typeof e=="string"?e:e.pathname,n=f(a),s=m(g),t=n.replace(s,""),i=t.slice(1,3),h=u.filter(l=>l!==r).includes(i);return t.length===3&&h?{...u.reduce((l,c)=>(l[c]=o(s+"/"+c+"/"),l),{}),[r]:o(g)}:t[0]==="/"&&t[3]==="/"&&h?{...u.reduce((l,c)=>(l[c]=o(s+"/"+c+t.slice(3)),l),{}),[r]:o(s+t.slice(3))}:{...u.reduce((l,c)=>(l[c]=o(s+"/"+c+t),l),{}),[r]:o(s+t)}}p(S,"getAllLocaleUrls");function b(e){let a=typeof e=="string"?e:e.pathname,n=f(a),s=m(g),t=n.replace(s,""),i=t.slice(1,3),h=u.filter(l=>l!==r).includes(i);return t.length===3&&h||t[0]==="/"&&t[3]==="/"&&h?i:r}p(b,"getLocale");function d(e,a){let n=typeof e=="string"?e:e.pathname,s=f(n),t=m(g),i=s.replace(t,""),h=i.slice(1,3),l=u.filter(c=>c!==r).includes(h);return i.length===3&&l?o(a===r?g:t+"/"+a+"/"):i[0]==="/"&&i[3]==="/"&&l?o(a===r?t+i.slice(3):t+"/"+a+i.slice(3)):o(a===r?t+i:t+"/"+a+i)}p(d,"getLocaleUrl");function B(e){let a=typeof e=="string"?e:e.pathname,n=f(a),s=m(g),t=n.replace(s,""),i=t.slice(1,3),h=u.filter(l=>l!==r).includes(i);return t.length===3&&h||t[0]==="/"&&t[3]==="/"&&h?"/"+i:""}p(B,"getLocaleUrlPrefix");function y(e){let a=typeof e=="string"?e:e.pathname,n=f(a),s=m(g),t=n.replace(s,""),i=t.slice(1,3),h=u.filter(l=>l!==r).includes(i);return t.length===3&&h?o(g):t[0]==="/"&&t[3]==="/"&&h?o(s+t.slice(3)):o(s+t)}p(y,"getUrlWithoutLocale");export{r as d,d as g,u as l};
