import React, { Component } from 'react'
import NewsItem from './NewsItem'
// import Spinner from './Spinner';



export default class News extends Component {

    articles = [{
      "source": { "id": null, "name": "CBS Sports" },
      "author": "David Cobb",
      "title": "National Signing Day 2021: Live updates, college football recruiting rankings, early signing period, classes - CBSSports.com",
      "description": "Watch live signing day coverage for the Class of 2022 and follow the latest college football recruiting updates",
      "url": "https://www.cbssports.com/college-football/news/national-signing-day-2021-live-updates-college-football-recruiting-rankings-early-signing-period-classes/live/",
      "urlToImage": "https://sportshub.cbsistatic.com/i/r/2021/12/14/cca6e5ad-8134-4030-8787-e37251d9f2ea/thumbnail/1200x675/5b93e7591de67befc73bd6dd0ba1cd02/2021signingdaycover-story.png",
      "publishedAt": "2021-12-15T14:27:12Z",
      "content": "The first opportunity for high school prospects to lock up scholarships and formally sign National Letters of Intent begins Wednesday and lasts through Friday during the early signing period. The fir… [+2137 chars]"
    },
    {
      "source": { "id": null, "name": "New York Times" },
      "author": "Scott Cacciola",
      "title": "Steph Curry Sets NBA Career Record for 3-Pointers - The New York Times",
      "description": "The Golden State superstar passed Ray Allen for the top-spot on the career 3-pointer list. And he did it in 511 fewer games.",
      "url": "https://www.nytimes.com/2021/12/14/sports/basketball/steph-curry-three-pointer-ray-allen.html",
      "urlToImage": "https://static01.nyt.com/images/2021/12/14/sports/14nba-curry-threes-new/14nba-curry-threes-new-facebookJumbo.jpg",
      "publishedAt": "2021-12-15T14:16:00Z",
      "content": "Now, as a fan watching the games from his couch, Kast has a bit of a different perspective. Because he can focus entirely on the action, his appreciation for Curry has only grown.\r\nYou find it surpri… [+1507 chars]"
    },
    {
      "source": { "id": null, "name": "Daily Beast" },
      "author": "Allison Quinn",
      "title": "Louisiana Judge on Footage of Racial Slurs in Home Video: Sorry, I Was Sedated - The Daily Beast",
      "description": "She has asked for “forgiveness” after the video emerged, but failed to respond directly to questions about who described a Black burglary suspect as an “N word” and “roach.”",
      "url": "https://www.thedailybeast.com/lafayette-city-court-judge-michelle-odinet-on-family-using-racial-slurs-in-home-video-sorry-i-was-sedated",
      "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_197,w_350,x_0,y_81/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1639568142/JudgeOdinet_c6stgf",
      "publishedAt": "2021-12-15T14:11:07Z",
      "content": "A Louisiana judge is facing a flurry of complaints and calls to resign after home video footage appeared to capture her family using racial slurs in the aftermath of a burglary attempt.\r\nLafayette Ci… [+2978 chars]"
    },
    {
      "source": { "id": null, "name": "CBS Sports" },
      "author": "",
      "title": "NFL Week 15 Power Rankings: Chiefs double trouble with dominant defense, Packers and Cowboys also riding 'D' - CBS Sports",
      "description": "Pete Prisco says three teams known for offense are rising because of their defense",
      "url": "https://www.cbssports.com/nfl/news/nfl-week-15-power-rankings-chiefs-double-trouble-with-dominant-defense-cowboys-and-packers-also-riding-d/",
      "urlToImage": "https://sportshub.cbsistatic.com/i/r/2021/12/14/b970fa6d-8e6d-4a12-babe-cf0b7c928115/thumbnail/1200x675/d9a080fd739ca6a6e0bd826665b1cc29/chiefsdefense.png",
      "publishedAt": "2021-12-15T14:01:00Z",
      "content": "Most of the talk regarding the Kansas City Chiefs, Green Bay Packers and Dallas Cowboys when the season started centered on their offenses, while most wondered whether the defenses could be good enou… [+9229 chars]"
    }
    ,
        {
          "source": {
            "id": "the-wall-street-journal",
            "name": "The Wall Street Journal"
          },
          "author": "Anna Hirtenstein",
          "title": "Stocks Open Near Flat; Oil Falls Ahead of Fed Decision - The Wall Street Journal",
          "description": "Crude prices decline on expectations of a faster pullback in central-bank stimulus",
          "url": "https://www.wsj.com/articles/global-stock-markets-dow-update-12-15-2021-11639557619",
          "urlToImage": "https://images.wsj.net/im-452546/social",
          "publishedAt": "2021-12-15T13:48:00Z",
          "content": null
        },
        {
          "source": { "id": "the-verge", "name": "The Verge" },
          "author": "Jay Peters",
          "title": "S.T.A.L.K.E.R. 2 is getting NFTs, including one that lets you become an in-game ‘metahuman’ - The Verge",
          "description": "S.T.A.L.K.E.R. 2 developer GSC Game World announced Wednesday that it will be bringing NFTs to the game, including one that offers the opportunity to become the “first-ever metahuman” as an NPC.",
          "url": "https://www.theverge.com/2021/12/15/22834567/stalker-2-nfts-metahuman-dmarket",
          "urlToImage": "https://cdn.vox-cdn.com/thumbor/c3h_NDkT3ZKbPFnXt8N1nrTgOTQ=/0x75:3840x2085/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23087719/ss_3b56a4aea69f1d49d4871eeb1913f460f067a138.jpeg",
          "publishedAt": "2021-12-15T13:30:00Z",
          "content": "Yes, a metahuman\r\nYou can become an NPC in S.T.A.L.K.E.R. 2 thanks to NFTs.\r\nImage: GSC Game World\r\nS.T.A.L.K.E.R. 2: Heart of Chernobyl is one of the bigger releases of 2022, and for better or worse… [+2355 chars]"
        },
        {
          "source": { "id": "the-verge", "name": "The Verge" },
          "author": "Victoria Song",
          "title": "Amazon Halo View review: the Fitbit clone no one asked for - The Verge",
          "description": "Instead of keeping it simple, Amazon decided to get weird.",
          "url": "https://www.theverge.com/22834452/amazon-halo-view-review-fitness-trackers",
          "urlToImage": "https://cdn.vox-cdn.com/thumbor/c-uh8rXwE44-s_iTjljFIWIMIEo=/0x292:2040x1360/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23076144/akrales_211207_4912_0055.jpg",
          "publishedAt": "2021-12-15T13:00:00Z",
          "content": "If you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.The Amazon Halo View looks like a Fitbit and acts like a Fitbit, and if thats all it did, that wouldv… [+13339 chars]"
        },
        {
          "source": { "id": null, "name": "The Guardian" },
          "author": "Guardian staff reporter",
          "title": "Mark Meadows: House votes to recommend criminal contempt charges against Trump ex-chief of staff - The Guardian",
          "description": "Move comes after senior Trump figure ceased cooperating with panel investigating Capitol attack",
          "url": "https://amp.theguardian.com/us-news/2021/dec/15/mark-meadows-house-votes-criminal-contempt",
          "urlToImage": null,
          "publishedAt": "2021-12-15T12:41:00Z",
          "content": "US Capitol attackMove comes after senior Trump figure ceased cooperating with panel investigating Capitol attack\r\nGuardian staff and agencies\r\nWed 15 Dec 2021 04.14 GMT\r\nThe US House of Representativ… [+4167 chars]"
        },
        {
          "source": { "id": "cbs-news", "name": "CBS News" },
          "author": "Alexandra Alexandra",
          "title": "NASA's Parker Solar Probe is the first spacecraft to ever enter the sun's atmosphere - CBS News",
          "description": "The Parker Solar Probe has braved 2 million degree Fahrenheit heat to do what was previously thought impossible.",
          "url": "https://www.cbsnews.com/news/sun-atmosphere-nasa-solar-probe-first-spacecraft/",
          "urlToImage": "https://cbsnews3.cbsistatic.com/hub/i/r/2021/12/15/55a084ca-4756-41ed-a385-f17b624acfcd/thumbnail/1200x630/f446439e6136706753e46950175c37cd/low-res-swingbysuncloseuphires-jpg.png",
          "publishedAt": "2021-12-15T12:33:11Z",
          "content": "NASA's Parker Solar Probe has survived a three year journey and a roughly 2 million degree Fahrenheit environment to do what was previously thought impossible: enter the sun's atmosphere.\r\nThe Parker… [+3310 chars]"
        },
        {
          "source": { "id": "cbs-news", "name": "CBS News" },
          "author": "Melissa Melissa",
          "title": "Fox News hosts urged Meadows to push Trump to stop January 6 attack, texts show - CBS News",
          "description": "The messages were among the reams of documents Meadows turned over to the committee before he stopped cooperating with investigators.",
          "url": "https://www.cbsnews.com/news/mark-meadows-trump-january-6-text-messages-fox-news-hosts-capitol-riot/",
          "urlToImage": "https://cbsnews2.cbsistatic.com/hub/i/r/2021/12/14/b6471703-a01a-4393-a29e-f49702d0d9f8/thumbnail/1200x630g2/bced46321c8a83ce64839f5117513999/gettyimages-1228218451.jpg",
          "publishedAt": "2021-12-15T12:31:38Z",
          "content": "Washington — As a mob of former President Donald Trump's supporters violently breached the U.S. Capitol on January 6, three hosts from Fox News and the president's eldest son privately implored then-… [+3823 chars]"
        },
        {
          "source": { "id": "engadget", "name": "Engadget" },
          "author": "https://www.engadget.com/about/editors/mariella-moon",
          "title": "NASA's James Webb telescope launch delayed again until December 24th - Engadget",
          "description": "It remains to be seen whether the James Webb telescope will be able head to space this year..",
          "url": "https://www.engadget.com/nasa-james-webb-telescope-launch-delayed-again-december-24th-111052456.html",
          "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-12/193a6190-5dab-11ec-b7f7-1b5f8efc7acc",
          "publishedAt": "2021-12-15T11:11:53Z",
          "content": "NASA was hoping to send the James Webb telescope on its way to space by December 22nd, but its launch has been delayed yet again. You've probably read several variations of that sentence by now if yo… [+1599 chars]"
        },
        {
          "source": { "id": "the-washington-post", "name": "The Washington Post" },
          "author": "Lori Aratani, Michael Laris",
          "title": "Airline executives before Congress on Wednesday over federal bailout - The Washington Post",
          "description": "Consumer advocates and some lawmakers have raised concerns about airlines’ handling of the funds.",
          "url": "https://www.washingtonpost.com/transportation/2021/12/15/air-travel-bailout-congress/",
          "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/LXVN2DSZHYI6ZA4WKVJL55K4HQ.jpg&w=1440",
          "publishedAt": "2021-12-15T11:05:01Z",
          "content": "U.S. taxpayers spent tens of billions to prop up airlines as travel fell by more than 90 percent early in the pandemic. It was a vast commitment of public resources that analysts said probably preven… [+3668 chars]"
        },
        {
          "source": { "id": "cnn", "name": "CNN" },
          "author": "Danielle Wiener-Bronner, CNN Business",
          "title": "Kraft will pay you $20 not to make cheesecake for Christmas - CNN",
          "description": "Kraft is using its cream cheese shortage as a marketing opportunity.",
          "url": "https://www.cnn.com/2021/12/15/business/cream-cheese-shortage-dessert/index.html",
          "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211214160113-kraft-philadelphia-cream-cheese-tub-file-restricted-super-tease.jpg",
          "publishedAt": "2021-12-15T10:57:00Z",
          "content": null
        },
        {
          "source": { "id": null, "name": "New York Times" },
          "author": "Coral Murphy Marcos",
          "title": "Business and Inflation News: Live Updates - The New York Times",
          "description": "The increase in spending continued for a fourth straight month despite an increase in coronavirus cases and higher prices on goods because of inflation.",
          "url": "https://www.nytimes.com/live/2021/12/15/business/inflation-retail-sales-stocks",
          "urlToImage": "https://static01.nyt.com/images/2021/12/15/multimedia/15retailsales/15retailsales-facebookJumbo.jpg",
          "publishedAt": "2021-12-15T10:35:55Z",
          "content": "A partisan fight atop a sleepy bank regulator intensified on Tuesday, with Democratic members of the Federal Deposit Insurance Corporation board saying its Republican chairwoman was subverting the ma… [+3458 chars]"
        },
        {
          "source": { "id": "engadget", "name": "Engadget" },
          "author": "https://www.engadget.com/about/editors/richard-lai",
          "title": "Oppo’s Find N foldable phone has a more practical landscape screen - Engadget",
          "description": "Oppo unveiled the Find N, a foldable phone featuring a 5.49-inch external display and unfolds into a 7.1-inch flexible \"Serene Display.\" You can get one in China for as low as $1,210..",
          "url": "https://www.engadget.com/oppo-find-n-foldable-phone-china-101211924.html",
          "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-12/2f120cd0-5d7d-11ec-b8db-dcf4f76acf66",
          "publishedAt": "2021-12-15T10:14:24Z",
          "content": "Samsung's three generations of foldable phones put it in a leading position in the field, so much that Huawei and Xiaomi eventually followed the same double-screen form factor. Having already shown a… [+4684 chars]"
        },
        {
          "source": { "id": null, "name": "NPR" },
          "author": "Joanna Kakissis",
          "title": "Portugal has a high vaccination rate but it isn't taking chances with omicron - NPR",
          "description": "Scientists are watching how Portugal and other highly vaccinated countries are faring against the coronavirus' new omicron variant.",
          "url": "https://www.npr.org/2021/12/15/1063830104/portugal-covid-vaccines-omicron-variant",
          "urlToImage": "https://media.npr.org/assets/img/2021/12/14/_dsc0220_wide-90aa5ff3ef5a1ebd07b55f1ae21d1cada9c137cf.jpg?s=1400",
          "publishedAt": "2021-12-15T10:00:59Z",
          "content": "LISBON, Portugal The week the omicron variant hit Portugal, Violante Rocha 80 years old and triple-vaccinated masked up and went to the theater.\r\n\"Everyone else wore a mask too, of course,\" she says.… [+6665 chars]"
        },
        {
          "source": { "id": null, "name": "New York Times" },
          "author": "Brooks Barnes",
          "title": "See the Real Live Man Who Grew Up in a Carnival - The New York Times",
          "description": "For our reporter, “Nightmare Alley” recalls a childhood spent working the circuit with his parents. Carnies like the World’s Smallest Woman welcomed him when cruel classmates didn’t.",
          "url": "https://www.nytimes.com/2021/12/15/movies/nightmare-alley-childhood-carnival.html",
          "urlToImage": "https://static01.nyt.com/images/2021/12/19/arts/19carny-cover/19carny-cover-facebookJumbo.jpg",
          "publishedAt": "2021-12-15T10:00:25Z",
          "content": "The same was true for me. Outside the carnival in Montana, where we lived in the off-season, and I went to school I was an effeminate boy with a big perm (dont ask) who hated sports and adored Whitne… [+1789 chars]"
        },
        {
          "source": { "id": null, "name": "New York Times" },
          "author": "Alan Rappeport",
          "title": "Republicans Who Assailed Biden’s Stimulus Bill Are Embracing the Money - The New York Times",
          "description": "Republican governors who criticized the $1.9 trillion Covid relief bill as wasteful are championing state projects funded by the money.",
          "url": "https://www.nytimes.com/2021/12/15/us/politics/biden-stimulus-bill-republicans.html",
          "urlToImage": "https://static01.nyt.com/images/2021/12/10/us/politics/00dc-stimulus-1/00dc-stimulus-1-facebookJumbo.jpg",
          "publishedAt": "2021-12-15T10:00:22Z",
          "content": "Its like the python that ate the rat, Brad Whitehead, a nonresident senior fellow at the Brookings Metropolitan Policy Program, said of the struggle to shepherd so much federal money into state proje… [+2038 chars]"
        },
        {
          "source": { "id": "politico", "name": "Politico" },
          "author": "https://www.facebook.com/politico",
          "title": "Covid's deadly tradeoffs, by the numbers: How each state has fared in the pandemic - POLITICO",
          "description": "POLITICO’s State Pandemic Scorecard shows how state decisions impacted lives, jobs, education and well-being.",
          "url": "https://politico.com/interactives/2021/covid-by-the-numbers-how-each-state-fared-on-our-pandemic-scorecard/",
          "urlToImage": "https://politico.com/interactives/2021/covid-by-the-numbers-how-each-state-fared-on-our-pandemic-scorecard/media/share.jpg",
          "publishedAt": "2021-12-15T10:00:00Z",
          "content": "The most difficult policy area to assess at this point is education. Federal tests in reading and math were suspended early in the pandemic, and while some states have conducted their own testing, th… [+3504 chars]"
        },
        {
          "source": { "id": null, "name": "New York Times" },
          "author": "Austin Ramzy",
          "title": "Hundreds Trapped by Fire at World Trade Center in Hong Kong - The New York Times",
          "description": "The blaze at the World Trade Center in Causeway Bay injured at least 13 people, including one who was semiconscious, the police said.",
          "url": "https://www.nytimes.com/2021/12/15/world/asia/hong-kong-fire.html",
          "urlToImage": "https://static01.nyt.com/images/2021/12/15/world/15hongkong-fire-02/merlin_199284288_8b719a82-0568-48b6-aa0b-9fae11f48f81-facebookJumbo.jpg",
          "publishedAt": "2021-12-15T09:34:15Z",
          "content": "HONG KONG Hundreds of people were trapped for hours on the roof of a commercial building in Hong Kong after a fire broke out on Wednesday, injuring at least 13 people and forcing firefighters to resc… [+589 chars]"
        }
        
      ];


