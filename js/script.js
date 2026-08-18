
/* =========================================================
   EDITORA ATALAIA
   JS / SCRIPT.JS
========================================================= */


/* =========================================================
   CATÁLOGO DE LIVROS
========================================================= */

const livros = [

{
    titulo: "BATISMO NAS ÁGUAS",

    autor: "Editora Atalaia",

    capa: "images/capa_BatismoNasAguas.png",

    descricao:
        "Início de uma nova vida em Cristo. Uma reflexão sobre o significado do batismo, a fé e a transformação de uma vida que decide seguir a Cristo.",

    pdf: "pdf/e-Book_BatismoNasAguas.pdf"
},

    {
        titulo: "QUEM É JESUS CRISTO",

        autor: "Diego Nascimento",

        capa: "capas/quem-e-jesus-cristo.jpg",

        descricao:
            "Uma apresentação bíblica sobre a pessoa, a identidade, a missão e a obra de Jesus Cristo.",

        pdf: "pdf/quem-e-jesus-cristo.pdf"
    },


    {
        titulo: "QUEM É DEUS",

        autor: "Diego Nascimento",

        capa: "capas/quem-e-deus.jpg",

        descricao:
            "Um estudo sobre Deus revelado nas Escrituras, seus atributos e seu relacionamento com a humanidade.",

        pdf: "pdf/quem-e-deus.pdf"
    },


    {
        titulo: "O ESPÍRITO SANTO",

        autor: "Diego Nascimento",

        capa: "capas/o-espirito-santo.jpg",

        descricao:
            "Um estudo bíblico sobre a pessoa, a obra e a atuação do Espírito Santo na vida do cristão.",

        pdf: "pdf/o-espirito-santo.pdf"
    },


    {
        titulo: "O HOMEM E O PECADO",

        autor: "Diego Nascimento",

        capa: "capas/o-homem-e-o-pecado.jpg",

        descricao:
            "Uma reflexão bíblica sobre a condição humana, o pecado, suas consequências e a necessidade da redenção.",

        pdf: "pdf/o-homem-e-o-pecado.pdf"
    },


    {
        titulo: "A DOUTRINA DOS APÓSTOLOS",

        autor: "Diego Nascimento",

        capa: "capas/a-doutrina-dos-apostolos.jpg",

        descricao:
            "Um estudo sobre os fundamentos da doutrina apostólica e sua importância para a vida e formação da Igreja.",

        pdf: "pdf/a-doutrina-dos-apostolos.pdf"
    },


    {
        titulo: "IGREJA E POLÍTICA",

        autor: "Diego Nascimento",

        capa: "capas/igreja-e-politica.jpg",

        descricao:
            "Uma reflexão sobre a relação entre a Igreja, a sociedade e a política à luz dos princípios bíblicos.",

        pdf: "pdf/igreja-e-politica.pdf"
    },


    {
        titulo: "ESCOLA DE ELIAS",

        autor: "Editora Atalaia",

        capa: "capas/escola-de-elias.jpg",

        descricao:
            "Um estudo sobre Elias, seu chamado, sua intimidade com Deus, sua obediência, sua autoridade espiritual e os mistérios de seu ministério profético.",

        pdf: "pdf/escola-de-elias.pdf"
    },


    {
        titulo: "DISCIPULADO CRISTÃO",

        autor: "Editora Atalaia",

        capa: "capas/discipulado-cristao.jpg",

        descricao:
            "Material de formação cristã destinado a ajudar o discípulo a crescer na fé, conhecer as Escrituras e desenvolver uma vida de compromisso com Cristo.",

        pdf: "pdf/discipulado-cristao.pdf"
    }

];


/* =========================================================
   ELEMENTOS DO DOM
========================================================= */

const popup = document.getElementById("popupLivro");

const fecharPopup = document.getElementById("fecharPopup");

const livroCapa = document.getElementById("livroCapa");

