$(document).ready(function(){
  // console.log("Fuck");

  var storeNames = Object.keys(storeList);
  console.log(storeNames);
  for(i=0;i<storeNames.length;i++){
    console.log(storeList[storeNames[i]]["style"]);
    var storeKey = storeNames[i];
    var storeFounded = storeList[storeNames[i]]["yearFounded"];
    var storeStyle = storeList[storeNames[i]]["style"];
    var storeAddress = storeList[storeNames[i]]["address"];
    var storeWebsite = storeList[storeNames[i]]["website"];
    var storeContact = storeList[storeNames[i]]["contact"];
    if (i%2 === 0){
    $("#boutiquesleft").append("<h3 id='"+i+"'>"+storeKey+"</h3><ul class='info'><li>Year Founded: "+storeFounded+ "</li><li>Store Style: "+ storeStyle+"</li><li>Address: "+ storeAddress+"</li><li><a href='"+storeWebsite+"'>Website</a></li><li>Contact: "+storeContact+"</li>");
  } else{
    $("#boutiquesright").append("<h3 id='"+i+"'>"+storeKey+"</h3><ul class='info'><li>Year Founded: "+storeFounded+ "</li><li>Store Style: "+ storeStyle+"</li><li>Address: "+ storeAddress+"</li><li><a href='"+storeWebsite+"'>Website</a></li><li>Contact: "+storeContact+"</li>");
  }

  }




});

    //1. Make a constructor for all the stores
    //Include name, style, address, city,
    //distance away, email, and website. 

    // var boutqiue = function (info){
    //   this.style = info.style;
    //   this.yearFounded = info.year;
    //   this.address = info.address;
    //   this.city = info.city;
    //   this.distance = 0;
    //   this.website = info.website;
    //   this.contact = info.contact;

    // };

    //2. Make list of all Colorado boutiques
    //AndrsienMorton, 

var storeList = {
     "Andrisen Morton" : {
      "style": "Gentlemen",
      "yearFounded": 1978,
      "address": "270 Saint Paul Street, Denver, CO 80206",
      "city": "Denver",
      "website": "http://www.andrisenmorton.com/",
      "contact": "303.377.8488"
    },

     "Armitage & Mcmillan" : {
      "style": "Lifestyle",
      "yearFounded": 2014,
      "address": "1550 Platte Street, Suite D, Denver, CO 80202",
      "city": "Denver",
      "website": "http://armitageandmcmillan.com/",
      "contact": "303.284.6222"
    },

     "Axel\'s" : {
      "style": "Gentlemen",
      "yearFounded": 1985,
      "address": "201 Gore Creek Drive, Vail, CO 81657",
      "city": "Vail",
      "website": "http://axelsltd.com/",
      "contact": "970.497.4888"
    },

     "Berkeley Supply" : {
      "style": "American",
      "yearFounded": 2012,
      "address": "4309 Tennyson Street, Denver, CO 80212",
      "city": "Denver",
      "website": "http://berkeleysupply.com/",
      "contact": "720.445.6818"
    },

     "Blackland Clothing" : {
      "style": "Americana",
      "yearFounded": 2012,
      "address": "925 E Harmony Road, Fort Collins, CO 80525",
      "city": "Fort Collins",
      "website": "http://www.blacklandclothing.com/",
      "contact": "720.445.6818"
    },

     "Family Affair" : {
      "style": "Lifestyle",
      "yearFounded": 2008,
      "address": "2049 Larimer Street, Denver, CO 80205",
      "city": "Denver",
      "website": "http://www.familyaffairdenver.com/",
      "contact": "303.593.0289"
    },

     "The Garment District" : {
      "style": "Lifestyle",
      "yearFounded": 1972,
      "address": "2595 S. Colorado Blvd, Denver, CO 80222",
      "city": "Denver",
      "website": "http://www.garmentdistrictcolorado.com/",
      "contact": "303.757.3371"
    },

     "Jiberish" : {
      "style": "Lifestyle",
      "yearFounded": 2005,
      "address": "1620 Platte Street Unit F, Denver, CO 80202",
      "city": "Denver",
      "website": "https://www.jiberish.com/",
      "contact": "lohi@jiberish.com"
    },

     "Lawrence Covell" : {
      "style": "Gentlemen",
      "yearFounded": 1967,
      "address": "225 Steele Street, Denver CO 80206",
      "city": "Denver",
      "website": "http://www.lawrencecovell.com/",
      "contact": "303.320.1023"
    },

     "Nod And Rose" : {
      "style": "Lifestyle",
      "yearFounded": 2012,
      "address": "11220 Spruce Street, Boulder, Colorado 80302",
      "city": "Boulder",
      "website": "http://www.nodandrose.com/",
      "contact": "303.442.2322"
    },

     "Players Clothing" : {
      "style": "Lifestyle",
      "yearFounded": 2001,
      "address": "1501 Wazee Street, Denver, Colorado 80202",
      "city": "Denver",
      "website": "http://www.playersclothing.com/",
      "contact": "303.752.9377"
    },

     "Soul Haus" : {
      "style": "Lifestyle",
      "yearFounded": 1999,
      "address": "1225 East 17th Avenue, Denver, CO 80218",
      "city": "Denver",
      "website": "http://www.soulhaus.com/",
      "contact": "303.830.7685"
    },

     "Station" : {
      "style": "Lifestyle",
      "yearFounded": 2015,
      "address": "2735 Welton Street, Denver, CO 80205",
      "city": "Denver",
      "website": "http://www.stationdenver.com/",
      "contact": "303.819.6354"
    },

     "Steadbrook" : {
      "style": "Lifestyle",
      "yearFounded": 2013,
      "address": "46 South Broadway, Denver, CO 80209",
      "city": "Denver",
      "website": "http://steadbrook.com/",
      "contact": "720.441.1891"
    },

     "Sully & Co" : {
      "style": "Gentlemen",
      "yearFounded": 2014,
      "address": "2443 Eliot Street, Denver, Colorado 80211",
      "city": "Denver",
      "website": "http://sullyandco.com/",
      "contact": "720.398.8064"
    },

     "Topo Designs Boulder" : {
      "style": "Active Wear",
      "yearFounded": 2010,
      "address": "935 Pearl Street, Boulder, CO 80302",
      "city": "Boulder",
      "website": "http://topodesigns.com/",
      "contact": "720.255.2932"
    },

     "Topo Designs Denver Flagship" : {
      "style": "Active Wear",
      "yearFounded": 2010,
      "address": "2500 Larimer Street, #102 Denver, CO 80205",
      "city": "Denver",
      "website": "http://topodesigns.com/",
      "contact": "303.954.8420"
    },

     "Topo Designs Fort Collins" : {
      "style": "Active Wear",
      "yearFounded": 2010,
      "address": "130B S. College Avenue, Fort Collins, CO 80524",
      "city": "Fort Collins",
      "website": "http://topodesigns.com/",
      "contact": "970.568.8628"
    },

     "Weekends Boulder" : {
      "style": "Lifestyle",
      "yearFounded": 2011,
      "address": "1200 Pearl Street, Boulder, CO 80302",
      "city": "Boulder",
      "website": "http://weekendsboulder.com/#welcome",
      "contact": "303.444.4231"
    },

     "Winter Session" : {
      "style": "Americana",
      "yearFounded": 2010,
      "address": "2952 Welton Street, Denver, CO 80205",
      "city": "Denver",
      "website": "http://www.winter-session.com/",
      "contact": "hello@winter-session.com"
    }
}