      capitalizeFirstLetter=(string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    constructor(props){
        super(props);

    this.state={
      articles : this.articles,
      loading : false,
      page:1
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)}- News Desk`
    }

  // async componentDidMount(){
  //      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=439bab1ae45f40fcbc33e1563805b2a3&page=1&pagesize=${this.props.pagesize}`;
  //     this.setState ({loading : true})
  //      let data = await fetch(url);

  //      let parsedData = await data.json()

  //      console.log(parsedData);
  //      this.setState({ articles:  parsedData.articles,totalResults:parsedData.totalResults,
  //       loading : false})
  //         }

  //         handelPreviousClick=async()=>{


  //           let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=439bab1ae45f40fcbc33e1563805b2a3&page=${ this.state.page - 1}&pagesize=${this.props.pagesize}`;
  //           this.setState ({loading : true})
  //           let data = await fetch(url);
     
  //           let parsedData = await data.json()
     
  //           console.log(parsedData);
  //           this.setState({ articles:  parsedData.articles,
  //       loading : false,
  //       page: this.state.page -1})
            
              
  //         }

  //         handelNextClick=async()=>{

  //           if (this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pagesize)){

  //           }
  //           else{

  //           let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=439bab1ae45f40fcbc33e1563805b2a3&page=${ this.state.page + 1}&pagesize=${this.props.pagesize}`;
  //           this.setState ({loading : true})
  //           let data = await fetch(url);
     
  //           let parsedData = await data.json()
     
  //           console.log(parsedData);
  //           this.setState({ articles:  parsedData.articles,
  //             loading : false,
  //             page: this.state.page +1})
            
           
  //         }}

        
      

    render() {
        return (
            <div className='container  my-5'>
                <h1 className='text-center' style={{margin:"35px 0px", marginTop:"90px"}}> News Desk - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {/* {  this.state.loading && <Spinner/>} */}

             <div className="row">
                 {/* {!this.state.loading && this.state.articles.map((element) => { */}

                 {this.state.articles.map((element) => {

                   return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage}newsUrl={element.url}author={element.author}date={element.publishedAt}source={element.source.name}/>
                        </div>


                 })}
                     

                   
                    </div>
                    <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1}type="button" className="btn btn-dark" onClick={this.handelPreviousClick}> &larr; Previous</button>
                    <button  disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pagesize) }type="button"className="btn btn-dark" onClick={this.handelNextClick}
                    >Next &#8594;</button>
                    </div>

            </div>
        
        )
    }
  }

