// // 光标效果管理器
// class CursorEffectsManager {
//     constructor() {
//         this.currentEffect = null;
//         this.defaultEffect = 'emojiRain'; // 默认效果
//         this.init();
//     }

//     init() {
//         // 从localStorage获取保存的光标效果
//         const savedEffect = localStorage.getItem('cursorEffect');
//         if (savedEffect) {
//             this.applyEffect(savedEffect);
//         } else {
//             this.applyEffect(this.defaultEffect);
//         }

//         // 添加控制UI（可选）
//         this.addControlUI();
//     }

//     applyEffect(effectName) {
//         // 清除当前效果
//         if (this.currentEffect) {
//             this.currentEffect.destroy();
//             this.currentEffect = null;
//         }

//         // 应用新效果
//         switch (effectName) {
//             case 'rainbow':
//                 this.currentEffect = new cursoreffects.rainbowCursor({
//                     length: 3,
//                     colors: ["red", "orange", "yellow", "green", "blue", "purple"],
//                     size: 4
//                 });
//                 break;
                
//             case 'emojiRain':
//                 this.currentEffect = new cursoreffects.emojiCursor({ 
//                     emoji: ["🔥", "❤️", "⭐", "😊", "🎉", "💯", "👍", "💡", "🌈", "🚀", "✨", "🌺", "💖", "⚡️", "👑", "👍", "🤔", "🥳", "✌️", "👏", "🙌", "😂", "🤣", "😍", "🤩", "🥰"],
//                     delay: 100
//                 });
//                 break;
                
//             case 'springyEmoji':
//                 this.currentEffect = new cursoreffects.springyEmojiCursor({ emoji: "🌟" });
//                 break;
                
//             case 'ghost':
//                 this.currentEffect = new cursoreffects.ghostCursor();
//                 break;
                
//             case 'trailing':
//                 this.currentEffect = new cursoreffects.trailingCursor();
//                 break;
                
//             case 'textFlag':
//                 this.currentEffect = new cursoreffects.textFlag({ 
//                     text: "Hello!", 
//                     color: ["#FF6800"] 
//                 });
//                 break;
                
//             case 'followingDot':
//                 this.currentEffect = new cursoreffects.followingDotCursor();
//                 break;
                
//             case 'bubble':
//                 this.currentEffect = new cursoreffects.bubbleCursor({
//                     fillColor: "#f771b4",
//                     strokeColor: "#e6f1f7"
//                 });
//                 break;
                
//             case 'snowflake':
//                 this.currentEffect = new cursoreffects.snowflakeCursor();
//                 break;
                
//             case 'fairyDust':
//                 this.currentEffect = new cursoreffects.fairyDustCursor({
//                     colors: ["#ff0000", "#00ff00", "#0000ff"],
//                     fairySymbol: "★"
//                 });
//                 break;
                
//             case 'clock':
//                 // 注意：clockCursor可能需要额外配置
//                 this.currentEffect = new cursoreffects.clockCursor();
//                 break;
                
//             case 'character':
//                 this.currentEffect = new cursoreffects.characterCursor({
//                     characters: ["H", "e", "x", "o"],
//                     colors: ["#6622CC", "#A755C2", "#B07C9E", "#B59194"]
//                 });
//                 break;
                
//             default:
//                 this.currentEffect = new cursoreffects.trailingCursor();
//         }
        
//         // 保存选择
//         localStorage.setItem('cursorEffect', effectName);
        
//         // 更新UI（如果存在）
//         if (this.controlUI) {
//             this.updateControlUI(effectName);
//         }
//     }

//     addControlUI() {
//         // 创建控制UI元素
//         const container = document.createElement('div');
//         container.id = 'cursor-effects-control';
//         container.style.position = 'fixed';
//         container.style.bottom = '20px';
//         container.style.right = '50px';
//         container.style.zIndex = '9999';
//         container.style.padding = '10px';
//         container.style.background = 'rgba(255, 255, 255, 0.9)';
//         container.style.borderRadius = '10px';
//         container.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)';
//         container.style.fontFamily = 'Arial, sans-serif';
//         container.style.fontSize = '14px';
        
//         const title = document.createElement('div');
//         title.textContent = '光标效果';
//         title.style.marginBottom = '8px';
//         title.style.fontWeight = 'bold';
        
//         const select = document.createElement('select');
//         select.id = 'cursor-effect-select';
        
//         // 添加所有可用效果选项
//         const effects = [
//             {value: 'emojiRain', text: '表情符号雨'},
//             {value: 'springyEmoji', text: '弹性表情符号'},
//             {value: 'followingDot', text: '跟随点'},
//             {value: 'bubble', text: '气泡'},
//             {value: 'snowflake', text: '雪花'},
//             {value: 'fairyDust', text: '仙尘'},
//             {value: 'clock', text: '时钟'},
//             {value: 'character', text: '字符光标'},
//             {value: 'none', text: '无效果'}
//         ];
        
//         effects.forEach(effect => {
//             const option = document.createElement('option');
//             option.value = effect.value;
//             option.textContent = effect.text;
//             select.appendChild(option);
//         });
        
//         // 设置当前选择
//         const currentEffect = localStorage.getItem('cursorEffect') || this.defaultEffect;
//         select.value = currentEffect;
        
//         // 添加事件监听器
//         select.addEventListener('change', (e) => {
//             if (e.target.value === 'none') {
//                 if (this.currentEffect) {
//                     this.currentEffect.destroy();
//                     this.currentEffect = null;
//                 }
//                 localStorage.removeItem('cursorEffect');
//             } else {
//                 this.applyEffect(e.target.value);
//             }
//         });
        
//         container.appendChild(title);
//         container.appendChild(select);
//         document.body.appendChild(container);
        
//         this.controlUI = container;
//     }

//     updateControlUI(effectName) {
//         const select = document.getElementById('cursor-effect-select');
//         if (select) {
//             select.value = effectName;
//         }
//     }
// }

// // 页面加载完成后初始化
// window.addEventListener('load', () => {
//     // 加载cursor-effects库
//     const script = document.createElement('script');
//     script.src = '/js/cursor-effects.browser.js'; // 确保路径正确
//     script.onload = () => {
//         // 库加载完成后初始化管理器
//         window.cursorEffectsManager = new CursorEffectsManager();
//     };
//     document.head.appendChild(script);
// });



// 光标效果：固定为表情符号雨
class CursorEffectsManager {
    constructor() {
        this.currentEffect = null;
        this.init();
    }

    init() {
        this.applyEmojiRain();
    }

    applyEmojiRain() {
        // 清除已有效果
        if (this.currentEffect) {
            this.currentEffect.destroy();
            this.currentEffect = null;
        }

        // 启用表情符号雨
        this.currentEffect = new cursoreffects.emojiCursor({ 
            emoji: [
                "🔥", "❤️", "⭐", "😊", "🎉", "💯", "👍", "💡", "🌈", "🚀",
                "✨", "🌺", "💖", "⚡️", "👑", "🤔", "🥳", "✌️", "👏", "🙌",
                "😂", "🤣", "😍", "🤩", "🥰"
            ],
            delay: 100
        });
    }
}

// 页面加载完成后初始化
window.addEventListener('load', () => {
    const script = document.createElement('script');
    script.src = '/js/cursor-effects.browser.js'; // 确保路径正确
    script.onload = () => {
        window.cursorEffectsManager = new CursorEffectsManager();
    };
    document.head.appendChild(script);
});
