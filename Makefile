init-server	:
	cd server && npm i
init-client	:
	cd client && npm i
run-server	: 
	cd server && npm run dev
run-client	:
	cd client && npm run dev