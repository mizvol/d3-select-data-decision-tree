var horrorAdventure = {"name": "deg_std > 0.26", "children": [{"name": "assortativity > 0.69", "children": [{"name": "0 of Adventure, 3 of Horror"}, {"name": "deg_std > 0.29", "children": [{"name": "22 of Adventure, 10 of Horror"}, {"name": "8 of Adventure, 0 of Horror"}]}]}, {"name": "nodes > 0.18", "children": [{"name": "assortativity > 0.63", "children": [{"name": "3 of Adventure, 0 of Horror"}, {"name": "5 of Adventure, 7 of Horror"}]}, {"name": "assortativity > 0.22", "children": [{"name": "1 of Adventure, 20 of Horror"}, {"name": "2 of Adventure, 0 of Horror"}]}]}]};

var horrorAdventureBiography = {"name": "deg_std > 0.27", "children": [{"name": "deg_mean > 0.32", "children": [{"name": "edges > 0.37", "children": [{"name": "5 of Adventure, 1 of Horror, 0 of Biography"}, {"name": "2 of Adventure, 14 of Horror, 10 of Biography"}]}, {"name": "nodes > 0.28", "children": [{"name": "26 of Adventure, 4 of Horror, 0 of Biography"}, {"name": "4 of Adventure, 8 of Horror, 2 of Biography"}]}]}, {"name": "assortativity > 0.32", "children": [{"name": "deg_std > 0.15", "children": [{"name": "5 of Adventure, 10 of Horror, 17 of Biography"}, {"name": "0 of Adventure, 0 of Horror, 11 of Biography"}]}, {"name": "deg_mean > 0.10", "children": [{"name": "2 of Adventure, 1 of Horror, 0 of Biography"}, {"name": "0 of Adventure, 3 of Horror, 0 of Biography"}]}]}]};

var comedyDrama = {"name": "deg_mean > 0.29", "children": [{"name": "assortativity > 0.67", "children": [{"name": "5 of Comedy, 0 of Drama"}, {"name": "deg_std > 0.38", "children": [{"name": "51 of Comedy, 13 of Drama"}, {"name": "11 of Comedy, 11 of Drama"}]}]}, {"name": "deg_mean > 0.10", "children": [{"name": "modularity > 0.72", "children": [{"name": "3 of Comedy, 0 of Drama"}, {"name": "99 of Comedy, 105 of Drama"}]}, {"name": "transitivity > 0.17", "children": [{"name": "0 of Comedy, 13 of Drama"}, {"name": "2 of Comedy, 4 of Drama"}]}]}]};

var actionDrama = {"name": "deg_mean > 0.29", "children": [{"name": "edges > 0.14", "children": [{"name": "edges > 0.15", "children": [{"name": "45 of Action, 20 of Drama"}, {"name": "0 of Action, 2 of Drama"}]}, {"name": "deg_mean > 0.39", "children": [{"name": "0 of Action, 1 of Drama"}, {"name": "13 of Action, 0 of Drama"}]}]}, {"name": "deg_std > 0.43", "children": [{"name": "assortativity > 0.46", "children": [{"name": "1 of Action, 6 of Drama"}, {"name": "0 of Action, 8 of Drama"}]}, {"name": "deg_mean > 0.17", "children": [{"name": "93 of Action, 57 of Drama"}, {"name": "47 of Action, 52 of Drama"}]}]}]};

var actionComedy = {"name": "deg_std > 0.42", "children": [{"name": "edges > 0.21", "children": [{"name": "modularity > 0.29", "children": [{"name": "14 of Action, 42 of Comedy"}, {"name": "10 of Action, 7 of Comedy"}]}, {"name": "0 of Action, 14 of Comedy"}]}, {"name": "assortativity > 0.44", "children": [{"name": "assortativity > 0.59", "children": [{"name": "38 of Action, 7 of Comedy"}, {"name": "74 of Action, 38 of Comedy"}]}, {"name": "deg_mean > 0.10", "children": [{"name": "51 of Action, 61 of Comedy"}, {"name": "12 of Action, 2 of Comedy"}]}]}]};

