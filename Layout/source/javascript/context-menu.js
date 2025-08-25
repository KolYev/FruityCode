// запрещаем вызов стандартного меню
document.oncontextmenu = function() { return false; };

// когда страница полностью загрузилась — можно показывать новое меню
$(document).ready(function() {
    // отслеживаем нажатие мыши на странице
    $(document).mousedown(function(event) {
        // убираем наше контекстное меню со страницы при нажатии левой кнопки мыши
        if (event.which != 3) {
            setTimeout(() => { $('.context-menu').remove(); }, 10);
        }
    });

    // отслеживаем нажатие правой кнопки мыши на указанных элементах
    $('.folder, .compiler, .compiler-result, .test, .test-result').mousedown(function(event) {
        if (event.which === 3) {
            // удаляем существующее контекстное меню перед созданием нового
            $('.context-menu').remove();
            
            // создаём новый блок, в котором будет наше меню
            $('<div/>', {
                class: 'context-menu'
            })
            .css({
                // получаем координаты клика и делаем их координатами меню
                left: event.pageX + 'px',
                top: event.pageY + 'px'
            })
            // добавляем блок на страницу
            .appendTo('body')
            // и добавляем пункты в новое контекстное меню
            .append(
                $('<ul/>', {
                    class: 'list-group'
                }).append('<li class="list-group-item"><p>Открыть</p><img src="source/images/context-menu/vector.svg" alt="vector"></li>')
                  .append('<li class="list-group-item"><p>Скопировать ссылку</p><img src="source/images/context-menu/hyperlink.svg" alt="hyperlink"></li>')
                  .append('<li class="list-group-item"><p>Редактировать</p><img src="source/images/context-menu/pencil.svg" alt="pencil"></li>')
                  .append('<li class="list-group-item"><p>Копировать</p><img src="source/images/context-menu/copy.svg" alt="copy"></li>')
                  .append('<li class="list-group-item"><p>Удалить</p><img src="source/images/context-menu/trash.svg" alt="trash"></li>')
            )
            // показываем новое меню
            .show('fast');
        }
    });
});