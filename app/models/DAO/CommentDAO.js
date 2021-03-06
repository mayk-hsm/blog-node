	function CommentDAO(connection) {
		this.connection = connection;
	}


	CommentDAO.prototype.getCommentsByPost = function(idPost,callback){
		let sql = `SELECT COMMENTS.ID, COMMENTS.COMMENT AS CONTENT, COMMENTS.ID_USER AS OWNER_ID, USERS.NAME AS OWNER_NAME FROM COMMENTS
INNER JOIN USERS ON COMMENTS.ID_USER = USERS.ID WHERE ID_POST = `+idPost;
		this.connection.query(sql,callback);
	}

	CommentDAO.prototype.createComment = function(comment,idPost,idUser,callback){
		let sql = `INSERT INTO COMMENTS (COMMENT, ID_POST, ID_USER) VALUES('`+comment+`','`+idPost+`','`+idUser+`');`;
		console.log('QUERY INSERT COMMENT: '+sql);
		this.connection.query(sql,callback);
	}

	CommentDAO.prototype.deleteAllCommentsByPost = function(idPost,callback){
		let sql = 'DELETE FROM COMMENTS WHERE ID_POST='+idPost;
		this.connection.query(sql,callback);
	}

	CommentDAO.prototype.deleteComment = function(id,callback){
		let sql = 'DELETE FROM COMMENTS WHERE ID='+id;
		this.connection.query(sql,callback);
	}

	module.exports = function(){ 
		return CommentDAO;
	}	