const livroTitulo = document.getElementById("livroTitulo");

const livroAutor = document.getElementById("livroAutor");

const livroDescricao = document.getElementById("livroDescricao");

const livroPdf = document.getElementById("livroPdf");

const botoesLivros = document.querySelectorAll(".livro");

const anoAtual = document.getElementById("anoAtual");


/* =========================================================
   ABRIR LIVRO
========================================================= */

function abrirLivro(indice) {

    const livro = livros[indice];

    if (!livro) {
        return;
    }


    /* CAPA */

    livroCapa.src = livro.capa;

    livroCapa.alt =
        `Capa do livro ${livro.titulo}`;


    /* TÍTULO */

    livroTitulo.textContent =
        livro.titulo;


    /* AUTOR */

    livroAutor.textContent =
        `Por ${livro.autor}`;


    /* DESCRIÇÃO */

    livroDescricao.textContent =
        livro.descricao;


    /* PDF */

    livroPdf.href =
        livro.pdf;


    /* ABRIR POPUP */

    popup.classList.add("ativo");

    popup.setAttribute(
        "aria-hidden",
        "false"
    );


    /* IMPEDIR SCROLL DO SITE */

    document.body.style.overflow =
        "hidden";


    /* FOCO NO BOTÃO FECHAR */

    setTimeout(() => {

        fecharPopup.focus();

    }, 100);

}


/* =========================================================
   FECHAR LIVRO
========================================================= */

function fecharLivro() {

    popup.classList.remove("ativo");

    popup.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "";


    /* LIMPA O CONTEÚDO */

    livroCapa.src = "";

    livroTitulo.textContent = "";

    livroAutor.textContent = "";

    livroDescricao.textContent = "";

    livroPdf.href = "#";
}


/* =========================================================
   CLIQUE NOS LIVROS
========================================================= */

botoesLivros.forEach((livro) => {

    livro.addEventListener(
        "click",
        () => {

            const indice =
                Number(
                    livro.dataset.livro
                );

            abrirLivro(indice);

        }
    );

});


/* =========================================================
   BOTÃO FECHAR
========================================================= */

fecharPopup.addEventListener(
    "click",
    fecharLivro
);


/* =========================================================
   CLICAR FORA DO POPUP
========================================================= */

popup.addEventListener(
    "click",
    (evento) => {

        if (
            evento.target === popup
        ) {

            fecharLivro();

        }

    }
);


/* =========================================================
   TECLA ESC
========================================================= */

document.addEventListener(
    "keydown",
    (evento) => {

        if (
            evento.key === "Escape" &&
            popup.classList.contains("ativo")
        ) {

            fecharLivro();

        }

    }
);


/* =========================================================
   ANO AUTOMÁTICO DO RODAPÉ
========================================================= */

if (anoAtual) {

    anoAtual.textContent =
        new Date().getFullYear();

}


/* =========================================================
   NAVEGAÇÃO SUAVE
========================================================= */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach((link) => {

        link.addEventListener(
            "click",
            (evento) => {

                const destino =
                    link.getAttribute("href");

                if (
                    !destino ||
                    destino === "#"
                ) {
                    return;
                }


                const elemento =
                    document.querySelector(
                        destino
                    );

                if (!elemento) {
                    return;
                }


                evento.preventDefault();


                elemento.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });


/* =========================================================
   PROTEÇÃO CONTRA IMAGEM DE CAPA QUE NÃO CARREGAR
========================================================= */

livroCapa.addEventListener(
    "error",
    () => {

        livroCapa.alt =
            "Capa do livro indisponível";

        livroCapa.style.display =
            "none";

    }
);


/* =========================================================
   RESTAURAR IMAGEM QUANDO UM NOVO LIVRO FOR ABERTO
========================================================= */

livroCapa.addEventListener(
    "load",
    () => {

        livroCapa.style.display =
            "block";

    }
);

