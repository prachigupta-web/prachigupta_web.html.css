<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ecommerce landing page</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>

<style>
header{
    width: 100%;
    height: 100;
}

html{
    scroll-behavior: smooth;
}

body{
    background-color: rgb(190, 106, 130);
}
nav{
    width: 100%;
    height: 70px;
    border-bottom:1px solid black;
    box-shadow: 2px 0px 5px black;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
}

.logo{
    font-size: 50px;
    font-weight: bold;
}

.menu a{
    text-decoration: none;
    font-size: 20px;
    color: black;
    padding: 10px 20px;
    margin: 5px;
    font-weight: bold;

}
.menu a:last-child{
    background: black;
    color: white;
}

.conatiner{
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    transform-origin: center;
    perspective: 2000px;
}


.left{
    width: 50%;
   
    animation: animate 2s linear infinite ;
}

.left img{
    width:100%

}

@keyframes animate{
    0%{
        transform: scale(1.1);
    }
    50%{
        transform: scale(1.0);
    }
    100%{
        transform: scale(1.1);
    }
    
    

}

.container {
    display: flex;
    align-items: center;
}

.right{
    flex-basis: 50%;
    max-width: 400px;
    margin-left: 100px;
    
}

.right h1{
    font-size: 50px;
}

.right p{
    font-size: 25px;
    margin: 20px 0px;

}
button{
    background:  black;
    color: white;
    font-weight: bold;
    border: none;
    outline: none;
    padding: 10px 20px;
}

#featured{
    padding: 50px 0px;
    font-size: 50px;
    text-align: center;
}

.wrapper{
    display: grid;
    grid-template-columns: repeat(4,20%);
    grid-auto-rows: minmax(200px,auto);
    grid-gap:1em;
    justify-content: center;

}

.wrapper>div{
    border: 1px solid gray;
    position: relative;
}
.wrapper> div img{
    width: 100%;
    overflow: hidden;
}

.box1{
    grid-row: 1/3;
    grid-column: 1/3;
}

.price{
    position: absolute;
    top: 0;
    left: 0;
    background: black;
    font-size: 20px;
    color: white;   
}
.wrapper> div img:hover{
    transform: scale(1.1);
    transition: 0.4s linear;
}

#man{
    padding: 80px 0px;
   
}
.man-row{
    display: flex;
    justify-content: space-around;
    align-items: center;
   
}

.man-box{
    flex-basis: 15%;
    box-shadow:2px 3px 5px gray ;
    padding: 10px;    
    text-align: center;
    
}
    

.man-box img{
    width: 10%;
   
}
.max-box h2{
        margin: 20px 0px;
        font-size: small;
    }
.max-box h3{
        background:black ;
        color: white;
        padding: 10px;
 }

 
.man-row> div img:hover{
    transform: scale(1.1);
    transition: 0.4s linear;
}



#women{
        padding: 100px 0px;
}

#footer{
        display:flex;
        justify-content: space-around;
        align-items: center;
        background: black;
        color: white;
        padding: 10px;
}
</style>
<body>
    <header id="home">
        <nav>
            <div class="logo">E-Shop</div>
            <div class="menu">
                <a href="#home">Home</a>
                <a href="#featured">Featured</a>
                <a href="#man">Man</a>
                <a href="#women">Women</a>
                <a href="#kids">Kids</a>
                <a href="#">Shop</a>
            </div>
        </nav>
     
            <div class="container ">
                <div class="left">
                    <img src="slipper2.png" alt="">
                </div>
                <div class="right">
                    <h1>Best Festival offers</h1>
                    <p>
                        we are providing best quality materils. We have best quality clothes, shoes for men and womens.
                    
                    </p>
                    <p>
                        50% Discount !!
                    </p>
                    <button>Shop</button> <br>

                    <img src="icon.png" alt="">
                </div>
            </div>
            
    </header >
    <section id="featured">
        <h1>Featured</h1>
        <div class="wrapper">
        <div class="box1"> 
            <img src="slipper1.png.jpg" alt="">
            <div class="price">Price $500</div>
        </div>
        <div> 
            <img src="slippers8.png.jpg" alt="">
            <div class="price">Price $100</div>
        </div>
        <div> 
            <img src="slipper3.png.jpg" alt="">
            <div class="price">Price $800</div>
        </div>
        <div> 
            <img src="slipper4.png.jpg" alt="">
            <div class="price">Price $600</div>
        </div>
        <div> 
            <img src="slipper7.png" alt="">
            <div class="price">Price $200</div>
        </div>
        
        </div>
<section id="man">
    <div class="man-row">
        <div class="box">
            <img src="man2.png.jpg" alt="">
            <h2> Nike ferr Tr<br>$129.99</h2>
            <h3>Add to cart</h3>
        
        </div>
        <div class="box">
            <img src="man22.png" alt="">
            <h2> <br>$100.78</h2>
            <h3>Add to cart</h3>
        </div>
        <div class="box">
            <img src="man33.png.jpg" alt="">
            <h2> Nike ferr Tr<br>$119.69</h2>
            <h3>Add to cart</h3>
        </div>
    </div>

</section>

<section id="women">
    <div class="man-row">
        <div class="box">
            <img src="woman8.png.jpg" alt="">
            <h2> Nike ferr Tr<br>$129.99</h2>
            <h3>Add to cart</h3>
        </div>
        <div class="box">
            <img src="woman2.png.jpg" alt="">
            <h2> <br>$100.78</h2>
            <h3>Add to cart</h3>
        </div>
        <div class="box">
            <img src="woman44.png.jpg" alt="">
            <h2> Nike ferr Tr<br>$119.69</h2>
            <h3>Add to cart</h3>
        </div>
        </div>
    </div>

</section>
<section id="kids">
    <div class="man-row">
        <div class="box">
            <img src="kid.png.jpg" alt="">
            <h2> Nike ferr Tr<br>$129.99</h2>
            <h3>Add to cart</h3>
        </div>
        <div class="box">
            <img src="kid9.png.jpg" alt="">
            <h2> <br>$100.78</h2>
            <h3>Add to cart</h3>
        </div>
        <div class="box">
            <img src="kid4.png.jpg" alt="">
            <h2> Nike ferr Tr<br>$119.69</h2>
            <h3>Add to cart</h3>
        </div>
       
    </div>

</section>


    </section>
    <section id="footer">
        <h2>Developed by Prachi Gupta</h2>
        <img src="icon.png" alt="">
    </section>
</body>
</html>
