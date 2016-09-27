var arkControl = new Terminal('terminal');

// set styling to nothing because it's
// handled by matrix.css and matrix.js
arkControl.setWidth("");
arkControl.setHeight("");
arkControl.setTextColor("");
arkControl.setBackgroundColor("");

// append it to body
document.body.appendChild(arkControl.html);

// global inputHandler for prompts
var inputHandler = function (ans) {
    console.log(ans);
    switch (ans.toLowerCase()) {
        case 'help':
            arkControl.print("Commands available:");
            arkControl.print(" -- help");
            arkControl.print(" -- captain");
            arkControl.print(" -- about");
            arkControl.print(" -- navigate");
            arkControl.print(" -- clear");
            arkControl.printHTML("<br />");
            break;

        case 'captain':
            arkControl.printHTML("The capt'n of the ship is <strong style=\"color:white;\"><em>oxalorg</em> &lt;rogue@oxal.org>.</strong>");
            arkControl.print("He likes to dream that he's an ordinary carbon-based\
                              life form, but in reality he's a rogue time travelling\
                              intergalactic ninja who likes cooking and rambling.\
                              He also thinks he is a badass summoner, excelling in the\
                              arts of witchcraft and necromancy, and that he\
                              can raise an army of the dead in a blink of an eye.\
                              (although I've NEVER seen him do it)");
            arkControl.printHTML("Find out more about this n00b at <a href=about style=\"color:white;\">oxal.org/about</a>");
            arkControl.printHTML("<br />");
            break;

        case 'ark':
            arkControl.print("This is 'ark', oxalorgs home base; and I am his A.I bot.\
                              Sakura 310. I maintain all the servers and helper\
                              programs.");
            arkControl.print("The ship is currently sailing from the Ptolemy nebula to the\
                              inner regions of CCG-203. You're free to upload yourself to\
                              our guest chambers for a nice cup of tea.");
            arkControl.printHTML("<br />");c
            break;

        case 'navigate':
            var getAnchor = function (href, text){
                return '<a target=_blank style="color:inherit" href='+ href +'>'+ text + '</a>';
            }
            arkControl.printHTML(getAnchor('about', 'oxal.org/about'));
            arkControl.printHTML(getAnchor('o', 'oxal.org/o'));
            arkControl.printHTML(getAnchor('upload', 'oxal.org/upload'));
            arkControl.printHTML(getAnchor('antisocial', 'oxal.org/antisocial'));
            arkControl.printHTML(getAnchor('git', 'oxal.org/git') + ' -- Coming soon.');
            arkControl.printHTML('<a style="color:inherit" href="git">oxal.org/git</a> -- Coming soon.');
            break;

        case 'clear':
            arkControl.clear();
            break;

        default:
            arkControl.print("Type H.E.L.P (help). PS: This is not a distress signal.");
    }
    arkControl.input("", inputHandler);
}

// Main logic
arkControl.print("Connecting...");
arkControl.print("Logged in @ark.");
arkControl.input("Welcome aboard. Type `help` to recieve help.", inputHandler);
