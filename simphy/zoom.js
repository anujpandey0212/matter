var variable_max=800;
        var variable_min=0;
        document.onkeydown=fun;
        var zoom_in=document.getElementById('zoom-in');
        zoom_in.onmousedown=zoom_in_func;
        function zoom_in_func(ev){
            variable_min=variable_min-10;
            variable_max=variable_max-10;
            Render.lookAt(render, {
                min: { x: variable_min, y: variable_min },
                max: { x: variable_max, y: variable_max }
            });
        }
        var zoom_out=document.getElementById('zoom-out');
        zoom_out.onmousedown=zoom_out_func;
        function zoom_out_func(ev){
            variable_min=variable_min+10;
            variable_max=variable_max+10;
            Render.lookAt(render, {
                min: { x: variable_min, y: variable_min },
                max: { x: variable_max, y: variable_max }
            });
        }
        function fun(ev){
            if(ev.code=="ArrowRight"){
                variable_max=variable_max+10;
            }
            if(ev.code=="ArrowUp"){
                variable_min=variable_min+10;
            }
            if(ev.code=="ArrowLeft"){
                variable_max=variable_max-10;
            }
            if(ev.code=="ArrowDown"){
                variable_min=variable_min-10;
            }

            Render.lookAt(render, {
                min: { x: variable_min, y: variable_min },
                max: { x: variable_max, y: variable_max }
            });
        }
        Render.lookAt(render, {
            min: { x: variable_min, y: variable_min },
            max: { x: variable_max, y: variable_max }
        });