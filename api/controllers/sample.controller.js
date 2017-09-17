  /**
   * @swagger
   * tags:
   * - name: "sample"
   *   description: "Sample GET API"
   * /sample/sampleGet:
   *   get:
   *     tags:
   *     - "sample"
   *     description: Returns the welcome message
   *     responses:
   *       200:
   *         description: i am get api
   */
  const getMethod = (req, res) => {
      res.json({
          message: 'i am get api'
      });
  };

  export default {
      getMethod
  };