
        let canvas=document.getElementById("desenho1")
        let ctx=canvas.getContext('2d')

        let jogador= new Image()
        jogador.src="public/imagens/CanvasAnimation.PNG"//lembrar sempre de rever o caminho da imagem em caso de mudaça de pastas
        let numSprite=0//variavel responsavel de mudar as imagens! na posição em x
        let posIniX=0
        let Limagem=0
        let largSprite=0
        let numSpries=12//A quntidade de recorte de imagens esta ligada diretamenta com a condição que reinicia a sequencia de imagens do if da função ANIMA
        jogador.addEventListener('load',()=>{
            largSprite=jogador.width/numSpries
            AltSprite=jogador.height/numSpries
            posIniX=largSprite*numSprite// <= ao mudar esse valor desloca-se a captura de imagem... como a imagem estudada é de 4imagens 50x50pixls ..temos de 0 a 3 ... posteriormente o numero foi adcionado a uma variavel!!
            //(imagem) +++ (x inicial do recorte..y inicial do recorte) +++ (largura do recote...Altura do recorte) +++ (posição X da imagem...posição Y da imagem) +++ (Largura da imagem ...altura da imagem)
          ctx.drawImage(jogador,posIniX,0,largSprite,AltSprite,0,0,largSprite,AltSprite)
          //posIniY modifica a sequencia de imagens para baixo lembra de modificar nas duas funções que se seguem
        })      
        
        let anima=setInterval(()=>{
            ctx.clearRect(0,0,275,135)
            numSprite++
            if(numSprite>11)//condição que reinicia a sequencia de imagens! 
            numSprite=0
            posIniX=largSprite*numSprite
             //(imagem) +++ (x inicial do recorte..y inicial do recorte) +++ (largura do recote...Altura do recorte) +++ (posição X da imagem...posição Y da imagem) +++ (Largura da imagem ...altura da imagem)
          ctx.drawImage(jogador,posIniX,0,largSprite,135,10,10,275,135)//..50x50
         //posIniY modifica a sequencia de imagens para baixo  lembra de modificar nas duas funções que se seguem
        },1000)//função que define o tempo em que as imagens mudam

    