
let header_h1 = document.getElementById("header-h1")
let header = document.getElementById("header-banner")

let section_2 = document.getElementById("section-2")

let future_events_container = document.getElementById("future-events-container")
let future_events_left = document.getElementById("future-events-left")
let future_events_right = document.getElementById("future-events-right")
let future_events_counter = 0

let community_container = document.getElementById("community-container")
let community_left = document.getElementById("community-left")
let community_right = document.getElementById("community-right")
let community_counter = 0


// ! Section 1

let section_1 = document.getElementById("section-1")
let homepage_panel_panels = document.querySelectorAll(".panel-sect-1")
let dinners_panel = document.getElementById("dinners-panel")
let close_dinners_panel_btn = document.getElementById("close-dinners-panel-btn")
let letters_panel = document.getElementById("letters-panel")
let close_letters_panel_btn = document.getElementById("close-letters-panel-btn")
let clubs_panel = document.getElementById("clubs-panel")
let close_clubs_panel_btn = document.getElementById("close-clubs-panel-btn")
let winners_panel = document.getElementById("winners-panel")
let close_winners_panel_btn = document.getElementById("close-winners-panel-btn")
let winners_video = document.getElementById("winners-video")
let window_width = window.innerWidth;
let video_source_element = document.createElement("source")

console.log(window_width)

showHomepagepanel()

// Video


video_source_element.type='video/mp4'
// console.log(video_source_element)



section_1.addEventListener("click", (e) => {
    
    if (e.target.id == "dinners-panel") {
        dinners_panel.classList.add("show-panel")
    }
    
    if (e.target.id == "close-dinners-panel-btn") {
        dinners_panel.classList.remove("show-panel")
    }
    if (e.target.id == "letters-panel") {
        letters_panel.classList.add("show-panel")
        
    }
    
    if (e.target.id == "close-letters-panel-btn") {
        letters_panel.classList.remove("show-panel")
    }
    if (e.target.id == "clubs-panel") {
        clubs_panel.classList.add("show-panel")
    }
    
    if (e.target.id == "close-clubs-panel-btn") {
        clubs_panel.classList.remove("show-panel")
    }
    if (e.target.id == "winners-panel") {
        winners_video.currentTime = 0;
        changeVideoFormat()
        winners_video.play()
        winners_panel.classList.add("show-panel")
    }
    
    if (e.target.id == "close-winners-panel-btn") {
        winners_panel.classList.remove("show-panel")
    }
})

document.addEventListener("scroll", () => {
    console.log(scrollY)
    // if (window_width < 1200) {
    //     if ((scrollY < 200) || (scrollY > 1001)) {
    //         section_2.classList = "hide"
    //     }
    //     if ((scrollY > 200) && (scrollY < 1000)) {
    //         section_2.classList = "show"
    //     }
    // } 
    
    if (window_width > 1200) {
        if ((scrollY < 400) || (scrollY > 1601)) {
            section_2.classList = "hide"
        }
        if ((scrollY > 400) && (scrollY < 1600)) {
            section_2.classList = "show"
        }
    }
});

// ! Section 4

future_events_right.addEventListener("click", () => {
    if (future_events_counter != 2) {
        future_events_counter = future_events_counter + 1
        console.log(`Counter: ${future_events_counter}`)
    }
    futureEventsCheckCounter(future_events_counter)
})
future_events_left.addEventListener("click", () => {
    if (future_events_counter != 0) {
        future_events_counter = future_events_counter - 1
        console.log(`Counter: ${future_events_counter}`)
    }
    futureEventsCheckCounter(future_events_counter)
})

// ! Section 5

community_right.addEventListener("click", () => {
    if (community_counter != 3) {
        community_counter = community_counter + 1
        console.log(`Counter: ${community_counter}`)
    }
    communityCheckCounter(community_counter)
})
community_left.addEventListener("click", () => {
    if (community_counter != 0) {
        community_counter = community_counter - 1
        console.log(`Counter: ${community_counter}`)
    }
    communityCheckCounter(community_counter)
})






// ! Functions

function showHomepagepanel() {
    for (i in homepage_panel_panels) {
        try {
            homepage_panel_panels[i].classList.add("show")    
        } catch (error) { console.log(error) }
    }
}

function futureEventsCheckCounter(future_events_counter) {
    if (future_events_counter == 0) {
        future_events_container.classList = "march"
    }
    if (future_events_counter == 1) {
        future_events_container.classList = "april"
    }
    if (future_events_counter == 2) {
        future_events_container.classList = "may"
    }
}


function communityCheckCounter(community_counter) {
    if (community_counter == 0) {
        community_container.classList = "community-poster-1"
    }
    if (community_counter == 1) {
        community_container.classList = "community-poster-2"
    }
    if (community_counter == 2) {
        community_container.classList = "community-poster-3"
    }
    if (community_counter == 3) {
        community_container.classList = "community-poster-4"
    }
}

function changeVideoFormat() {
    if (window_width < 1200) {
        video_source_element.src='/images/winners_mobile.mp4'
    } else {
        video_source_element.src='/images/winners_computer.mp4'
    }
    winners_video.append(video_source_element);
}