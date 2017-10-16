def reversedStr(string)
  stripped = string.gsub(" ", "").downcase
  stripped.reverse == stripped
end