var adventureBiography = {"name": "modularity > 0.36", "children": [{"name": "nodes > 0.30", "children": [{"name": "modularity > 0.44", "children": [{"name": "17 of Adventure, 6 of Biography"}, {"name": "11 of Adventure, 0 of Biography"}]}, {"name": "5 of Adventure, 11 of Biography"}]}, {"name": "nodes > 0.25", "children": [{"name": "8 of Adventure, 6 of Biography"}, {"name": "deg_std > 0.28", "children": [{"name": "0 of Adventure, 11 of Biography"}, {"name": "3 of Adventure, 7 of Biography"}]}]}]};

var horrorBiography = {"name": "modularity > 0.34", "children": [{"name": "deg_std > 0.31", "children": [{"name": "deg_mean > 0.32", "children": [{"name": "6 of Horror, 4 of Biography"}, {"name": "23 of Horror, 0 of Biography"}]}, {"name": "6 of Horror, 13 of Biography"}]}, {"name": "assortativity > 0.45", "children": [{"name": "0 of Horror, 13 of Biography"}, {"name": "9 of Horror, 10 of Biography"}]}]};

var actionComedyDrama = {"name": "deg_std > 0.42", "children": [{"name": "deg_mean > 0.28", "children": [{"name": "assortativity > 0.38", "children": [{"name": "20 of Action, 37 of Comedy, 13 of Drama"}, {"name": "3 of Action, 10 of Comedy, 0 of Drama"}]}, {"name": "assortativity > 0.39", "children": [{"name": "1 of Action, 7 of Comedy, 11 of Drama"}, {"name": "0 of Action, 9 of Comedy, 3 of Drama"}]}]}, {"name": "assortativity > 0.59", "children": [{"name": "clustering > 0.58", "children": [{"name": "23 of Action, 7 of Comedy, 2 of Drama"}, {"name": "15 of Action, 0 of Comedy, 4 of Drama"}]}, {"name": "assortativity > 0.43", "children": [{"name": "83 of Action, 44 of Comedy, 47 of Drama"}, {"name": "54 of Action, 57 of Comedy, 66 of Drama"}]}]}]};

var treeData = horrorAdventure;

// Set the dimensions and margins of the diagram
var margin = {top: 20, right: 90, bottom: 30, left: 90},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var svg = d3.select("#treesChart").append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate("
          + margin.left + "," + margin.top + ")");


var i = 0,
    duration = 750,
    root;

var accuracy = "67%";
d3.select("#classificationAccuracy").text("Classification accuracy: " + accuracy);
// declares a tree layout and assigns the size
var treemap = d3.tree().size([height, width]);

// Assigns parent, children, height, depth
root = d3.hierarchy(treeData, function(d) { return d.children; });
root.x0 = height / 2;
root.y0 = 0;

// Collapse after the second level
// root.children.forEach(collapse);

update(root);

var dropdown = d3.select("#selectTree");

dropdown.on("change", function() {
   var selectedTree = d3.select("#selectTree").property("value");

   console.log(selectedTree);

   d3.selectAll(".node").remove();
   d3.selectAll(".link").remove();
   // d3.selectAll("#classificationAccuracy").remove();

// Assigns parent, children, height, depth
switch(selectedTree) {
    case "horrorAdventure":
        root = d3.hierarchy(horrorAdventure, function(d) { return d.children; });
        accuracy = "67%";
        break;
    case "horrorAdventureBiography":
        root = d3.hierarchy(horrorAdventureBiography, function(d) { return d.children; });
        accuracy = "56%";
        break;
    case "comedyDrama":
        root = d3.hierarchy(comedyDrama, function(d) { return d.children; });
        accuracy = "61%";
        break;
    case "actionDrama":
        root = d3.hierarchy(actionDrama, function(d) { return d.children; });
        accuracy = "60%";
        break;
    case "actionComedy":
        root = d3.hierarchy(actionComedy, function(d) { return d.children; });
        accuracy = "63%";
        break;
    case "adventureBiography":
        root = d3.hierarchy(adventureBiography, function(d) { return d.children; });
        accuracy = "70%";
        break;
    case "horrorBiography":
        root = d3.hierarchy(horrorBiography, function(d) { return d.children; });
        accuracy = "79%";
        break;
    case "actionComedyDrama":
        root = d3.hierarchy(actionComedyDrama, function(d) { return d.children; });
        accuracy = "45%";
        break;
    default:
        root = d3.hierarchy(horrorAdventure, function(d) { return d.children; });
        accuracy = "67%";
}

root.x0 = height / 2;
root.y0 = 0;

// Collapse after the second level
// root.children.forEach(collapse);
d3.select("#classificationAccuracy").text("Classification accuracy: " + accuracy);
update(root);
});

