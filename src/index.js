/**
 * 할 일을 나타냄
 * @constructor
 * @param {!string} id - 아이디
 * @param {!string} content - 내용
 * @param {!boolean} isComplited - 완료여부
 * @param {!string} category - 카테고리
 * @param {?string[]} tags - 태그들
 */
function Todo(id, content, isComplited, category, tags) {}

/**
 * 할 일 추가
 * @function
 * @param {!string} content - 내용
 */
function createTodo(content) {}

/**
 * 모든 할 일 조회
 * ID를 기반으로 특정 할 일 조회 가능
 * @function
 * @param {?string} id - 아이디
 */
function readTodo(id) {}

/**
 * ID를 제외한 모든 속성 수정 가능
 * 특정 할 일의 특정 태그 수정 가능
 * @function
 * @param {?string} id - 아이디
 * @param {?string} content - 내용
 * @param {?boolean} isComplited - 완료여부
 * @param {?string} category - 카테고리
 * @param {?string[]} tags - 태그들
 */
function updateTodo(id) {}

/**
 * ID를 기반으로 특정 할 일 삭제 가능
 * 모든 할 일 제거 가능
 * 특정 할 일의 특정 태그 삭제 가능
 * 특정 할 일의 모든 태그 삭제 가능
 * @function
 * @param {?string} id - 아이디
 * @param {?string} content - 내용
 * @param {?boolean} isComplited - 완료여부
 * @param {?string} category - 카테고리
 * @param {?string[]} tags - 태그들
 */
function deleteTodo(id) {}
