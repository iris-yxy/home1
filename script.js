const data = {
    fruits: ['Apple','Banana','Pear','Watermelon','Grape','Strawberry','Mango','Blackberry'],
    spices: ['Salt','Pepper','Chilli','Herbs','Curry'],
    vegetables: ['Carrot','Cucumber','Lettuce','Tomato','Broccoli']
};
const tabs = ['fruits','spices','vegetables'];
const TabContainer = document.querySelector('.tabs');
const ListContainer = document.querySelector('.list');

let activeTab = 'fruits';
let selectedItem = {
  fruits: [],
  spices: [],
  vegetables: []
};

function renderTab() {
    TabContainer.innerHTML = '';
    tabs.forEach(tab => {
        const button = document.createElement('button');
        button.textContent = tab; // 显示按钮文字
        button.className = tab === activeTab ? 'tab active' : 'tab';
        button.addEventListener('click', () => {
            activeTab = tab;
            renderTab();
            renderList();
        });
        TabContainer.appendChild(button);
    });
}

function renderList() {
    ListContainer.innerHTML = '';
    data[activeTab].forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        li.className = selectedItem[activeTab].includes(item) ? 'item selected' : 'item';
        li.addEventListener('click', () => {
            if(selectedItem[activeTab].includes(item)) {
                selectedItem[activeTab] = selectedItem[activeTab].filter(i => i !== item);
            } else {
                selectedItem[activeTab].push(item);
            }
            renderList();
        });
        ListContainer.appendChild(li);
    });
}

// 初始化渲染
renderTab();
renderList();