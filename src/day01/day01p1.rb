input = File.read('./data-w.txt').split("\n")
groups = [[]]
input.each do |i|
    if i.length == 0
        groups << []
    else
        groups[-1] << i.to_i
    end
end

# groups = [[1000, 2000, 3000], [4000], [5000, 6000], [7000, 8000, 9000], [10000]]

def day01p1(values)
    values.map{|v| v.sum}.max
end

# p day01p1(groups)

def day01p2(values)
    values.map{|v| v.sum}.sort[-3..-1].sum
end

p day01p2(groups)