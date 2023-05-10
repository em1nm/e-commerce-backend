const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags; include associated Product data
  try {
    const tags = await Tag.findAll({
      include: [{ model: Product }],
    })
    res.status(200).json(tags);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find single tag by its `id`; include its associated Product data
  try {
    const tags = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    })
    if (!tags) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }
    res.status(200).json(tags);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create new tag
  try {
    const tag = await Tag.create(req.body);
    res.status(200).json(tag);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update tag's name by `id` value
  try {
    const tag = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    if (!tag) {
      res.status(404).json({ message: 'No tag found with this id!' });
    }
    res.status(200).json(tag);
  }
  catch (err) {
    res.status(500).json(err);
  }

});

router.delete('/:id', async (req, res) => {
  // delete on tag by `id` value
  try {
    const tag = await Tag.destroy({
      where: {
        id: req.params.id,
      }
    });
    if (!tag) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }
    res.status(200).json(tag);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;