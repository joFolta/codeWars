/* 
https://www.codewars.com/kata/514a024011ea4fb54200004b

5 kyu
Extract the domain name from a URL

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
*/

const domainName = (url) => {
  if (url.includes('//')) {
    url = url.split('//')[1]
  }
  url = url.split('.')
  return url.includes('www') ?
    url[1] : url[0]
}