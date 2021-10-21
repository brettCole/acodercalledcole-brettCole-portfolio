package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	// Set router as default one shipped with Gin
	r := gin.Default()
	// r.Static("/assets", "./assets")

	// Serve static ticTacToe.wasm file with /ticTacToe route
	r.StaticFile("/ticTacToe", "./assets/ticTacToe.wasm")

	r.Run(":8080") // listen and serve
}