// Collapse the node and all it's children
function collapse(d) {
  if(d.children) {
    d._children = d.children
    d._children.forEach(collapse)
    d.children = null
  }
}

function update(source) {

  // Assigns the x and y position for the nodes
  var treeData = treemap(root);

  // Compute the new tree layout.
  var nodes = treeData.descendants(),
      links = treeData.descendants().slice(1);

  // Normalize for fixed-depth.
  nodes.forEach(function(d){ d.y = d.depth * 180});

  // ****************** Nodes section ***************************

  // Update the nodes...
  var node = svg.selectAll('g.node')
      .data(nodes, function(d) {return d.id || (d.id = ++i); });

  // Enter any new modes at the parent's previous position.
  var nodeEnter = node.enter().append('g')
      .attr('class', 'node')
      .attr("transform", function(d) {
        return "translate(" + source.y0 + "," + source.x0 + ")";
    })
    .on('click', click);

  // Add Circle for the nodes
  nodeEnter.append('circle')
      .attr('class', 'node')
      .attr('r', 1e-6)
      .style("fill", function(d) {
          return d._children ? "lightsteelblue" : "#fff";
      });

  // Add labels for the nodes
  nodeEnter.append('text')
      .attr("dy", ".35em")
      .attr("x", function(d) {
          return d.children || d._children ? -13 : 13;
      })
      .attr("y", function(d) {
          return d.children || d._children ? -20 : 0;
      })
      .attr("text-anchor", function(d) {
          return d.children || d._children ? "middle" : "start";
      })
      .text(function(d) { return d.data.name; });

  // UPDATE
  var nodeUpdate = nodeEnter.merge(node);

  // Transition to the proper position for the node
  nodeUpdate.transition()
    .duration(duration)
    .attr("transform", function(d) { 
        return "translate(" + d.y + "," + d.x + ")";
     });

  // Update the node attributes and style
  nodeUpdate.select('circle.node')
    .attr('r', 10)
    .style("fill", function(d) {
        return d.children || d._children ? "lightsteelblue" : "purple";
    })
    .attr('cursor', 'pointer');


  // Remove any exiting nodes
  var nodeExit = node.exit().transition()
      .duration(duration)
      .attr("transform", function(d) {
          return "translate(" + source.y + "," + source.x + ")";
      })
      .remove();

  // On exit reduce the node circles size to 0
  nodeExit.select('circle')
    .attr('r', 1e-6);

  // On exit reduce the opacity of text labels
  nodeExit.select('text')
    .style('fill-opacity', 1e-6);

  // ****************** links section ***************************

  // Update the links...
  var link = svg.selectAll('path.link')
      .data(links, function(d) { return d.id; });

  // Enter any new links at the parent's previous position.
  var linkEnter = link.enter().insert('path', "g")
      .attr("class", "link")
      .attr('d', function(d){
        var o = {x: source.x0, y: source.y0}
        return diagonal(o, o)
      });

  // UPDATE
  var linkUpdate = linkEnter.merge(link);

  // Transition back to the parent element position
  linkUpdate.transition()
      .duration(duration)
      .attr('d', function(d){ return diagonal(d, d.parent) });

  // Remove any exiting links
  var linkExit = link.exit().transition()
      .duration(duration)
      .attr('d', function(d) {
        var o = {x: source.x, y: source.y}
        return diagonal(o, o)
      })
      .remove();

  // Store the old positions for transition.
  nodes.forEach(function(d){
    d.x0 = d.x;
    d.y0 = d.y;
  });

  // Creates a curved (diagonal) path from parent to the child nodes
  function diagonal(s, d) {

    path = `M ${s.y} ${s.x}
            C ${(s.y + d.y) / 2} ${s.x},
              ${(s.y + d.y) / 2} ${d.x},
              ${d.y} ${d.x}`

    return path
  }

  // Toggle children on click.
  function click(d) {
    if (d.children) {
        d._children = d.children;
        d.children = null;
      } else {
        d.children = d._children;
        d._children = null;
      }
    update(d);
  }
}
