import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    user: fetchUser,
    article: fetchArticle
});

function fetchUser(state = {}, action) {
    return {
        username: "J-Mo",
        email: "jdmoallem@gmail.com"
    }
}

function fetchArticle(state = {}, action) {
    return {
        title: "Facebook and Better Data Protections",
        author: "Lachlan Cheney",
        datePublished: "06/10/2018",
        image: "https://amp.businessinsider.com/images/5acd1fe84d0386a9008b5052-750-500.jpg",
        situation: "A new report in The New York Times contains a startling fact: Working with a 2013 BlackBerry device, a reporter was recently able to use special access Facebook had granted the phone manufacturer to glean some identifying information about 294,258 people. A new report in The New York Times contains a startling fact: Working with a 2013 BlackBerry device, a reporter was recently able to use special access Facebook had granted the phone manufacturer to glean some identifying information about 294,258 people.",
        factsBody: "[Facebook](http://facebook.com) recently experienced a major crisis where the personally identifiable information of 87 million users was obtained by political consulting firm Cambridge Analytica, unbeknownst to Facebook and its users. [Cambridge Analytica](#) was able to obtain this data due to a short lived programme where Facebook created a service to collect information on a user, and on a user's network of friends, thereby in a sense actively encouraging third party app developers to take advantage of this. This data was utilised by Cambridge Analytica to aid the 2017 Trump campaign to perform precise targeted advertising.\n- As a result, the U.S. Congress, UK Parliament, and the European Union all called for more stringent regulations on Facebook.\n- As a result, the U.S. Congress, UK Parliament, and the European Union all called for more stringent regulations on Facebook.\n\nThus as evidenced in the [above events](#), user data is becoming increasingly commoditised. As user data 'becomes the new oil', do we need to provide additional protections to the online user to prevent companies exploiting their information?\n\nRegulating Facebook has similar issues to regulating the internet due to “the lack of centralised control, the difficulty of controlling the spread of information, the availability of encryption, the world-wide nature of the Internet, and the unfamiliarity of policy makers with the technology and the fluid nature of the technology”",
        issueTitle: "Do we need to regulate Facebook to provide privacy protections for it's users?",
        leftColour: "#112A43",
        rightColour: "#B83030",
        leftTitle: "New Data Regulations are Necessary to Protect Personal Freedoms.",
        rightTitle: "Owing to the Digital Illiteracy of Legislators, Data Regulation may Run a Real Risk of Impugning on Personal Freedoms.",
        argumentsLeft: [
            {
                text: "Thus as evidenced in the above events, user data is becoming increasingly commoditised. As user data 'becomes the new oil', do we need to provide additional protections to the online user to prevent companies exploiting their information?",
                reference: "The Economist",
                referenceLink: "https://www.economist.com/briefing/2017/05/06/data-is-giving-rise-to-a-new-economy"
            },
            {
                text: "Thus as evidenced in the above events, user data is becoming increasingly commoditised. As user data 'becomes the new oil', do we need to provide additional protections to the online user to prevent companies exploiting their information?",
                reference: "The Economist",
                referenceLink: "https://www.economist.com/briefing/2017/05/06/data-is-giving-rise-to-a-new-economy"
            },
            {
                text: "Thus as evidenced in the above events, user data is becoming increasingly commoditised. As user data 'becomes the new oil', do we need to provide additional protections to the online user to prevent companies exploiting their information?",
                reference: "The Economist",
                referenceLink: "https://www.economist.com/briefing/2017/05/06/data-is-giving-rise-to-a-new-economy"
            }
        ],
        argumentsRight: [
            {
                text: "Thus as evidenced in the above events, user data is becoming increasingly commoditised. As user data 'becomes the new oil', do we need to provide additional protections to the online user to prevent companies exploiting their information?",
                reference: "The Economist",
                referenceLink: "https://www.economist.com/briefing/2017/05/06/data-is-giving-rise-to-a-new-economy"
            },
            {
                text: "Thus as evidenced in the above events, user data is becoming increasingly commoditised. As user data 'becomes the new oil', do we need to provide additional protections to the online user to prevent companies exploiting their information?",
                reference: "The Economist",
                referenceLink: "https://www.economist.com/briefing/2017/05/06/data-is-giving-rise-to-a-new-economy"
            },
            {
                text: "Thus as evidenced in the above events, user data is becoming increasingly commoditised. As user data 'becomes the new oil', do we need to provide additional protections to the online user to prevent companies exploiting their information?",
                reference: "The Economist",
                referenceLink: "https://www.economist.com/briefing/2017/05/06/data-is-giving-rise-to-a-new-economy"
            }
        ]
    }
}

export default rootReducer;
