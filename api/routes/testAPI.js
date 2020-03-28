var express = require('express');
var router = express.Router();

var executors = [
	{
		id: 1,
		name: 'Dima'
	},
	{
		id: 2,
		name: 'Kostya'
	},
	{
		id: 3,
		name: 'Andrew'
	}
];

var todos = [
	{
		id: 1,
		title: 'Погулять с собакой',
		priority: 10,
		executor: 'Dima'
	}
]

// Получить исполнителей
router.get('/executor', function (req, res) {
	res.send(executors);
});

// Получить список задач
router.get('/todos', function (req, res) {
	res.send(todos);
});

// Добавить задачу и отсортировать массив с задачами
router.post('/todos', function (req, res) {
	const todo = {
		id: Date.now(),
		title: req.body.title,
		priority: req.body.priority,
		executor: req.body.executor
	}
	todos.push(todo)
	todos.sort((a, b) => a.priority - b.priority)
	res.sendStatus(200)
})

// Изменить приоритет у задачи и отсортировать массив с задачами
router.put('/todos/:id', function (req, res) {
	const todo = todos.find(el => {
		return el.id === Number(req.params.id)
	})
	const priority = Number(todo.priority) + Number(req.body.priority)
	todo.priority = priority >= 0 && priority <=10 ? priority : todo.priority
	todos.sort((a, b) =>  a.priority - b.priority)	
	res.sendStatus(200)
})


// Удалить задачу
router.delete('/todos/:id', function (req, res) {
	todos = todos.filter(todo => todo.id !== Number(req.params.id))
	res.sendStatus(200)
})

module.exports = router;

