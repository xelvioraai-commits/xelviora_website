/* ==========================================================
   XEL ENGINE 5.0
   Xelviora AI Assistant
========================================================== */

class XelEngine {

    constructor() {

        /* ---------------------------
           ELEMENTS
        ---------------------------- */

        this.xel = document.getElementById("xel");
        this.image = document.getElementById("xel-img");
        this.bubble = document.getElementById("xel-message");

        this.button = document.getElementById("discovery-btn");
        this.hero = document.getElementById("hero-title");

        /* ---------------------------
           CONFIG
        ---------------------------- */

        this.config = {

            size:82,

            introDelay:0.8,

            bubbleTime:2.5,

            jumpDuration:1.15,

            idleAmplitude:8,

            idleSpeed:1.8

        };

        this.positions = {};

        this.timeline = null;

        this.init();

    }

    /* =====================================================
       INIT
    ===================================================== */

    init(){

        this.calculatePositions();

        this.prepare();

        this.buildTimeline();

        this.registerResize();

    }

    /* =====================================================
       PREPARE
    ===================================================== */

    prepare(){

        gsap.set(this.xel,{

            x:this.positions.home.x,

            y:this.positions.home.y,

            scale:.82,

            rotation:0

        });

        gsap.set(this.image,{

            rotation:0,

            scale:1,

            transformOrigin:"center center"

        });

        gsap.set(this.bubble,{

            opacity:0,

            scale:.8,

            y:20

        });

    }

    /* =====================================================
       POSITIONS
    ===================================================== */

    calculatePositions(){

        const btn=this.button.getBoundingClientRect();

        const hero=this.hero.getBoundingClientRect();

        this.positions={

            home:{

                x:window.innerWidth-120,

                y:window.innerHeight-120

            },

            navbar:{

                x:btn.right-35,

                y:btn.top+8

            },

            hero:{

                x:hero.left+hero.width*.40,

                y:hero.top+15

            }

        };

    }
