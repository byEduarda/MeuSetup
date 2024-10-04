document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menu-toggle');
    var menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('show');
    });
}); 


function redirectToLinkpm() {
    var linkpm = "https://pt.aliexpress.com/item/1005005980078919.html"
    
    document.location.href = linkpm 
}

function redirectToLinkg() {
    var linkpm = "https://www.amazon.com.br/Gabinete-Mancer-Goblin-Lateral-MCR-GBN-WH01/dp/B0BNLLLM7K/ref=pd_ci_mcx_pspc_dp_d_2_t_1?pd_rd_w=PQGhX&content-id=amzn1.sym.157f4a72-df0f-4893-87ec-09910dd8153a&pf_rd_p=157f4a72-df0f-4893-87ec-09910dd8153a&pf_rd_r=MBQZQDFV68W5G6SBBT51&pd_rd_wg=tAw5e&pd_rd_r=21370f91-6145-4653-85a3-1fef5bf9bc1a&pd_rd_i=B0BNLLLM7K&th=1"
    
    document.location.href = linkpm
}

