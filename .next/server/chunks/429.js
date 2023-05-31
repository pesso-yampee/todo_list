exports.id = 429;
exports.ids = [429];
exports.modules = {

/***/ 2041:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "style_title__iEE_e"
};


/***/ }),

/***/ 8182:
/***/ ((module) => {

// Exports
module.exports = {
	"flexContainer": "style_flexContainer__Uvu2S",
	"link": "style_link__MFeyt"
};


/***/ }),

/***/ 3264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ PageTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var components_atoms_pageTitle_style_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2041);
/* harmony import */ var components_atoms_pageTitle_style_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(components_atoms_pageTitle_style_module_css__WEBPACK_IMPORTED_MODULE_1__);


function PageTitle({ text  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        className: (components_atoms_pageTitle_style_module_css__WEBPACK_IMPORTED_MODULE_1___default().title),
        children: text
    });
}


/***/ }),

/***/ 4962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8182);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_2__);



function Navigation() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().flexContainer),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "/",
                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().link),
                children: "Top"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "/create",
                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_2___default().link),
                children: "Create"
            })
        ]
    });
}


/***/ }),

/***/ 8046:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ useTodo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_2__]);
uuid__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const useTodo = ()=>{
    // 初期表示で表示させておくダミーデータ
    const initialTodoData = [
        {
            title: "todo1",
            content: "todo1",
            id: "awrsgdhfjghk"
        },
        {
            title: "todo2",
            content: "todo2",
            id: "oqilukyjfthdgdf"
        }
    ];
    // Todoリストの設定に関わるstate
    const [list, setList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialTodoData);
    // Todoデータの取得に関わるstate
    const [todo, setTodo] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
    const [editTodo, setEditTodo] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
    // Todoのタイトルもしくはコンテンツの内容を取得するstate
    const [searchTodoTitle, setSearchTodoTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [todoTitle, setTodoTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [todoContent, setTodoContent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    /**
   * 新規追加・編集系
   */ // 新規追加・編集するTodoのタイトルを設定する処理
    const useInputTodoTitle = (e)=>{
        setTodoTitle(e.currentTarget.value);
    };
    // 新規追加・編集するTodoのコンテンツを設定する処理
    const useInputTodoContent = (e)=>{
        setTodoContent(e.currentTarget.value);
    };
    // Todoを追加する処理
    const useAddToList = ()=>{
        setList((prevTodos)=>{
            return [
                ...prevTodos,
                {
                    title: todoTitle,
                    content: todoContent,
                    id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)()
                }
            ];
        });
        router.push("/");
        // Todoを新規追加した際にタイトルフィールドとコンテンフィールドをそれぞれ初期化する処理
        const useInitializeCreateField = ()=>{
            setTodoTitle("");
            setTodoContent("");
        };
        useInitializeCreateField();
    };
    // 編集したいTodoのタイトルとコンテンツをinputタグのvalue属性に予め設定する処理
    const useSetTodoTitleAndContentIntoField = (e)=>{
        const item = getTodoWantToEdit(e);
        const title = item?.title;
        const content = item?.content;
        title && setTodoTitle(title);
        content && setTodoContent(content);
        router.push("/edit");
        // 編集したいTodoを取得する処理
        function getTodoWantToEdit(e) {
            const currentTarget = e.currentTarget;
            const todoItem = currentTarget.closest("li");
            if (todoItem === null) return;
            const todoItemId = todoItem.id;
            const result = list.find((item)=>{
                return item.id === todoItemId;
            });
            result && setEditTodo(result);
            return result;
        }
    };
    // 編集内容を更新する処理
    const useUpdateTodo = ()=>{
        editTodo.title = todoTitle;
        editTodo.content = todoContent;
        router.push("/");
    };
    /**
   * 検索系
   */ // 検索するTodoを設定する処理
    const useSetSearchTodo = (e)=>{
        setSearchTodoTitle(e.currentTarget.value);
    };
    // Todoをフィルタリングする処理
    const useFilterList = ()=>{
        const result = list.filter((item)=>{
            return item.title?.includes(searchTodoTitle);
        });
        return result;
    };
    // リストを初期化する処理
    const useInitializeList = ()=>{
        const filteredList = useFilterList();
        return searchTodoTitle === "" ? list : filteredList;
    };
    // 詳細を見たいTodoアイテムを絞り込む処理
    const useFindTodoDetail = (e)=>{
        const findedItem = list.find((item)=>{
            return item.id === e.currentTarget.id;
        });
        findedItem && setTodo(findedItem);
    };
    /**
   * 削除系
   */ // Todoを削除する処理
    const useDeleteTodo = (e)=>{
        const currentTarget = e.currentTarget;
        const todoItem = currentTarget.closest("li");
        const todoItemId = todoItem?.id;
        const res = window.confirm(`タスク「${todoItem?.textContent}」を本当に削除しますか？`);
        if (res) {
            setList((prevTodos)=>prevTodos.filter((item)=>{
                    return item.id !== todoItemId;
                }));
        }
    };
    return {
        list,
        searchTodoTitle,
        todo,
        todoTitle,
        todoContent,
        setTodo,
        useInputTodoTitle,
        useInputTodoContent,
        useAddToList,
        useSetSearchTodo,
        useDeleteTodo,
        useFilterList,
        useInitializeList,
        useFindTodoDetail,
        useSetTodoTitleAndContentIntoField,
        useUpdateTodo
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4529:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S1": () => (/* binding */ TodoStateContext),
/* harmony export */   "_r": () => (/* binding */ TodoDispatchContext),
/* harmony export */   "a7": () => (/* binding */ TodoProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var hooks_useTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8046);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks_useTodo__WEBPACK_IMPORTED_MODULE_1__]);
hooks_useTodo__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const TodoStateContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({});
const TodoDispatchContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({});
function TodoProvider({ children  }) {
    const { list , searchTodoTitle , todo , todoTitle , todoContent , setTodo , useInputTodoTitle , useInputTodoContent , useAddToList , useSetSearchTodo , useDeleteTodo , useFilterList , useInitializeList , useFindTodoDetail , useSetTodoTitleAndContentIntoField , useUpdateTodo  } = (0,hooks_useTodo__WEBPACK_IMPORTED_MODULE_1__/* .useTodo */ .h)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TodoStateContext.Provider, {
        value: {
            list,
            searchTodoTitle,
            todo,
            todoTitle,
            todoContent
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TodoDispatchContext.Provider, {
            value: {
                setTodo,
                useInputTodoTitle,
                useInputTodoContent,
                useAddToList,
                useSetSearchTodo,
                useDeleteTodo,
                useFilterList,
                useInitializeList,
                useFindTodoDetail,
                useSetTodoTitleAndContentIntoField,
                useUpdateTodo
            },
            children: children
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;